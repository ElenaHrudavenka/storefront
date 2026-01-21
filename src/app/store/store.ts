import { type EnhancedStore, type Tuple, combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import productsApiSlice from '@/app/store/products/api/productsApiSlice';

const makeStore = (): EnhancedStore => {
  const store = configureStore({
    reducer: combineReducers({
      [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    }),

    middleware: (getDefaultMiddleware): Tuple<any> =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: { warnAfter: 100 },
      }).concat([productsApiSlice.middleware]),
  });

  setupListeners(store.dispatch);

  return store;
};

const store = makeStore();

type RootState = ReturnType<typeof store.getState>;

export { store, type RootState };
