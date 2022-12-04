import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    userName:'Dinesh',
   password:'1234'
  

}

const userSlice = createSlice({
  name: 'user',
  initialState:{
    value:{
        userName:'',
       password:''
      

    }
  },
  reducers: {
    login:
        (state,action)=>
        state.value=action.payload
    
  }
});

export const {login} = userSlice.actions 
export default userSlice.reducer




