import express, { Request, Response } from 'express';
import productRoute from './module/product/product.route';
import orderRouter from './module/order/order.routes';

const app = express();

// middleware
app.use(express.json())

app.use("/",productRoute)
app.use("/",orderRouter)

app.get("/",(req:Request,res:Response)=>{
    res.send({
        status:true,
        message:"server live"
    })
})


export default app;