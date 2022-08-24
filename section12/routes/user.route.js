const router = require("express").Router()
const auth = require("../middelware/auth.middleware")
const User = require("../controller/user.controller")
router.get("/", auth, User.index)
router.get("/single/:id", User.single)
router.get("/delete/:id", User.delete)
router.post("/register", User.create)
router.post("/login", User.login)
    // router.post("/test", auth, (req, res) => {
    //     res.send({ data: "api run" })
    // })
router.get("/profile", auth, User.profile)
router.get("/activate", auth, User.activate)


router.put("/edit/:id", User.edit)



module.exports = router