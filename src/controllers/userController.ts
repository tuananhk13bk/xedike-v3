import jwt from "jsonwebtoken";
import keys from "../config/keys";

import User from "../models/User";
import { Response, Request } from "express";

const postRegisterUser = async (req: Request, res: Response) => {
  const { username, phone, password } = req.body;
  console.log(username, phone, password);
  const error500 = "Internal Server Error";
  try {
    const { isExisted, clientErrors } = await User.checkExists({
      username,
      phone
    });
    if (isExisted) {
      return res.status(400).json(clientErrors);
    }
    const newUser = new User({
      username,
      phone,
      password,
      email: null
    });
    const isHashed = await newUser.hashPassword();
    if (!isHashed) {
      return res.status(500).json(error500);
    }

    const registeredUser = await newUser.save();
    return res.status(200).json(registeredUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(error500);
  }
};
const postLoginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const error500 = "Internal Server Error";
  const invalidAccountError = "Incorrect username or password";
  try {
    const { isExisted, user } = await User.checkExists({ username });
    if (!isExisted) {
      return res.status(400).json(invalidAccountError);
    }

    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json(invalidAccountError);
    }

    // login success
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      phone: user.phone
    };
    // Sign token
    jwt.sign(
      payload,
      keys.secretOrKey + "abcd",
      { expiresIn: 3600 },
      (err, token) => {
        res.json({
          success: true,
          token: `Bearer ${token}`
        });
      }
    );
  } catch (err) {
    res.status(500).json(error500);
  }
};

const putChangePassword = async (req: Request, res: Response) => {
  const { username, email, phone, currentPassword, newPassword } = req.body;
  const error500 = "Internal Server Error";
  const invalidAccountError = "Incorrect username or password";
  const invalidPasswordError = "Incorrect password";
  try {
    const { isExisted, user } = await User.checkExists({ username });
    if (!isExisted) {
      return res.status(400).json(invalidAccountError);
    }

    const isMatch = await User.comparePassword(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json(invalidPasswordError);
    }

    const newUser = new User({ username, email, phone, password: newPassword });

    const isHashed = await newUser.hashPassword();
    if (!isHashed) {
      return res.status(500).json(error500);
    }
    const updatedUser = await newUser.save();
    res.status(200).json("change password success!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error500);
  }
};

// const putChangeUser = async (req:Request, res: Response) => {
// 	const {id, username, email, }
// }

export { postRegisterUser, postLoginUser, putChangePassword };
