import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Button = styled(Link)`
  font-size: 2rem;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 15px;
  font-weight: 300;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 7px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 16px 20px -5px, rgba(0, 0, 0, 0.1) 0px 15px 8px -8px;
    transition: 0.4s ease-in-out;
  }

  &:focus-visible {
    background-color: #000;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
`;

