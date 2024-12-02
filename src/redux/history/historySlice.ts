import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import JBService from '../../services/JBService';
import { IFetchData } from '../../interfaces/IFetchData';

const jBService = new JBService();

export const getHistory = createAsyncThunk('history', jBService.getHistory);

interface HistoryState {
  history: [];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  errorMessage: string;
}

const initialState: HistoryState = {
  history: [],
  isLoading: false,
  isError: false,
  currentPage: 1,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
  errorMessage: '',
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHistory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(
      getHistory.fulfilled,
      (state, { payload }: PayloadAction<IFetchData>) => {
        const { currentPage, items, pageSize, totalCount, totalPages } =
          payload;
        state.isLoading = false;
        state.isError = false;
        state.history = [...state.history, ...items];
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalCount = totalCount;
        state.totalPages = totalPages;
      }
    );
    builder.addCase(getHistory.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export default historySlice.reducer;
