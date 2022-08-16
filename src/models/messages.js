import mongoose from "mongoose";
import { userCollection } from "./user";
export const messageCollection = "messages";

const MessageSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: productCollection,
      required: true,
    },
    mensaje: { type: String, required: true },
    tipo:{ type: String, required: true }
  },
  { versionKey: false, timestamps: true }
);

export const MessageModel = mongoose.model(messageCollection, MessageSchema);
