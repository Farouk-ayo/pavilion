import React from "react";
import Chart from "react-apexcharts";
import classes from "./ColumnChart.module.scss";

const ColumnChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "#F6F8F9",
      strokeDashArray: 1,
    },
    plotOptions: {
      bar: {
        weight: 0.2,
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded",
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 10,
      offsetY: 15,
      show: true,
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      markers: {
        width: 14,
        height: 14,
        fillColors: ["#3DD154", "#E34A4A"],
        radius: 12,
      },
    },
    series: [
      {
        name: "Approved",
        data: [
          2000, 2750, 1400, 0, 3400, 2400, 1650, 2250, 2500, 0, 1200, 3000,
          3200, 2100, 3350, 1500, 750, 300, 0, 0, 0, 0, 0, 0,
        ],
      },
      {
        name: "Failed",
        data: [
          500, 400, 100, 0, 1450, 800, 400, 1100, 600, 0, 750, 1475, 550, 950,
          1400, 350, 200, 150, 0, 0, 0, 0, 0, 0,
        ],
      },
    ],
    fill: {
      colors: ["#3DD154", "#E34A4A"],
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      labels: {
        style: {
          colors: ["#333"],
          fontSize: "12px",
          fontWeight: 400,
        },
        offsetX: 0,
        offsetY: 0,
      },
      categories: [
        "12am",
        "1am",
        "2am",
        "3am",
        "4am",
        "5am",
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",
        "9pm",
        "10pm",
        "11pm",
      ],
    },
    yaxis: {
      tickAmount: 7,
      min: 0,
      max: 3500,
    },
  };

  return (
    <div className={classes.Chart}>
      <div className={classes.label}>
        <h3>Overall Approval Rate: 45.0%</h3>
        <p>Transactions per time</p>
      </div>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={450}
      />
      <button className={classes.btn} size="md">
        View Table
      </button>
    </div>
  );
};

export default ColumnChart;
