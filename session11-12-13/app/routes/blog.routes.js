const router = require("express").Router()
const Blog = require("../controllers/blog.controller")
router.get("/", Blog.index)
module.exports = router