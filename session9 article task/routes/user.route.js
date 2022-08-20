const router = require("express").Router()
const userController = require("../controller/user.controller")
router.get("/addArticle", userController.addPost)
router.post("/addArticle", userController.addPostLogic)

router.get("/", userController.all)
router.get("/edit/:id", userController.edit)
router.post("/edit/:id", userController.editLogic)
router.get("/single/:id", userController.single)
router.get("/delete/:id", userController.delete)
module.exports = router