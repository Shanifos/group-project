const roster = (connection, Sequelize) => {
    return connection.define('rosterTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //pulled in from userTable, all other info will be available from id
    }, { paranoid: true })
}

module.exports = roster