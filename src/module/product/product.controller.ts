import { Request, response, Response } from "express";
import { productService } from "./product.services";

const createProduct=async(req:Request,res:Response)=>{
   try {
    const playload=req.body;
    const result=await productService.Createproduct(playload)
    res.json({
        message:"Product create succesfully",
        success:true,
        data:result
    })
   } catch (error:any) {
        res.json({
            status:false,
            message:"Something went wrong",
            error,
            stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
        })
   }
}

// get all bikes
const getProduct=async(req:Request,res:Response)=>{
    try {
        const result=await productService.Getproduct()
        res.send({
            status:true,
            message:"Bikes retrieved successfully",
            data:result,
        })
    } catch (error:any) {
         res.json({
             status:false,
             message:"Something went wrong",
             error,
             stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
         })
    }
 }
 // get single bike
const getSingleProduct=async(req:Request,res:Response)=>{
    try {
        console.log(req.params);
        
        const productId=req.params.productId;
        const result=await productService.GetSingleproduct(productId)
        res.send({
            status:true,
            message:"Bike getting successfully",
            data:result,
        })
    } catch (error:any) {
         res.json({
             status:false,
             message:"Something went wrong",
             error,
             stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
         })
    }
 }
 // Update bikes
const UpdateProduct=async(req:Request,res:Response)=>{
    try {
        const productId=req.params.productId;
        const body = req.body;
        const result=await productService.Updateproduct(productId, body);
        res.send({
            status:true,
            message:"Bike info updated successfully",
            data:result,
        })
    } catch (error:any) {
         res.json({
             status:false,
             message:"Something went wrong",
             error,
             stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
         })
    }
 }
 // Delete bikes
const deleteProduct=async(req:Request,res:Response)=>{
    try {
        const productId=req.params.productId;
        const result=await productService.Deleteproduct(productId)
        res.send({
            status:true,
            message:"Bikes deleted successfully",
            data:{},
        })
    } catch (error:any) {
         res.json({
             status:false,
             message:"Something went wrong",
             error,
             stack: process.env.NODE_ENV === "development" ? error.stack : "Stack trace hidden",
         })
    }
 }

export const productController={
    createProduct,
    getProduct,
    getSingleProduct,
    UpdateProduct,
    deleteProduct
}