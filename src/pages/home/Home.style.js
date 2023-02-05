import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 20px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  background-color: #f1f1fc;
  height: 100%;
  padding: 30px;
  border-radius: 45px;
`;

export const Card = styled.div`
  /* padding: 20px 50px 50px 50px; */
  padding: 40px;
  background-color: #fff;
  border-radius: 35px;
  font-weight: 300;
  transition: 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 10px -5px, rgba(0, 0, 0, 0.3) 0px 8px 8px -8px;
`
export const CardTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
  color: #676767;
`
export const CardNumber = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;
  text-align: center;
  color: #7b7bff;
`