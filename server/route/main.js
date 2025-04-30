const express=require('express');
const router=express.Router();

router.get('/home',(req,res)=>{
    const locals={
        title:'Blog App',
        description:'simple blog app creation using node.js,express,mongodb'
    }
    res.render('index',{ locals })
});
router.get('/about',(req,res)=>{
    res.render('about')
    }
    
);
module.exports=router;