import { configureStore } from '@reduxjs/toolkit'
import NavBarReducer from '../NavBarReducer'
import MoneyManagerReducer from '../reducer/moneyMongerReducer';
export const store = configureStore({
  reducer: {
    navItems: NavBarReducer,
    money: MoneyManagerReducer
  },
});