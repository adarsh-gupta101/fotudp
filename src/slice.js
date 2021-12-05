import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    value: "",
    id:"",
    userid:"",username:"",name:""
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new 
      // immutable state based off those changes
      state.value += 1
    },
    vid: (state,action) => {
        state.id = action.payload
    },
    adduser: (state, action) => {
      state.value = action.payload
    },
    userid: (state, action) => {
        state.userid = action.payload
      },
      username: (state, action) => {
        state.username = action.payload
      },
      names: (state, action) => {
        state.name = action.payload
      },
      
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, vid, adduser,userid,username,names } = counterSlice.actions

export default counterSlice.reducer