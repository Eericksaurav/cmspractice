const mongoose = require('mongoose');
const Post = mongoose.model("Post",{    
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"public"
    },
    description:{
        type:String,
        required:true
    },
    creationdate:{
        type:Date,
        default:Date.now()
    }
})
module.exports = Post;