import { createSlice } from "@reduxjs/toolkit";
const initialState = {item1 :"Home", item2 :"Properties", item3:"testimonials", item4:"AboutUs"}
export const NavBarReducer = createSlice(
    {
        name : "navBar",
        initialState,
        reducers :{
            changeLanguage: (state,action)=>{
                state.item1 = action.payload[0];
                state.item2 = action.payload[1];
                state.item3 = action.payload[2];
                state.item4 = action.payload[3];
            }
        }
    }
   
);

export const {changeLanguage} = NavBarReducer.action
export default NavBarReducer.reducer
