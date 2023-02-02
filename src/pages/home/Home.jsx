import React, { useCallback, useEffect, useState } from "react";
import Container from "../../components/container/Container";
import instance from "../../utils/instance";
import * as S from './Home.style'

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
      <S.Wrapper>
        <S.Card><S.CardTitle>Hosts</S.CardTitle><S.CardNumber>{hostData.length}</S.CardNumber></S.Card>
        <S.Card><S.CardTitle>Packages</S.CardTitle><S.CardNumber>{packagesData.length}</S.CardNumber></S.Card>
        <S.Card><S.CardTitle>Updates</S.CardTitle><S.CardNumber>{updatesData.length}</S.CardNumber></S.Card>
      </S.Wrapper>
    </Container>
  );
};

export default Home;
