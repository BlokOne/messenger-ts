import { Navigate } from "react-router-dom"
import { AppRoute } from "../const"
import { useAuth } from '../hooks/use-auth'


function HomePage(): JSX.Element {
  const { isAuth, email } = useAuth();


  return (
    <>
      {
        isAuth ?
          <Navigate replace to={AppRoute.userPage} />
          :
          <Navigate replace to={AppRoute.login} />
      }
    </>
  )
}

export default HomePage
