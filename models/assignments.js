const assignments = (connection, Sequelize, users) => {
    return connection.define('assignmentsTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        assignmentName: { type: Sequelize.STRING },
        assignmentType: { type: Sequelize.STRING },
        dueDate: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = assignments