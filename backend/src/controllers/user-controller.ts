import { Request, Response } from "express";
import { compare, hash } from "bcrypt";
import User from "../models/user-model.js";
import { COOKIE_TOKEN_NAME } from "../utils/constants.js";
import { createToken } from "../utils/Jwt-token.js";

async function getAllUser(req: Request, res: Response) {
  try {
    const findUser = await User.find();

    return res.status(200).json({ users: findUser });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Server error", error });
  }
}

async function signupUser(req: Request, res: Response) {
  //   console.log(req.body);

  const { name, email, password } = req.body;

  try {
    const findUser = await User.findOne({
      email,
    });
    console.log(findUser);

    if (findUser) {
      return res
        .status(400)
        .json({ message: "User already exist with this email" });
    }

    const hashPassword = await hash(password, 10);
    const data = {
      name,
      email,
      password: hashPassword,
    };

    const user = new User(data);
    await user.save();

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Server error", error });
  }
}

async function loginUser(req: Request, res: Response) {
  //   console.log(req.body);

  const { email, password } = req.body;

  try {
    const findUser = await User.findOne({
      email,
    });

    if (!findUser) {
      return res
        .status(400)
        .json({ message: "User doesn't exist with this email" });
    }
    console.log(findUser);

    const isPasswordCorrect = await compare(password, findUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Password doesn't match" });
    }

    res.clearCookie(COOKIE_TOKEN_NAME, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });

    const token = createToken(findUser._id.toString(), findUser.email, "7d");
    console.log("token ", token);
    
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);

    res.cookie(COOKIE_TOKEN_NAME, token, {
      path: "/",
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    return res.status(201).json({ message: "Login  successfully" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Server error", error });
  }
}
export { getAllUser, signupUser, loginUser };
