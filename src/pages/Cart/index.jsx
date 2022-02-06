import React from 'react';
import Header from '../../components/Header'
//import ImgPoke from '../../assets/pokemon.png';
import { Styled } from './styles'
import { useNavigate } from 'react-router-dom'
import { FiPlusCircle, FiMinusCircle, FiTrash } from "react-icons/fi";
//import { Style } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_POKEMON_CART } from '../../constants';

export default function Cart() {

  const dispatch = useDispatch();

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
                      {/*Nome do pokemon*/}
                      <td className="product-price-container">
                        <span>{pokemon.pokemon.name}</span>
                      </td>
                      {/*Botao menos*/}
                      <td className="product-amount-container">
                        <button type='button' onClick={() => handleDecreasePokemon(pokemon)}>
                          <FiMinusCircle size="18px" color="black" />
                        </button>
                        <input type="text" id="amount" name="amount" readOnly value={pokemon.quantity}  >
                        </input>
                        <button type='button' onClick={() => handleAddPokemon(pokemon)}>
                          <FiPlusCircle size="18px" color="black" />
                        </button>
                      </td>
                      <td className='price-container'>
                        <span>{pokemon.price}</span>
                      </td>
                      <td className="subtotal-container">
                        <span></span>
                      </td>
                      <td className="delete-button-container">
                        <button type='button' onClick={() => handleDeletePokemon(pokemon)}>
                          <FiTrash size="22px" color='black' />
                        </button>
                      </td>
                    </Styled.Tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <div>
                        <button >
                          Finalizar Pedido
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

    </>
  );

}

