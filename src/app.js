const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const config = require('./config/config')



const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json)
app.use(helmet())
app.use(cors())


require('./routes')(app)
require('passport-jwt')



console.log('hello')




app.listen(config.port)
