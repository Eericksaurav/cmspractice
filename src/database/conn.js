const mongoose = require("mongoose");
const {mongoDBurl} = require("../../config/configuration")

/* creating the connection to the database */
mongoose.connect(mongoDBurl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false   
   })
.then(()=> console.log("connection sucessful on the database"))
.catch((error)=> console.log(error));

