import mongoose from "mongoose";

export const messageCollection = "messages";

const MessageSchema = new mongoose.Schema(
  {
    nombre: { type: String, require: true },
    mensaje: { type: String, required: true },
    email: { type: String, required: true },
    tipo:{ type: String, required: true }
  },
  { versionKey: false, timestamps: true }
);

export const MessageModel = mongoose.model(messageCollection, MessageSchema);
