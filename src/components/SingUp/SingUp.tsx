import { useDispatch } from "react-redux"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";
import { Password } from "@mui/icons-material";
import { AppRoute } from "../../const";

type RegisterProps = {
  firstName: string;
  secondName: string;
  email: string;
  password: string
};

function addUser(email: string | null, id: string | null, firstName: string, secondName: string) {
  const newUser = doc(db, 'Users', `${email}`);
  setDoc(newUser, {
    firstName: firstName,
    secondName: secondName,
    id: id,
    email: email,
  }, { merge: true });
}

function SingUp(): JSX.Element {
  const [reset, useReset] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function handleRegister(data: RegisterProps) {
    const { firstName, secondName, email, password } = data;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          firstName: firstName,
          secondName: secondName,
        }
        ))
        addUser(user.email, user.uid, firstName, secondName)
        navigate(`${AppRoute.chat}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
  return (
    <Form title={"Registration"} handleClick={handleRegister} login={false} />
  )
}

export default SingUp
