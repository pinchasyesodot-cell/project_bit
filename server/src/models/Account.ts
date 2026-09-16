import { model, Schema } from "mongoose";
import { AccountType, type Account } from "../interfaces/accountType.js";

export const accountSchema = new Schema<Account>({
    accountNumber: { type: Number, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    balance: { type: Number, required: true },
    accountType: { type: String, required: true, enum: AccountType },
});

export const accountModel = model<Account>("Account", accountSchema);
