import { Grid, TextField } from "@mui/material"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import User from "../User/User";
import { useEffect, useState } from "react";
import { useAuth } from '../../hooks/use-auth'
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";
import { useDispatch } from "react-redux";
import { setHeaderChat } from "../../store/slices/userSlice";
import { user } from "../../util/types";


const q = query(collection(db, "Users"), orderBy("secondName"));
let users: user[] = [];
/* eslint-disable */
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  users = []
  /* eslint-enable */
  querySnapshot.forEach((doc) => {
    if (users) {
      users.push(doc.data() as user);
    }
  });
});




function UserList() {
  const [navChat, setNavChat] = useState(false);
  const { isAuth, email } = useAuth();
  const [usersList, setUsersList] = useState<user[]>();
  const [sortKey, setSortKey] = useState<string>('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderChat({
      HeaderChat: ""
    }))
  })
  useEffect(() => {
    let sortKeyLower = sortKey.toLowerCase();
    if (sortKey === "") {
      setUsersList(users)
    }
    else {
      let sortUsers: typeof users = [];
      if (users) {
        users.forEach((user: user) => {
          let fullName = user.secondName + " " + user.firstName;
          let reversFullName = user.firstName + " " + user.secondName;
          reversFullName = reversFullName.toLowerCase();
          fullName = fullName.toLowerCase();
          if (fullName.indexOf(sortKeyLower) > -1) {
            if (sortUsers) {
              sortUsers.push(user)
            }
          } else if (reversFullName.indexOf(sortKeyLower) > -1) {
            if (sortUsers) {
              sortUsers.push(user)
            }
          }
          setUsersList(sortUsers)
        })
      }
    }
  }, [sortKey])
  useEffect(() => {
    setUsersList(users)
  }, [])
  return (
    <>
      {isAuth ?
        (
          navChat ?
            <Navigate replace to={AppRoute.chat} />
            :
            < Grid container
              style={{ width: "min(100% - 2rem) " }}
              direction={"column"}
              rowGap={"20px"}
              className="users-list__wrapper"
            >
              <h1
                style={{ margin: "0, auto", textAlign: "center", marginBottom: "25px", marginTop: "25px" }}
              >
                All Users
              </h1>
              <TextField
                label="User Name"
                variant="outlined"
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)} />
              <div
                className="users-list"
              >
                {usersList ?
                  usersList.map((user) => email !== user.email ? <User key={user.id} firstName={user.firstName} secondName={user.secondName} userId={user.id} setNavChat={setNavChat} /> : null)
                  :
                  null
                }
              </div>
            </Grid>
        )
        :
        <Navigate replace to={AppRoute.login} />
      }
    </>
  )
}


export default UserList
