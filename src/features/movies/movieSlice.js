import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIkey } from '../../common/apis/movieApiKey';


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=movie`)
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&s=${term}&type=series`)
    return response.data;
});

export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`)
    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    selected: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelected: (state) => {
            state.selected = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fulfilled')
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('fulfilled')
            return {...state, shows: payload}
        },
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            console.log('fulfilled')
            return {...state, selected: payload}
        },
    },
});


export const { removeSelected } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelected = (state) => state.movies.selected;
export default movieSlice.reducer;