const studentScheduleModel = (connection, Sequelize) => {
    return connection.define('studentSchedules', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: Sequelize.INTEGER, references: { model: 'Users', key: 'id' } },
        courseId: { type: Sequelize.INTEGER, references: { model: 'classTables', key: 'courseId' } },

    }, { paranoid: true })
}

module.exports = studentScheduleModel