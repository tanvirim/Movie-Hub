
const currentUserController = require("../controller/user")
const router = require("express").Router();

router.get("/current-user", currentUserController );



module.exports = router;