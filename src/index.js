/* importing the modules*/
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const {port, globalVariables} = require("../config/configuration");
const flash = require("flash");
// const session = require("express-session");

require("./database/conn");

/* initializing the paths */
const templatePath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');
const staticPath = path.join(__dirname,"../public");

/* configure express */
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(staticPath));

/* flash and session */ 
// app.use(session({
//     secret:'anysecret',
//     saveUninitialized:true,
//     resave:true
// }));
// app.use(flash());
// app.use(globalVariables);

/* setting the view engine for dynamic page content */
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

/* routes */
const defaultroutes = require("./routes/defaultroutes");
const adminroutes = require("./routes/adminroutes");
app.use("/",defaultroutes);
app.use("/admin",adminroutes);

/* listening to the server */
app.listen(port,()=>{
    console.log(`listening to the port address ${port}`);
});
