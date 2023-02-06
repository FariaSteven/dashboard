import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 20px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  @media (max-width: 1024px) {
    /* max-width: 500px; */
   /* flex-direction: column; */
  };
  @media (max-width: 425px) {
    /* max-width: 500px; */
   flex-direction: column;
  };
  @media (max-width: 768px) {
    /* max-width: 500px; */
   flex-direction: column;
  };
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
  @media (max-width: 1024px) {
   /* flex-direction: row; */
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
  };
  @media (max-width: 425px) {
   flex-direction: row;
  };
  @media (max-width: 768px) {
   flex-direction: row;
  };
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
  @media (max-width: 1024px) {
    width: 300px;
    padding: 10px;
  };
  @media (max-width: 425px) {
    width: 300px;
    padding: 10px;
  };
  @media (max-width: 768px) {
    width: 200px;
    padding: 10px;
  };
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