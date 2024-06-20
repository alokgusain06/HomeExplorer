const mongoose=require('mongoose');
//creating schema
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
},{ timestamps: true});//to record two extra information time of creation and time of update 
 //creating model
const User=mongoose.model('User',userSchema);

export default User;