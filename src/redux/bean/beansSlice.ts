import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import JBService from '../../services/JBService';
import { IFetchData } from '../../interfaces/IFetchData';

const jBService = new JBService();

export const getBeans = createAsyncThunk('beans', jBService.getAllBeans);

interface BeansState {
  beans: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  errorMessage: string;
}

const initialState = {
  beans: [],
  loading: 'idle',
  currentPage: 1,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
  isError: false,
  isLoading: false,
  errorMessage: '',
} satisfies BeansState as BeansState;

const beansSlice = createSlice({
  name: 'beans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBeans.pending, (state) => {
      state.loading = 'pending';
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(
      getBeans.fulfilled,
      (state, { payload }: PayloadAction<IFetchData>) => {
        const { items, currentPage, pageSize, totalCount, totalPages } =
          payload;
        state.beans = [...state.beans, ...items];
        state.loading = 'succeeded';
        state.currentPage = currentPage;
        state.pageSize = pageSize;
        state.totalCount = totalCount;
        state.totalPages = totalPages;
        state.isLoading = false;
      }
    );
    builder.addCase(getBeans.rejected, (state) => {
      state.isError = true;
      state.loading = 'failed';
      state.isLoading = false;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export default beansSlice.reducer;
