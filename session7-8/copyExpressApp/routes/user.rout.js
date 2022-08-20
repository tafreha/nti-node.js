const router = require("express").Router()
const userController = require("../controller/user.controller")

router.get("/add", userController.add)


module.exports = router