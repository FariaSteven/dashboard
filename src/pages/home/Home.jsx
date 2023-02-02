import React, { useCallback, useEffect, useState } from "react";
import Container from "../../components/container/Container";
import instance from "../../utils/instance";

const Home = () => {
  const [hostData, setHostData] = useState([]);
  const [updatesData, setUpdatesData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    instance.get("hosts").then((res) => {
      setHostData(res.data);
    });

    instance.get("packages").then((res) => {
      setPackagesData(res.data);
    });

    instance.get("updateshistory").then((res) => {
      setUpdatesData(res.data);
    });
  }, [])
  return (
    <Container>
      <div>{hostData.length}</div>
      <div>{updatesData.length}</div>
      <div>{packagesData.length}</div>
    </Container>
  );
};

export default Home;
