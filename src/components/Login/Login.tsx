import { useDispatch } from "react-redux"
import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";





function Login(): JSX.Element {
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence)
    .then(console.log)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function handleLogin(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          chatID: null
        }))
        window.sessionStorage.setItem("userAccount", JSON.stringify({
          email: user.email,
          pass: password
        }));
        navigate('/')
      })
      .catch(console.log)
  }
  return (
    <Form title={"Sign in"} handleClick={handleLogin} />
  )
}

export default Login
