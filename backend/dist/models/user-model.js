import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
    },
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=user-model.js.map