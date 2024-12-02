import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import JBService from '../../services/JBService';
import { IFetchData } from '../../interfaces/IFetchData';

const jBService = new JBService();

export const getRecipes = createAsyncThunk('recipes', jBService.getAllRecipes);

interface RecipesState {
  recipes: [];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  errorMessage: string;
}

const initialState: RecipesState = {
  recipes: [],
  isError: false,
  isLoading: false,
  currentPage: 1,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
  errorMessage: '',
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRecipes.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      getRecipes.fulfilled,
      (state, action: PayloadAction<IFetchData>) => {
        const { currentPage, items, pageSize, totalCount, totalPages } =
          action.payload;
        state.isLoading = false;
        state.isError = false;
        state.recipes = [...state.recipes, ...items];
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalCount = totalCount;
        state.totalPages = totalPages;
      }
    );
    builder.addCase(getRecipes.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export default recipesSlice.reducer;
