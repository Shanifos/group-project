'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usersClasses', [
      { classId: 1, userId: 1 },
      { classId: 1, userId: 2 },
      { classId: 2, userId: 1 },
      { classId: 2, userId: 2 },
      { classId: 3, userId: 3 },
      { classId: 3, userId: 1 },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usersClasses')
    await queryInterface.bulkDelete('usersGradebook')
  }
}
