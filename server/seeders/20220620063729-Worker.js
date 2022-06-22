"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(
    //   "Workers",
    //   [
    // {
    //   name: "이민형",
    //   position: "대표",
    //   works: "단체 운영 총괄,프로젝트 전반 기획 및 운영",
    //   email: "mlimshs@gmail.com",
    //   photo:
    //     "https://cdn.discordapp.com/attachments/938684956916449330/940071831719792740/photo_2022-02-07_11.29.31.jpeg",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   name: "최연호",
    //   position: "컨텐츠개발팀장",
    //   works: "신규 컨텐츠 발굴 및 기획,공연 프로젝트 연출 및 진행",
    //   email: "nznotg@gmail.com",
    //   photo:
    //     "https://cdn.discordapp.com/attachments/938684956916449330/940061727670829136/IMG_0691.JPG",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   name: "이남규",
    //   position: "미디어디자인팀장",
    //   works: "프로젝트 미디어 지원 업무,프로젝트 디자인 업무",
    //   email: "Namkyu31@naver.com",
    //   photo:
    //     "https://cdn.discordapp.com/attachments/938684956916449330/941169629571743805/photo_2022-02-10_12.11.58.jpeg",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    // {
    //   name: "한승목",
    //   position: "대외협력팀장",
    //   works: "협력단체, 후원단체 섭외 및 관리,공연자, 인사 섭외 및 관리",
    //   email: "drummond@daum.net",
    //   photo:
    //     "https://cdn.discordapp.com/attachments/938684956916449330/941975775723257906/photo_2022-02-12_17.35.12.jpeg",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
