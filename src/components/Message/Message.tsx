import { Avatar, Grid } from "@mui/material"
import { useAuth } from "../../hooks/use-auth";

type MessageProps = {
  value: {
    createAt: {
      nanoseconds: number,
      seconds: number
    },
    name: string,
    text: string,
  }
  time: number | string
}

function Message({ value, time }: MessageProps) {
  let timeSend: string = "now"
  if (typeof time === "number") {
    timeSend = new Date(time * 1000).toLocaleString().slice(12, 17)
  }
  const { name } = value
  const { email, nameFriend, firstName } = useAuth();
  return (
    <div
      style={{
        maxWidth: "85%",
        minWidth: "20%",
        margin: 10,
        marginLeft: email === name ? 'auto' : "10px",
        backgroundColor: email === name ? '#7171ef' : "#7d7d8e",
        width: 'fit-content',
        border: "1px solid grey",
        borderRadius: "5px",
        color: "white",
        padding: 5,
        wordWrap: "break-word"
      }}
    >
      {/* <Grid container
        alignItems={'center'}
        columnGap={'5px'}
        style={{
          marginBottom: 10,
        }}
      >
        <Avatar
          style={{
            height: 30,
            width: 30
          }}
        />
        <div>{email === name ?
          `${firstName}` :
          `${nameFriend}`}</div>
      </Grid> */}
      <div
        style={{
          marginBottom: "10px",
          whiteSpace: "pre-wrap"
        }}
      >{value.text}</div>
      <div
        style={{
          textAlign: "end",
          fontSize: "smaller",
          color: "#00000091"
        }}
      >{timeSend}</div>
    </div >
  )
}

export default Message