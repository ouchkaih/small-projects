import {createSlice} from "@reduxjs/toolkit"

const initialState = {balance : 4000 , income:0, expense:0 , history:[]} 

export const MoneyManagerReducer = createSlice({
    name:"money",
    initialState,
    reducers:{
        ChangeBalance:(state,action)=>{
            // if the amount greatess than 0 means its income transaction 
            if(action.payload.amount > 0){
                state.balance +=parseFloat(action.payload.amount)
                state.income += parseFloat(action.payload.amount);
                console.log("first")
            }else{
                state.balance += parseFloat(action.payload.amount);
                state.expense -= parseFloat(action.payload.amount);
            }
            state.history.push(action.payload);
        },
        

    }
})

export const {ChangeBalance} = MoneyManagerReducer.actions
export default MoneyManagerReducer.reducer 