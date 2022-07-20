
import { Button, Container, Grid, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useAuth } from "../../hooks/use-auth";
import CreateMessage from "../CreateMessage/CreateMessage";

import Message from "../Message/Message";

type ChatProps = {
  messagesList: any[]
}

function Chat(props: ChatProps) {
  const { messagesList } = props;
  const { nameFriend } = useAuth();
  const divRef = useRef<null | HTMLDivElement>(null)
  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messagesList])
  return (
    < Container>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid container
          style={{ marginTop: "80px" }}
          justifyItems={"center"}
          justifyContent={"space-between"}
          rowGap={"15px"}
        >
          <h2>
            Chat with {nameFriend}
          </h2>
          <div
            style={
              {
                width: "95%",
                height: "50vh",
                border: '1px solid gray',
                overflowY: 'auto',
                overflowX: "hidden",
                padding: "10px",
                borderRadius: "5px"
              }
            }
          >
            {messagesList.map((value) => <Message key={value.createAt.nanoseconds} value={value} />)}
            <div ref={divRef} />
          </div>
          <CreateMessage />
        </Grid>
      </div>
    </Container>
  )
}

export default Chat
