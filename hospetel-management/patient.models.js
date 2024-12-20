import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
  name:{
    type: String,
    required:true,
  },
  diagonsedWith:{
    type:String,
    required:true,
  },
  adress:{
    type:String,
    required:true,
  },
  age:{
    type:Nunber,
    required:true,
  },
  bloodGroup:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    enum:["m","f","o"],
  required:true
  },
  admitted:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Hospital',
  }
},{timestamp:true});

export const Patient = mongoose.model("Patient",patientSchema);