const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/", (req, res) => {
    res.send(`
        <p>Hello world</p>
    `)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})