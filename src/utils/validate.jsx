export const checkValidData = (fullName, email, password, isSignIn) => {
  // In Case of Sign Up,  additional checks for the full name or other fields.
  if (!fullName && !isSignIn) {
    return "Please enter your full name.";
  }

  // Basic validation for email and password
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  // If both email and password are valid, return null (no errors)
  return null; // No errors
};
