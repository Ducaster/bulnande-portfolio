const { Worker } = require("../models");

module.exports = {
  //모든 팀원 보내기
  allWorkers: async (req, res) => {
    const workers = await Worker.findAll();

    res.status(200).json({
      data: workers,
      message: "req success",
    });
  },
};
