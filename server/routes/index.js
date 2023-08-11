const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user")
const movieRoutes = require("./movie")
const varifytoken = require("../middleware/varifyToken")

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1", varifytoken, userRoutes);
router.use("/api/v1/movies", varifytoken, movieRoutes );
module.exports = router;
