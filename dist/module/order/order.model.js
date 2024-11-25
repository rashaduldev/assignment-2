"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    product: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });
exports.Order = mongoose_1.default.model("Order", orderSchema);
