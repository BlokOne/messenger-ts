import { Link } from "react-router-dom"
import { AppRoute } from "../const"
import SingUp from "../components/SingUp/SingUp"

function RegistrationPage(): JSX.Element {
  return (
    <div className="page">
      <SingUp />
      <p className="page__link">
        Already have an account? <br />
        <Link to={AppRoute.login}>Sign in</Link>
      </p>
    </div>
  )
}

export default RegistrationPage

