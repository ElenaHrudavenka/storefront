'use client';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from '@mui/material/Divider';
import { style } from '@mui/system';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1;
  background-color: #f7f9f7;
`;

const Navigation = styled.nav`
  padding-block: 15px;
  padding-inline: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationBlock = styled.div`
  display: flex;
  gap: 15px;
`;

const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
`;

const Header: FC = (): ReactElement => {
  return (
    <HeaderStyled>
      <Navigation>
        <LinkStyled href="/">
          <MonetizationOnIcon fontSize="large" /> The name of Store
        </LinkStyled>
        <NavigationBlock>
          <LinkStyled href="/shop">Go to shopping</LinkStyled>
          <LinkStyled href="/account">
            <AccountCircleIcon fontSize="large" />
          </LinkStyled>
          <LinkStyled href="/cart">
            <ShoppingCartIcon fontSize="large" />
          </LinkStyled>
        </NavigationBlock>
      </Navigation>
      <Divider />
    </HeaderStyled>
  );
};

export { Header };
