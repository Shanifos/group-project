const models = require('../models')

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
    }),


        [getClasses] = await models.classTable.findOrCreate({
            where: { id: request.session.userId },
            defaults: {
                schedule: models.classTable.schedule,
                courseName: models.classTable.courseName,
            }
        })

    let classesId = []
    [newClass] = await models.users.findOrCreate({
        where: { id: request.session.userId }

    })
    return usersClasses

        ? response.render('classes', { role: request.session.role, userId: request.session.userId, firstName: request.session.firstName, lastName: request.session.lastName }) //courseName: usersClasses.classTables.map(toJSON) })
        : response.sendStatus(404)
}

async function getGrades(request, response) {
    request.session.userId = 1
    const usersGrades = await models.users.findOne({
        where: { id: request.session.userId },
        include: { model: models.gradebook }
    })

    return usersGrades
        ? response.send(usersGrades)
        //? response.render('gradebook')
        : response.sendStatus(404)
}

async function getAssignments(request, response) {
    return response.render('assignments')
}

async function registerForClasses(request, response) {
    return response.render('registerForClasses')
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
    getAssignmentsByClass
}
