import React, { useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from '../../components/Header'
import ImgPoke from '../../assets/pokemon.png';
import { BsExclamationCircle } from "react-icons/bs";
import { useCart } from '../../hooks/Cart';
import { FiPlusCircle, FiMinusCircle, FiTrash } from "react-icons/fi";
import successCartImg from '../../assets/success-cart.svg';
import ModalComponent from './modal';

export default function Cart() {

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productDeletedId, setProductDeletedId] = useState(0);

  const {
    cart,
    updateProductAmount,
    removeProductFromCart,
    cartItemsNumber,
    setEmptyCart
  } = useCart();

  const history = useNavigate();
  const handleClickBackToHome = () => history('/home');

  function handleSubmit() {
    setShowSuccessModal(true);
    setEmptyCart();
  }

  function handleEmptyCart() {
    handleClickBackToHome();
    setEmptyCart();
  }

  function handleIncrementProduct(product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount + 1,
    });
  }

  function handleDecrementProduct(product) {
    updateProductAmount({
      productId: product.id,
      amount: product.amount - 1,
    });
  }

  function handleShowModalDelete(productId) {
    setShowDeleteModal(true)
    setProductDeletedId(productId);
  }

  function handleRemoveProduct() {
    removeProductFromCart(productDeletedId);
    setShowDeleteModal(false)
  }

  const totalMemo = useMemo(() => {
    console.log(cart)
    return 0
  
  }, [cart])

  // formatando os preços
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
      <div>
        {cartItemsNumber === 0 ?
          <div>
            <h1>Seu carrinho está vazio =(</h1>
            <button
              variant="primary"
              onClick={handleClickBackToHome}
            >
              Voltar para Home
            </button>
          </div>
          :
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
              {cart.map(product => (
                <div key={product.id}>
                  <td>
                    <img src={product.image ? product.image : ImgPoke} alt='Imagem do Pokémon' />
                  </td>
                  <td>
                    <div>
                      <span>{product.name}</span>
                      <span>{priceFormat(product.priceNumber)}</span>
                    </div>
                  </td>
                  <td>
                    <button disabled={product.amount <= 1} onClick={() => handleDecrementProduct(product)}>
                      <FiMinusCircle size="18px" color="black" />
                    </button>
                    <input type="text" id="amount" name="amount" readOnly value={product.amount} >
                    </input>
                    <button type='button' onClick={() => handleIncrementProduct(product)}>
                      <FiPlusCircle size="18px" color="black" />
                    </button>
                  </td>
                  <td>
                    <span>{priceFormat(product.priceNumber * product.amount)}</span>
                  </td>
                  <td>
                    <button type='button' onClick={() => handleShowModalDelete(product.id)}>
                      <FiTrash size="22px" color='black' />
                    </button>
                  </td>
                </div>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <div>
                    <button onClick={() => handleSubmit()}>
                      Finalizar Pedido
                    </button>
                    <div>
                      <p>Total:</p>
                      <strong>{priceFormat(totalMemo)}</strong>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        }
        <ModalComponent
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
        >
          <BsExclamationCircle size="30px" color="#EA4335"
          />
          <h4>Deseja excluir o item do carrinho?</h4>
          <button
            variant="secondary"
            onClick={() => handleRemoveProduct()}
          >
            Sim, desejo excluir
          </button>
        </ModalComponent>
        {/* Success modal */}
        <ModalComponent
          show={showSuccessModal}
          onHide={() => setShowSuccessModal(false)}
        >
          <img src={successCartImg} alt="Compra bem sucedida!" />
          <h4>Compra finalizada com sucesso!</h4>
          <p>Em breve você receberá um
            e-mail com todos os detalhes.</p>
          <button
            variant="primary"
            onClick={handleEmptyCart}
          >
            Voltar para Home
          </button>
        </ModalComponent>
      </div>

    </>
  );
};
