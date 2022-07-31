import {createSlice} from '@reduxjs/toolkit'


const registerSlice = createSlice({
    name: 'register',
    initialState:{
        username: localStorage.getItem('username') ? JSON.parse(localStorage.getItem('username')): [],
    },
    reducers:{
        addToStorage:(state,action)=>{
            const crypt = {user: action.payload.username, pas: action.payload.password}
            state.username.push(crypt)
            
            localStorage.setItem('username', JSON.stringify(state.username))
            
        }  
    }
})

export default registerSlice.reducer

export const {addToStorage} = registerSlice.actions