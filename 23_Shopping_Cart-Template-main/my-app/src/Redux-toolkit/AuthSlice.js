import {createSlice} from '@reduxjs/toolkit'

const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        logged:false
    },
    reducers:{
        logStatus:(state,action)=>{
            state.logged = action.payload
        }
    }

})

export default AuthSlice.reducer
export const {logStatus} = AuthSlice.actions