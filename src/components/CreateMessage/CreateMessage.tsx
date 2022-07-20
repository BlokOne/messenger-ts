import { Button, Grid, TextField } from "@mui/material";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../hooks/use-auth";


function CreateMessage() {
  const [value, setValue] = useState<string>("");
  const { email, ChatID } = useAuth();
  const sendMessage = () => {
    const userText = value.replace(/^\s+/, '').replace(/\s+$/, '');
    if (userText !== '') {
      const newMassage = doc(db, `${ChatID}`, `${Date.now()}${email}`);
      setDoc(newMassage, {
        name: `${email}`,
        text: value,
        createAt: serverTimestamp(),
      }, { merge: true });
      setValue("")
    }
  }
  useEffect(() => {
    function onKeypress(e: any) {
      console.log(e.code)
      if (value && e.code === "Enter") {
        sendMessage()
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  });
  return (
    <Grid container
      direction={"column"}
      alignItems={"flex-end"}
      style={{ width: "100%" }}
    >
      <TextField
        multiline
        fullWidth
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant={'outlined'} />
      <Button onClick={sendMessage}>
        Отправить
      </Button>

    </Grid>

  )
}

export default CreateMessage
