"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { product, quantity } = orderData;
    // Check product availability
    const bike = yield product_model_1.default.findById(product);
    if (!bike) {
        throw new Error("Product not found");
    }
    if (bike.quantity < quantity) {
        throw new Error("Insufficient stock");
    }
    // Update product stock
    bike.quantity -= quantity;
    if (bike.quantity === 0) {
        bike.inStock = false;
    }
    yield bike.save();
    // Create order
    const order = yield order_model_1.default.create(orderData);
    return order;
});
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" },
            },
        },
    ]);
    return ((_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.orderService = {
    createOrder,
    calculateRevenue,
};
