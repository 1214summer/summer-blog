import {createSlice} from '@reduxjs/toolkit'

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        modeIndex: 0,
    },
    reducers: {
        changeModeAction(state, { payload }){
            state.modeIndex = payload
        }
    }
})

export const{ changeModeAction } = modeSlice.actions
export default modeSlice.reducer;