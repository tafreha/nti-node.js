const User= require("../controllers/user.controller")
const auth = require("../middleware/auth.middleware")
const router = require("express").Router()

router.post("/register", User.create)
router.post("/login", User.login)
router.get("/",auth, User.index)
router.get("/single/:id",auth, User.single)
router.delete("/single/:id",auth, User.delete)
router.patch("/single/:id",auth, User.edit) //put

router.get("/profile", auth, User.profile)
router.get("/activate", auth, User.activate)
module.exports = router
