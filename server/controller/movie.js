const Movie = require("../models/movieModel")

 const addmovieController = async (req ,res) => {
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



const allMoviesController = async(req,res)=> {
    try {
        const allMovies = await Movie.find()

        res.send({
            success: true,
            message: "successfully found all movies",
            data: allMovies ,
        })
    } catch (error) {
        
        res.send({
            success: false,
            message: "failed to get all movies",
            
        })
        
    }

}

module.exports = {addmovieController, allMoviesController}