import jwt from "jsonwebtoken";
import keys from "../config/keys";

import User from "../models/User";
import { Response, Request } from "express";

const postRegisterUser = async (req: Request, res: Response) => {
  const { username, phone, password } = req.body;
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
      password
    });
    const isHashed = await newUser.hashPassword();
    if (!isHashed) {
      return res.status(500).json(error500);
    }

    const registeredUser = await newUser.register();
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

    const isMatch = await User.comparePassword(password, user.userPassword);
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

const postChangePassword = async (req: Request, res: Response) => {};

export { postRegisterUser, postLoginUser, postChangePassword };
