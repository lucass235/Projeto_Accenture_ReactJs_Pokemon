import styled from 'styled-components';

export const Styled = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: #bfbfbf;
    h1 {
      margin: 2rem 0;
      font-family: 'Montserrat-Bold';
      font-size: 18px;
      color: "#717171";
      padding: 0.5rem;
    }
    table{
      margin: 0;
      th {
        font-size: 18px;
      }
      th, td {
        padding: 1rem;
        vertical-align: middle;
        color: "#717171";
      }
      .foot-row{
        padding: 2rem 0 0;
        @media screen and (min-width: 320px) and (max-width: 768px) {
          padding: 1.5rem;
        }
      }
    }
  `,

  Content: styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  TableWrapper: styled.div`
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 53rem;
    padding: 2rem;
    box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffff;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      max-width: 35rem;
      padding: 0;
      margin-bottom: 2rem;
      .table-head {
        display: none;
      }
    }
    @media screen and (min-width: 769px) and (max-width:1024px) {
      width: 100%;
      max-width: 50rem;
    }
  `,

  Tr: styled.tr`
    height: 12rem;
    font-size: 16px;
    font-weight: 700;
    border-bottom: 1px solid #DDDDDD;

    
  `,

  Input: styled.input`
    text-align: center;
    height: 36px;
    width: 44px;
    padding:0 0.4rem;
    margin: 0 0.2rem;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    color: "#717171";
    outline: transparent;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    height: 2rem;
    width: 2.4rem;
  }
`,
  AmountButton: styled.button`
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s;
    &:hover:not([disabled]){
      background-color: #E8E8E8;
    }
    &:active{
      filter: brightness(0.7);
    }
    &:disabled{
      cursor: not-allowed;
    }
    @media screen and (min-width: 320px) and (max-width: 768px) {
      height: 1.5rem;
      width: 1.5rem;
      overflow: hidden;
    }
  `,

  DeleteButton: styled.button`
    width: 2rem;
    height: 2rem;
    background: none;
    border: none;
    border-radius: 5px;
    &:active{
      background-color: #E8E8E8;
    }
  `,

}