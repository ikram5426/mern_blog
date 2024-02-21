import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/errorHandler.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  // Check if username is valid
  if (!username || username.length < 3) {
    next(errorHandler(400, "Username must be at least 3 characters long"));
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    next(errorHandler(400, "Invalid email address"));
  }

  // Check if password is valid
  if (!password || password.length < 8) {
    next(errorHandler(400, "Password must be at least 8 characters"));
  }

  let salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password.toString(), salt);

  const newUser = new User({
    username,
    email,
    password: newPassword,
  });

  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};
