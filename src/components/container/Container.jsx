import React, { useCallback, useEffect, useState } from "react";
import Chart from "../chart/Chart";
import Menu from "../menu/Menu";

import * as S from './Container.style'

const Container = ({children, title, hostData, packagesData, updatesData}) => {
  return (
    <S.Container>
      <Menu/>
      <Chart hostData={hostData} packagesData={packagesData} updatesData={updatesData}/>
      <div>
        {title && <S.Title>{title}</S.Title>}
        <S.Wrapper>
          {children}
        </S.Wrapper>
      </div>
    </S.Container>
  );
};

export default Container;
