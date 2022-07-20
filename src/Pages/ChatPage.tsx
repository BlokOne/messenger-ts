import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import _, { values } from "lodash";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../const";
import Chat from "../components/Chat/Chat";




function useUpdate(ChatId: any) {
  const [newMessages, setNewMessages] = useState<any[]>([]);
  useEffect(() => {
    const q = query(collection(db, `${ChatId}`), orderBy("createAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
  const { ChatID } = useAuth();
  const newMessages = useUpdate(ChatID);
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
