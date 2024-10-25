
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../slices/dataSlice'; // Adjust path based on your project

// Create the Redux store
export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// Export types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
