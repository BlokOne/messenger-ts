
import { Container, Grid } from "@mui/material";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import CreateMessage from "../CreateMessage/CreateMessage";
import Message from "../Message/Message";
/* eslint-disable */
function sendNotification(title: string, options: any) {
  if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    if (!("Notification" in window)) {
      alert('Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.');
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification(title, options);
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {

        if (permission === "granted") {
          var notification = new Notification(title, options);

        } else {
          alert('Вы запретили показывать уведомления');
        }
      });
    } else {

    }
  }

}
/* eslint-enable */

type ChatProps = {
  messagesList: any[]
}

function Chat(props: ChatProps) {
  const { messagesList } = props;
  const { nameFriend, email } = useAuth();
  const divRef = useRef<null | HTMLDivElement>(null)
  const [newMessagesList, setNewMessagesList] = useState<any[]>([])
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
  }, [messagesList])
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
