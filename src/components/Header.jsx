import React from "react";
import Logo from "../assets/Logo.png";
import Profile from "../assets/Profile.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Access the user from Redux store
  const handleSignOut = () => {
    // Logic to sign out the user
    signOut(auth)
      .then(() => {
        // Redirect to login page after sign-out
      })
      .catch((error) => {
        // An error happened.
        navigate("/error"); // Redirect to an error page
      });
    console.log("User signed out");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse"); // Redirect to browse page if user is signed in
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); // Redirect to login page if user is signed out
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full flex items-center px-8 py-4 z-20">
      <img src={Logo} alt="Logo" className="h-20 w-auto object-contain" />
      {/* Display user profile and sign-out button if user is logged in */}
      {user && (
        <div className="absolute top-0 right-0 w-full flex items-center justify-end px-8 py-4 z-20">
          <img
            src={user.photoURL || Profile}
            alt="Profile"
            className="w-10 h-10 object-cover"
          />
          <button
            onClick={handleSignOut}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
