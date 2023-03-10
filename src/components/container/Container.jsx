import React, { useCallback, useEffect, useState } from "react";

import * as S from './Container.style'

const Container = ({children}) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default Container;
