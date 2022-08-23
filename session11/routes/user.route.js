const router = require("express").Router()
const User = require("../controller/user.controller")
router.get("/", User.index)
router.get("/single/:id", User.single)
router.get("/delete/:id", User.delete)
router.post("/register", User.create)
router.put("/edit/:id", User.edit)



module.exports = router