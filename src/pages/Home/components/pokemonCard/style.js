import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  height: 400px;
  width: 270px;
  margin: 30px;
  border-radius: 20px;

  background-color: #FFF;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`;

export const Title = styled.h1`
  font-size: 30px;
  color: #F2243A;
  font-weight: bold;
`;

export const Details = styled.span`
  color: #717171;
  font-weight: bold;

  cursor: pointer;
`;

export const Price = styled.p`
  font-size: 18px;
  color: #717171;
  font-weight: bold;

  margin-top: 10px;
`;

export const AddChartBtn = styled.button`
  background-color: #717171;
  color: #FFF;
  font-size: 16px;
  
  width: 190px;
  height: 50px;
  border-radius: 5px;
  
  cursor: pointer;
  border: none;
`;

export const Button = styled.button`
  background-color: #F2243A;
  color: #FFF;

  width: 200px;
  height: 50px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;

  border: none;
  border-radius: 20px;
`;
