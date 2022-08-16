import mongoose from "mongoose";
export const categoryCollectionName = "categories";

const categorySchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
  },
  { versionKey: false, timestamps:true }
);

export const CategoryModel = mongoose.model(
  categoryCollectionName,
  categorySchema
);
