import mongoose from 'mongoose';
const {Schema}= mongoose;

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    phno:{
        type:Number,
        required:true,
    },
    alumini:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
});

export default mongoose.model("")