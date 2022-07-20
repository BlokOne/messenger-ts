
import { RssFeed, ViewColumn } from "@mui/icons-material";
import { Button, FormControl, Grid, Input, TextField } from "@mui/material";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

interface FormProps {
  title: string,
  handleClick: any,
  login: boolean,

}
type FormInputs = {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
};
function Form({ title, handleClick, login, }: FormProps): JSX.Element {
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm({
    mode: "onChange"
  })

  function clearForm() {
    reset()
  }

  return (
    <div>
      <Grid container
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        rowGap={"10%"}
      >
        <form onSubmit={handleSubmit(handleClick)}
          style={{
            width: "216px",
            display: "flex",
            flexDirection: "column",
          }}>
          {
            login ? null
              :
              <>
                <TextField
                  {...register("firstName", {
                    required: "Required",
                  })
                  }
                  label="First Name"
                  variant="standard" />
                <div
                  style={{ height: "30px", paddingTop: "5px", color: "red" }}
                >
                  {errors?.firstName && <p>
                    {errors?.firstName?.message || "Error"}
                  </p>}
                </div>
                <TextField
                  {...register("secondName", {
                    required: "Required",
                  })
                  }
                  label="Second Name"
                  variant="standard" />
                <div
                  style={{ height: "30px", paddingTop: "5px", color: "red" }}
                >
                  {errors?.secondName && <p>
                    {errors?.secondName?.message || "Error"}
                  </p>}
                </div>
              </>
          }
          <TextField
            {...register("email", {
              required: "Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
              }
            })
            }
            label="Email"
            variant="standard" />
          <div
            style={{ height: "30px", paddingTop: "5px", color: "red" }}
          >
            {errors?.email && <p>
              {errors?.email?.message || "Error"}
            </p>}
          </div>
          <TextField
            {...register("password", {
              required: "Required",
              minLength: {
                value: 6,
                message: "Minimum 6 symbols "
              }
            })
            }
            type="password"
            label="Password"
            variant="standard" />
          <div
            style={{ height: "30px", paddingTop: "5px", color: "red" }}
          >
            {errors?.password && <p>
              {errors?.password?.message || "Error"}
            </p>}
          </div>

          <Input
            className="submit-form"
            type="submit"
            value={title}
            disableUnderline={true}
            disabled={!isValid}
          />


        </form>
      </Grid>
    </div >

  )
}

export default Form
