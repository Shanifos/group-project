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

module.exports = {
    getIndex,
    getDashboard,
    getClasses,
    getGrades,
    getAssignments,
    registerForClasses,
}