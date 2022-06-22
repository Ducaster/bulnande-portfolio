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
      "Images",
      [
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/938689047805698048/photo_2017-12-09_23-10-00.jpeg",
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941211195413774336/photo_2022-02-10_14.54.30.jpeg",
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941211195044683807/photo_2022-02-10_14.54.28.jpeg",
          project_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941196311561125889/photo_2022-02-10_13.57.46.jpeg",
          project_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941607679892267038/photo_2022-02-11_17.12.12.jpeg",
          project_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941171778619863090/photo_2022-02-10_12.19.47.jpeg",
          project_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941171802858717295/photo_2022-02-10_12.19.50.jpeg",
          project_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941198256132739102/photo_2022-02-10_14.05.38.jpeg",
          project_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: "https://cdn.discordapp.com/attachments/938684956916449330/941215749115084820/photo_2022-02-10_15.15.05.jpeg",
          project_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
