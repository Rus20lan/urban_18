import { configureStore } from '@reduxjs/toolkit';
import beansSlice from '../bean/beansSlice';
import beanSlice from '../bean/beanSlice';
import factsSlice from '../facts/factsSliece';
import recipesSlice from '../recipes/recipesSlice';
import combinationsSlice from '../../redux/combinations/combinationsSlice';
import historySlice from '../history/historySlice';

export const store = configureStore({
  reducer: {
    beans: beansSlice,
    bean: beanSlice,
    facts: factsSlice,
    recipes: recipesSlice,
    combinations: combinationsSlice,
    history: historySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
