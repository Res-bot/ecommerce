import Product from '../models/Product.js';
import Order from '../models/Order.js';
import path from 'path';
import fs from 'fs';


export const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const image = req.file?.filename;

    if (!image) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    const product = new Product({
      name,
      price,
      description,
      image,
      category,
    });

    await product.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user');
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
