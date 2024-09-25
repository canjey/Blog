import User from "../models/user.modal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  console.log(req.body);

  const { username, email, password } = req.body;
  // if username, email and password are null or emty string return an error
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10); // used to hash the password from the user

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "signup successfully" });
  } catch (error) { // catch is used to catch the error
    res.status(500).json({ message: error.message });
  }
};
