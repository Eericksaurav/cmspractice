const Post = require("../src/models/doc").Post;

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts:(req,res)=>{
        res.send("All posts")
    },
    submitPosts : async(req,res)=>{
        const new_post = new Post({
            title : req.body.title,
            status : req.body.status,
            description : req.body.description,
            creationdate : req.body.creationdate
        });
        const see = await new_post.save();
        console.log(see);
        res.flash("success-message","Post created sucessfully")
        res.render('admin/posts');
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}