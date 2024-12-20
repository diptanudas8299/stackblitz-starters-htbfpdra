import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  addressLine1:{
    type:String,
    required:true,
  },
  adressLine2:{
    type:string,
  },
  city:{
    type:String,
    required:true,
  },
  pincode:{
    type:String,
    required:true,
  },
  specilized:[
    {
      type:String,
    }
  ]
},{timestamp:true})

export const Hospital = mongoose.model("Hospital",hospitalSchema)