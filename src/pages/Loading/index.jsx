import React from 'react';
import BarLoader from "react-spinners/BarLoader";

import LoadingImg from '../../assets/loading-pokeballs.png';
import * as S from './styles';

const IMG_STYLES = {
  height: 'auto',
  width: '100%',
  marginTop: '50px',
  maxWidth: '400px',
  objectFit: 'cover',
  objectPosition: 'center',
};

export default function Loading() {
  return (
    <S.Container>
      <img style={ IMG_STYLES } src={LoadingImg} alt="Loading"/>
      <S.Heading>Carregando</S.Heading>
      <BarLoader style={{ height: '20px'}} color={'#F2243A'} size={150} />
    </S.Container>
  );
};
