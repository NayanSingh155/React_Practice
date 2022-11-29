const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");
router.get("/", controller.root);
router.post("/newlink", controller.newlink);
router.post("/getlink", controller.getlink);

module.exports = router;
