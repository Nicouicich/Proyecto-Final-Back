import mongoose from "mongoose";

export const userCollection = "users";

const UsersSchema = new mongoose.Schema(
  {
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    direccion: [{ type: String, require: true }],
    email: { type: String, require: true },
    telefono: { type: Number, require: true },
  },
  { versionKey: false, timestamps: true }
);

export const UserModel = mongoose.model(
  userCollection,
  UsersSchema
);
