function validate(values) {
  const errors = {};

  if (!values.surveyTitle) {
    errors.surveyTitle = "You must provide a survey title!";
  }
  if (!values.questions || !values.questions.length) {
    errors.questions = { _error: "At least one question must be provided!" };
  } else {
    const questionsArrayErrors = [];
    values.questions.forEach((question, questionIndex) => {
      const questionErrors = {};
      if (!question || !question.title) {
        questionErrors.title = "You must provide a question text!";
        questionsArrayErrors[questionIndex] = questionErrors;
      }
      if (!question.options || !question.options.length) {
        questionErrors.options = {
          _error: "At least two option must be provided!",
        };
        questionsArrayErrors[questionIndex] = questionErrors;
      } else {
        const optionsArrayErrors = [];
        question.options.forEach((option, optionIndex) => {
          const optionErrors = {};
          if (!option || !option.text) {
            optionErrors.text = "You must provide a option text!";
            optionsArrayErrors[optionIndex] = optionErrors;
          }
          if (question.options.length < 2) {
            if (!questionErrors.options) {
              questionErrors.options = [];
            }
            questionErrors.options._error =
              "At least two options must be provided!";
            questionsArrayErrors[questionIndex] = questionErrors;
          }
          if (optionsArrayErrors.length) {
            questionErrors.options = optionsArrayErrors;
            questionsArrayErrors[questionIndex] = questionErrors;
          }
        });
      }
    });
    if (questionsArrayErrors.length) {
      errors.questions = questionsArrayErrors;
    }
  }

  return errors;
}
export default validate;
