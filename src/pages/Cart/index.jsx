import React, { useState } from 'react';
import Header from '../../components/Header'
import { Styled } from './styles'
import { useNavigate } from 'react-router-dom'
import { FiPlusCircle, FiMinusCircle, FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import Modal from './modal'
import { INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_POKEMON_CART } from '../../constants';

export default function Cart() {

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const { cart } = useSelector(state => state.pokemon)
  console.log(cart)

  const navigate = useNavigate();

  function handleAddPokemon(pokemon) {
    dispatch({ type: INCREASE_QUANTITY, payload: pokemon })
  }

  function handleDecreasePokemon(pokemon) {
    dispatch({ type: DECREASE_QUANTITY, payload: pokemon })
  }

  function handleDeletePokemon(pokemon) {
    dispatch({ type: DELETE_POKEMON_CART, payload: pokemon })
  }

  // const teste = cart.map(pokemon => {
  //   return (pokemon.price * pokemon.quantity)
  // })

  const total = cart.reduce((sumTotal, pokemon) => {
    return sumTotal + pokemon.price * pokemon.quantity;
  }, 0);

  console.log(total)

  function priceFormat(value) {
    return Intl.NumberFormat(
      'pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }



  return (

    <>
      <Header />
      <Styled.Container>
        {cart.length === 0 ? (
          <Styled.Content>
            <h1>Seu carrinho está vazio =(</h1>
            <button onClick={() => navigate("../home")}>
              Voltar para Home
            </button>
          </Styled.Content>
        ) : (
          <Styled.Content>
            <h1>Meu Carrinho</h1>
            <div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((pokemon, index) => (
                    <Styled.Tr key={index}>
                      {/*Imagem*/}
                      <td className="avatar-container">
                        <img style={{ height: 128, width: 128 }} src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.pokemonId}.png`} alt='Imagem do Pokémon' />
                      </td>
                      {/*Nome do Pokemon*/}
                      <td className="product-price-container">
                        <span>{pokemon.pokemon.name}</span>
                      </td>
                      {/*Botao Menos*/}
                      <td className="product-amount-container">
                        <Styled.AmountButton type='button' onClick={() => handleDecreasePokemon(pokemon)}>
                          <FiMinusCircle size="18px" color="black" />
                        </Styled.AmountButton>
                        <Styled.Input type="text" id="amount" name="amount" readOnly value={pokemon.quantity}  >
                        </Styled.Input>
                        {/*Botao Mais*/}
                        <Styled.AmountButton type='button' onClick={() => handleAddPokemon(pokemon)}>
                          <FiPlusCircle size="18px" color="black" />
                        </Styled.AmountButton>
                      </td>
                      {/*Preço do Pokemon*/}
                      <td className='price-container'>
                        <span>{priceFormat(pokemon.price)}</span>
                      </td>
                      {/*Subtotal*/}
                      <td className="subtotal-container">
                        <span>{priceFormat(pokemon.price * pokemon.quantity)}</span>
                      </td>
                      {/*Botao Delete Pokemon*/}
                      <td className="delete-button-container">
                        <Styled.DeleteButton type='button' onClick={() => handleDeletePokemon(pokemon)}>
                          <FiTrash size="22px" color='black' />
                        </Styled.DeleteButton>
                      </td>
                    </Styled.Tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <div>
                        <button onClick={() => navigate("../home")}>
                          Continuar Comprando
                        </button>
                        <button onClick={() => setVisible(true)}>
                          Finalizar Compra
                        </button>
                        <div>
                          <p>Total:</p>
                          <strong>{priceFormat(total)}</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Styled.Content>
        )}
      </Styled.Container>
      {visible ? <Modal close={() => setVisible(false)} /> : null}

    </>
  );

}

