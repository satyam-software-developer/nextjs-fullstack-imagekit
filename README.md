# 🎥 Nextjs Fullstack ImageKit

A full-stack video management application built with **Next.js**, **React**, **TypeScript**, **NextAuth**, **MongoDB**, and **ImageKit**. Users can register, log in, securely upload videos using ImageKit, and browse uploaded content through a modern, responsive interface.

---

## ✨ Features

* 🔐 Authentication with NextAuth (Credentials Provider)
* 👤 User Registration & Login
* 🔒 Secure password hashing using bcrypt
* ☁️ Secure ImageKit upload authentication
* 🎥 Video upload support
* ▶️ Video streaming using ImageKit
* 📂 Responsive video gallery
* 📊 Upload progress indicator
* 🔔 Global notification system
* 🍃 MongoDB database with Mongoose
* ⚡ Next.js App Router
* 🟦 TypeScript support
* 📱 Responsive design

---

# 🛠️ Tech Stack

| Technology      | Purpose                    |
| --------------- | -------------------------- |
| Next.js 16      | Full-stack React framework |
| React 19        | Frontend UI                |
| TypeScript      | Type safety                |
| NextAuth        | Authentication             |
| MongoDB         | Database                   |
| Mongoose        | MongoDB ODM                |
| ImageKit        | Media upload & delivery    |
| bcryptjs        | Password hashing           |
| Tailwind CSS v4 | Styling                    |

---

# 📁 Project Structure

```text
app/
├── api/
│   ├── auth/
│   ├── imagekit-auth/
│   ├── register/
│   └── videos/
│
├── components/
│   ├── FileUpload.tsx
│   ├── Header.tsx
│   ├── Notification.tsx
│   ├── Providers.tsx
│   ├── VideoComponent.tsx
│   ├── VideoFeed.tsx
│   └── VideoUploadForm.tsx
│
├── login/
├── register/
├── upload/
├── layout.tsx
└── page.tsx

lib/
├── api-client.ts
├── auth.ts
└── db.ts

models/
├── User.ts
└── Video.ts
```

---

# 🚀 Installation

Clone the repository.

```bash
git clone https://github.com/your-username/next-fullstack-imagekit.git
```

Move into the project.

```bash
cd next-fullstack-imagekit
```

Install dependencies.

```bash
npm install
```

---

# ⚙️ Environment Variables

Create a `.env.local` file in the project root.

```env
NEXTAUTH_URL=http://localhost:3000

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority

NEXTAUTH_SECRET=your_nextauth_secret

NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
NEXT_PUBLIC_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

---

# ▶️ Running the Project

Start the development server.

```bash
npm run dev
```

Open your browser:

```
http://localhost:3000
```

---

# 📦 Available Scripts

```bash
npm run dev
```

Runs the application in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint.

---

# 🔐 Authentication

Authentication is implemented using **NextAuth Credentials Provider**.

Features include:

* Email & password login
* Password hashing using bcrypt
* JWT session strategy
* Custom login page
* Protected upload functionality

---

# ☁️ ImageKit Integration

ImageKit is used for:

* Secure uploads
* Upload authentication
* Video delivery
* Video streaming
* Media optimization

The upload flow is:

1. User selects a file.
2. Client requests upload credentials from the server.
3. ImageKit verifies the request.
4. File uploads directly to ImageKit.
5. Video metadata is stored in MongoDB.
6. Uploaded videos are displayed in the gallery.

---

# 🎥 Video Features

* Responsive video cards
* Video gallery
* Individual video pages
* Video streaming using ImageKit
* Optimized media delivery
* 9:16 portrait video support

---

# 🗄️ Database

MongoDB stores:

* User accounts
* Video metadata
* Upload configuration
* Video transformation settings

---

# 📡 API Routes

| Endpoint                  | Method     | Description                             |
| ------------------------- | ---------- | --------------------------------------- |
| `/api/auth/[...nextauth]` | GET / POST | NextAuth authentication                 |
| `/api/register`           | POST       | Register a new user                     |
| `/api/videos`             | GET        | Fetch all videos                        |
| `/api/videos`             | POST       | Create a new video                      |
| `/api/imagekit-auth`      | GET        | Generate ImageKit upload authentication |

---

# 🎨 UI Features

* Responsive layout
* Upload page
* Login page
* Registration page
* Navigation bar
* Notification system
* Upload progress indicator

---

# 🔒 Security

* Passwords hashed using bcrypt
* JWT authentication
* Environment variables for secrets
* Server-side ImageKit authentication
* Secure MongoDB connection

---

# 🚀 Future Improvements

* AI-generated captions
* AI video summaries
* AI thumbnail generation
* Search and filtering
* Categories
* User profiles
* Comments
* Likes
* Bookmarks
* Admin dashboard
* Drag-and-drop uploads
* Pagination
* Infinite scrolling
* Dark mode

---

# 🌐 Deployment

The project can be deployed on platforms such as:

* Vercel
* Railway
* Render

Before deploying, configure all required environment variables on your hosting platform.

---

# 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Satyam Kumar**

* Full Stack Developer
* Passionate about Next.js, React, TypeScript, MongoDB, and ImageKit
