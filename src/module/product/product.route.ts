import { productController } from './product.controller';
import { Router } from "express";

const productRoute=Router();

productRoute.post('/create-products',productController.createProduct)
productRoute.get('/products',productController.getProduct)
productRoute.get('/:productId',productController.getSingleProduct)
productRoute.put('/:productId',productController.UpdateProduct)
productRoute.delete('/:productId',productController.deleteProduct)

export default productRoute;