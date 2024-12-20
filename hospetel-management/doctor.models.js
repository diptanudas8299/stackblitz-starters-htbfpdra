import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
  name:{
    type:string,
    required:true,
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    tpe:String,
    required:true,
  },
  experienceInYears:{
    type:Number,
    default:0
  },
  worksInHospitals:[
    {type: mongoose.Schema.Types.ObjectID,
     ref:"Hospital",      
    }]
},{timestamp:true})

export const Doctor = mongoose.model("Dorctor",doctorSchema)