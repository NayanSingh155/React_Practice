const express = require("express");
const { createShortUrl, gotUrl } = require("../controllers/link.controller");

const router = express.Router();

router.post("/shrinkUrl", createShortUrl);

router.get("/:shrinkedUrl", gotUrl);

module.exports = router;
