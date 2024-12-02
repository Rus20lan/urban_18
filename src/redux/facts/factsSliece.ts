import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import JBService from '../../services/JBService';
import { IFetchData } from '../../interfaces/IFetchData';

const jBService = new JBService();

export const getFacts = createAsyncThunk('facts', jBService.getAllFacts);

interface FactsState {
  facts: [];
  isLoading: boolean;
  isError: boolean;
  totalPages: number;
  currentPage: number;
  errorMessage: string;
}

const initialState: FactsState = {
  isLoading: false,
  isError: false,
  facts: [],
  totalPages: 0,
  currentPage: 1,
  errorMessage: '',
};

const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFacts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      getFacts.fulfilled,
      (state, { payload }: PayloadAction<IFetchData>) => {
        state.isLoading = false;
        state.isError = false;
        state.facts = [...state.facts, ...payload.items];
        state.totalPages = payload.totalPages;
        state.currentPage = payload.currentPage;
      }
    );
    builder.addCase(getFacts.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export default factsSlice.reducer;
