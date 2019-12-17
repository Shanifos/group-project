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
    request.session.userId = 1
    const usersGrades = await models.users.findOne({
        where: { id: request.session.userId },
        include: { model: models.gradebook }
    })

    return usersGrades
        ? response.render('grades')
        //? response.render('gradebook')
        : response.sendStatus(404)
}

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
    const userAssignments = await models.classTables.findOne({
        where: { id: request.session.classId },
        include: { model: models.assignments }
    })
    return userAssignments
        ? response.send(userAssignments)
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
