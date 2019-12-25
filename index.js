const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// const mongoose = require('mongoose')

let persons = [
    {
        name: "bibhor",
        number: 123456789,
        id: 1
    },
    {
        name: "abina",
        number: 987654321,
        id: 2
    },
    {
        name: "joe",
        number: 11223344,
        id: 3
    }
]

// const url =
//   `mongodb+srv://bibhor:bibhor34@moverz-s7atf.mongodb.net/phonebook-app?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true })

// const contactSchema = new mongoose.Schema({
//   name: String,
//   number: String
// })

// const Contact = mongoose.model('Contact', contactSchema)

app.use(bodyParser.json())
    .use(cors())

app.use(express.static('build'))

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

app.get("/api/persons", (req, res) => {
    // Contact.find({}).then(persons => {
    //     res.json(persons)
    // })
    res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    if(!body.name || !body.number) {
        res.status(400).json({
            error: 'missing contact details'
        })
    } else if(persons.some(person => person.name === body.name)) {
        res.status(400).json({
            error: 'name must be unique'
        })
    }
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random()*1000000000)
    }
    persons = persons.concat(person)

    res.json(person)
})

app.get("/info", (req, res) => {
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})