import { IProduct } from "./product.interface"
import Product from "./product.model"

const Createproduct=async(playload:IProduct):Promise<IProduct>=>{
    const result=await Product.create(playload)
    return result
}
// get user
const Getproduct=async()=>{
    const result=await Product.find()
    return result
}
// Update user
const Updateproduct=async(id:string,data:IProduct)=>{
    const result=await Product.findByIdAndUpdate(id,data)
    return result
}
// Delete user
const Deleteproduct=async(id:string)=>{
    const result=await Product.findByIdAndDelete(id)
    return result
}

export const productService={
    Createproduct,
    Getproduct,
    Updateproduct,
    Deleteproduct
}