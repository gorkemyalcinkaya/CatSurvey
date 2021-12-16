const res = require("express/lib/response");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/middleware");
const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, (req, res) => {
    const { title, questions } = req.body;

    const survey = new Survey({
      title: title,
      questions: questions.map((question) => {
        return {
          title: question.title,
          options: question.options.map((option) => {
            return {
              text: option.text,
            };
          }),
        };
      }),
      _user: req.user.id,
      dateCreated: Date.now(),
    });
    survey.save();
    res.status(201).end();
  });
};
