import styled from "styled-components";

export const NamePokemon = styled.h1`
  font-size:18px;
  text-align: center;
  color: #717171;
`;

export const DescriptionPokemon = styled.h3`
  font-size: 14px;
  text-align: center;
  color: #717171;;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

export const Window = styled.div`
  /* padding: 2px 2px; */
  border-radius: 15px;
  background-color: white;
  text-align: center;
  height: 415px;
  width: 686px;
  left: 340px;
  top: 176px;
  display: flex;
  flex-direction: row;
`;
export const BoxRight = styled.div`
  background-color: #DDDDDD;
  display: flex;
  /* flex-wrap: wrap; */
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

export const Button = styled.button`
  background-color: #292929;
  border-radius: 5px;
  border: none;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  color: #FFFFFF;
  margin-left: 5px;
  cursor: pointer;
  border: none;
`;

export const IconCloser = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin: 250px auto;
`;

export const Price = styled.div`
  font-size: 20px;
  text-align: center;
  color: #717171;
`;

export const Pokemon = styled.img`
border-radius: 15px;
width: 209px;
height: 209px;
left: 400px;
top: 279px;
`;
