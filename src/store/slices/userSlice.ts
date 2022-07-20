import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  secondName: null,
  email: null,
  id: null,
  ChatID: null,
  nameFriend: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
    },
    SetChatID(state, action) {
      state.ChatID = action.payload.ChatID;
    },
    setFriendName(state, action) {
      state.nameFriend = action.payload.nameFriend
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.ChatID = null;
      state.firstName = null;
      state.secondName = null;
      state.nameFriend = null;
    }
  }
})

export const { setUser, removeUser, SetChatID, setFriendName } = userSlice.actions;
export default userSlice.reducer;