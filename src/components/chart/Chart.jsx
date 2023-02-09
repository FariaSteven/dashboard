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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

  const hostsDates = hostData.map((item) => formatDate(item?.created_at));
  const packagesDates = packagesData.map((item) =>
    formatDate(item?.created_at)
  );
  const updatesDates = updatesData.map((item) => formatDate(item?.created_at));

  const formated = hostsDates.concat(packagesDates).concat(updatesDates);

  const labels = formated;
  const dataHosts = {
    labels,
    options: {
      maintainAspectRatio: false,
    },
    datasets: [
      {
        label: "Hosts",
        data: labels.map(() => Math.random() * hostData.length),
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
        data: labels.map(() => Math.random() * packagesData.length),
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
        data: labels.map(() => Math.random() * updatesData.length),
        borderColor: "rgb(250, 121, 0)",
        borderWidth: 2,
        borderRadius: 55,
        backgroundColor: "rgba(255, 123, 0, 0.500)",
      },
    ],
  };

  return (
    <S.ChartWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Bar options={options} data={dataHosts} />
        </SwiperSlide>
        <SwiperSlide>
          <Bar options={options} data={dataPackages} />
        </SwiperSlide>
        <SwiperSlide>
          <Bar options={options} data={dataUpdates} />
        </SwiperSlide>
        ...
      </Swiper>
    </S.ChartWrapper>
  );
};

export default Chart;
