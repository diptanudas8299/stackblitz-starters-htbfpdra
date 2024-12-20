import mongoose from "mongoose"

const productSchema = new mongoose.model({
  description:{
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  ProduectImage:{
    type:String
  },
  price:{
    type:Number,
    default:0,
  },
  Stock:{
    default:0,
    type:Number
  },
Category:{
  type:mongoose.Schema.Types.Objectid,
  ref:"catagory",
  required:true
},
owner:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
}

},{timestamps:true})

export const Produect = mongoose.model("produect",productSchema)