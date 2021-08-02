const mongoose = require('mongoose');
const { Category } = require('./Categorymodel');
const Post = mongoose.model("Post",{    
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"private"
    },
    allowComments:{
        type:Boolean,
        default:false
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
})
module.exports = {Post};
