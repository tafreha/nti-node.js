const router = require("express").Router()
const express = require("express")
const articleController = require("../controller/Article.controller")
router.get("/addArticle", articleController.addPost)
router.post("/addArticle", articleController.addPostLogic)

router.get("/", articleController.all)
router.get("/edit/:id", articleController.edit)
router.post("/edit/:id", articleController.editLogic)
router.get("/single/:id", articleController.single)
router.get("/addComment/:id", articleController.addComment)
router.post("/addComment/:id", articleController.addCommentLogic)
router.get("/delete/:id", articleController.delete)
module.exports = router