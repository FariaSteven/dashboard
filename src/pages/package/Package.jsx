import React, { useCallback, useEffect, useState } from "react";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";
import Menu from "../../components/menu/Menu";
import * as S from "./Package.style";
import { Link, useLocation, useParams } from "react-router-dom";
import backIcon from "../../assets/back.svg";

const Package = () => {
  const [hostData, setHostData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);

  const location = useLocation();

  let { id } = useParams();

  useEffect(() => {
    instance.get(`package/${id}`).then((res) => {
      setPackagesData(res.data);
    });
  }, []);

  return (
    <Container>
      <Menu />
      <S.BackIcon to={'/packages'}>
                <img src={backIcon} />
              </S.BackIcon>
      <S.CardsWrapper>
        <S.Card>
          <S.CardItem>
            <S.CardItemLabel>Name:</S.CardItemLabel>
            <S.CardText>
              {packagesData.name ? packagesData.name : "-"}
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardItemLabel>UUID:</S.CardItemLabel>
            <S.CardText>
              {packagesData.uuid ? packagesData.uuid : "-"}
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardItemLabel>Version:</S.CardItemLabel>
            <S.CardText>
              {packagesData.version ? packagesData.version : "-"}
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardItemLabel>MAC Address:</S.CardItemLabel>
            <S.CardText>
              {packagesData.macaddress ? packagesData.macaddress : "-"}
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardItemLabel>Created At:</S.CardItemLabel>{" "}
            <S.CardText>
              {packagesData.created_at
                ? formatDate(packagesData.created_at)
                : "-"}
            </S.CardText>
          </S.CardItem>
          <S.CardItem>
            <S.CardItemLabel>Updated At:</S.CardItemLabel>{" "}
            <S.CardText>
              {packagesData.updated_at
                ? formatDate(packagesData.updated_at)
                : "-"}
            </S.CardText>
          </S.CardItem>
        </S.Card>
      </S.CardsWrapper>
    </Container>
  );
};

export default Package;
