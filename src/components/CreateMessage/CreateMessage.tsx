import { Button, Grid, TextField } from "@mui/material";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../hooks/use-auth";



function CreateMessage() {
  const [value, setValue] = useState<string>("");
  const { email, ChatID } = useAuth();
  const sendMessage = () => {
    if (value !== '') {
      let messageText = value.trimStart();
      const newMassage = doc(db, `${ChatID}`, `${Date.now()}${email}`);
      setDoc(newMassage, {
        name: `${email}`,
        text: messageText,
        createAt: serverTimestamp(),
      }, { merge: true });
      setValue("")
    }
  }
  useEffect(() => {
    function onKeypress(e: any) {
      if (value && e.code === "Enter") {
        if (e.ctrlKey) {
          setValue(value + "\r\n")
        }
        else {
          sendMessage()
        }
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
      className="chat__input-area"
    >
      <div className="chat__input">
        <div
          style={{ width: "100%" }}
        >
          <TextField
            multiline
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={'standard'}
            maxRows={'3'}
            InputProps={{
              disableUnderline: true
            }}

          />
        </div>
        <Button
          variant="contained"
          className="chat__button"
          onClick={sendMessage}
          style={{ height: "100%" }}
        >
          Отправить
        </Button>
      </div>

    </Grid>

  )
}

export default CreateMessage
