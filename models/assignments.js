const assignments = (connection, Sequelize) => {
    return connection.define('assignmentsTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        userId: {
            type: Sequelize.INTEGER, reference: {
                model: 'users', key: 'id'
            }
        },
        classId: { type: Sequelize.INTEGER }, //from class table
        assignmentName: { type: Sequelize.STRING },
        assignmentType: { type: Sequelize.STRING },
        dueDate: { type: Sequelize.INTEGER },
        description: { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = assignments