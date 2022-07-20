import { Grid } from "@mui/material"
import { Navigate } from "react-router-dom"
import { AppRoute } from "../const"
import { useAuth } from '../hooks/use-auth'

function UserPage(): JSX.Element {
  const { isAuth } = useAuth();

  return (

    <>
      {
        isAuth ? (
          <>
            <div className="user-page">
              <Grid container
                style={{ marginTop: "80px", height: "80vh", width: "min(100% - 2rem)", marginInline: "auto" }}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
              >

              </Grid>
            </div>
          </>
        )
          :
          (
            <Navigate replace to={AppRoute.login} />
          )
      }
    </>

  )
}

export default UserPage
