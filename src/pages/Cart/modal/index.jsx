import React, { useEffect } from "react";
import * as S from "./style";
import { BsCartCheck } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export default function ModalCarrinho({ close }) {
    const navigate = useNavigate();

    return (

        <S.Modal>
            <S.Borda>
                <S.IconCloser onClick={close}> <BsXLg /> </S.IconCloser>
                <h1> <BsCartCheck /></h1>
                <S.Title>Compra realizada com sucesso!</S.Title>
                <p>
                    Em breve voce receber um <br />e-mail com todos os detalhes.
                </p>
                <S.Button onClick={() => navigate("../home")}>Voltar para home</S.Button>
            </S.Borda>
        </S.Modal>
    );
};

