const { Worker } = require("../models");

module.exports = {
  allWorkers: async (req, res) => {
    const workers = await Worker.findAll();

    res.status(400).json({
      data: workers,
      message: "req success",
    });
  },
};
