import './chart.css'
import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#33FF57",
            // backgroundColor: "#01b010",
            borderColor: "#ffff",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: true,
            barThickness: 20,
          },
          {
            label: new Date().getFullYear() - 2,
            fill: true,
            backgroundColor: "#FF5733",
            // backgroundColor: "#4aa3f5",
            borderColor: "#ffff",
            data: [37, 58, 83, 24, 50, 34, 57],
            barThickness: 20,
          },
          {
            label: "Revenue",
            fill: true,
            backgroundColor: "#5733FF",
            // backgroundColor: "#ed0202",
            borderColor: "#FFFF",
            data: [27, 68, 86, 74, 20, 4, 87],
            barThickness: 20,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: true,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "#FFFF",
          },
          align: "end",
          position: "top",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(132, 190, 248, 0.829)",
                zeroLineColor: "rgba(132, 190, 248, 0.829)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: true,
                borderDashOffset: [2],
                color: "rgba(132, 190, 248, 0.829)",
                zeroLineColor: "rgba(132, 190, 248, 0.829)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
          {/* Chart */}
          <div className="relative w-[90%]  sm:max-h-[266px]   mx-auto md:w-[95%] bg rounded mb-20 flex md:max-h-[400px] xl:max-h-full lg:max-h-[530px] text-white">
            <canvas id="bar-chart" className='p-4 align max-md:max-h-2 text-blue-200   '></canvas>
      </div>
    </>
  );
}