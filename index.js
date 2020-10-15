require('dotenv').config()
const express = require('express')
const app = express()
const Contact = require('./models/contact')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { response } = require('express')

app.use(bodyParser.json())
    .use(cors())

app.use(express.static('build'))

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get("/api/persons", (req, res) => {
    Contact.find({}).then(persons => {
        res.json(persons)
    })
})

app.get("/api/persons/:id", (req, res, next) => {
    Contact.findById(req.params.id)
        .then(contact => {
            if(contact) {
                res.json(contact) 
            } else {
                res.status(404).end()
            }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    if(!body.name || !body.number) {
        return res.status(400).json({
            error: 'missing contact details'
        })
    }

    const person = new Contact({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedContact => {
        res.json(savedContact)
    }).catch(error => next(error))
})

app.get("/info", (req, res) => {
    Contact.find({}).then(persons => {
        res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `)
    })
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
  
    const contact = {
      name: body.name,
      number: body.number,
    }
  
    Contact.findByIdAndUpdate(request.params.id, contact, { new: true })
      .then(updatedContact => {
        response.json(updatedContact)
      })
      .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}
  
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})