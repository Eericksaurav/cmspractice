const express = require('express');
const router = express.Router();
const adminCont = require("../../controllers/adminCont");


router.route("/admin")
    .get(adminCont.admin)




module.exports = router;