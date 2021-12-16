const mongoose = require("mongoose");
const { Schema } = mongoose;
const optionSchema = require("./Option");

const questionSchema = new Schema({
  title: String,
  options: [optionSchema],
});

module.exports = questionSchema;
