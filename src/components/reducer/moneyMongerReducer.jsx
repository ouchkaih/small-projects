import {createSlice} from "@reduxjs/toolkit"
const initialState = {
  AmountTotal: 4000,
  income: 0,
  expense: 0,
  history: [{ text: "book", amount: "" }],
};

export const MoneyManagerReducer = createSlice({
    name :"money",
    initialState,
    reducer:{
        ChangeIncom : (state, action)=>{
            state.income += action.payload
        },
        ChangeExpense : (state, action)=>{
            state.expense -= action.payload
        },
        AddHistoryItem : (state,action)=>{
            state.history.push(action.payload)
        }
    }
})


export const {ChangeExpense, ChangeIncom, AddHistoryItem} = MoneyManagerReducer.action
export default MoneyManagerReducer.reducer