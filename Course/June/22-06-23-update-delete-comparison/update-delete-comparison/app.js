const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/banking";
const Customer = require('./models/customer');

mongoose.connect(uri).then(()=>{
    console.log("database is connected");
    //createOperation();
    //findOperation();
    updateOperation()
}).catch((err)=>{
    console.log("connection failed",err)
})



const findOperation= async ()=>{
       try{
        let result = await Customer.find();

        //filtering with _id 
        // let result = await Customer.find({_id:'64946b6fcc9dd5dccce30feb'});

        //query with other property
       // let result = await Customer.find({fullName:'suresh',age:65});

        console.log(result);
        //final data in array format
       }catch(err){
        console.log(err)
       }
}

const updateOperation=async()=>{
      try{
         let filter={_id:'64946b6fcc9dd5dccce30feb'};
         let update ={age:40};

        //  let result = await Customer.findOneAndUpdate(filter,update);
        //  console.log(result);

        //It is returning the document new one
        let result = await Customer.findOneAndUpdate(filter,update,{new:true});
         console.log(result);

      }catch(err){
        console.log(err);
      }
}
