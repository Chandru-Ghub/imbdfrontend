import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    movies:[],
    user:[]
}

const movieSlice = createSlice({
    name :'movies',
    initialState,
    reducers:{

        movieDetails:(state,{payload}) =>{
            state.movies = payload;
        },
        userDetails:(state,{payload})=>{
            state.user = payload
        }
    }
})


export const {movieDetails,userDetails} = movieSlice.actions;
export default movieSlice.reducer;