const mongoose = require("mongoose");
const {mongoDBurl} = require("../../config/configuration")

/* creating the connection to the database */
mongoose.connect(mongoDBurl,{
    useNewUrlParser:true,
   //  useCreateIndex:true,
    useUnifiedTopology:true
   //  useFindAndModify:false
   });
mongoose.connection
   .once("open",()=> console.log("Database is connected"))
   .on("error",(error) =>console.log("error is: ",error));