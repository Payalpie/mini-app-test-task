import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const discountSlice = createSlice({
  name: 'discount',
  initialState: '',
  reducers: {
    setDiscount: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setDiscount } = discountSlice.actions;
export default discountSlice.reducer;
