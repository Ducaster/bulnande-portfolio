const express = require("express");
const router = express.Router();
const portfolioRouter = require("./portfolioRouter");
const workerRouter = require("./workerRouter");

router.use("/portfolio", portfolioRouter);
router.use("/workers", workerRouter);

module.exports = router;
