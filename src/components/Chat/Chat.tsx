
import { Grid } from "@mui/material";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import { sendNotification } from "../../util/sendNotification";
import CreateMessage from "../CreateMessage/CreateMessage";
import Message from "../Message/Message";


type ChatProps = {
  messagesList: {
    createAt?: {
      seconds: number,
      nanoSeconds: number,
    },
    name: string,
    text: string
  }[];
}

function Chat(props: ChatProps) {
  const { messagesList } = props;
  const { nameFriend, email } = useAuth();
  const divRef = useRef<null | HTMLDivElement>(null)
  const [newMessagesList, setNewMessagesList] = useState<typeof messagesList>([])
  const [check, setCheck] = useState(false)
  useEffect(() => {
    if (!(_.isEqual(messagesList, newMessagesList)) && newMessagesList.length) {
      const { text, name } = messagesList[messagesList.length - 1];
      if (name !== email) {
        sendNotification(`New Message from ${nameFriend} `, {
          body: `${text}`,
          dir: 'auto'
        });
      }
      setCheck(!check)
    }
    setNewMessagesList(messagesList)
  }, [messagesList, check, email, nameFriend, newMessagesList])
  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messagesList])
  return (
    < div
      className="chat">

      <div
      >
        <Grid container
          className="chat__wrapper"
        >
          <div
            className="chat__window"
          >
            <div
              className="chat__messages"
            >
              {messagesList.map((value, index) => <Message key={index} value={value} time={!!value.createAt ?
                value.createAt.seconds
                :
                "Now"
              } />)}
            </div>

            <div ref={divRef} />
          </div>
          <CreateMessage />
        </Grid>
      </div>
    </div>
  )
}

export default Chat
