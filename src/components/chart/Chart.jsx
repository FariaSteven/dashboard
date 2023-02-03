import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import * as S from "./Chart.style";
import formatDate from "../../utils/formatDate";

const Chart = ({ hostData, packagesData, updatesData }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Host Packages Updates per month",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    options: {
      maintainAspectRatio: false,
    },
    datasets: [
      {
        label: "Hosts",
        data: labels.map(() => Math.floor(Math.random() * 300)),
        borderColor: "rgb(4, 0, 255)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "#0400ff7f",
      },
      {
        label: "Packages",
        data: labels.map(() => Math.floor(Math.random() * 300)),
        borderColor: "rgb(13, 160, 0)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "rgba(13, 153, 0, 0.500)",
      },
      {
        label: "Updates",
        data: labels.map(() => Math.floor(Math.random() * 300)),
        borderColor: "rgb(250, 121, 0)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "rgba(255, 123, 0, 0.500)",
      },
    ],
  };

  console.log("hostData", hostData);
  console.log("packagesData", packagesData);
  console.log("updatesData", updatesData);

  const hostsDates = hostData.map((item) => formatDate(item?.created_at));
  const packagesDates = packagesData.map((item) => formatDate(item?.created_at));
  const updatesDates = updatesData.map((item) => formatDate(item?.created_at));

  console.log('hostsDates', hostsDates)
  console.log('packagesDates', packagesDates)
  console.log('updatesDates', updatesDates)
  
  // hostData?.find((item) => item?.id === id)?.name

  // return data?.find((item) => item?.id === id)?.name

  return (
    <S.ChartWrapper>
      <Bar options={options} data={data} />
    </S.ChartWrapper>
  );
};

export default Chart;
