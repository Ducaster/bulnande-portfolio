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
    await queryInterface.bulkInsert(
      "Projects",
      [
        // {
        //   type: "long",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/938689047805698048/photo_2017-12-09_23-10-00.jpeg",
        //   name: "하늘에별따기",
        //   date: "2017-07-14",
        //   performer: "최연호, 최은희, 주한나, 최성준, 홍신기, 이민형 등",
        //   category: "공연",
        //   inform:
        //     "불난데 부채질의 고품격 뮤직&토크 콘서트. 아마추어 공연자들의 다양한 공연과 토크가 어루어진 참여형 콘서트",
        //   season: "시즌1 ~ 5",
        //   videos: "https://www.youtube.com/embed/lin00EwCFME",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   type: "long",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/941210226579894302/photo_2022-02-10_14.50.07.jpeg",
        //   name: "시즌콘서트",
        //   date: "2017-03-12",
        //   performer: "시즌",
        //   category: "공연",
        //   inform: "공연팀 '시즌'의 토크와 음악이 어루어진 참여형 콘서트",
        //   season: "시즌1 ~ 10",
        //   videos: "https://www.youtube.com/embed/rnLDl0ZE5i0",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   type: "long",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/941607679649017906/photo_2022-02-11_17.11.58.jpeg",
        //   name: "1250프로젝트",
        //   date: "2017-03-12",
        //   performer: "불난데부채질 팀",
        //   category: "참여형프로그램",
        //   inform:
        //     "사람한번 돼 보자! 다양한 강연과 참여형 프로그램을 통한 역량향상 프로젝트",
        //   season: "시즌1 ~ 5",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   type: "long",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/941184523612323840/photo_2022-02-10_13.10.46.jpeg",
        //   name: "위.필.당",
        //   date: "2016-04-25",
        //   performer: "소울 중창단",
        //   category: "공연",
        //   season: "시즌1,2",
        //   inform:
        //     "합창단 '소울'과 함께 음악으로 소통하는 시간! 위로가 필요한 당신에게 드리는 위로와 힐링의 시간",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   type: "short",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/941171098844811294/photo_2022-02-10_12.17.29.jpeg",
        //   name: "남산봉화식공연",
        //   date: "2015-08-14",
        //   category: "공연",
        //   performer: "극단 더켠, 희얼, 위션",
        //   inform:
        //     "서울시 중구 남산에서 매년 진행되는 봉화식 전통 축제 기념공연 참여, 캘리그라피 부스 운영",
        //   videos: "https://www.youtube.com/embed/MpuZUQeKn00",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   type: "short",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/941198255906250844/photo_2022-02-10_14.05.35.jpeg",
        //   name: "후끈불끈",
        //   date: "2016-02-20",
        //   performer: "시즌, 위션",
        //   category: "공연",
        //   inform: "커먼그라운드에서 진행한 불난데부채질의 야외 공연&버스킹",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   type: "short",
        //   thumbnail:
        //     "https://cdn.discordapp.com/attachments/938684956916449330/941215342959661076/photo_2022-02-10_15.13.32.jpeg",
        //   name: "소통",
        //   date: "2016-04-02",
        //   performer: "소울",
        //   category: "공연",
        //   inform: "소울 중창단과 합창에 관심이 있는 청년들이 함께한 종합 공연",
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
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
