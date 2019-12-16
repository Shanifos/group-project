const classModels = (connection, Sequelize) => {
  return connection.define(
    'classTable',
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //pulled in from userTable, email will then be available by pulling in id
      courseName: { type: Sequelize.STRING },
      courseId: {
        type: Sequelize.INTEGER,
        references: { model: 'courseCatalog', key: 'id' }
      },
      schedule: { type: Sequelize.STRING },
      semester: { type: Sequelize.STRING },
      spotsAvailable: { type: Sequelize.INTEGER },
      userID: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      }
    },
    { paranoid: true }
  )
}

module.exports = classModels
