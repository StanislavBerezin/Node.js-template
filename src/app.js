const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const config = require('./config/config')
const {mongoose} = require('./db_connect')




const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json)
app.use(helmet())
app.use(cors())


require('./routes')(app)
require('passport-jwt')






app.listen(config.port,()=>{
    console.log('we are now running')
})
