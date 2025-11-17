import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './modules/counter'
import modeReducer from './modules/mode'
import navShowReducer from './modules/navShow'
import { TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from "react-redux";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        mode: modeReducer,
        navShow: navShowReducer,
    }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type AppDispatch = typeof store.dispatch

//函数调用签名  自动根据上下文推导参数类型
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual


export default store;