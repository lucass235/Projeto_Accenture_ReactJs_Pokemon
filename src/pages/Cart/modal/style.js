import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #000000;
    margin-bottom: 15px
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    padding-top: 100px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    border: 1px solid black;
    `;

    export const Borda = styled.div`
    padding: 30px 25px; 
    border-radius: 10px;
    background-color: white;
    text-align: center;
    height: 300px;
    `;

    export const Button = styled.button`
    background-color: #2E2E2E;
    border-radius: 5px;
    border: none;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    color: #f4f4f4;
    margin-top: 25px
    `;

    export const IconCloser = styled.div`
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    `;