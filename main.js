const express = require('express')
const bodyParser = require('body-parser')
const emproute = require('./Routes/router')

const connectdb = require('./db')

const app = express()


app.use(bodyParser.json())
app.use('/routes',emproute)


connectdb()
.then(()=>{
    console.log("db connect successful")
    app.listen(5001,()=> console.log("server is running on 5001 port"))
})
.catch(err => console.log(err))