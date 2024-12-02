import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import JBService from '../../services/JBService';
import { IFetchData } from '../../interfaces/IFetchData';

const jBService = new JBService();

export const getCombinations = createAsyncThunk(
  'combinations',
  jBService.getAllCombinations
);

interface CombinationsState {
  combinations: [];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  errorMessage: string;
}

const initialState: CombinationsState = {
  combinations: [],
  isLoading: false,
  isError: false,
  errorMessage: '',
  currentPage: 1,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

const combinationsSlice = createSlice({
  name: 'combinations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCombinations.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      getCombinations.fulfilled,
      (state, action: PayloadAction<IFetchData>) => {
        const { currentPage, items, pageSize, totalCount, totalPages } =
          action.payload;
        state.isLoading = false;
        state.isError = false;
        state.combinations = [...state.combinations, ...items];
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalCount = totalCount;
        state.totalPages = totalPages;
      }
    );
    builder.addCase(getCombinations.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export default combinationsSlice.reducer;
