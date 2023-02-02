import React, { useCallback, useEffect, useState } from "react";

import * as S from "./Menu.style";

const Menu = () => {
  return (
    <S.ButtonsWrapper>
      <S.Button to={'/'}>Home</S.Button>
      <S.Button to={'/hosts'}>Hosts</S.Button>
      <S.Button to={'/packages'}>Packages</S.Button>
      <S.Button to={'/updateHistory'}>Updates</S.Button>
    </S.ButtonsWrapper>
  );
};

export default Menu;
