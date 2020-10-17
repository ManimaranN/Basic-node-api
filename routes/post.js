const express = require("express");
const { fetchPosts, createPost } = require("../controllers/post");
const { createPostValidator } = require("../validators");
const router = express.Router();

router.get("/get-posts", fetchPosts);
router.post("/add-post", createPostValidator, createPost);

module.exports = router;
