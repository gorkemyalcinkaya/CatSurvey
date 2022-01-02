import React from "react";
import { useLocation } from "react-router-dom";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import M from "materialize-css";
import { seo } from "../helpers/seo";
import { Link } from "react-router-dom";

const Results = () => {
  const [data, setData] = useState(null);
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [type, setType] = useState("pie");
  const [seriesType, setSeriesType] = useState([]);

  const location = useLocation();
  let LabelArray = [];
  let seriesArray = [];

  seo({
    title: "Results",
    metaDescription: "Results dashboard to create charts",
  });

  useEffect(() => {
    M.AutoInit();
    if (!data) {
      setData(location.state);
      console.log(data);
    }
    console.log(type);
    console.log(seriesType);
  });

  const handleSelect = (event) => {
    data.questions[event.target.value].options.forEach((option) => {
      LabelArray.push(option.text);
      seriesArray.push(option.vote);
    });
    setOptions({ labels: LabelArray });
    setSeries(seriesArray);
    if (type == "pie") {
      setSeriesType(seriesArray);
    } else {
      setSeriesType([
        {
          name: "vote",
          data: seriesArray,
        },
      ]);
    }
  };
  const handleType = (event) => {
    setType(event.target.value);
    console.log(event.target.value);
    if (event.target.value === "pie") {
      setSeriesType(series);
    } else {
      setSeriesType([
        {
          name: "vote",
          data: series,
        },
      ]);
    }
  };

  return (
    data && (
      <div className="container center-align section">
        <div className="row">
          <div className="input-field container col s9">
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
          <div class="input-field col s3">
            <select onChange={handleType}>
              <option value="pie" selected>
                Pie
              </option>
              <option value="bar">Bar</option>
            </select>
          </div>
        </div>

        <div className="container center-align ">
          <Chart
            key={type}
            options={options}
            series={seriesType}
            type={type}
            width="105%"
          />
        </div>
        <div className="section">
          <Link
            to={"/surveys"}
            className="btn-small waves-effect waves-light grey left"
          >
            Back
          </Link>
        </div>
      </div>
    )
  );
};
export default Results;
