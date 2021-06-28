/* importing the modules*/
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const {port} = require("../config/configuration")
require("./database/conn");


/* initializing the paths */
const templatePath = path.join(__dirname,'../template/views');
const partialsPath = path.join(__dirname,'../template/partials');
const staticPath = path.join(__dirname,"../public");

/* setting the view engine for dynamic page content */
app.set('view engine','hbs');
app.set('views',templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

/* routes */
const defaultroutes = require("./routes/defaultroutes");
const adminroutes = require("./routes/adminroutes");
app.use("/",defaultroutes);
app.use("/",adminroutes);

/* listening to the server */
app.listen(port,()=>{
    console.log(`listening to the port address ${port}`);
});
