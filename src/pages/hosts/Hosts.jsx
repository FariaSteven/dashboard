import React, { useCallback, useEffect, useState } from "react";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";
import Menu from "../../components/menu/Menu";
import * as S from "./Hosts.style";

const Hosts = () => {
  const [hostData, setHostData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

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
    <Container>
      <Menu />
      <S.CardsWrapper>
        {currentItems?.map((item, i) => (
          <S.Card key={i}>
            {/* <li>
              <p>
                <b>ID:</b> {item.id ? item.id : "-"}
              </p>
            </li> */}
            <S.CardItem>
              <S.CardItemLabel>UUID: </S.CardItemLabel>{" "}
              <S.CardText>{item.uuid ? item.uuid : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Hostname: </S.CardItemLabel>{" "}
              <S.CardText>{item.hostname ? item.hostname : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Description:</S.CardItemLabel>{" "}
              <S.CardText>
                {item.description ? item.description : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>MAC Adress: </S.CardItemLabel>{" "}
              <S.CardText>{item.macaddress ? item.macaddress : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>IPv4: </S.CardItemLabel>{" "}
              <S.CardText>{item.ipv4 ? item.ipv4 : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardText>
                <S.CardItemLabel>IPv6: </S.CardItemLabel>{" "}
                {item.ipv6 ? item.ipv6 : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardText>
                <S.CardItemLabel>Created: </S.CardItemLabel>{" "}
                {item.created_at ? formatDate(item.created_at) : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Updated: </S.CardItemLabel>{" "}
              <S.CardText>
                {item.updated_at ? formatDate(item.updated_at) : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Packages: </S.CardItemLabel>{" "}
              <S.CardText>
                {item.packages
                  ? item.packages.map((id) =>
                      <S.ItemTag>{findMatchingId(id, packagesData, "name")}</S.ItemTag>
                    )
                  : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Packages upgradable: </S.CardItemLabel>{" "}
              <S.CardText package={true}>
                {item.packages_upgradable
                  ? item.packages_upgradable.map((id) =>
                  <S.ItemTag>{findMatchingId(id, packagesData, "name")}</S.ItemTag>
                    )
                  : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Packages hold: </S.CardItemLabel>{" "}
              <S.CardText package={true}>
                {item.packages_hold.length > 0 ? item.packages_hold : "-"}
              </S.CardText>
            </S.CardItem>
          </S.Card>
        ))}
        <S.ButtonsWrapper>
          <S.PageButton disabled={currentPage === 1 ? true : false} firstPage={currentPage} onClick={() => setCurrentPage(currentPage - 1)}>Back</S.PageButton>
          <S.PageButton disabled={currentItems.length !== 6 ? true : false} lastPage={currentPage} onClick={() => setCurrentPage(currentPage + 1)}>Next</S.PageButton>
        </S.ButtonsWrapper>
      </S.CardsWrapper>
    </Container>
  );
};

export default Hosts;
