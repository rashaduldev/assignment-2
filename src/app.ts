import express, { Request, Response } from 'express';
import productRoute from './module/product/product.route';

const app = express();

// middleware
app.use(express.json())

app.use("/api/user",productRoute)

app.get("/",(req:Request,res:Response)=>{
    res.send({
        status:true,
        message:"server live"
    })
})


export default app;