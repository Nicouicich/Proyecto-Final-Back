import { Router } from "express";
import { router as cartRouter } from "./cart";
import { router as productRouter } from "./products";
import { router as categoryRouter } from "./categories";
import { router as orderRouter } from "./orders";
import { router as messageRouter } from "./messages";

const router = Router();  

router.use("/carrito", cartRouter);
router.use("/productos", productRouter);
router.use("/categorias", categoryRouter);
router.use("/ordenes", orderRouter);
router.use("/chat", messageRouter);

export { router };
