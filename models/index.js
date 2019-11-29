const Sequelize = require('sequelize')

const UsersModel = require('./users')
const courseCatalogModel = require('./courseCatalog')
const classModel = require('./class')
const rosterModel = require('./roster')

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

module.exports = {
  Users,
  courseCatalog,
  classTable,
  roster
}
