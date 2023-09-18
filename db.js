const mongoose = require('mongoose');
dburl ='mongodb+srv://shubhams10203:shub123@cluster0.tajy3q7.mongodb.net/emp_db?retryWrites=true&w=majority'

module.exports =()=>{
    return mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true})
}   

