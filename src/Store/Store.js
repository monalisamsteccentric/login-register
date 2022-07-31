import {configureStore} from '@reduxjs/toolkit'
import registerReducer from '../Features/registerSlice'

export const store = configureStore({
    reducer:{
        register: registerReducer,
    }
})