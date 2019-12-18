'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('gradebookTables', [
      { userId: 3, assignmentId: 1, assignmentGrade: 98 },
      { userId: 3, assignmentId: 2, assignmentGrade: 100 },
      { userId: 3, assignmentId: 3, assignmentGrade: 84 },
      { userId: 3, assignmentId: 4, assignmentGrade: 90 },
      { userId: 3, assignmentId: 5, assignmentGrade: 95 }, { userId: 4, assignmentId: 1, assignmentGrade: 98 },
      { userId: 4, assignmentId: 2, assignmentGrade: 70 },
      { userId: 4, assignmentId: 3, assignmentGrade: 84 },
      { userId: 4, assignmentId: 4, assignmentGrade: 62 },
      { userId: 4, assignmentId: 5, assignmentGrade: 88 },
      { userId: 4, assignmentId: 6, assignmentGrade: 92 },
      { userId: 4, assignmentId: 7, assignmentGrade: 100 },
      { userId: 4, assignmentId: 8, assignmentGrade: 88 },
      { userId: 4, assignmentId: 9, assignmentGrade: 72 },
      { userId: 4, assignmentId: 10, assignmentGrade: 100 },
      { userId: 4, assignmentId: 11, assignmentGrade: 91 },
      { userId: 4, assignmentId: 12, assignmentGrade: 85 },
      { userId: 3, assignmentId: 6, assignmentGrade: 92 },
      { userId: 3, assignmentId: 7, assignmentGrade: 100 },
      { userId: 3, assignmentId: 8, assignmentGrade: 88 },
      { userId: 3, assignmentId: 9, assignmentGrade: 72 },
      { userId: 3, assignmentId: 10, assignmentGrade: 81 },
      { userId: 3, assignmentId: 11, assignmentGrade: 100 },
      { userId: 3, assignmentId: 12, assignmentGrade: 100 }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gradebookTables')
  }
};
