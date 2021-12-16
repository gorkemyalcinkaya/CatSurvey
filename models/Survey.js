const mongoose = require("mongoose");
const { Schema } = mongoose;
const questionSchema = require("./Question");

const surveySchema = new Schema({
  surveyTitle: String,
  questions: [questionSchema],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateCreated: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
