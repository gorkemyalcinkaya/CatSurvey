/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Field } from "redux-form";
import SurveyField from "./SurveyField";

const renderOptions = ({ fields, meta: { error, touched } }) => (
  <ul>
    {console.log(error)}
    {fields.map((option, index) => (
      <li key={index}>
        <div className="col s12">
          <div className="row">
            <div className="input-field col s1">
              <i className="material-icons prefix">panorama_fish_eye</i>
            </div>
            <div className="input-field col s10">
              <Field
                name={`${option}.text`}
                type="text"
                component={SurveyField}
                label={`Option #${index + 1}`}
              />
            </div>
            <div className="input-field col s1">
              <button
                className="right btn-small waves-effect waves-light red lighten-1"
                type="button"
                onClick={() => fields.remove(index)}
              >
                <i className="material-icons ">clear</i>
              </button>
            </div>
          </div>
        </div>
      </li>
    ))}
    <div className=" red-text lighten-1">{touched && error}</div>
    <li>
      <button
        className="btn-floating btn-small waves-effect waves-light green lighten-1"
        type="button"
        onClick={() => fields.push()}
      >
        <i className="material-icons">add</i>
      </button>
      <span className="grey-text space-left2"> Add an option</span>
    </li>
  </ul>
);

export default renderOptions;
