import { Grid, TextField } from "@mui/material"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import User from "../User/User";
import _ from "lodash";
import { useEffect, useState } from "react";
import { useAuth } from '../../hooks/use-auth'
import { isatty } from "tty";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";


const q = query(collection(db, "Users"), orderBy("secondName"));
let users: any = [];
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const newUsers: any = [];
  querySnapshot.forEach((doc) => {
    newUsers.push(doc.data());
  });
  users = [];
  users = [...newUsers]
  if (!_.isEqual(users, newUsers)) {
    users = [];
    users = [...newUsers]
  }
});




function UserList() {
  const [navChat, setNavChat] = useState(false);
  const { isAuth, email } = useAuth();
  const [usersList, setUsersList] = useState<any[]>([]);
  const [sortKey, setSortKey] = useState<string>('');


  useEffect(() => {
    if (sortKey === "") {
      setUsersList(users)
    }
    else {
      let sortUsers: any[] = [];
      users.filter((user: any) => {
        const fullName = user.firstName + " " + user.secondName;
        if (fullName.indexOf(sortKey) > -1) {
          sortUsers.push(user)
        }
        setUsersList(sortUsers)
      })
    }
  }, [sortKey])
  useEffect(() => {
    setUsersList(users)
  }, [users])
  return (
    <>
      {isAuth ?
        (
          navChat ?
            <Navigate replace to={AppRoute.chat} />
            :
            < Grid container
              style={{ width: "min(100% - 2rem)", marginInline: "auto", height: "100%", marginTop: "70px" }}
              direction={"column"}
              rowGap={"20px"}
            >
              <h1
                style={{ margin: "0, auto", textAlign: "center", marginBottom: "25px", marginTop: "25px" }}
              >
                All Users
              </h1>
              <TextField
                label="UserName"
                variant="outlined"
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)} />
              <div
                className="users-list"
              >
                {
                  usersList.map((user) => {
                    if (email !== user.email) {
                      return <User key={user.id} firstName={user.firstName} secondName={user.secondName} userId={user.id} setNavChat={setNavChat} />
                    }
                  })
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
