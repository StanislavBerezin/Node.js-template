const mongoose = require('mongoose')

const exampleSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,




    tokens:[{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
})

//getting the methods
require('./modelController/ModelController')(exampleSchema)


module.exports = mongoose.model('NameOfWhatExporting', exampleSchema)

//need bcrypt, mongoose,