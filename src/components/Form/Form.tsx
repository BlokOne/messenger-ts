
import { Grid, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

interface FormProps {
  title: string,
  handleClick: any,
  login: boolean,

}
function Form({ title, handleClick, login, }: FormProps): JSX.Element {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange"
  })


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
