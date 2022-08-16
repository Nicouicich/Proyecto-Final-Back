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
    direccion: { 
      calle: {type: String ,required: true },
      altura: {type: Number, required: true},
      cp: {type: Number,required: true},
      piso: {type: Number},
      departamento: {type: String}
    }
  },
  { versionKey: false, timestamps:true }
);

export const CartModel = mongoose.model(cartCollectionName, cartSchema);
