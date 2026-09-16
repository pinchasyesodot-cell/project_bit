import { model, Schema } from "mongoose";
import { SagaStatus, type Saga } from "../interfaces/sagaType.js";

const sagaSchema = new Schema(
    {
        sagaId: { type: String, required: true, unique: true },
        senderId: { type: String, required: true },
        receiverId: { type: String, required: true },
        amount: { type: Number, required: true },
        status: {
            type: String,
            enum: SagaStatus,
            default: "PENDING",
        },
    },
    { timestamps: true }
);

export const sagaModel = model<Saga>("Saga", sagaSchema);
