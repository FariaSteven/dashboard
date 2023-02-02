import React, { useCallback, useEffect, useState } from "react";
import Menu from "../menu/Menu";

import * as S from './Container.style'

const Container = ({children, title}) => {
  return (
    <S.Container>
      <Menu/>
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
