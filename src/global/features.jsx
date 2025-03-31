import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    userInfo: {}
}


const features = createSlice({
    name: "EflexPay",
    initialState,

    reducers: {
        isAuth: (state)=>{
            state.isAuthenticated = true
        },

        signOut: (state)=>{
            state.isAuthenticated = false
            state.userData = {}
        },


        UserData: (state, {payload}) => {
            state.userInfo = payload
            console.log(payload)
        }

    }
})




export const {isAuth, signOut, UserData} =
    features.actions;

export default features.reducer;
