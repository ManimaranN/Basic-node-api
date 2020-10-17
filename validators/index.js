const createPostValidator = (req, res, next) => {
  //validatr for title field
  req.check("title", "title is required").notEmpty();
  req.check("title", "title should consist of 4 to 150 charatcters").isLength({
    min: 4,
    max: 150,
  });

  //validator for body field
  req.check("body", "body is required").notEmpty();
  req.check("body", "body should consist of 4 to 2000 charatcters").isLength({
    min: 4,
    max: 2000,
  });

  //check for errors

  const errors = req.validationErrors();

  //if there is error return first error
  if (errors) {
    const errorResponse = errors.map((err) => err.msg)[0];
    return res.status(400).json({
      error: errorResponse,
    });
  }

  next();
};
