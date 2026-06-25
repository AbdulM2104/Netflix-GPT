📺 NetflixGPT

A Netflix clone built using React (Vite), Tailwind CSS, Firebase Authentication, and TMDB API for real movie data.

🚀 Features
🔐 Authentication (Sign In / Sign Up)
🎬 Netflix-style UI
📺 Movie browsing using TMDB API
🔍 Dynamic movie suggestions
🧭 React Router navigation
🎨 Fully responsive design (Tailwind CSS)
🔥 Firebase Authentication
☁️ Firebase Hosting ready

🛠️ Tech Stack
React (Vite)
Tailwind CSS
React Router DOM
Firebase
TMDB API

📁 Project Setup

1. Create Project
   npm create vite@latest NetflixGPT -- --template react
   cd NetflixGPT
   npm install
2. Install Dependencies
   npm install firebase
   npm install react-router-dom
   npm install -D tailwindcss @tailwindcss/vite
3. Setup Tailwind CSS
   npx tailwindcss init -p

In tailwind.config.js:

content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

In src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

🔥 Firebase Setup
npm install -g firebase-tools
firebase login
firebase init
Firebase Init Options

Select:

✔ Hosting
✔ Use existing project
✔ Public directory: dist
✔ Single-page app: No
✔ Do NOT overwrite index.html

🏗️ Build Project
npm run build

🚀 Deploy to Firebase
firebase deploy

📂 Folder Structure
