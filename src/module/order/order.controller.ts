import { Request, Response } from "express";
import Product from "../product/product.model";
import { Order } from "./order.model";

// Place an order
 const createOrder = async (req: Request, res: Response):Promise<any>=> {
  const { email, product: productId, quantity, totalPrice } = req.body;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        status: false,
      });
    }

    if (product.quantity < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
        status: false,
      });
    }

    // Deduct quantity and update inStock status
    product.quantity -= quantity;
    product.inStock = product.quantity > 0;
    await product.save();

    // Create order
    const order = await Order.create({ email, product: productId, quantity, totalPrice });

    return res.status(201).json({
      message: "Order created successfully",
      status: true,
      data: order,
    });
  } catch (error:any) {
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      error: error.message,
    });
  }
};

// Calculate total revenue
export const calculateRevenue = async (req: Request, res: Response): Promise<any> => {
  try {
    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    const totalRevenue = revenue[0]?.totalRevenue || 0;

    return res.status(200).json({
      message: "Revenue calculated successfully",
      status: true,
      data: { totalRevenue },
    });
  } catch (error:any) {
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      error: error.message,
    });
  }
};

export const orderColtroller={
    createOrder,
    calculateRevenue
}