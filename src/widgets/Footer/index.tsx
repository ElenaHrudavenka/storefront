'use client';

import { footerData } from './model/constants';
import { Box, Divider, Grid } from '@mui/material';
import { FC, ReactElement } from 'react';
import { styled } from 'styled-components';

import { FooterColumn } from '@/shared/ui/FooterColumn';

const FooterStyled = styled.footer`
  width: 100%;
  padding-block: 15px;
  display: flex;
  justify-content: center;
`;

const LinksBox = styled(Box)`
  width: 80vh;
`;

const Footer: FC = (): ReactElement => {
  return (
    <>
      <Divider />
      <FooterStyled>
        <LinksBox>
          <Grid container spacing={4}>
            {footerData.map(
              (column, index): React.ReactNode => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                  <FooterColumn title={column.title} links={column.links} />
                </Grid>
              ),
            )}
          </Grid>
        </LinksBox>
      </FooterStyled>
    </>
  );
};

export { Footer };
