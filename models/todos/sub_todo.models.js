import mongoose from "mongoose";

const subSchema=new mongoose.Schema(

    {
        content:{
            type:String,
            required:true
        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    }

,{timestamps:true});

export const Sub=mongoose.model("Sub",subSchema);