const express = require('express');
const router = express.Router()

const posts = [
    {
        id:1,
        title:'welcome 2022',
        content:"happy new year"
    },
    {
        id:2,
        title:'hello',
        content:"hello everyone"
    },
]

let token = "jsdjfiu489klgjvlirjujmoeprfgjiorjvjirmrio";


//get all data
router.get('/', async(req,res)=>{
    const headerToken = req.headers.authorization.split(" ")[1]
    try{
        if(!headerToken) {
            return  res.status(400).json({success:false, message:"Token is required"})
        }
        if(headerToken !== token) {
            return  res.status(401).json({success:false, message:"Invalid Token"})
        }

        res.status(200).json({success:true, data:posts})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
  })
  
module.exports = router
