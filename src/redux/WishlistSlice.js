import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    wishList:[],
    count:0
}

const wishSlice = createSlice({
    name :'movies',
    initialState,
    reducers:{

        addmovie:(state,{payload})=>{
            state.wishList.push(payload)
            state.count++
        },
        removeMovie:(state,{payload})=>{
            const data = state.wishList.filter(a => a._id != payload)
            state.wishList = data
            state.count--
        }
    }
})


export const {addmovie,removeMovie} = wishSlice.actions;
export default wishSlice.reducer;