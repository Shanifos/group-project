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
      { userId: 5, assignmentId: 1, assignmentGrade: 77 },
      { userId: 5, assignmentId: 2, assignmentGrade: 70 },
      { userId: 5, assignmentId: 3, assignmentGrade: 84 },
      { userId: 5, assignmentId: 4, assignmentGrade: 100 },
      { userId: 5, assignmentId: 5, assignmentGrade: 88 },
      { userId: 5, assignmentId: 6, assignmentGrade: 92 },
      { userId: 5, assignmentId: 7, assignmentGrade: 42 },
      { userId: 5, assignmentId: 8, assignmentGrade: 88 },
      { userId: 5, assignmentId: 9, assignmentGrade: 72 },
      { userId: 5, assignmentId: 10, assignmentGrade: 88 },
      { userId: 5, assignmentId: 11, assignmentGrade: 91 },
      { userId: 5, assignmentId: 12, assignmentGrade: 85 },
      { userId: 6, assignmentId: 1, assignmentGrade: 98 },
      { userId: 6, assignmentId: 2, assignmentGrade: 70 },
      { userId: 6, assignmentId: 3, assignmentGrade: 84 },
      { userId: 6, assignmentId: 4, assignmentGrade: 100 },
      { userId: 6, assignmentId: 5, assignmentGrade: 88 },
      { userId: 6, assignmentId: 6, assignmentGrade: 92 },
      { userId: 6, assignmentId: 7, assignmentGrade: 91 },
      { userId: 6, assignmentId: 8, assignmentGrade: 88 },
      { userId: 6, assignmentId: 9, assignmentGrade: 72 },
      { userId: 6, assignmentId: 10, assignmentGrade: 78 },
      { userId: 6, assignmentId: 11, assignmentGrade: 91 },
      { userId: 6, assignmentId: 12, assignmentGrade: 85 },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gradebookTables')
  }
};
