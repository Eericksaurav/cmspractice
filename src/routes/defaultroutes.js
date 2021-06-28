const express = require("express");
const router = express.Router();
const defaultCont = require("../../controllers/defaultCont");

router.route('/')
    .get(defaultCont.default)
router.route('/login')
    .get(defaultCont.loginGet)
    .post(defaultCont.loginPost)
router.route('/register')
    .get(defaultCont.registerGet)
    .post(defaultCont.registerPost)
    
module.exports = router;