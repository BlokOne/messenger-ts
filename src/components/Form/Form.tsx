
import { Grid, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

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
    mode: "onBlur"
  })
  return (
    <>

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
        {
          login ? <p className="page__link">
            No account?   <br />
            <Link to={AppRoute.registration}>Create it!</Link>
          </p>
            : <p className="page__link">
              Already have an account? <br />
              <Link to={AppRoute.login}>Sign in</Link>
            </p>
        }
      </div >
    </>

  )
}

export default Form


// Тип "string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>" не может быть назначен для типа "ReactNode".
//   Тип "FieldError" не может быть назначен для типа "ReactNode".
//     В типе "FieldError" отсутствуют следующие свойства из типа "ReactPortal": key, children, props