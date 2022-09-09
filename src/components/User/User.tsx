import { Avatar, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from '../../hooks/use-auth';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { SetChatID, setFriendName } from "../../store/slices/userSlice";


type UserProps = {
  userId: string,
  firstName: string,
  secondName: string,
  setNavChat: Function
}



function User(props: UserProps): JSX.Element {
  const { userId, secondName, firstName, setNavChat } = props;
  const { id } = useAuth();
  const [IdChat, setIdChat] = useState<string | null>(null);
  const dispatch = useDispatch();




  const createChat = async function (myId: string, userId: string): Promise<void> {
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
    setNavChat(false)
    if (IdChat) {
      dispatch(SetChatID({
        ChatID: IdChat,
      }))
      dispatch(setFriendName({
        nameFriend: firstName
      }))
      setNavChat(true)
    }
  }, [IdChat, dispatch, firstName, setNavChat])

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
        <p>{secondName} {firstName}</p>
      </div>
      <Button
        variant="text" endIcon={<SendIcon />}
        style={{ color: "white" }}
        onClick={() => createChat(id, userId)}
      >
        Chat
      </Button>
    </div >


  )
}

export default User
