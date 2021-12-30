function validate(values) {
  console.log(values);
  const errors = {};
  const answersArrayErrors = [];
  if (values.answer) {
    values.answers.forEach((answer, answerIndex) => {
      const answerErrors = {};
      if (!answer.answer || !answer) {
        answerErrors.answer = "*";
        answersArrayErrors[answerIndex] = answerErrors;
      }
    });
  }

  if (answersArrayErrors.length) {
    errors.answers = answersArrayErrors;
  }
  console.log(errors);
  return errors;
}

export default validate;
