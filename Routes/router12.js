// const express = require('express');
// const router = express.Router();

// const shubham = require('../Modules/recSchema')

// router.get('/:id',(req,res)=>{
//     shubham.findById(req.params.id)
//     .then(data => res.send(data))
//     .catch(err => console.log(err))
// })

// router.put('/:id',(req,res)=>{
//     shubham.findByIdAndUpdate(req.params.id, req.body,{new:true})
//     .then(data => res.send(data))
//     .catch(err => console.log(err))
// });

// router.delete('/:id',(req,res)=>{
//    shubham.findByIdAndDelete(req.params.id, req.body)
//     .then(data => res.send(data))
//     .catch(err => console.log(err))
// })

// router.get('/',(req,res)=>{
//     shubham.find()
//     .then(data => res.send(data))
//     .catch(err => console.log(err))
// });
// router.post('/',(req,res)=>{
//     shubham.create(req.body)
//     .then(data => res.send(data))
//     .catch(err => console.log(err))
// });

// module.exports = router