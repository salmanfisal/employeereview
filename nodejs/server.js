import express from 'express';
import cors from "cors";

let app =express();
app.use(cors())
app.use(express.urlencoded({extended:true}),express.json())
app.post("/",(req,res)=>{
    res.json(req.body)
    console.log(req.body)
})
app.listen(8080,()=>{
    console.log("listening to port 8080")
})