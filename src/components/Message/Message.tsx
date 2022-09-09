
import { useAuth } from "../../hooks/use-auth";

type MessageProps = {
  value: {
    createAt?: {
      seconds: number,
      nanoSeconds: number,
    },
    name: string,
    text: string
  }
  time: number | string
}

function Message({ value, time }: MessageProps) {
  let timeSend: string = "now"
  if (typeof time === "number") {
    timeSend = new Date(time * 1000).toLocaleString().slice(12, 17)
  }
  const { name } = value
  const { email } = useAuth();
  return (
    <div
      style={{
        maxWidth: "85%",
        minWidth: "20%",
        margin: 10,
        marginLeft: email === name ? 'auto' : "10px",
        backgroundColor: email === name ? "#7d7d8e" : 'rgb(101 119 163)',
        width: 'fit-content',
        border: "1px solid grey",
        borderRadius: "5px",
        color: "white",
        padding: 5,
        wordWrap: "break-word"
      }}
    >
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