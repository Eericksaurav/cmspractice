const mongoose = require('mongoose');
const Detail = mongoose.model("Detail",{    
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
module.exports = Detail;