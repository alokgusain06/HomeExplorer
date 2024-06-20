const express=require('express');

const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
  console.log('connect to Mongodb!!!');
}).catch((err)=>{
  console.log(err);
});


const app=express();

app.listen(4000,()=>{
  console.log('server is running on 4000!');
}
);