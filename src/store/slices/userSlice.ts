import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  ChatID: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    SetChatID(state, action) {
      state.ChatID = action.payload.ChatID;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.ChatID = null;
    }
  }
})

export const { setUser, removeUser, SetChatID } = userSlice.actions;
export default userSlice.reducer;