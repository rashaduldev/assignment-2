import { Schema, Document, model } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { 
      type: Number, 
      required: [true, "Price is required"], 
      min: [0, "Price must be a positive number"],
    },
    category: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean },
  },
  { timestamps: true }
);

const Product=model<IProduct>("Product",productSchema)

export default Product;
