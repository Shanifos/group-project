const cleanClasses = (classTables) => {
    return {
        courseName: classTables.courseName,
        schedule: classTables.schedule,
    }
}


/*const cleanGrades = (assignments) => {
    return {
        assignmentName: assignments.assignmentName
    }
}*/
module.exports = {
    cleanClasses
}