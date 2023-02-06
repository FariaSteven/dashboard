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

  console.log("hostData", hostData);
  console.log("packagesData", packagesData);
  console.log("updatesData", updatesData);

  const hostsDates = hostData.map((item) => formatDate(item?.created_at));
  const packagesDates = packagesData.map((item) =>
    formatDate(item?.created_at)
  );
  const updatesDates = updatesData.map((item) => formatDate(item?.created_at));

  const formated = hostsDates.concat(packagesDates).concat(updatesDates);

  console.log("hostsDates", hostsDates);
  console.log("packagesDates", packagesDates);
  console.log("updatesDates", updatesDates);

  // hostData?.find((item) => item?.id === id)?.name

  // return data?.find((item) => item?.id === id)?.name

  const dataHosts = {
    labels,
    options: {
      maintainAspectRatio: false,
    },
    datasets: [
      {
        label: "Hosts",
        data: labels.map(() => hostData.length),
        borderColor: "rgb(4, 0, 255)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "#0400ff7f",
      },
    ],
  };

  const dataPackages = {
    labels,
    options: {
      maintainAspectRatio: false,
    },
    datasets: [
      {
        label: "Packages",
        data: labels.map(() => packagesData.length),
        borderColor: "rgb(13, 160, 0)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "rgba(13, 153, 0, 0.500)",
      },
    ],
  };

  const dataUpdates = {
    labels,
    options: {
      maintainAspectRatio: false,
    },
    datasets: [
      {
        label: "Updates",
        data: labels.map(() => updatesData.length),
        borderColor: "rgb(250, 121, 0)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "rgba(255, 123, 0, 0.500)",
      },
    ],
  };

  return (
    <S.ChartContainer>
      <S.ChartWrapper>
        <Bar options={options} data={dataHosts} />
      </S.ChartWrapper>
      <S.ChartWrapper>
        <Bar options={options} data={dataPackages} />
      </S.ChartWrapper>
      <S.ChartWrapper>
        <Bar options={options} data={dataUpdates} />
      </S.ChartWrapper>
    </S.ChartContainer>
  );
};

export default Chart;
