const mongoose = require("mongoose");
const {Post} = require("../src/models/Postmodel");
require("../src/routes/adminroutes");

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts: async(req,res)=>{
        // Post.find().then(main=>{
        //     res.render("postedmessage",{posts:main});
        // })
        try {
            const postsFind = await Post.find()
            // console.log("ab==",posts);   
            res.render("postedmessage", {posts:postsFind});
        } catch (error) {
            console.log("err==",error); 
            res.status(500).send(error);
        }
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
            req.flash("success-message","New post created sucessfully.")
            res.status(201).redirect("/admin/posts");
        } catch (error) {  
            res.status(500).send(error)
        }
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}

