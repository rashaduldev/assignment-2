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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_services_1 = require("./product.services");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const playload = req.body;
        const result = yield product_services_1.productService.Createproduct(playload);
        res.json({
            message: "Product create succesfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
            stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
        });
    }
});
// get all bikes
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.productService.Getproduct();
        res.send({
            status: true,
            message: "Bikes retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
            stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
        });
    }
});
// get single bike
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const productId = req.params.productId;
        const result = yield product_services_1.productService.GetSingleproduct(productId);
        res.send({
            status: true,
            message: "Bike getting successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
            stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
        });
    }
});
// Update bikes
const UpdateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const body = req.body;
        const result = yield product_services_1.productService.Updateproduct(productId, body);
        res.send({
            status: true,
            message: "Bike info updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
            stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
        });
    }
});
// Delete bikes
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_services_1.productService.Deleteproduct(productId);
        res.send({
            status: true,
            message: "Bikes deleted successfully",
            data: {},
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
            stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
        });
    }
});
exports.productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    UpdateProduct,
    deleteProduct
};
