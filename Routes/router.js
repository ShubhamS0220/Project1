const express = require('express');
const router = express.Router();

const shubh = require('../Modules/recSchema')

router.get('/:id',(req,res)=>{
    shubh.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.put('/:id',(req,res)=>{
    shubh.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then(data => res.send(data))
    .catch(err => console.log(err))
});

router.delete('/:id',(req,res)=>{
    shubh.findByIdAndDelete(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

router.get('/',(req,res)=>{
    shubh.find()
    .then(data => res.send(data))
    .catch(err => console.log(err))
});

router.post('/',(req,res)=>{
    shubh.create(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err))
});

module.exports = router