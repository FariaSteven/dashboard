import React, { useCallback, useEffect, useState } from "react";

import * as S from './Container.style'

const Container = ({children, title}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </S.Container>
  );
};

export default Container;
