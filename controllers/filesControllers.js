const { uploadSinglePdf } = require("../middlewares/uploadFilesMiddleware");

exports.uploadSingleFile = uploadSinglePdf("content", "pdfs");
