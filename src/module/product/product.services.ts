import { IProduct } from "./product.interface"
import Product from "./product.model"

const Createproduct=async(playload:IProduct):Promise<IProduct>=>{
    const result=await Product.create(playload)
    return result
}
// get products
const Getproduct=async()=>{
    const result=await Product.find()
    return result
}
// get singleproducts
const GetSingleproduct=async(id:string)=>{
    const result=await Product.findById(id)
    return result
}
// Update product
const Updateproduct=async(id:string,data:IProduct)=>{
    const result=await Product.findByIdAndUpdate(id,data,{
        new:true,
    })
    return result
}
// Delete product
const Deleteproduct=async(id:string)=>{
    const result=await Product.findByIdAndDelete(id)
    return result
}

export const productService={
    Createproduct,
    Getproduct,
    GetSingleproduct,
    Updateproduct,
    Deleteproduct
}