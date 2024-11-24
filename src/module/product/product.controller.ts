import { Request, response, Response } from "express";
import Product from "./product.model";

const createProduct=async(req:Request,res:Response)=>{
   try {
    const playload=req.body;
    const result=await Product.create(playload)
    res.json({
        message:"Product create succesfully",
        data:result
    })
   } catch (error) {
        res.json({
            status:false,
            message:"Something went wrong",
            error
        })
   }
}

export const productController={
    createProduct
}