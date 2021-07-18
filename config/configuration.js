module.exports = {
    mongoDBurl : 'mongodb://localhost:27017/myCMS',
    port : process.env.PORT || 8090,
    globalVariables : (req,res,next)=>{
        res.locals.success_message = req.flash("success-message");
        res.locals.error_message = req.flash("error-message");

        
        next();
    }
};