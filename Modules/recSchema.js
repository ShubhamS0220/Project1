const mongoose = require('mongoose')

module.exports = mongoose.model('shubh' ,{
    name:{type:String},
    role:{type:String},
    location:{type:String},
    join:{type:String},
    salary:{type:Number}
})