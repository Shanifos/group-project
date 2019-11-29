'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('userTables', [
      { firstName: 'John', lastName: 'Smith', Role: 'Teacher', emailAddress: 'JohnSmith@sjcme.edu', password: 'password' },
      { firstName: 'Mary', lastName: 'Smith', Role: 'Admin', emailAddress: 'MarySmith@sjcme.edu', password: 'password' },
      { firstName: 'Colin', lastName: 'Frey', Role: 'Student', emailAddress: 'ColinFrey@sjcme.edu', password: 'CouncilManRox' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelte('userTables', null, {})
  }
};
