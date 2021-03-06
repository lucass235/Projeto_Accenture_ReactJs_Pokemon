import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 100px;
  max-width: 100%;
  max-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

export const Window = styled.div`
  border-radius: 15px;
  background-color: white;
  text-align: center;
  height: 415px;
  width: 686px;
  display: flex;
  flex-direction: row;
`;
export const BoxRight = styled.div`
  background-color: #DDDDDD;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  height: 415px;
  width: 350px;
`;

export const BoxLeft = styled.div`
  background-color: #FFFFFF;
  height: 415px;
  width: 340px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Pokemon = styled.img`
  border-radius: 15px;
  width: 209px;
  height: 209px;
  left: 400px;
  top: 279px;
`;

export const NamePokemon = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #717171;
  margin-bottom: 10px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const IconCloser = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const Type = styled.span`
  color: #FFF;
  font-weight: bold;
  background-color:  #292929;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;
`;

export const DetailsDescription = styled.div`
  margin: 35px 0px;
  font-size: 16px;
  line-height: 2;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Price = styled.div`
  font-size: 18px;
  text-align: center;
  color: #717171;
`;

export const Button = styled.button`
  background-color: #292929;
  border-radius: 5px;
  padding: 15px 20px;
  text-align: center;
  font-size: 16px;
  color: #FFFFFF;
  margin-left: 5px;
  cursor: pointer;
  border: none;
`;
