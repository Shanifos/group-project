const Sequelize = require('sequelize')

const UsersModel = require('./users')
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

const connection = new Sequelize(database, username, password, {
  host,
  dialect
})

const Users = UsersModel(connection, Sequelize)

const courseCatalog = courseCatalogModel(connection, Sequelize)

const classTable = classModel(connection, Sequelize)

const assignments = assignmentModel(connection, Sequelize)

const attendance = attendanceModel(connection, Sequelize)

const gradebook = gradebookModel(connection, Sequelize)

const assessment = assessmentModel(connection, Sequelize)

const goals = goalsModel(connection, Sequelize)
const studentSchedule = studentScheduleModel(connection, Sequelize)

Users.hasMany(assessment, { foreignKey: 'userId' })
Users.hasMany(assignments, { foreignKey: 'userId' })
Users.hasMany(attendance, { foreignKey: 'userId' })
Users.hasMany(classTable, { foreignKey: 'userId' })
Users.hasMany(goals, { foreignKey: 'userId' })
Users.hasMany(gradebook, { foreignKey: 'userId' })
Users.hasMany(studentSchedule, { foreignKey: 'userId' })
courseCatalog.hasMany(classTable, { foreignKey: 'courseId' })
studentSchedule.hasMany(classTable, { foreignKey: 'courseId' })

goals.belongsTo(Users, { foreignKey: 'id' })
studentSchedule.belongsTo(Users, { foreignKey: 'id' })
classTable.belongsTo(studentSchedule, { foreignKey: 'courseId' })
classTable.belongsTo(Users, { foreignKey: 'id' })
gradebook.belongsTo(Users, { foreignKey: 'id' })
assessment.belongsTo(Users, { foreignKey: 'id' })
assignments.belongsTo(Users, { foreignKey: 'id' })
attendance.belongsTo(Users, { foreignKey: 'id' })
classTable.belongsTo(courseCatalog, { foreignKey: 'id' })




module.exports = {
  Users,
  courseCatalog,
  classTable,
  assignments,
  attendance,
  gradebook,
  assessment,
  goals,
  studentSchedule
}
