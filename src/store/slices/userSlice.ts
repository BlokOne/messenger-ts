import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  secondName: null,
  email: null,
  id: null,
  ChatID: null,
  nameFriend: null,
  HeaderChat: null,
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
    setHeaderChat(state, action) {
      state.HeaderChat = action.payload.HeaderChat;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.ChatID = null;
      state.firstName = null;
      state.secondName = null;
      state.nameFriend = null;
      state.HeaderChat = null;
    }
  }
})

export const { setUser, removeUser, SetChatID, setFriendName, setHeaderChat } = userSlice.actions;
export default userSlice.reducer;