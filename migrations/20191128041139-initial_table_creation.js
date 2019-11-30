'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userTables', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      firstName: { type: Sequelize.STRING, },
      lastName: { type: Sequelize.STRING, },
      role: { type: Sequelize.STRING, },
      emailAddress: { type: Sequelize.STRING, },
      password: { type: Sequelize.STRING, },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('courseCatalog', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      courseName: { type: Sequelize.STRING },
      courseDescription: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('classTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //pulled in from userTable, email will then be available by pulling in id
      courseId: { type: Sequelize.INTEGER },
      schedule: { type: Sequelize.STRING },
      semester: { type: Sequelize.STRING },
      spotsAvailable: { type: Sequelize.INTEGER },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('assignmentsTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      assignmentName: { type: Sequelize.STRING },
      assignmentType: { type: Sequelize.STRING },
      dueDate: { type: Sequelize.INTEGER },
      description: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('attendanceTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      daysAbsent: { type: Sequelize.INTEGER },
      daysAttended: { type: Sequelize.INTEGER },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('gradebookTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      assignmentGrade: { type: Sequelize.INTEGER },
      average: { type: Sequelize.INTEGER },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('assessmentTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      assessmentName: { type: Sequelize.STRING },
      assessmentType: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('goalsTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
      classId: { type: Sequelize.INTEGER }, //from class table
      assignmentName: { type: Sequelize.STRING },
      assignmentType: { type: Sequelize.STRING },
      dueDate: { type: Sequelize.INTEGER },
      description: { type: Sequelize.STRING },
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('rosterTable', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //pulled in from userTable, all other info will be available from id
      createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('userTables')
    await queryInterface.dropTable('courseCatalog')
    await queryInterface.dropTable('classTable')
    return queryInterface.dropTable('rosterTable')
  }
}
