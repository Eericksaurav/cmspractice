const mongoose = require("mongoose");
const {Post} = require("../src/models/Postmodel");
const {Category} = require("../src/models/Categorymodel");
require("../src/routes/adminroutes");

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts: async(req,res)=>{
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
        const commentsAllowed = req.body.allowComments? true: false;
        try{
            const postdata = new Post({
                title : req.body.title,
                status : req.body.status,
                description : req.body.description,
                allowComments : commentsAllowed
            });
            await postdata.save();
            req.flash("success-message","New post created sucessfully.")
            res.status(201).redirect("/admin/posts");
        } catch (error) {
            res.status(500).send(error)
        }
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    },
    editPost: async(req,res) => {
        try {
        const id = req.params.id;
        const data = await Post.findById(id);
        res.render("editposts",{posts:data})
        } catch (error) {
            console.log("Error == ",error);
            res.send(error);
        }
    },
    deletePost: async(req,res)=>{
        const id = req.params.id
        try{
            const deleteData = await Post.findByIdAndDelete(id);
            req.flash("success-message",`The post ${deleteData.title} has been deleted successfully.`);
            res.status(201).redirect("/admin/posts");
        }catch(error){
            res.send(error);
        }
    },
    getCategory: async(req,res)=>{
       try {
        const Catedata = await Category.find();
        res.render("displayCategory",{categories : Catedata});
       } catch (error) {
        res.status(201).send(error);
       }
    }
}