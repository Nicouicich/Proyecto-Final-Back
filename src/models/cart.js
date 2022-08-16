import mongoose from "mongoose";

export const cartCollectionName = "carts";
import { productCollection } from "./product";

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        nombre: { type: String },
        cantidad: { type: Number },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: productCollection,
          required: true,
        },
      },
    ],
    email:{ type: String, require: true },
    direccion: [{ type: String, require: true }],

  },
  { versionKey: false, timestamps:true }
);

export const CartModel = mongoose.model(cartCollectionName, cartSchema);
