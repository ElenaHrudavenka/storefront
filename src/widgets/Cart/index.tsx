'use client';

import { styled } from 'styled-components';

const CartStyled = styled.main`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Cart = () => {
  return <CartStyled>Your cart is empty.</CartStyled>;
};

export { Cart };
