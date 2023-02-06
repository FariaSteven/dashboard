import React, { useCallback, useEffect, useState } from "react";
import instance from "../../utils/instance";
import findMatchingId from "../../utils/findMatchingIndex";
import formatDate from "../../utils/formatDate";
import Container from "../../components/container/Container";
import Menu from "../../components/menu/Menu";
import * as S from './Updates.style';
import searchIcon from "../../assets/search.svg";
import backIcon from "../../assets/back.svg";
import { Link } from "react-router-dom";

const Updates = () => {
  const [hostData, setHostData] = useState([]);
  const [updatesData, setUpdatesData] = useState([]);
  const [packagesData, setPackagesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [search, setSearch] = useState('');

  useEffect(() => {
    instance.get("updateshistory").then((res) => {
      setUpdatesData(res.data);
      console.log('updatesData', updatesData)
    });

    instance.get("hosts").then((res) => {
      setHostData(res.data);
    });

    instance.get("packages").then((res) => {
      setPackagesData(res.data);
    });
  }, []);

  console.log('updatesData', updatesData)

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = search ? updatesData.filter((update) => update.uuid.includes(search)) : updatesData?.slice(firstItemIndex, lastItemIndex);

  console.log('packages id', currentItems[0]?.packages_before.split(","))

  return (
    <Container title={"Update History"}>
      <Menu />
        <S.Wrapper>
          <S.Heading>
            <S.Organizer>
              <S.BackIcon to={'/'}>
                <img src={backIcon} />
              </S.BackIcon>
              <S.Title>Updates</S.Title>
            </S.Organizer>
            <S.Search>
              <S.SearchInput onChange={(e) => setSearch(e.target.value)} />
              <S.SearchIcon>
                <img src={searchIcon} />
              </S.SearchIcon>
            </S.Search>
          </S.Heading>
          <S.CardsWrapper>
        {currentItems?.map((item, i) => (
          <S.Card key={i}>
            <Link to={`/updateHistory`}>
            {/* <li>
              <p><b>ID:</b> {item.id ? item.id : "-"}</p>
            </li> */}
            <S.CardItem>
              <S.CardItemLabel>UUID:</S.CardItemLabel>
              <S.CardText>{item.uuid ? item.uuid : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>status:</S.CardItemLabel>
              <S.CardText>{item.status ? item.status : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>result:</S.CardItemLabel>
              <S.CardText>{item.result ? item.result : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>progress:</S.CardItemLabel>
              <S.CardText>{item.progress ? item.progress : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>packages_before:</S.CardItemLabel>{" "}
              <S.CardText>{item.packages_before ? item.packages_before : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>packages_after:</S.CardItemLabel>{" "}
              <S.CardText>{item.packages_after ? item.packages_after : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>packages_diff:</S.CardItemLabel>{" "}
              <S.CardText>{item.packages_diff ? item.packages_diff : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>ansible_log:</S.CardItemLabel>
              <S.CardText>{item.ansible_log ? item.ansible_log : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>created_at:</S.CardItemLabel>{" "}
              <S.CardText>{item.created_at ? formatDate(item.created_at) : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>updated_at:</S.CardItemLabel>{" "}
              <S.CardText>{item.updated_at ? formatDate(item.updated_at) : "-"}</S.CardText>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemLabel>host:</S.CardItemLabel>{" "}
              <S.CardText>
                {item.host
                  ? findMatchingId(item.host, hostData, "hostname")
                  : "-"}
              </S.CardText>
            </S.CardItem>
          </Link>
          </S.Card>
        ))}
      </S.CardsWrapper>
          <S.ButtonsWrapper>
            <S.PageButton
              disabled={currentPage === 1 ? true : false}
              firstPage={currentPage}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Back
            </S.PageButton>
            <S.PageButton
              disabled={currentItems.length !== 16 ? true : false}
              lastPage={currentPage}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </S.PageButton>
          </S.ButtonsWrapper>
        </S.Wrapper>
    </Container>
  );
};

export default Updates;
