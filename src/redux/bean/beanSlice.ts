import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import JBService from '../../services/JBService';
import { IBean } from '../../interfaces/IBean';

const jBService = new JBService();
export const getBeanById = createAsyncThunk('bean', jBService.getBean);

interface BeanState {
  bean: IBean | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: BeanState = {
  bean: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const beanSlice = createSlice({
  name: 'bean',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBeanById.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }),
      builder.addCase(getBeanById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.bean = action.payload;
      });
    builder.addCase(getBeanById.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage =
        'Alas and ah, there is an error on the server side. try again later';
    });
  },
});

export default beanSlice.reducer;
