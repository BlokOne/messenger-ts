import { useSelector } from "react-redux";

export function useAuth() {
  const { email, id, ChatID, firstName, secondName, nameFriend, HeaderChat } = useSelector(state => state.user)

  return {
    isAuth: !!email,
    email,
    ChatID,
    id,
    firstName,
    secondName,
    nameFriend,
    HeaderChat
  }
}