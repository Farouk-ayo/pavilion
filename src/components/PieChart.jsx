import React from "react";
import Chart from "react-apexcharts";
import classes from "./PieChart.module.scss";

const PieChart = () => {
  const options = {
    stroke: {
      width: 20,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "55%",
        },
        weight: 0.2,
      },
    },
    series: [189, 192, 95, 76, 192],
    chart: {
      width: 480,
      type: "donut",
    },
    dataLabels: {
      rotate: true,
      enabled: false,
    },
    labels: [
      "Acquirer Related",
      "Cardholder Related",
      "Issuer Related",
      "Switch Related",
      "Undefined",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      //   formatter: function (seriesName, opts) {
      //     let total = 0;
      //     let percentage;
      //     chartData.series.forEach(function (series) {
      //       total += series;
      //     });
      //     percentage = ((seriesName / total) * 100).toFixed(2);
      //     return seriesName + ": " + percentage + "%";
      //   },
      position: "top",
      horizontalAlign: "left",
      fontSize: "12px",
      fontFamily: " Open Sans",
      fontWeight: 400,

      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
      offsetY: 0,
      offsetX: -40,
      markers: {
        offsetY: 5,
        strokeWidth: 3,
        offsetX: -4,
        width: 18,
        height: 18,
        fillColors: ["#DC1D1D", "#4C6FFF", "#B81FDE", "#FF6934", "#3DD154"],
      },
    },
    fill: {
      colors: ["#DC1D1D", "#4C6FFF", "#B81FDE", "#FF6934", "#3DD154"],
    },
    colors: ["#DC1D1D", "#4C6FFF", "#B81FDE", "#FF6934", "#3DD154"],
  };

  return (
    <div className={classes.PieChart}>
      <h2>Failures by Class</h2>
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height={500}
      />
    </div>
  );
};

export default PieChart;
