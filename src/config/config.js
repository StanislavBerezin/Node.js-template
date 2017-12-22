module.exports = {
  port: process.env.PORT || 8080,



  auth: {

    jwtSecret: process.env.JWT_SECRET || "acerTulebaeva",
    google:{

      googleID: "id_goes_here",
      googleSecret: "id_goes_here",
      
    }

  }
}