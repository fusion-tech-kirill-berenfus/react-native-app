import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.username = action.payload;
    },
    logOut: state => {
      state.username = '';
    },
  },
});

export const {logIn, logOut} = userSlice.actions;

export default userSlice.reducer;
