const gradebook = (connection, Sequelize) => {
    return connection.define(
        'gradebookTables',
        {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
            assignmentGrade: { type: Sequelize.INTEGER },
            average: { type: Sequelize.INTEGER },
            createdAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
            updatedAT: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
            deletedAt: { type: Sequelize.DATE },
        },
        { paranoid: true }
    )
}

module.exports = gradebook