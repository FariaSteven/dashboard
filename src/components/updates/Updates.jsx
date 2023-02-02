import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../container/Container";

const Updates = () => {
  const [hostData, setHostData] = useState([]);
  const [updatesData, setUpdatesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    instance.get("updateshistory").then((res) => {
      setUpdatesData(res.data);
    });

    instance.get("hosts").then((res) => {
      setHostData(res.data);
    });
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = updatesData?.slice(firstItemIndex, lastItemIndex);

  return (
    <Container title={'Update History'}>
      {currentItems?.map((item, i) => (
        <div key={i}>
          <div>ID: {item.id ? item.id : "-"}</div>
          <div>UUID: {item.uuid ? item.uuid : "-"}</div>
          <div>status: {item.status ? item.status : "-"}</div>
          <div>result: {item.result ? item.result : "-"}</div>
          <div>progress: {item.progress ? item.progress : "-"}</div>
          <div>
            packages_before: {item.packages_before ? item.packages_before : "-"}
          </div>
          <div>
            packages_after: {item.packages_after ? item.packages_after : "-"}
          </div>
          <div>
            packages_diff: {item.packages_diff ? item.packages_diff : "-"}
          </div>
          <div>ansible_log: {item.ansible_log ? item.ansible_log : "-"}</div>
          <div>
            created_at: {item.created_at ? formatDate(item.created_at) : "-"}
          </div>
          <div>
            updated_at: {item.updated_at ? formatDate(item.updated_at) : "-"}
          </div>
          <div>
            host:{" "}
            {item.host ? findMatchingId(item.host, hostData, "hostname") : "-"}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Updates;
