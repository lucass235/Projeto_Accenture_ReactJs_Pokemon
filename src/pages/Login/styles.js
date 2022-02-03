import styled from 'styled-components';


export const Styled = {

  Container: styled.div`
      margin: 0px;
      width: 100vw;
      height: 100vh;
      background-color:#D6E8F3; 
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
  `,
  Content: styled.div`
      width: 25rem;
      height: 25rem;
      margin-top: 5rem;
      box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      @media screen and (min-width: 320px) and (max-width: 768px) {
          width: 95%;
          max-width: 450px;
      }
  `,
    ButtonLoginContent: styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 10px;
        justify-content: center;
        margin-bottom: 5px;
    `,
};