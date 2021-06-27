const express = require("express");
const router = express.Router();
const defaultCont = require("../../controllers/defaultCont");

router.get("/",defaultCont.default);

module.exports = router;