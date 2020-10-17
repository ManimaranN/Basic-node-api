const Post = require("../models/post");

exports.fetchPosts = (req, res) => {
  const posts = Post.find()
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  //   post.save((err, result) => {
  //     if (err) {
  //       return res.status(400).json({
  //         error: err,
  //       });
  //     }
  //     res.status(200).json({
  //       post: result,
  //     });
  //   });
  post.save().then((result) => {
    res.status(200).json({
      post: result,
    });
  });
};