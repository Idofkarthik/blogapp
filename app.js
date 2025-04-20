require('dotenv').config();
const express=require('express');
const app=express();
const PORT=4000 ||process.env.PORT;
app.get('',(req,res)=>{
    res.send('Hello World')
})
app.listen(4000,()=>{
    console.log(`App listening ${PORT}`)
})