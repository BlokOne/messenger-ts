import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../const";
import Chat from "../components/Chat/Chat";
import { useDispatch } from "react-redux";
import { setHeaderChat } from "../store/slices/userSlice";



function useUpdate(ChatId: any) {
  const [newMessages, setNewMessages] = useState<any[]>([]);
  useEffect(() => {
    const q = query(collection(db, `${ChatId}`), orderBy("createAt"));
    /* eslint-disable */
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      /* eslint-enable */
      const messages: any = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setNewMessages(messages);
    })
  }, []);
  return newMessages;
}


function ChatPage(): JSX.Element {
  const { ChatID, nameFriend } = useAuth();
  const newMessages = useUpdate(ChatID);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderChat({
      HeaderChat: nameFriend
    }))
  }, [ChatID])
  return (
    <>
      {
        !ChatID ?
          <Navigate replace to={AppRoute.userList} />
          :
          <Chat messagesList={newMessages} />
      }
    </>
  )
}

export default ChatPage
