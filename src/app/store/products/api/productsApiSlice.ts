import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProductProps } from '@/entities/products/types';
import { baseUrl } from '@/shared/constants/requestUrls';

const productsApiSlice = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getProducts: build.query<ProductProps[], number>({
      query: (limit = 8) => `products?limit=${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;

export default productsApiSlice;
