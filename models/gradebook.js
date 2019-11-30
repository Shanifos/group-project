const gradebook = (connection, Sequelize) => {
    return connection.define('gradebookTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        assignmentGrade: { type: Sequelize.INTEGER },
        average: { type: Sequelize.INTEGER }

    }, { paranoid: true })
}

module.exports = gradebook