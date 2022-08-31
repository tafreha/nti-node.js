const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "app/images")
    },
    filename: function(req, file, cb) {
        const myName = Date.now() + path.extname(file.originalname)
        cb(null, myName)
    }
})
const upload = multer({
    storage,
    limits: { fileSize: 2000000 }
})

module.exports = upload