require('dotenv').config();
const express=require('express');
const app=express();
const path=require('path')
const expressLayout=require('express-ejs-layouts');

const PORT=process.env.PORT || 4000;
app.use(express.static('public'));
app.use(expressLayout);
app.set('views', path.join(__dirname, 'views'));
app.set('layout','./layouts/main');
app.set('view engine','ejs');
app.use('/',require('./server/route/main'))
app.listen(PORT,()=>{
    console.log(`App listening ${PORT}`)
}) 