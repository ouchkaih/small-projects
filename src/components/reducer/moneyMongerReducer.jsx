import {createSlice} from "@reduxjs/toolkit"

const initialState = {balance : 4000 , income:0, expense:0 , history:[]} 

export const MoneyManagerReducer = createSlice({
    name:"money",
    initialState,
    reducers:{
        ChangeBalance:(state,action)=>{
            // if the amount greatess than 0 means its income transaction 
            if(action.payload >0){
                state.balance +=action.payload
            }else{
                state.balance -= action.payload;
            }
        },
        ChangeIncome :(state,action)=>{
            state.income += action.payload
        },
        ChangeExpense : (state,action)=>{
            state.expense -=action.payload
        }
        ,AddHistoryItem : (state, action)=>{
            state.history.push(action.payload)
        }

    }
})

export const {ChangeBalance, ChangeExpense, ChangeIncome, AddHistoryItem} = MoneyManagerReducer.actions
export default MoneyManagerReducer.reducer 