import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error during product fetch:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const createProduct = async (req, res) => {
    const product = req.body; // user-sent data

    if (!product.name || !product.price || !product.image)
        return res.status(400).json({ success: false, message: "Please provide information in all fields." });

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: newProduct});
    } catch (err) {
        console.error("Error in create product:", err.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ success: false, message: "Invalid product id" });

    try {
        const updated_product = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({ success: true, data: updated_product });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log("id:", id);

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ success: false, message: "Invalid product id" });

    try {
        let _ = await Product.findByIdAndDelete(id);
        res.json(201).json({ success: true, message: `Element with id: ${id} successfully deleted.` })
    } catch (error) {
        console.error('Error occured in delete by id:', error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};