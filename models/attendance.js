const attendance = (connection, Sequelize) => {
    return connection.define('attendanceTable', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true }, //somehow pulled in from userTable
        classId: { type: Sequelize.INTEGER }, //from class table
        daysAbsent: { type: Sequelize.INTEGER },
        daysAttended: { type: Sequelize.INTEGER },
    }, { paranoid: true })
}

module.exports = attendance