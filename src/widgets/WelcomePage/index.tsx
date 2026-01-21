import { styled } from 'styled-components';

const WelcomeBlock = styled.main`
  color: green;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WelcomePage = () => {
  return <WelcomeBlock>WelcomePage</WelcomeBlock>;
};

export { WelcomePage };
