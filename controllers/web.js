const models = require('../models')
const { cleanClasses } = require('../helpers/cleaners')

async function getIndex(request, response) {
    return response.render('index')
}

async function getDashboard(request, response) {
    if (request.session.id) {
        response.render('dashboard', { role: request.session.role, userId: request.session.userId, firstName: request.session.firstName, lastName: request.session.lastName })
    }
    else {
        response.send('Please enter a valid Email Address/Password!')
    }
}

async function getClasses(request, response) {

    request.session.userId = 1
    const usersClasses = await models.users.findOne({
        where: { id: request.session.userId },
        include: { model: models.classTables },
    })

    return usersClasses
        ? response.render('classes', { role: request.session.role, userId: request.session.userId, firstName: request.session.firstName, lastName: request.session.lastName, classes: usersClasses.classTables.map(cleanClasses) })
        : response.sendStatus(404)
}

async function getGrades(request, response) {
    request.session.userId = 4
    const usersGrades = await models.users.findAll({
        where: { id: request.session.userId },
        include: { model: models.assignments }
    })

    return usersGrades
        ? response.send(usersGrades)
        : response.sendStatus(404)
}
// below we try to get grades by class so a teacher can see a list of students, assignments and grades for each.  
/*async function getGradesByClass(request, response) {
    request.session.userId = 1
    const classGrades = await models.classTables.findOne({
        where: { id: request.sessions.userId },
        include: { model: models.assignments }
    })

    return classGrades
        ? response.send(classGrades)
        : response.sendStatus(404)
}*/

async function getAssignments(request, response) {
    return response.render('assignments')
}



async function registerForClasses(request, response) {
    return response.render('registerForClasses')
}
async function getAttendance(request, response) {
    request.session.userId = 1
    const attendance = await models.users.findOne({
        where: { id: request.session.userId },
        include: { model: models.attendance }
    })
    response.send(attendance)
}

async function getAssignmentsByUser(request, response) {
    request.session.userId = 1
    const userAssignments = await models.users.findOne({
        where: { id: request.session.userId },
        include: { model: models.assignments }
    })
    return userAssignments
        ? response.send(userAssignments)
        : response.sendStatus(404)
}

async function getAssignmentsByClass(request, response) {
    request.session.classId = 1
    const userAssignment = await models.classTables.findOne({
        where: { id: request.session.classId },
        include: { model: models.assignments }
    })
    return userAssignment
        ? response.send(userAssignment)
        : response.sendStatus(404)
}

module.exports = {
    getIndex,
    getDashboard,
    getClasses,
    getGrades,
    getAssignments,
    registerForClasses,
    getAssignmentsByUser,
    getAssignmentsByClass,
    getAttendance
}
