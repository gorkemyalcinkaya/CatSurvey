const mongoose = require("mongoose");
const { Schema } = mongoose;

const optionSchema = new Schema({
  text: String,
  vote: { type: Number, default: 0 },
});

module.exports = optionSchema;
