const express = require('express');
const router = express.Router()



let Notification = [
    {
        id:1,
        email:"deepuyadav@gmail.com",
        title:"Good Job",
        body:"Nice Work miss deepu"
    },
    {
        id:2,
        email:"deepuyadav@gmail.com",
        title:"New Task",
        body:"Craete a rest api"
    },
    {
        id:3,
        email:"deepuyadav@gmail.com",
        title:" Amit assing a task ",
        body:"Add Vehicle map and markers"
    },
]


//get all data
router.get('/', async(req,res)=>{
    try{
        const data = Notification;
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
  })
  
  //get single data
  router.get('/:id', async(req,res)=>{
      try{
          const data = Notification.find(item => item.id == req.params.id)
          res.status(200).json(data)
      }
      catch(err){
        res.status(500).json({message:err.message})
      }
    })



    router.post('/', async(req,res)=>{
        
        if(!req.body.email || !req.body.title || !req.body.body) {
            return  res.status(400).json({success:false, message:"All field is required"})
        }
        const  data = {
             id:Notification.length + 1,
             email : req.body.email,
             title : req.body.title,
             body : req.body.body
        }
        try{
             Notification.push(data)
             res.status(201).json({success:true, message:"notification create successfully"})
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    })

 
    router.delete('/:id', async (req, res) => {
        try {
            let data = Notification.filter(item => item.id != req.params.id)
            Notification = data;
         res.status(200).json({success:true, message:"data deleted successfully "})
        } catch (error) {
            res.status(500).json(error)
        }
    })


module.exports = router