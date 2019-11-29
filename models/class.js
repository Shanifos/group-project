const classTable = (connection, Sequelize) => {
    return connection.define('classTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //pulled in from userTable, email will then be available by pulling in id
        courseId: { type: Sequelize.INTEGER },
        schedule: { type: Sequelize.STRING },
        semester: { type: Sequelize.STRING },
        spotsAvailable: { type: Sequelize.INTEGER },
    }, { paranoid: true })
}

module.exports = classTable