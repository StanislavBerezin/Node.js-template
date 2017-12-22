const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
const GetController = require('./controllers/GetController')
const IsAuth = require('./policies/IsAuth')


module.exports = (app) => {
    app.post('/post',
        //imported from controllers
        AuthenticationPolicy.policyOne,
        AuthenticationController.firstController
    )

    //can do other methods in the same way
    app.get('/get',
        IsAuth.jwtAuthCheck,
        IsAuth.googleAuth,
        GetController.getController
    )
}