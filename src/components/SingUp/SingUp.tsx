import { useDispatch } from "react-redux"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";


function addUser(name: any, id: string) {
  const newUser = doc(db, 'Users', `${name}`);
  setDoc(newUser, {
    name: name,
    id: id,
  }, { merge: true });
}

function SingUp(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  function handleRegister(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
        }
        ))
        addUser(user.email, user.uid)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
  return (
    <Form title={"Registration"} handleClick={handleRegister} />
  )
}

export default SingUp
