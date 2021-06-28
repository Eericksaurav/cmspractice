module.exports= {
    admin: (req,res)=>{
        res.render("admin");
    },
    getPosts:(req,res)=>{
        res.send("All posts")
    },
    submitPosts:(req,res)=>{
        res.send("post submitted")
    },
    createPosts:(req,res)=>{
        res.render("createPostAdmin");
    }
}