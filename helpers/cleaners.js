const cleanClasses = (classTables) => {
    return {
        courseName: classTables.courseName,
        schedule: classTables.schedule,
    }
}
module.exports = {
    cleanClasses
}