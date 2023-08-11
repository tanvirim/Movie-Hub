const {addmovieController ,allMoviesController }= require("../controller/movie");


const router = require("express").Router();

router.post("/add-movie", addmovieController );
router.get("/all-movies", allMoviesController );



module.exports = router;