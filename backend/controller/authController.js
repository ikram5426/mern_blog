import User from '../models/userModel.js'
import bcrypt from 'bcrypt'




export const signup = async (req, res) => {
  
  const {username,email,password}=req.body
  // Check if username is valid
  if (!username || username.length < 3) {
    return res.status(400).send("Username must be at least 3 characters long");
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send("Invalid email address");
  }

  // Check if password is valid
  if (!password || password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters long");
  }

  let salt = await bcrypt.genSalt(10);
  const newPassword = await bcrypt.hash(password.toString(), salt);

  const newUser = new User({
    username,
    email,
    password: newPassword
  })
  
try {
    await newUser.save();

    res.json(newUser);
} catch (error) {
  res.status(500).send({ message: error.message });
}

}

