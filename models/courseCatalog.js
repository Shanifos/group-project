const courseCatalog = (connection, Sequelize) => {
    return connection.define('courseCatalog', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
        courseName: { type: Sequelize.STRING },
        courseDescription: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = courseCatalog