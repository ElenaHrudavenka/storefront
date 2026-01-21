import { ReactNode } from 'react';

import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { GlobalStyles } from '@/shared/styles/GlobalStyles';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  );
};

export { PageWrapper };
