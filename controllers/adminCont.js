const Post = require("../src/models/doc").Post;

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts:(req,res)=>{
        res.send("All posts")
    },
    submitPosts : async(req,res)=>{
        try {
            const newPost = new Post({
                title : req.body.title,
                status : req.body.status,
                description : req.body.description,
                creationdate : req.body.creationdate
            });
            const Posted = await newPost.save();        
            console.log(Posted);
            // res.send(Posted);
            // res.flash("success-message","Post created sucessfully")
            res.render('admin/posts');
        } catch (error) {
            res.status(400).send(error)
        }
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}
