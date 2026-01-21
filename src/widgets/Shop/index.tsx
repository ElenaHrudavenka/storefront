'use client';

import { Grid, Typography } from '@mui/material';
import { styled } from 'styled-components';

import { useGetProductsQuery } from '@/app/store/products/api/productsApiSlice';
import { ProductCard } from '@/shared/ui/ProductCard';

const CardsBlock = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const CardBlock = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery(18);

  if (isLoading) {
    return (
      <Grid container justifyContent="center">
        <Typography>Loading...</Typography>
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid container justifyContent="center">
        <Typography color="red">Error...</Typography>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      {
        data.map((product) => (
          <CardBlock key={product.id} size={{ xs: 12, sm: 4, md: 2 }}>
            <ProductCard {...product} />
          </CardBlock>
        ))
      }
    </Grid>
  );
};

export { Shop };
