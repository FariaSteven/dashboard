import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
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

export const ItemTag = styled.p`
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
