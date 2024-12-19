import argon2 from "argon2";
import { userModel } from "../models/usermodels.js";
import jwt from "jsonwebtoken";
import "dotenv/config";


// signup controller

const signup = async (req, res) => {
  const { name, username, email, password } = req.body;

  // Validate input
  if (!name || !username || !email || !password) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    // Check if email or username already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res.status(409).json({ msg: "Email or Username already in use" });
    }

    // Hash the password
    const hash = await argon2.hash(password);

    // Create the user
    const payload = {
      name,
      username,
      email,
      password: hash,
    };
    const createData = await userModel.create(payload);

    // Respond with success
    res.status(201).json({
      msg: "Your Account Created Successfully",
      payload: createData,
    });
  } catch (error) {
    // Error handling
    console.error("Error in signup:", error);
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

// sign controller 

const signin = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and Password are required" });
  }

  try {
    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Verify the password
    const isValid = await argon2.verify(user.password, password);
    if (!isValid) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Respond with success (You can generate a token here for JWT auth)

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRATION || "1h",
      }
    );

    res.status(200).json({
      msg: "Signin successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    // Error handling
    console.error("Error in signin:", error);
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};

export { signup, signin };
