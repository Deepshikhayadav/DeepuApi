const express = require('express');
const router = express.Router()


const userTable = [
    {
        id:1,
        name:"deepu yadav",
        email:"deepu@gmail.com",
        password:'deepu'
    },
    {
        id:2,
        name:"anuj kesharwani",
        email:"anuj@gmail.com",
        password:'anuj'
    },
]


let token = "jsdjfiu489klgjvlirjujmoeprfgjiorjvjirmrio";


    router.post('/login', async(req,res)=>{    
        if(!req.body.email || !req.body.password) {
            return  res.status(400).json({success:false, message:"All field is required"})
        }
        try{
            const data = userTable.find(item => {
                if(item.email == req.body.email && item.password == req.body.password) {
                    return item;
                }
            })
            if(!data) {
                return  res.status(400).json({success:false, message:"invalid Email Password"})
            }
             res.status(200).json({success:true, data, accessToken:token})
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    })

    router.post('/register', async(req,res)=>{    
        if(!req.body.email || !req.body.password || !req.body.name) {
            return  res.status(400).json({success:false, message:"All field is required"})
        }
        try{
            let data = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            }
           userTable.push(data)
             res.status(200).json({success:true, message:"Registration is successfully", accessToken:token})
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    })

module.exports = router