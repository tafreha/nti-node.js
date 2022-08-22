const router = require("express").Router()
const userController = require("../controller/user.controller")
router.get("/addPost", userController.addPost)
router.post("/addPost", userController.addPostLogic)
router.get("/", userController.all)
router.get("/edit/:id", userController.edit)
router.post("/edit/:id", userController.editLogic)
router.get("/single/:id", userController.single)
router.get("/del/:id", userController.del)
router.get("/addAddress/:id", userController.addAddress)
router.post("/addAddress/:id", userController.addAddressLogic)


module.exports = router