const express = require("express");
const router = express.Router();
const portfolioRouter = require("./portfolioRouter");

router.use("/portfolio", portfolioRouter);

module.exports = router;
