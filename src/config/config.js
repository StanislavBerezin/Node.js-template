module.exports = {
  port: process.env.PORT || 8080,
  db:{
    port: 'mongodb://url_to_connect',
    password: '123'
  },


  auth: {

    jwtSecret: process.env.JWT_SECRET || "acerTulebaeva",
    jwtFindBy: "superSecretTulebaeva",
    google:{

      googleID: "id_goes_here",
      googleSecret: "id_goes_here",
      
    }


  }
}