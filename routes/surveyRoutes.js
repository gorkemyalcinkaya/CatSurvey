const res = require("express/lib/response");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/middleware");
const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id });
    res.send(surveys);
  });

  app.post("/api/surveys", requireLogin, (req, res) => {
    const { surveyTitle, questions } = req.body;

    const survey = new Survey({
      surveyTitle: surveyTitle,
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
