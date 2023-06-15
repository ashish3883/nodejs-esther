const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/banking";

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log("connection failed",err)
})