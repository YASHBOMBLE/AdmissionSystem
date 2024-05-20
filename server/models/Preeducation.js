import {Schema, model} from "mongoose"

const educationSchema = new Schema({
    tenyeop : String,
    tenmarks : String,
    board : String,
    twelthyeop : String,
    twelthmarks : String,
    board : String,
    graduationyeop : String,
    graduationmarks : String,
    university : String
}, { timestamps: true },{Location:true})

const Preeducation = model("Preeducation", educationSchema)

export default Preeducation