import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";
import Menu from "../../components/menu/Menu";
import * as S from "./Packages.style";

const Packages = () => {
  const [packagesData, setPackagesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    axios.get(`http://181.215.134.147:8019/api/v1/packages/`).then((res) => {
      setPackagesData(res.data);
    });
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = packagesData?.slice(firstItemIndex, lastItemIndex);

  return (
    <Container>
      <Menu />
      <S.CardsWrapper>
        {currentItems?.map((item, i) => (
          <S.Card key={i}>
            {/* <li>ID: {item.id ? item.id : "-"}</li> */}
            <S.CardItem>
              <S.CardItemLabel>Name:</S.CardItemLabel>
              <S.CardText>{item.name ? item.name : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>UUID:</S.CardItemLabel>
              <S.CardText>{item.uuid ? item.uuid : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Version:</S.CardItemLabel>
              <S.CardText>{item.version ? item.version : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>MAC Address:</S.CardItemLabel>
              <S.CardText>{item.macaddress ? item.macaddress : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Created At:</S.CardItemLabel>{" "}
              <S.CardText>
                {item.created_at ? formatDate(item.created_at) : "-"}
              </S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>Updated At:</S.CardItemLabel>{" "}
              <S.CardText>
                {item.updated_at ? formatDate(item.updated_at) : "-"}
              </S.CardText>
            </S.CardItem>
          </S.Card>
        ))}
        <S.ButtonsWrapper>
          <S.PageButton disabled={currentPage === 1 ? true : false} firstPage={currentPage} onClick={() => setCurrentPage(currentPage - 1)}>Back</S.PageButton>
          <S.PageButton disabled={currentItems.length !== 16 ? true : false} lastPage={currentPage} onClick={() => setCurrentPage(currentPage + 1)}>Next</S.PageButton>
        </S.ButtonsWrapper>
      </S.CardsWrapper>
    </Container>
  );
};

export default Packages;
