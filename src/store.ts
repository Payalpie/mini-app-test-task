import { configureStore } from '@reduxjs/toolkit';
import optionsReducer from './features/optionsSlice';
import discountReducer from './features/discountSlice';
import notesReducer from './features/notesSlice';

const store = configureStore({
  reducer: {
    options: optionsReducer,
    discount: discountReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
