import { Button, Grid, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import SendIcon from '@mui/icons-material/Send';
import { sendMessage } from "../../util/sendMessage";


function CreateMessage() {
  const [value, setValue] = useState<string>("");
  const { email, ChatID } = useAuth();
  const sendMessageCallback = useCallback(
    () => {
      sendMessage(value, email, ChatID);
      setValue("")
    },
    [value, email, ChatID]
  )

  useEffect(() => {
    function onKeypress(e: KeyboardEvent) {
      if (value && e.code === "Enter") {
        if (e.ctrlKey) {
          setValue(value + "\r\n")
        }
        else {
          sendMessageCallback()
        }
      }
    }
    document.addEventListener('keypress', onKeypress);
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

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
            onChange={onChange}
            variant={'standard'}
            maxRows={'3'}
            InputProps={{
              disableUnderline: true
            }}

          />
        </div>
        <Button
          variant="text"
          endIcon={<SendIcon />}
          className="chat__button"
          onClick={sendMessageCallback}
          style={{ height: "100%" }}
        >
        </Button>
      </div>

    </Grid>

  )
}

export default CreateMessage
