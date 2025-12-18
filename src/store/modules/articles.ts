import { createSlice } from '@reduxjs/toolkit';
import { DB } from '@/utils/dbConfig';

const artSum = createSlice({
    name: "artSum",
    initialState:{
      count: 0
    },
    reducers:{
      changeArtSum(state, {payload: value}){
        state.count = value;
      },
      resetArtSum(state){
        state.count = 0;
      }
    }
})

export const { 
  changeArtSum, 
  resetArtSum,
} = artSum.actions;

export default artSum.reducer;