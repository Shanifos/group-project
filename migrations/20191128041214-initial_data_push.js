'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('userTables', [
      { firstName: 'John', lastName: 'Smith', Role: 'Teacher', emailAddress: 'JohnSmith@sjcme.edu', password: 'password' },
      { firstName: 'Mary', lastName: 'Smith', Role: 'Admin', emailAddress: 'MarySmith@sjcme.edu', password: 'password' },
      { firstName: 'Colin', lastName: 'Frey', Role: 'Student', emailAddress: 'ColinFrey@sjcme.edu', password: 'CouncilManRox' }
    ])
    await queryInterface.bulkInsert('classTables', [
      {
        userId: 1, courseId: 1, schedule: 'Monday 12pm - 1pm', semester: 'winter', spotsAvailable: 4
      }
    ])
    return queryInterface.bulkInsert('studentSchedules', [
      {
        userId: Sequelize.literal('(select id from userTables where role like "student")'),
        courseId: 1
      },
    ])
  },


  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('userTables', null, {})
  }
};
