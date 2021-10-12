// controller productController.js

const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();
    
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: 'Not found' });
  }

})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await ProductModel.getById(req.params.id);

    res.status(200).json(product)
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
  
})

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  } catch (error) {
      res.status(500).json({ message: 'Cannot possible create new product' });
  }
  
})

router.delete('/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Cannot possible delete product' });
  }
 
})

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Cannot possible uodate product' });
  }
  
})

module.exports = router;