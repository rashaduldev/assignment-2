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

export const productService={
    Createproduct,
    Getproduct,
}