const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", controller.workers.allWorkers);

module.exports = router;
