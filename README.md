📺 NetflixGPT

A Netflix clone built using React (Vite), Tailwind CSS, Firebase Authentication, and TMDB API for real movie data.

🚀 Features

- 🔐 **Authentication** – Sign In / Sign Up using Firebase Authentication
- 🎬 **Netflix-style UI** – Responsive Netflix-inspired user interface
- 📺 **Movie Browsing** – Browse movies with data fetched from TMDB API
- 🔍 **AI-Powered Movie Search** – Get dynamic movie recommendations using Gemini AI
- 🤖 **GPT Search** – Search for movies using natural language prompts
- 🎞️ **Movie Details** – Display movie information, posters, and descriptions
- 🧭 **React Router** – Seamless navigation between application pages
- ⚡ **Redux Toolkit** – Centralized state management
- 🎨 **Responsive Design** – Styled using Tailwind CSS
- 🔥 **Firebase Authentication** – Secure user authentication
- ☁️ **Firebase Hosting** – Ready for deployment

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
NetflixGPT/
│
├── firebase/
│
├── public/
│
├── src/
│ ├── assets/
│ │ ├── Avatar.jpg
│ │ ├── Background.jfif
│ │ ├── Favicon.png
│ │ ├── Logo.png
│ │ └── Profile.png
│ │
│ ├── components/
│ │ ├── Body.jsx
│ │ ├── Browse.jsx
│ │ ├── GPTMovieSuggestions.jsx
│ │ ├── GPTSearch.jsx
│ │ ├── GPTSearchBar.jsx
│ │ ├── Header.jsx
│ │ ├── Login.jsx
│ │ ├── MainContainer.jsx
│ │ ├── MovieCard.jsx
│ │ ├── MovieList.jsx
│ │ ├── SecondaryContainer.jsx
│ │ ├── VideoBackground.jsx
│ │ └── VideoTitle.jsx
│ │
│ ├── hooks/
│ │ ├── useMovieTrailer.jsx
│ │ ├── useNowPlayingMovies.jsx
│ │ ├── usePopularMovies.jsx
│ │ ├── useTopRatedMovies.jsx
│ │ └── useUpcomingMovies.jsx
│ │
│ ├── utils/
│ │ ├── appStore.jsx
│ │ ├── constants.jsx
│ │ ├── firebase.jsx
│ │ ├── geminiAI.jsx
│ │ ├── gptSlice.jsx
│ │ ├── moviesSlice.jsx
│ │ ├── userSlice.jsx
│ │ └── validate.jsx
│ │
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── .firebaserc
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
