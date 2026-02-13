# Simple Task Manager (Next.js + Node.js)

A modern full-stack task management application built to practice real-world frontend ↔ backend integration using Next.js and Express.

This project demonstrates clean architecture, MongoDB integration, and polished UI patterns.

---

## 🚀 Tech Stack

**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Sonner (toast notifications)
- next-themes (dark mode)

**Backend**
- Node.js
- Express
- Prisma ORM
- MongoDB Atlas

---

## ✨ Features

- Create, update, delete tasks
- Toggle task completion
- Skeleton loading states
- Toast feedback
- Dark / light theme switch
- Clean full-stack architecture
- REST API integration
- Responsive UI

---

## 📁 Project Structure

```
simple-task-manager-nextJs/
│
├── backend/   → Express + Prisma API
└── frontend/  → Next.js UI
```

---

## ⚙️ Local Setup

### 1. Clone repo

```
git clone https://github.com/YOUR_USERNAME/simple-task-manager-nextJs.git
cd simple-task-manager-nextJs
```

---

### 2. Backend setup

```
cd backend
npm install
```

Create `.env`:

```
DATABASE_URL=your_mongodb_connection_string
PORT=1000
```

Run backend:

```
npm run dev
```

Server runs at:

```
http://localhost:1000
```

---

### 3. Frontend setup

```
cd frontend
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:1000
```

Run frontend:

```
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

## 🌐 Deployment

Frontend: Vercel  
Backend: Render / Railway  
Database: MongoDB Atlas

Environment variables must be configured in production.

---

## 🎯 Learning Goals

This project focuses on:

- Connecting Next.js frontend with Node.js backend
- REST API communication
- Prisma + MongoDB workflow
- Modern UI patterns
- Real-world full-stack architecture
- Deployment-ready structure

---

## 📌 Future Improvements

- Authentication system
- Pagination & search
- Drag & drop tasks
- Realtime updates
- Docker production setup

---

## 🧠 Author

Built as a full-stack learning project.

