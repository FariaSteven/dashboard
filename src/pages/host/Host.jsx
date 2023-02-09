import React, { useCallback, useEffect, useState } from "react";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";
import Menu from "../../components/menu/Menu";
import * as S from "./Host.style";
import { Link, useLocation, useParams } from "react-router-dom";
import backIcon from "../../assets/back.svg";

const Host = () => {
  const [hostData, setHostData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);

  const location = useLocation()

  let { id } = useParams();

  useEffect(() => {
    instance.get(`host/${id}`).then((res) => {
      setHostData(res.data);
    });

    instance.get("packages").then((res) => {
      setPackagesData(res.data);
    });
  }, []);
  
  return (
    <Container>
      <Menu />
      <S.BackIcon to={'/hosts'}>
                <img src={backIcon} />
              </S.BackIcon>
      <S.CardsWrapper>
          <S.Card>
            <S.CardItem>
              <S.CardItemLabel>UUID: </S.CardItemLabel>{" "}
              <S.CardText>{hostData.uuid ? hostData.uuid : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Hostname: </S.CardItemLabel>{" "}
              <S.CardText>{hostData.hostname ? hostData.hostname : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Description:</S.CardItemLabel>{" "}
              <S.CardText>
                {hostData.description ? hostData.description : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>MAC Adress: </S.CardItemLabel>{" "}
              <S.CardText>{hostData.macaddress ? hostData.macaddress : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>IPv4: </S.CardItemLabel>{" "}
              <S.CardText>{hostData.ipv4 ? hostData.ipv4 : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardText>
                <S.CardItemLabel>IPv6: </S.CardItemLabel>{" "}
                {hostData.ipv6 ? hostData.ipv6 : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardText>
                <S.CardItemLabel>Created: </S.CardItemLabel>{" "}
                {hostData.created_at ? formatDate(hostData.created_at) : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Updated: </S.CardItemLabel>{" "}
              <S.CardText>
                {hostData.updated_at ? formatDate(hostData.updated_at) : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Packages: </S.CardItemLabel>{" "}
              <S.CardText>
                {hostData?.packages
                  ? hostData?.packages.map((id) =>
                      <S.ItemTag>{findMatchingId(id, packagesData, "name")}</S.ItemTag>
                    )
                  : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Packages upgradable: </S.CardItemLabel>{" "}
              <S.CardText package={true}>
                {hostData?.packages_upgradable
                  ? hostData?.packages_upgradable?.map((id) =>
                  <S.ItemTag>{findMatchingId(id, packagesData, "name")}</S.ItemTag>
                    )
                  : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Packages hold: </S.CardItemLabel>{" "}
              <S.CardText package={true}>
                {hostData?.packages_hold?.length > 0 ? hostData?.packages_hold : "-"}
              </S.CardText>
            </S.CardItem>
          </S.Card>
      </S.CardsWrapper>
    </Container>
  );
};

export default Host;
