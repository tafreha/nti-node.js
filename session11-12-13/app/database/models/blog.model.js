const mongoose= require("mongoose")
const blogSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    content:{
        type:String,
        trim:true,
        required:true
    }
})

const Blog = mongoose.model("Blog", blogSchema)
module.exports=Blog