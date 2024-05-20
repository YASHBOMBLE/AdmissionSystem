import {Schema, model} from "mongoose"

const personalSchema = new Schema({
  fname: String,
  mname: String,
  lname: String,
  mono : String,
 address : String,
 gender : String
  
}, { timestamps: true },{Location:true})

const Personal = model("Personal", personalSchema)

export default Personal