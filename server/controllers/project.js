const { Project } = require("../models");

module.exports = {
  //전체 프로젝트 보내기
  allProjects: async (req, res) => {
    const projects = await Project.findAll();

    res.status(200).json({
      data: projects,
      message: "req success",
    });
  },

  //ID일치하는 프로젝트 하나 보내기
  oneProject: async (req, res) => {
    const project = await Project.findByPk(req.params.id);

    res.status(200).json({
      data: project,
      message: "req success",
    });
  },
};
