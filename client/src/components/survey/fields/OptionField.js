/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Field } from "redux-form";
import SurveyField from "./SurveyField";
import M from "materialize-css";

const renderOptions = ({ fields, meta: { error, touched, submitFailed } }) => (
  <ul>
    {M.AutoInit()}
    {fields.map((option, index) => (
      <li key={index}>
        <div className="col s12">
          <div className="row">
            <div className="input-field col s2 m1 offset-m1">
              <i className="material-icons prefix">panorama_fish_eye</i>
            </div>
            <div className="input-field col s8 m9 ">
              <Field
                name={`${option}.text`}
                type="text"
                component={SurveyField}
                label={`Option #${index + 1}`}
              />
            </div>
            <div className="input-field col s2 m1">
              <button
                className="right btn-small btn-floating waves-effect waves-light red lighten-1"
                type="button"
                onClick={() => fields.remove(index)}
              >
                <i className="material-icons ">remove</i>
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
    <div className=" red-text lighten-1">{touched && error}</div>
    <li key="buttons2">
      <button
        className="btn-floating btn-small waves-effect waves-light orange darken-1"
        type="button"
        onClick={() => fields.push()}
      >
        <i className="material-icons">add</i>
      </button>
      {error && (
        <div className=" red-text lighten-1">{submitFailed && error}</div>
      )}
      <span className="grey-text space-left2"> Add an option</span>
    </li>
  </ul>
);

export default renderOptions;
