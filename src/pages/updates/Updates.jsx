import React, { useCallback, useEffect, useState } from "react";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";
import Menu from "../../components/menu/Menu";

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
    <Container title={"Update History"}>
      <Menu/>
      {currentItems?.map((item, i) => (
        <ul key={i}>
          {/* <li>
            <p><b>ID:</b> {item.id ? item.id : "-"}</p>
          </li> */}
          <li>
            <p><b>UUID:</b> {item.uuid ? item.uuid : "-"}</p>
          </li>
          <li>
            <p><b>status:</b> {item.status ? item.status : "-"}</p>
          </li>
          <li>
            <p><b>result:</b> {item.result ? item.result : "-"}</p>
          </li>
          <li>
            <p><b>progress:</b> {item.progress ? item.progress : "-"}</p>
          </li>
          <li>
            <p><b>
              packages_before:</b>{" "}
              {item.packages_before ? item.packages_before : "-"}
            </p>
          </li>
          <li>
            <p><b>
              packages_after:</b> {item.packages_after ? item.packages_after : "-"}
            </p>
          </li>
          <li>
            <p><b>
              packages_diff:</b> {item.packages_diff ? item.packages_diff : "-"}
            </p>
          </li>
          <li>
            <p><b>ansible_log:</b> {item.ansible_log ? item.ansible_log : "-"}</p>
          </li>
          <li>
            <p><b>
              created_at:</b> {item.created_at ? formatDate(item.created_at) : "-"}
            </p>
          </li>
          <li>
            <p><b>
              updated_at:</b> {item.updated_at ? formatDate(item.updated_at) : "-"}
            </p>
          </li>
          <li>
            <p><b>
              host:</b>{" "}
              {item.host
                ? findMatchingId(item.host, hostData, "hostname")
                : "-"}
            </p>
          </li>
        </ul>
      ))}
    </Container>
  );
};

export default Updates;
