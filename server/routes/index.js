const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user")

const varifytoken = require("../middleware/varifyToken")

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1", varifytoken, userRoutes);
module.exports = router;
