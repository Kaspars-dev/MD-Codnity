import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
interface DataState {
     data: {
     publishedAt: string;
     title: string;
     description: string;
     url: string;
     }[];
     status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: DataState = {
     data: [],
     status: 'idle',
};

// Thunk to fetch volleyball-related news and select 3 specific articles by index
export const fetchVolleyballNews = createAsyncThunk('data/fetchVolleyballNews', async () => {
     const apiKey = 'bcbfe1d39eb347dea28195e5075d4de1';
     const response = await axios.get(`https://newsapi.org/v2/everything?q=volleyball&apiKey=${apiKey}`);

     const targetPublishedDates = [
     '2024-09-26T11:47:31Z', 
     '2024-09-30T10:00:00Z', 
     '2024-10-09T19:22:36Z', 
     ];

  // Filter the articles by their publishedAt timestamps
     const selectedArticles = response.data.articles
     .filter((article: any) => targetPublishedDates.includes(article.publishedAt))
     .map((article: any) => ({
          publishedAt: article.publishedAt,
          title: article.title,
          description: article.description,
          url: article.url,
     }));

     return selectedArticles;
});

// Create a slice
const dataSlice = createSlice({
     name: 'data',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
     builder
          .addCase(fetchVolleyballNews.pending, (state) => {
          state.status = 'loading';
          })
          .addCase(fetchVolleyballNews.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.data = action.payload;
          })
          .addCase(fetchVolleyballNews.rejected, (state) => {
          state.status = 'failed';
          });
     },
});

export default dataSlice.reducer;
