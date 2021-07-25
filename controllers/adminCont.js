const {Post} = require("../src/models/doc")

module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts:(req,res)=>{
        res.send("Posted");
    },
    submitPost : async(req,res)=>{
        try {
            // console.log(req.body);
            let postdata = new Post({
                title : req.body.title,
                status: req.body.status,
                description : req.body.description
            });
            console.log("postdata == ",postdata);
            const posted = await postdata.save();
            // req.flash("success-message","Post created sucessfully")
            res.status(201).redirect("/admin/posts");
        } catch (error) {
            res.status(400).send(error);
        }
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}