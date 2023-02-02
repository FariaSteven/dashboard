import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import formatDate from "../../utils/formatDate";
import Container from "../container/Container";

const Packackes = () => {
  const [packagesData, setPackagesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    axios.get(`http://181.215.134.147:8019/api/v1/packages/`).then((res) => {
      setPackagesData(res.data);
    });
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = packagesData?.slice(firstItemIndex, lastItemIndex);

  return (
    <Container title={"Packages"}>
      {currentItems?.map((item, i) => (
        <div key={i}>
          <div>ID: {item.id ? item.id : "-"}</div>
          <div>UUID: {item.uuid ? item.uuid : "-"}</div>
          <div>name: {item.name ? item.name : "-"}</div>
          <div>version: {item.version ? item.version : "-"}</div>
          <div>macAdress: {item.macaddress ? item.macaddress : "-"}</div>
          <div>
            created_at: {item.created_at ? formatDate(item.created_at) : "-"}
          </div>
          <div>
            updated_at: {item.updated_at ? formatDate(item.updated_at) : "-"}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Packackes;
