import { Router } from "express";
import {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./productsCotroller";

const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.post("/create", createProduct);
router.delete("/:id", deleteProduct);

export default router;
