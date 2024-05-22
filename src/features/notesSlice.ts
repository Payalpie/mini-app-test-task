import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: '',
  reducers: {
    setNotes: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const { setNotes } = notesSlice.actions;
export default notesSlice.reducer;
