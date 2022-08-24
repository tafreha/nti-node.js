const router = require("express").Router()
const Blog = require("../controllers/blog.controller")
const auth = require("../middleware/auth.middleware")
router.get("/", auth, Blog.index)
router.post("/add", auth, Blog.create)
    // router.post("/edit", auth, Blog.edit)
router.get("/single/:id", auth, Blog.single)
router.get("/myArticle", auth, Blog.myArticles)

router.delete("/single/:id", auth, Blog.delete)
router.patch("/single/:id", auth, Blog.edit)
module.exports = router