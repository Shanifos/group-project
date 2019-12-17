const gradebook = (connection, Sequelize, users) => {
    return connection.define('gradebookTable', {
        userID: {
            type: Sequelize.INTEGER,
            references: {
                model: users,
                key: 'id'
            }
        }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        assignmentGrade: { type: Sequelize.INTEGER },
        average: { type: Sequelize.INTEGER }

    }, { paranoid: true })
}

module.exports = gradebook