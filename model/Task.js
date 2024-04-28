const mongoose=require('mongoose')
const Schema=mongoose.Schema

const TaskSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    user:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("Task",TaskSchema)

