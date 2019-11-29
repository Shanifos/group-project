const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const models = require('./models')
console.log(models)

const app = express()

const Op = Sequelize.Op;

const origin = process.env.NODE_ENV === 'production'
    ? ['https://backpack.com', 'https://www.backpack.com']
    : '*'

const corsOptions = {
    origin,
    allowedHeaders: ['Content-Type'],
    methods: 'GET,POST',
    optionSuccessStatus: 200, //some legacy browsers die at 204

}

app.use(cors(corsOptions))

app.get('/backpack', async (request, response) => {
    const user = await models.Users.findAll()
    response.send(user)
})


app.get('/backpack/:id', async (request, response) => {
    const matchingRequest = await models.Users.findAll({
        where: { [Op.or]: [{ id: request.params.id }, { firstName: request.params.id }, { lastName: request.params.id }, { role: request.params.id }, { emailAddress: request.params.id }, { password: request.params.id }] }
    })

    if (matchingRequest.length) {
        response.send(matchingRequest)
    } else {
        response.status(404).send('Something went wrong!')
    }
})



app.post('/backpack', bodyParser.json(), async (request, response) => {
    const { firstName, lastName, role, emailAddress, password } = request.body

    if (!firstName || !lastName || !role || !emailAddress || !password) {
        response.status(400).send('The following attributes are required: First Name, Last Name, Role, Email Address, Password')
    }

    const newUser = await models.Users.create({ firstName, lastName, role, emailAddress, password })

    response.status(201).send(newUser)
})

const server = app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = server