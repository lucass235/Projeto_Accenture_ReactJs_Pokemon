import styled from 'styled-components';


export const Styled = {

Container: styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:20px;
    margin: 10px;
    gap: 2rem;
    `,

ContentForm: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin-left: 1rem;
`,

Avatar_Container: styled.div `
    display: flex;
    width: 80%;
    height: 9rem;
    justify-self: center;
    @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    }
    img {
        border: 1px solid black;
        border-radius: 50%;
        width: 9rem;
        height: 9rem;
}
`,

 Buttom: styled.div `
     display: flex;
     place-content: center;
`,

 Close: styled.a`
    display: flex;
    justify-content: end;
    margin: 1rem;
    margin-top: 0;
    cursor: pointer;
 `,

 Title: styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    text-align: center;
 `,
}

export default Styled