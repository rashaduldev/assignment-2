import { Schema, Document, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
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

// const User = mongoose.model<IProduct>('Product', userSchema);
const Product=model("Product",productSchema)

export default Product;
