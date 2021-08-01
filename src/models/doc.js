const mongoose = require('mongoose');
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
    }
})
module.exports = {Post};
