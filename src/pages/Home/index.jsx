import React from 'react';

import * as S from './styles.js';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <S.Container>
        <h1>Home</h1>
      </S.Container>
    </>
  );
};
