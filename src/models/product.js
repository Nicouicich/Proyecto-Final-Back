import mongoose from "mongoose";

export const productCollection = "products";

const ProductSchema = new mongoose.Schema(
  {
    nombre: { type: String, require: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, require: true },
    foto: { type: String, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: categoryCollectionName,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export const ProductModel = mongoose.model(productCollection, ProductSchema);
