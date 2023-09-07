const express = require("express");
const asyncHandler = require("express-async-handler");
const { uploadSingleFile } = require("../controllers/filesControllers");
const Upload = require("../models/filesModels");
const router = express.Router();

router.route("/").post(
  uploadSingleFile,

  asyncHandler(async (req, res) => {
    req.body.contentURL = req.file.filename;
    const upload = await Upload.create({ content: req.body.content });
    console.log(req.file);
    res.status(200).json({ data: upload });
  })
);

module.exports = router;
