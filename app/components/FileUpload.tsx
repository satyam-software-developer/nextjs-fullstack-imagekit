"use client";

import { upload } from "@imagekit/next";
import { useState } from "react";

interface UploadResponse {
  filePath: string;
  url: string;
  thumbnailUrl?: string;
  name: string;
}

interface FileUploadProps {
  onSuccess: (response: UploadResponse) => void;
  onProgress?: (progress: number) => void;
  fileType?: "image" | "video";
}

export default function FileUpload({
  onSuccess,
  onProgress,
  fileType = "image",
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const validateFile = (file: File): boolean => {
    if (fileType === "video" && !file.type.startsWith("video/")) {
      setError("Please upload a valid video.");
      return false;
    }

    if (fileType === "image" && !file.type.startsWith("image/")) {
      setError("Please upload a valid image.");
      return false;
    }

    if (file.size > 100 * 1024 * 1024) {
      setError("File size must be less than 100 MB.");
      return false;
    }

    return true;
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");

    if (!validateFile(file)) return;

    setUploading(true);

    try {
      const authResponse = await fetch("/api/imagekit-auth");

      if (!authResponse.ok) {
        throw new Error("Failed to get ImageKit authentication.");
      }

      const { authenticationParameters, publicKey } =
        await authResponse.json();

      const response = await upload({
        file,
        fileName: file.name,
        publicKey,
        ...authenticationParameters,
        onProgress: (event) => {
          if (event.lengthComputable && onProgress) {
            const progress = Math.round(
              (event.loaded / event.total) * 100
            );
            onProgress(progress);
          }
        },
      });

      onSuccess(response as UploadResponse);
    } catch (err) {
      console.error(err);

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Upload failed.");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept={fileType === "video" ? "video/*" : "image/*"}
        onChange={handleFileChange}
        disabled={uploading}
        className="file-input file-input-bordered w-full"
      />

      {uploading && (
        <span className="loading loading-spinner loading-md"></span>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}