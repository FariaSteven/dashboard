import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  /* @media (min-width: 1024px) {
  }
  @media (min-width: 768px) {
    flex-direction: column;
  } */
`;

export const ChartWrapper = styled.div`
  width: 70%;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 45px;
  font-weight: 300;
  transition: 0.4s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 16px 20px -5px,
    rgba(0, 0, 0, 0.1) 0px 15px 8px -8px;
  @media (max-width: 1024px) {
    width: 100%;
  };
  @media (max-width: 425px) {
    width: 100%;
  };
  @media (max-width: 320px) {
    width: 100%;
  };
  @media (max-width: 768px) {
    width: 77%;
  };
`;
