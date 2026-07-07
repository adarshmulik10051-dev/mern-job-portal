import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String,//url to company name    
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true

    }
},{timeStamps=true});
export const company = mongooes.model("company", companySchema);