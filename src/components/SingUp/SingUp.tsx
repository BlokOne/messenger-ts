import { useDispatch } from "react-redux"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AppRoute } from "../../const";
import { useState } from "react";
import Loader from "../Loader/Loader";
import ModalError from "../ModalError/ModalError";

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
  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function handleRegister(data: RegisterProps) {
    setLoading(true)
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
        setErrorMessage(null)
      }).catch((error) => {
        setErrorMessage(error);
        setModal(true)
      }).finally(() => {
        setLoading(false)
      })
  }
  if (loading) {
    return (<Loader />)
  }
  return (
    <>
      {
        modal ? <ModalError open={modal} setOpen={setModal} error={errorMessage} /> : null
      }
      <Form title={"Registration"} handleClick={handleRegister} login={false} />

    </>
  )
}

export default SingUp
