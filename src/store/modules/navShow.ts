import { createSlice } from '@reduxjs/toolkit';

const navShowSlice = createSlice({
  name: 'navShow',
  initialState: {
    navShow: true
  },
  reducers: {
    changeNavShowAction: (state, action) => {
      state.navShow = action.payload;
    }
  }
});

export const {changeNavShowAction } = navShowSlice.actions;
export default navShowSlice.reducer;