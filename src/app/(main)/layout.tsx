'use client';

import { FC, ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { styled } from 'styled-components';

const MainContainer = styled.main`
  min-height: 80vh;
  padding-top: 80px;
`;

const MainLayout: FC = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <MainContainer>
        {children}
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
