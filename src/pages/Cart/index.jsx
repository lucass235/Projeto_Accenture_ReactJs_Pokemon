import React from 'react';
import Header from '../../components/Header'
//import ImgPoke from '../../assets/pokemon.png';
import { Styled } from './styles'
import { useNavigate } from 'react-router-dom'
import { FiPlusCircle, FiMinusCircle, FiTrash } from "react-icons/fi";
//import { Style } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export default function Cart() {

  const { cart } = useSelector(state => state.pokemon)
  console.log(cart)

  const navigate = useNavigate();

  // function handleIncrementPokemon(pokemon) {
  //   updatePokemonAmount({
  //     pokemonId: pokemon.id,
  //     amount: pokemon.amount + 1,
  //   });
  // }

  // function handleDecrementPokemon(pokemon) {
  //   updatePokemonAmount({
  //     pokemonId: pokemon.id,
  //     amount: pokemon.amount - 1,
  //   });
  // }

  const total = cart.reduce((sumTotal, pokemon) => {
    return sumTotal + pokemon.pokemon.price * pokemon.pokemon.amount;
  }, 0);

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
                    <Styled.Lucas key={index}>
                      <td className="avatar-container">
                        <img style={{ height: 128, width: 128 }} src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.pokemonId}.png`} alt='Imagem do Pokémon' />
                      </td>
                      <td className="product-price-container">
                        <span>{pokemon.pokemon.name}</span>
                      </td>
                      <td className="product-amount-container">
                        <button type='button'>
                          <FiMinusCircle size="18px" color="black" />
                        </button>
                        <input type="text" id="amount" name="amount" readOnly value={pokemon.amount}  >
                        </input>
                        <button type='button'>
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
                        <button type='button'>
                          <FiTrash size="22px" color='black' />
                        </button>
                      </td>
                    </Styled.Lucas>
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
};
