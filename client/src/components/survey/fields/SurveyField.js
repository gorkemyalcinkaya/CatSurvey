/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  console.log(error);
  return (
    <div>
      <input
        id="icon_prefix"
        className="validate"
        placeholder={label}
        {...input}
      />
      <div className=" red-text lighten-1">{touched && error}</div>
    </div>
  );
};
