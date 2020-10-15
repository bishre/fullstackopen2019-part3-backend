const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })

const contactSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Contact = mongoose.model('Contact', contactSchema)

if ( process.argv.length === 3 ) {
  Contact.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(note => {
      console.log(note.name + ' ' + note.number)
    })
    mongoose.connection.close()
    process.exit(1)
  })
}

const contact = new Contact({
  name: name,
  number: number
})

contact.save().then(response => {
  console.log(`added ${response.name} number ${response.number} to phonebook`)
  mongoose.connection.close()
})