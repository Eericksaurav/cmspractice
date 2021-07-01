module.exports = {
    mongoDBurl : 'mongodb://localhost:27017/myCMS',
    port : process.env.PORT || 8080,
    globalVariables : (req,res,next)=>{
        res.locals.success_message = req.flash("Success-message");
        res.locals.error_message = req.flash("Error-message");

        next();
    }
};