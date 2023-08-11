const movieController = require("../controller/movie");


const router = require("express").Router();

router.post("/add-movie", movieController );



module.exports = router;