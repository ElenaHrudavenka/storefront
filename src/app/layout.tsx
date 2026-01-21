import { ReactNode } from 'react';

import { PageWrapper } from '@/widgets/PageWrapper';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
};

export default layout;
