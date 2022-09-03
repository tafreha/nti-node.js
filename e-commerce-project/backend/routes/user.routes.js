const User = require("../controller/user.controller")
const auth = require("../middleware/auth.middleware")

const router = require("express").Router()

router.post("/register", User.create)
router.post("/login", User.login)
router.get("/logout", User.logout)
router.get("/logoutAll", User.logoutAll)
router.get("/", auth, User.index)
router.get("/single/:id", auth, User.single)
router.delete("/delete/:id", auth, User.delete)
router.put("/edit/:id", auth, User.edit) //patch
router.get("/profile", auth, User.profile)
router.get("/activate", auth, User.activate)


module.exports = router