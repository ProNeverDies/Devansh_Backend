import mongoose from "mongoose";

const todoSchema=new mongoose.Schema(

    {
        content:{
            type:String,
            required:true,

        },
        complete:{
            type:Boolean,
            default:false
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Todo"
        },
        subTodos:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Sub"
            },
        ],
    }

,{timestamps:true});

export const User=mongoose.model("User",todoSchema);