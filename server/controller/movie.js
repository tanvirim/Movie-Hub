const Movie = require("../models/movieModel")

 const movieController = async (req ,res) => {
    try {
        const newMovie =  new Movie(req.body)
        await newMovie.save()
        res.send({
            success:true ,
            message: "movie added successfuly",
            movieDetails: req.body
        })
    } catch (error) {
        res.send({
            success: false ,
            message: error.message
        })
         
    }

}

module.exports = movieController