const goals = (connection, Sequelize) => {
    return connection.define('goalsTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        assignmentName: { type: Sequelize.STRING },
        assignmentType: { type: Sequelize.STRING },
        dueDate: { type: Sequelize.INTEGER },
        description: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = goals