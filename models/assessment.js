const assessment = (connection, Sequelize) => {
    return connection.define('assessmentTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        assessmentName: { type: Sequelize.STRING },
        assessmentType: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },


    }, { paranoid: true })
}

module.exports = assessment