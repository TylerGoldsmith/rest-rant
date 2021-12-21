// Dependencies
const express = require('express')
const app = express()

// Configuration
require('dotenv').config()
const PORT = process.env.PORT

// Middleware
app.set('views', _dirname + "views")
app.set('view engine', 'jsx')

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)