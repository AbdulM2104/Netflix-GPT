import React from "react";
import Header from "./Header";
import Avatar from "../assets/Avatar.jpg";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    // Logic to validate user credentials
    const emailError = checkValidData(
      fullName.current?.value,
      email.current.value,
      password.current.value,
      isSignIn,
    );
    setError(emailError);

    if (emailError) {
      return; // Stop further execution if there's an error
    }

    // If no errors, proceed with authentication
    if (!isSignIn) {
      // Sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up:", user);

          // Update the user's profile with the full name
          updateProfile(user, {
            displayName: fullName.current?.value,
            photoURL: Avatar, // Set the default avatar
          })
            .then(() => {
              // Profile updated!
              // Dispatch the user data to Redux store
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setError(error.message); // Set the error message to display it
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage); // Set the error message to display it
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage); // Set the error message to display it
        });
    }
  };

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
              ref={fullName}
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white outline-none"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white outline-none"
          />
          {/* Error Message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {/* Sign In/Sign Up Button */}
          <button
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold"
            onClick={handleButtonClick}
          >
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
