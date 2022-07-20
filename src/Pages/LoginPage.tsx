import { Link } from "react-router-dom"
import Login from "../components/Login/Login"
import { AppRoute } from "../const"

function LoginPage() {
  return (
    <div className="page">
      <Login />
      <p className="page__link">
        No account?   <br />
        <Link to={AppRoute.registration}>Create it!</Link>
      </p>
    </div>
  )
}

export default LoginPage
