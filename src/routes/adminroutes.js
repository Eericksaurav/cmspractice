const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const adminCont = require("../../controllers/adminCont");

router.route("/")
    .get(adminCont.admin);
    
 /*Post Route */
router.route("/posts")
    .get(adminCont.getPosts);

router.route("/posts/create")
    .get(adminCont.createPosts)
    .post(adminCont.submitPost);

router.route("/posts/edit/:id")
    .get(adminCont.editPost);

router.route("/posts/delete/:id")
    .delete(adminCont.deletePost);

    /* Category route */
router.route("/category")
    .get(adminCont.getCategory)
    .post(adminCont.postCategory);

router.route("/category/delete/:id")
    .delete(adminCont.deleteCategory);    


module.exports = router;
