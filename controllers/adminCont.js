const Post = require("../src/models/doc").Post;

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts:(req,res)=>{
        res.send("Posted");
    },
    submitPost : async(req,res)=>{
        try {
            console.log((req.body.title));
            const postdata = new Post({
                title : req.body.title,
                status: req.body.status,
                description : req.body.description
            });
            const posted = await postdata.save();
            console.log("postdata",postdata);
            console.log(posted);
            // res.flash("success-message","Post created sucessfully")
            res.status(201).send(posted);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}