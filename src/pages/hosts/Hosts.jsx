import React, { useCallback, useEffect, useState } from "react";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";

const Hosts = () => {
  const [hostData, setHostData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    instance.get("hosts").then((res) => {
      setHostData(res.data);
    });

    instance.get("packages").then((res) => {
      setPackagesData(res.data);
    });
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = hostData?.slice(firstItemIndex, lastItemIndex);
  
  return (
    <Container title={'Hosts'}>
        {currentItems?.map((item, i) => (
          <div key={i}>
            <div>ID: {item.id ? item.id : "-"}</div>
            <div>UUID: {item.uuid ? item.uuid : "-"}</div>
            <div>HOSTNAME: {item.hostname ? item.hostname : "-"}</div>
            <div>Description: {item.description ? item.description : "-"}</div>
            <div>macAdress: {item.macaddress ? item.macaddress : "-"}</div>
            <div>ipv4: {item.ipv4 ? item.ipv4 : "-"}</div>
            <div>ipv6: {item.ipv6 ? item.ipv6 : "-"}</div>
            <div>created_at: {item.created_at ? formatDate(item.created_at) : "-"}</div>
            <div>updated_at: {item.updated_at ? formatDate(item.updated_at) : "-"}</div>
            <div>packages: {item.packages ? item.packages.map((id) => findMatchingId(id, packagesData, 'name')) : "-"}</div>
            <div>
              packages_upgradable:{" "}
              {item.packages_upgradable ? item.packages_upgradable.map((id) => findMatchingId(id, packagesData, 'name')) : "-"}
            </div>
            <div>
              packages_hold: {item.packages_hold.length > 0 ? item.packages_hold : "-"}
            </div>
          </div>
        ))}
    </Container>
  );
};

export default Hosts;
