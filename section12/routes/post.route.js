const router = require("express").Router()
const PostController = require("../controller/post.controller")
router.get("/", PostController.index)
router.get("/single/:id", PostController.single)
router.get("/delete/:id", PostController.delete)
router.post("/register", PostController.create)
router.put("/edit/:id", PostController.edit)



module.exports = router