"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.post("/api/orders", order_controller_1.orderColtroller.createOrder);
orderRouter.get("/api/orders/revenue", order_controller_1.orderColtroller.calculateRevenue);
exports.default = orderRouter;
