import mongoose from "mongoose";

export const orderCollectionName = "orders";
import { productCollection } from "./product";

const orderSchema = new mongoose.Schema(
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
    order: {type: Number, unique:true, required: true},

  },
  { versionKey: false, timestamps:true }
);

export const OrderModel = mongoose.model(orderCollectionName, orderSchema);
