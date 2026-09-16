import { model, Schema } from "mongoose";
import type { User } from "../interfaces/userType.js";

export const userSchema = new Schema<User>({
    userId: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    shragaId: { type: String, required: true, unique: true },
});

export const userModel = model<User>("User", userSchema);
