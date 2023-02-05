import React, { useCallback, useEffect, useState } from "react";
import Chart from "../../components/chart/Chart";
import Menu from "../../components/menu/Menu";
import instance from "../../utils/instance";
import * as S from "./Home.style";

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
  }, []);

  return (
    <S.Container>
      <div>
        <Menu />
      <Chart
        hostData={hostData}
        packagesData={packagesData}
        updatesData={updatesData}
      />
      </div>
      
      <S.CardsWrapper>
        <S.Card>
          <S.CardTitle>Hosts</S.CardTitle>
          <S.CardNumber>{hostData.length}</S.CardNumber>
        </S.Card>
        <S.Card>
          <S.CardTitle>Packages</S.CardTitle>
          <S.CardNumber>{packagesData.length}</S.CardNumber>
        </S.Card>
        <S.Card>
          <S.CardTitle>Updates</S.CardTitle>
          <S.CardNumber>{updatesData.length}</S.CardNumber>
        </S.Card>
      </S.CardsWrapper>
    </S.Container>
  );
};

export default Home;
