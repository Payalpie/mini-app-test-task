import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const optionsSlice = createSlice({
  name: 'options',
  initialState: 'Option A',
  reducers: {
    setOption: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setOption } = optionsSlice.actions;
export default optionsSlice.reducer;
