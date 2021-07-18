const express = require('express');
const router = express.Router();
const adminCont = require("../../controllers/adminCont");


router.route("/")
    .get(adminCont.admin);
router.route("/posts")
    .get(adminCont.getPosts);

router.route("/posts/create")
    .get(adminCont.createPosts)
    .post(adminCont.submitPost);

module.exports = router;