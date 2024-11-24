import { productController } from './product.controller';
import { Router } from "express";

const productRoute=Router();

productRoute.post('/products',productController.createProduct)
productRoute.get('/products',productController.getProduct)

export default productRoute;