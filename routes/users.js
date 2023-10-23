const express=require('express');
const router=express.Router();
const {func1,func2,func3,func4,users}=require('../controllers/userController.js')
const { v4: uuidv4 } = require('uuid');




router.get('/',(req,res)=>{
    res.send(users);
    
})

router.post('/',func1);

router.get('/:id',func2)

router.delete('/:id',func3)

router.patch('/:id',func4)

module.exports=router;