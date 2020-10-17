const express = require("express");
const { fetchPosts, createPost } = require("../controllers/post");
const validator = require("../validators");
const router = express.Router();

router.get("/get-posts", fetchPosts);
router.post("/add-post", createPost);

module.exports = router;
