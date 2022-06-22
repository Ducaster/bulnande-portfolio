const express = require("express");
const router = express.Router();
const workerRouter = require("./workerRouter");
const projectRouter = require("./projectRouter");

router.use("/workers", workerRouter);
router.use("/projects", projectRouter);

module.exports = router;
