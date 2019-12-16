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

const allConfigs = require('../config/sequelize')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

const { host, database, username, password, dialect } = allConfigs[environment]

const connection = new Sequelize('backpack', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

const users = usersModel(connection, Sequelize)

const courseCatalog = courseCatalogModel(connection, Sequelize)

const classTable = classModel(connection, Sequelize)

const assignments = assignmentModel(connection, Sequelize)

const attendance = attendanceModel(connection, Sequelize)

const gradebook = gradebookModel(connection, Sequelize)

const assessment = assessmentModel(connection, Sequelize)

const goals = goalsModel(connection, Sequelize)
const studentSchedule = studentScheduleModel(connection, Sequelize)

users.hasMany(assessment, { foreignKey: 'userId' })
users.hasMany(assignments, { foreignKey: 'userId' })
users.hasMany(attendance, { foreignKey: 'userId' })
users.hasMany(classTable, { foreignKey: 'userId' })
users.hasMany(goals, { foreignKey: 'userId' })
users.hasMany(gradebook, { foreignKey: 'userId' })
users.hasMany(studentSchedule, { foreignKey: 'userId' })
courseCatalog.hasMany(classTable, { foreignKey: 'courseId' })
studentSchedule.hasMany(classTable, { foreignKey: 'courseId' })

goals.belongsTo(users, { foreignKey: 'id' })
studentSchedule.belongsTo(users, { foreignKey: 'id' })
classTable.belongsTo(studentSchedule, { foreignKey: 'courseId' })
classTable.belongsTo(users, { foreignKey: 'id' })
gradebook.belongsTo(users, { foreignKey: 'id' })
assessment.belongsTo(users, { foreignKey: 'id' })
assignments.belongsTo(users, { foreignKey: 'id' })
attendance.belongsTo(users, { foreignKey: 'id' })
classTable.belongsTo(courseCatalog, { foreignKey: 'id' })




module.exports = {
  users,
  courseCatalog,
  classTable,
  assignments,
  attendance,
  gradebook,
  assessment,
  goals,
  studentSchedule
}
