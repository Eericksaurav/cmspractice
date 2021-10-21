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
            const postsFind = await Post.find().populate("category");
            // console.log("ab==",posts);
            res.render("postedmessage", {posts:postsFind});
        } catch (error){
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
                category : req.body.category,
                allowComments : commentsAllowed
            });
            await postdata.save();
            req.flash("success-message",`New post ${postdata.title} created sucessfully`)
            res.status(201).redirect("/admin/posts");
        } catch (error) {
            res.status(500).send(error)
        }
    },
    createPosts:async(req,res)=>{
        try {
            const data = await Category.find(); 
            res.render("createPostAdmin",{categories:data});
        } catch (error) {
            res.status(500).send(error)
        }
    },
    editPost: async (req,res) => {
        try {
        const id = req.params.id;
        const cate = await Category.find();
        const data = await Post.findById(id);
        res.render("editposts",{posts:data, categories:cate});
        } catch (error) {
            console.log("Error == ",error);
            res.send(error);
        }
    },
    // editPostUpdateRoute: (req, res) => {
    //     const commentsAllowed = req.body.allowComments ? true : false;


    //     const id = req.params.id;

    //     Post.findById(id)
    //         .then(post => {

    //             post.title = req.body.title;
    //             post.status = req.body.status;
    //             post.allowComments = req.body.allowComments;
    //             post.description = req.body.description;
    //             post.category = req.body.category;


    //             post.save().then(updatePost => {
    //                 req.flash('success-message', `The Post ${updatePost.title} has been updated.`);
    //                 res.redirect('/admin/posts');

    //             });
    //         });

    // },
    editPostUpdateRoute: async(req,res)=>{
        try {
            const id =req.params.id;
            const data = await Post.findById(id).then(post=>{
                post.title = req.body.title;
                post.status = req.body.status;
                post.allowComments = req.body.allowComments;
                post.description = req.body.description;
                post.category = req.body.category;

                post.save().then(updatePost => {
                    req.flash('success-message', `The Post ${updatePost.title} has been updated.`);
                    res.redirect('/admin/posts');
                });
            });
        } catch (error) {
            res.send("err ==",error);
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
        res.status(500).send(error);
       }
    },
    postCategory: async(req,res)=>{
        try {
            const postCate = new Category({
                title : req.body.title
            })
            const cateData = await postCate.save();
            req.flash("success-message",`The ${postCate.title} category has been created successfully.`);
            res.status(201).redirect("/admin/category")
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    deleteCategory: async(req,res)=>{
        const id = req.params.id
        try {
            const delCate = await Category.findByIdAndDelete(id);
            req.flash("success-message",`The post ${delCate.title} has been deleted successfully.`);
            res.status(201).redirect("/admin/category")
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    updateCategoryRoute: async(req,res)=>{
        try {
            const cateId =req.params.id
            const newTitle = req.body.name
            if (newTitle) {
                await Category.findById(cateId).then(category=>{
                    category.title = newTitle;
                    category.save().then(updated=>{
                        res.status(200).json({url:"/admin/category"});
                    });
                })
            }
        } catch (error) {
            
        }
    }
}