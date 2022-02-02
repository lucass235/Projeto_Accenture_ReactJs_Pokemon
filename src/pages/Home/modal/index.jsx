import React from "react";
import * as S from "./style";
import { BsXLg} from 'react-icons/bs';

function ModalDetails ({close}) {
    function addCarrinho () {
        alert("Adicionado ao carrinho");
        close();
    }
    return (
        <S.Modal>
            <S.Window>
                <S.BoxLeft>
                    <S.Pokemon src="https://www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png" alt=""/> 
                </S.BoxLeft>
                <S.BoxRight>
            <S.IconCloser onClick={close}> <BsXLg/> </S.IconCloser>
            <S.NamePokemon>Pikachu</S.NamePokemon>
            <S.DescriptionPokemon>Detalhes pokemon</S.DescriptionPokemon>
            <S.Card> 
                <S.Price>
                    R$100,00
                </S.Price>
            <S.Button onClick={addCarrinho}>Adicionar ao carrinho</S.Button>
            </S.Card>
            </S.BoxRight>
            </S.Window>
        </S.Modal>
    );
}
export default ModalDetails;