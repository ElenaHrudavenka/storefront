'use client';

import { ProductCard } from '@/shared/ui/ProductCard';
import { styled } from 'styled-components';
import { mockDataForProduct } from './model/mocks';
import { Grid } from '@mui/material';

const CardBlock = styled(Grid)`
  display: flex;
  justify-content: center;
`
const Shop = () => {
  return (
      <Grid container spacing={2} justifyContent="center">
        {
          mockDataForProduct.map(card => (
            <CardBlock key={card.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard {...card} />
            </CardBlock>
          ))
        }
      </Grid>
  )
};

export { Shop };
