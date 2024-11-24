import { productController } from './product.controller';
import { Router } from "express";

const productRoute=Router();

productRoute.post('/create-product',productController.createProduct)

export default productRoute