import React from "react";
import { reduxForm, Field, change } from "redux-form";
import submit from "./Submit";
import { useEffect } from "react";

const required = (value) => (value ? undefined : "*");

const renderField = ({ input, type, option, meta: { error, touched } }) => {
  console.log(error);
  return (
    <div>
      <input className="with-gap " type={type} {...input} />
      <span style={{ fontSize: 20 }}>{option.text}</span>
      <div className=" red-text lighten-1">{touched && error}</div>
    </div>
  );
};

const Survey = (props) => {
  const { handleSubmit } = props;

  useEffect(() => {
    props.dispatch(change("surveySubmitForm", "surveyId", props.survey._id));
    props.survey.questions.forEach((question, questionIndex) => {
      props.dispatch(
        change(
          "surveySubmitForm",
          `answers.${questionIndex}.question`,
          question._id
        )
      );
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="section ">
          <div className="center-align">
            <label>Survey Title</label>
            <div style={{ fontSize: 35 }}>{props.survey.surveyTitle}</div>
          </div>
          <ul>
            {props.survey.questions.map((question, questionIndex) => {
              return (
                <ul>
                  <div
                    className="grey lighten-4"
                    style={{
                      borderRadius: 20,
                      paddingLeft: 20,
                      marginBottom: 20,
                    }}
                  >
                    <li className="section" key={`questions${questionIndex}`}>
                      <label>Question {questionIndex + 1}</label>
                      <div style={{ fontSize: 28 }}>
                        <span>{question.title}</span>
                      </div>
                    </li>
                    <li key={`options${questionIndex}`}>
                      {question.options.map((option) => {
                        return (
                          <div className="section">
                            <label className="black-text">
                              <Field
                                component={renderField}
                                name={`answers.${questionIndex}.answer`}
                                type="radio"
                                value={option._id}
                                validate={required}
                                option={option}
                              ></Field>
                            </label>
                          </div>
                        );
                      })}
                    </li>
                  </div>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "surveySubmitForm",
  onSubmit: submit,
})(Survey);
