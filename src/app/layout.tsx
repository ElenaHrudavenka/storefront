import { ReactNode } from 'react';

import { ClientProvider } from '@/app/providers/ClientProvider';
import { PageWrapper } from '@/widgets/PageWrapper';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <PageWrapper>
          <ClientProvider>{children}</ClientProvider>
        </PageWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
