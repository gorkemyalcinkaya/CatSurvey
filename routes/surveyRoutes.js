const mongoose = require("mongoose");
const requireLogin = require("../middlewares/middleware");
const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id });
    res.send(surveys);
  });
  app.delete("/api/surveys", requireLogin, async (req, res) => {
    console.log(req.body);
    const survey = await Survey.findById(req.body.id);
    survey.delete();
    res.send(201).end();
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
  app.post("/api/current_survey", async (req, res) => {
    const survey = await Survey.findById(req.body.params.id);
    res.send(survey);
  });
  app.post("/api/submit", async (req, res) => {
    const { surveyId, answers } = req.body;

    answers.map(async (answer) => {
      console.log(answer);
      const answerT = await Survey.updateMany(
        {
          _id: surveyId,
        },
        {
          $inc: { "questions.$[i].options.$[j].vote": 1 },
        },
        {
          arrayFilters: [
            { "i._id": answer.question },
            { "j._id": answer.answer },
          ],
        }
      );
      console.log(answerT);
    });
    res.send(201).end();
  });
};
