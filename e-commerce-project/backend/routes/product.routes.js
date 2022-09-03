const product = require("../controller/product.controller")
const auth = require("../middleware/auth.middleware")
const upload = require("../middleware/fileUpload.middleware")
const router = require("express").Router()

router.post("/add", auth, product.add)
router.get("/", product.index)
router.get("/single/:id", product.single)
router.delete("/delete/:id", auth, product.delete)
router.patch("/edit/:id", auth, product.edit) //put 
router.post("/uploadImage", auth, upload.single("myImg"), product.upImg)


module.exports = router