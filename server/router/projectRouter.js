const express = require("express");
const router = express.Router();
const controller = require("../controllers/index");

router.get("/", controller.projects.allProjects);
router.get("/:id", controller.projects.oneProject);

module.exports = router;
