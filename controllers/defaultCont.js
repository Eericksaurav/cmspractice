module.exports = {
    default : (req,res)=>{
        res.render('default')
    },
    loginGet : (req,res)=>{
        res.render('login')
    },
    loginPost : (req,res)=>{
        res.send("sucessfully submitted the data");
    },
    registerGet : (req,res)=>{
        res.render('register')
    },
    registerPost : (req,res)=>{
        res.send("registered sucessfully")
    }
};
