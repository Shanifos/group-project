const Sequelize = require('sequelize')

const UsersModel = require('./users')
const courseCatalogModel = require('./courseCatalog')
const classModel = require('./class')
const rosterModel = require('./roster')
const assignmentModel = require('./assignments')
const attendanceModel = require('./attendance')
const gradebookModel = require('./gradebook')
const assessmentModel = require('./assessment')
const goalsModel = require('./goals')

/*const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const { host, database, username, password, dialect } = allConfigs[environment]*/

const connection = new Sequelize('backpack', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const Users = UsersModel(connection, Sequelize)

const courseCatalog = courseCatalogModel(connection, Sequelize)

const classTable = classModel(connection, Sequelize)

const roster = rosterModel(connection, Sequelize)

const assignments = assignmentModel(connection, Sequelize)

const attendance = attendanceModel(connection, Sequelize)

const gradebook = gradebookModel(connection, Sequelize)

const assessment = assessmentModel(connection, Sequelize)

const goals = goalsModel(connection, Sequelize)

module.exports = {
  Users,
  courseCatalog,
  classTable,
  roster,
  assignments,
  attendance,
  gradebook,
  assessment,
  goals
}
