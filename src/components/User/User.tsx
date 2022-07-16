import { Avatar, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from '../../hooks/use-auth';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { SetChatID } from "../../store/slices/userSlice";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";

type UserProps = {
  userId: string,
  name: string,
  setNavChat: Function
}



function User(props: UserProps): JSX.Element {
  const { userId, name, setNavChat } = props;
  const { isAuth, id } = useAuth();
  const [IdChat, setIdChat] = useState<string>("");
  const dispatch = useDispatch();
  const createChat = async function (myId: string, userId: string): Promise<any> {
    const arrayID = [userId, myId];
    arrayID.sort();
    const id: string = `${arrayID[0]}${arrayID[1]}`;
    const docRef = doc(db, "Chats", `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setIdChat(id)
    } else {
      const chat = doc(db, `${setIdChat}`, `${id}`);
      await setDoc(chat, {
        IdChat: `${id}`
      }, { merge: true });
      setIdChat(id)
    }
  }

  useEffect(() => {
    console.log('start')
    setNavChat(false)
    console.log(IdChat)
    if (IdChat !== "") {
      dispatch(SetChatID({
        ChatID: IdChat
      }))
      setNavChat(true)
    }
  }, [IdChat])

  return (

    < div className="users-list__link" >
      <div
        style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          style={{
            height: 45,
            width: 45,
            marginRight: 10,
          }}
        />
        <p>{name}</p>
      </div>
      <Button
        variant="text" endIcon={<SendIcon />}
        style={{ color: "white" }}
        onClick={() => createChat(id, userId)}
      >
        Start Chat
      </Button>
    </div >


  )
}

export default User
