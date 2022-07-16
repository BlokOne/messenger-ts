import { Avatar, Grid } from "@mui/material"
import { useAuth } from "../../hooks/use-auth";

type MessageProps = {
  value: {
    createAt: string,
    name: string,
    text: string
  }
}

function Message(props: MessageProps) {
  const { value } = props;
  const { name } = value
  const { email } = useAuth();
  console.log("email", email)
  console.log("name", name)
  console.log(email === name)
  return (
    <div
      style={{
        maxWidth: "40%",
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
      <Grid container
        alignItems={'center'}
        columnGap={'5px'}
        style={{
          marginBottom: 5,
        }}
      >
        <Avatar
          style={{
            height: 30,
            width: 30
          }}
        />
        <div>{value.name}</div>
      </Grid>
      <div>{value.text}</div>
    </div>
  )
}

export default Message