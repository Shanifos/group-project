const Sequelize = require('sequelize')

const usersModel = require('./users')
const courseCatalogModel = require('./courseCatalog')
const classModel = require('./class')
const studentScheduleModel = require('./studentSchedule')
const assignmentModel = require('./assignments')
const attendanceModel = require('./attendance')
const gradebookModel = require('./gradebook')
const assessmentModel = require('./assessment')
const goalsModel = require('./goals')
const usersClassesModel = require('./usersClasses')
const userAssignmentsModel = require('./userAssignments')
const classAssignmentsModel = require('./classAssignments')

const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const { host, database, username, password, dialect } = allConfigs[environment]
const config = allConfigs[environment]
const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

const users = usersModel(connection, Sequelize)
const courseCatalog = courseCatalogModel(connection, Sequelize)
const classTables = classModel(connection, Sequelize)
const assignments = assignmentModel(connection, Sequelize)
const attendance = attendanceModel(connection, Sequelize)
const gradebook = gradebookModel(connection, Sequelize)
const assessment = assessmentModel(connection, Sequelize)
const goals = goalsModel(connection, Sequelize)
const studentSchedule = studentScheduleModel(connection, Sequelize)
const usersClasses = usersClassesModel(connection, Sequelize, classTables, users)
const userAssignments = userAssignmentsModel(connection, Sequelize, users, assignments)
const classAssignments = classAssignmentsModel(connection, Sequelize, classTables, assignments)


users.belongsToMany(classTables, { through: 'usersClasses', foreignKey: 'userId' })
classTables.belongsToMany(users, { through: 'usersClasses', foreignKey: 'classId' })
users.belongsToMany(gradebook, { through: 'usersGradebook', foreignKey: 'userId' })
gradebook.belongsToMany(users, { through: 'usersGradebook', foreignKey: 'gradebookId' })
users.belongsToMany(assignments, { through: 'userAssignment', foreignKey: 'userId' })
assignments.belongsToMany(users, { through: 'userAssignment', foreignKey: 'assignmentId' })
classTables.belongsToMany(assignments, { through: 'classAssignments', foreignKey: 'classId' })
assignments.belongsToMany(classTables, { through: 'classAssignments', foreignKey: 'assignmentId' })



module.exports = {
  users,
  courseCatalog,
  classTables,
  assignments,
  attendance,
  gradebook,
  assessment,
  goals,
  studentSchedule,
  usersClasses,
  userAssignments,
  classAssignments

  //usersGradebook
}
