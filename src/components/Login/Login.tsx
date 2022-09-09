import { useDispatch } from "react-redux"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { AppRoute } from "../../const";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { getUserInfo } from "../../util/getUserInfo";
import ModalError from "../ModalError/ModalError";

type RegisterProps = {
  firstName: string;
  secondName: string;
  email: string;
  password: string
};

function Login(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    getAuth().onAuthStateChanged(function (user) {
      if (user) {
        getUserInfo(user).then((userInfo: any): void => {
          const { firstName, secondName } = userInfo;
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            firstName: firstName,
            secondName: secondName,
          }))
          navigate(`${AppRoute.userList}`)
          setLoading(false)
        })
      } else {
        setLoading(false)
      }
    });
  }, [dispatch, navigate])

  function handleLogin(data: RegisterProps): void {
    setLoading(true)
    const { email, password } = data;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        getUserInfo(user).then((userInfo: any): void => {
          const { firstName, secondName } = userInfo;
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            firstName: firstName,
            secondName: secondName,
          }))
          navigate(`${AppRoute.userList}`)
          setErrorMessage(null)
        })
      })
      .catch((error) => {
        setErrorMessage(error);
        setModal(true)
      }).finally(() => {
        setLoading(false)
      })
  }
  if (!loading) {
    return (
      <>
        {
          modal ? <ModalError open={modal} setOpen={setModal} error={errorMessage} /> : null
        }
        <Form title={"Sign in"} handleClick={handleLogin} login={true} />

      </>
    )
  }
  return (<Loader />)

}

export default Login
