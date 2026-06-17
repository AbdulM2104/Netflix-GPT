// import React from "react";
// import Header from "./Header";
// import Background from "../assets/Background.jfif";

// const Login = () => {
//   return (
//     <>
//       <Header />
//       <div className="login">
//         <img src={Background} alt="Background" />
//       </div>
//     </>
//   );
// };

// export default Login;

// import React from "react";
// import Header from "./Header";
// import Background from "../assets/Background.jfif";

// const Login = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Header (logo on top) */}
//       <Header />

//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${"https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg"})`,
//         }} /* Background */
//       />

//       {/* Dark overlay (Netflix look) */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Hero content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
//           Unlimited movies, TV shows, and more
//         </h1>

//         <p className="mt-4 text-lg md:text-xl text-gray-300">
//           Watch anywhere. Cancel anytime.
//         </p>

//         <p className="mt-2 text-md text-gray-400">
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>

//         {/* Email box */}
//         <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-xl">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="flex-1 px-4 py-3 rounded bg-black/60 border border-gray-500 text-white outline-none"
//           />

//           <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold text-lg transition">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignup = () => {
    // Logic to toggle to signup form
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg")`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-black/50 p-10 rounded w-87.5 text-white">
          {/* Title */}
          <h1 className="text-3xl font-semibold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {/* Full Name (only for signup) */}
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
            />
          )}

          {/* Email */}
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white outline-none"
          />

          {/* Sign In Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {/* Options */}
          <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="hover:underline cursor-pointer">Need help?</span>
          </div>

          {/* Signup text */}
          <p className="mt-6 text-gray-400 text-sm">
            {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignup}
            >
              {isSignIn ? "Sign up now" : "Sign in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
