import { useDispatch } from "react-redux"
import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import { SyntheticEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AppRoute } from "../../const";


type RegisterProps = {
  firstName: string;
  secondName: string;
  email: string;
  password: string
};

async function getUserInfo(data: any) {

  const docRef = doc(db, "Users", `${data.email}`);
  const docSnap = await getDoc(docRef);
  let userInfo = await docSnap.data();
  return userInfo

}

function Login(): JSX.Element {
  const [clear, useClear] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      getUserInfo(user).then((userInfo: any) => {
        const { firstName, secondName, email, password } = userInfo;
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          firstName: firstName,
          secondName: secondName,
        }))
        navigate(`${AppRoute.chat}`)
      })
    }
  });

  function handleLogin(data: RegisterProps) {
    const { email, password } = data;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        getUserInfo(user).then((userInfo: any) => {
          const { firstName, secondName, email, password } = userInfo;
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            firstName: firstName,
            secondName: secondName,
          }))
          navigate(`${AppRoute.chat}`)
        })
      })
      .catch(console.log)
  }
  return (
    <Form title={"Sign in"} handleClick={handleLogin} login={true} />
  )
}

export default Login
