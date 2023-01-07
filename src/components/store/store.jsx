import { configureStore } from '@reduxjs/toolkit'
import NavBarReducer from '../NavBarReducer'
export const store = configureStore({
    reducer:{
        navItems : NavBarReducer
    }
})