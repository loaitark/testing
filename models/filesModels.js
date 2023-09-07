const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
  {
    content: { type: String },
    contentURL: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Upload", uploadSchema);
