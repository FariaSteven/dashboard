import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 40px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 7px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Organizer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BackIcon = styled(Link)`
  display: flex;
  padding: 0px 10px 0px 0px;
  border-radius: 40px;
  padding: 5px;
  background-color: white;
  height: 100%;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 16px 20px -5px,
      rgba(0, 0, 0, 0.1) 0px 15px 8px -8px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  /* font-size: 29px; */
  background-color: white;
  padding: 10px;
  border-radius: 40px 0px 0px 40px;
  background-color: white;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 7px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
`;

export const SearchIcon = styled.div`
  display: flex;
  padding: 0px 10px 0px 0px;
  border-radius: 1px 40px 40px 1px;
  background-color: white;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 7px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  };
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  };
`;

export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 1rem;
  padding: 25px;
  background-color: #fff;
  border-radius: 15px;
  font-weight: 300;
  transition: 0.4s ease-in-out;
  text-align: left;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 7px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  line-height: 1.4rem;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 16px 20px -5px,
      rgba(0, 0, 0, 0.1) 0px 15px 8px -8px;
    cursor: pointer;
  }
`;

export const CardItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;
export const CardText = styled.p`
  display: ${(props) => (props.packages === true ? "" : "flex")};
  flex-wrap: wrap;
  gap: 5px;
`;

export const ItemTag = styled.a`
  border-radius: 10px;
  padding: 2px 5px;
  background-color: #a1a1a1;
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
`;

export const CardItemLabel = styled.b`
  font-size: 1.1rem;
  font-weight: black;
  color: #1a164c;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const PageButton = styled.button`
  font-size: 1.1rem;
  padding: 10px 20px;
  background-color: #fff;

  border-radius: 15px;
  font-weight: 300;
  transition: 0.4s ease-in-out;
  text-align: left;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 7px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 16px 20px -5px,
      rgba(0, 0, 0, 0.1) 0px 15px 8px -8px;
    cursor: ${(props) => (props.firstPage === 1 ? "not-allowed" : "pointer")};
  }
`;
