import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './MoviesSlice'
import wishReducer from './WishlistSlice'

export const store = configureStore({
    reducer:{
        movies: movieReducer,
        wishList:wishReducer
    }
});