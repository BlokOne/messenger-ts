import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react"

interface FormProps {
  title: string,
  handleClick: (email: string, pass: string) => void;
}

function Form({ title, handleClick }: FormProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [disabled, setDisabled] = useState(true);


  useEffect(() => {
    (email && pass) ? setDisabled(!true) : setDisabled(true);
  }, [email, pass])

  return (
    <div>
      <Grid container
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        rowGap={"10%"}
      >
        <TextField label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField type={"password"} label="Password" variant="standard" value={pass} onChange={(e) => setPass(e.target.value)} style={{ marginBottom: "10px" }} />
        <Button
          id="formButton"
          variant="contained"
          color="inherit"
          onClick={() => {
            handleClick(email, pass)
            setPass("")
            setEmail("")
          }}
          style={{ marginBottom: "10px" }}
          disabled={disabled}
        >{title}</Button>
      </Grid>
    </div>

  )
}

export default Form
