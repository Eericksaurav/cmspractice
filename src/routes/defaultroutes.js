const express = require("express");
const router = express.Router();
const defaultCont = require("../../controllers/defaultCont");

router.route('/')
    .get(defaultCont.default);
router.route('/login')
    .get(defaultCont.login);
router.route('/register')
    .get(defaultCont.register)
    
module.exports = router;