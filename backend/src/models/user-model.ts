import mongoose from "mongoose";
import chatModel from "./chat-model.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatModel]
});

export default mongoose.model("User", userSchema)