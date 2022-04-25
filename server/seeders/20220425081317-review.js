'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Review', [
      {
        userId: '1',
        title: 'Frozen',
        year: '2013',
        genre: 'Animation, Adventure, Comedy',
        runtime: '102 min',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg',
        content: '디즈니 얼음 여왕 이야기',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Review', null, {});
  }
};
