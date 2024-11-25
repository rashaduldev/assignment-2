import { Router } from "express";
import { orderColtroller } from "./order.controller";


const orderRouter = Router();

orderRouter.post("/api/orders",orderColtroller.createOrder );
orderRouter.get("/api/orders/revenue", orderColtroller.calculateRevenue);

export default orderRouter;
