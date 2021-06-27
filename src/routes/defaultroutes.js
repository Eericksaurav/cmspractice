const express = require("express");
const router = express.Router();
const defaultCont = require("../../controllers/defaultCont");

router.route('/')
    .get(defaultCont.default);
    

module.exports = router;