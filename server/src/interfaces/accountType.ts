import type { Types } from "mongoose";

export interface Account {
    accountNumber: number;
    userId: Types.ObjectId;
    balance: number;
    accountType: AccountType;
}

export enum AccountType {
    SAVINGS = "savings",
    CHECKING = "checking",
    CREDIT = "credit",
}
