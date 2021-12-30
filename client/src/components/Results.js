import React from "react";
import { useLocation } from "react-router-dom";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import M from "materialize-css";

const Results = () => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  const location = useLocation();
  let LabelArray = [];
  let seriesArray = [];

  useEffect(() => {
    M.AutoInit();
    if (!data) {
      setData(location.state);
      console.log(data);
    }
  });

  const handleSelect = (event) => {
    data.questions[event.target.value].options.forEach((option) => {
      LabelArray.push(option.text);
      seriesArray.push(option.vote);
    });
    setOptions({ labels: LabelArray });
    setSeries(seriesArray);
  };

  return (
    data && (
      <div className="container center-align section">
        <div className="input-field container">
          <select onChange={handleSelect}>
            <option value="" disabled selected>
              Choose an question
            </option>
            {data.questions.map((question, questionIndex) => {
              return (
                <option onCl value={questionIndex}>
                  Question {questionIndex + 1} - {question.title}
                </option>
              );
            })}
          </select>
          <label>Results</label>
        </div>
        <div className="container center-align">
          <Chart options={options} series={series} type="pie" width="680" />
        </div>
      </div>
    )
  );
};
export default Results;
