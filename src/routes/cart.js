import { Router } from "express";
import { } from "../controllers/cart";

export const router = Router();

router.get("/", getAllCarts);

router.get("/:id", getCartById);

router.post("/", createCart);

router.put("/:id", updateCart);

router.delete("/:id", deleteCart);
