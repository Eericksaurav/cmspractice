const mongoose = require("mongoose");
const {Post} = require("../src/models/doc");
require("../src/routes/adminroutes");

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts:(req,res)=>{
        res.render("postedmessage");
    },
    submitPost : async(req,res)=>{
        try{
            const postdata = new Post({
                title : req.body.title,
                status : req.body.status,
                description : req.body.description
            });
            // console.log("postdata == ",postdata);
            await postdata.save();
            req.flash("success-message","Post created sucessfully")
            res.status(201).redirect("/admin/posts");
        } catch (error) {
            res.status(500).send(error)
        }
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}