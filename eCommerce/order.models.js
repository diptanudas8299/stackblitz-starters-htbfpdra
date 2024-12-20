import mongoose from "monggose"
import { Produect } from "./product.model"

const orderItemSchema = new  mongoose.Schema({
  ProduectId:{
    type :mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity:{
    type:Number,
    required:true,
  }
})
const orderSchema = new mongoose.Schema({
  orderprice:{
    type:Number,
    required:true,
  },
  customer:{
    type:mongoose.Schema.Types.ObjectID,
    ref:"User",
  },
  orderItems:{
type:[orderItemSchema]
  },
  address:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    enum:["PENDING","CANCELED","DELIVERED"],
    default:"pending"
  }
},{timestamps:true}) 


export const Order = mongoose.model("Order",orderSchema)
