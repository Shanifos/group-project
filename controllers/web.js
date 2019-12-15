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
    console.log(models.classes.id)


    [getClasses] = await models.classes.findOrCreate({
        where: { id: request.session.userId },
        defaults: {
            schedule: models.classes.schedule,
            courseName: models.classes.courseName,
        }
    })

    let classesId = []
    [newClass] = await models.users.findOrCreate({
        where: { id: request.session.userId }
    })
    classesId.push(newClass.id)
    getClasses.setclasses(classesId)
    await newClass.save()


    console.log(getClasses)
    //request.session.courseName = class.courseName
    //request.session.schedule = class.schedule
    response.render('classes')
}

async function getGrades(request, response) {
    return response.render('grades')
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