import { Request, Response } from "express";
import { hash } from "bcrypt";
import userModel from "../models/user-model.js";

async function getAllUser(req: Request, res: Response) {
  try {
    const findUser = await userModel.find();

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
    const findUser = await userModel.find({
      email,
    });

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

    const user = new userModel(data);
    await user.save();

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "Server error", error });
  }
}
export { getAllUser, signupUser };
