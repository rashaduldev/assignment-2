import { productController } from './product.controller';
import { Router } from "express";

const productRoute=Router();

productRoute.post('/api/create-products',productController.createProduct)
productRoute.get('/api/products',productController.getProduct)
productRoute.get('/api/:productId',productController.getSingleProduct)
productRoute.put('/api/:productId',productController.UpdateProduct)
productRoute.delete('/api/:productId',productController.deleteProduct)

export default productRoute;