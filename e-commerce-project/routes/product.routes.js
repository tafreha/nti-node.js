const product = require("../controller/product.controller")
const auth = require("../middleware/auth.middleware")
const upload = require("../middleware/fileUpload.middleware")
const router = require("express").Router()

router.post("/add", auth, product.add)
router.get("/", product.index)
router.get("/single/:id", product.single)
router.delete("/single/:id", auth, product.delete)
router.patch("/single/:id", auth, product.edit) //put
router.post("/imgUpload", auth, upload.single("myImg"), product.upImg)


module.exports = router