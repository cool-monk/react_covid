import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";
import cx from "classnames";
import { connect } from "react-redux";

const Charts = ({
  data: { confirmed, recovered, deaths },
  country,
  isDark,
}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    ></Bar>
  ) : null;

  return (
    <div
      className={
        !isDark ? cx(styles.container) : cx(styles.container, styles.canvasDark)
      }
    >
      {country ? barChart : lineChart}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDark: state.theme.isDark,
  };
};

export default connect(mapStateToProps)(Charts);
