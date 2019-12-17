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

const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const { host, database, username, password, dialect } = allConfigs[environment]

const connection = new Sequelize('backpack', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
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

users.belongsToMany(classTables, { through: 'usersClasses', foreignKey: 'userId' })
classTables.belongsToMany(users, { through: 'usersClasses', foreignKey: 'classId' })
users.belongsToMany(gradebook, { through: 'usersGradebook', foreignKey: 'userId' })
gradebook.belongsToMany(users, { through: 'usersGradebook', foreignKey: 'gradebookId' })





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
  //usersGradebook
}
