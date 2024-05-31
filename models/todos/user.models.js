import mongoose from "mongoose";
const usertodoSchema= new mongoose.Schema(
    {
        username:{
            type: String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:String,
            required:[true,"password is required"]

        }

},{timestamps:true});

export const Todo=mongoose.model("Todo",usertodoSchema);