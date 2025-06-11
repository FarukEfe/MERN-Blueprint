import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

// use router.patch if you want to update some, router.put if you want to update whole or smth like that... Just look into it if ur confused
router.put("/:id", updateProduct);

// :id specifies a dynamic value (can be anything). Think of the storefront page of amazon where you're browsing, 
// and when you click on an item you go to it's dedicated page... This is how
router.delete("/:id", deleteProduct);

export default router;