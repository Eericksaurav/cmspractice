/* importing the modules*/
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const {port, globalVariables} = require("../config/configuration");
const flash = require("connect-flash");
const session = require("express-session");
const methodOverride = require('method-override');

require("./database/conn");

/* initializing the paths */
const templatePath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');
const staticPath = path.join(__dirname,"../public");

/* configure express */
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(staticPath));

/* flash and session */ 
app.use(session({
    secret:'anysecret',
    saveUninitialized:true,
    resave:true
}));

app.use(flash());

/* using the global variables */
app.use(globalVariables);

/* setting the view engine for dynamic page content */
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

/* Method Override Middleware*/
app.use(methodOverride('newMethod'));

/* routes */
const defaultroutes = require("./routes/defaultroutes");
const adminroutes = require("./routes/adminroutes");
app.use("/",defaultroutes);
app.use("/admin",adminroutes);

/* listening to the server */
app.listen(port,()=>{
    console.log(`listening to the port address ${port}`);
});
