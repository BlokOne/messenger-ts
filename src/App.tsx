import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import UserList from "./components/User-List/UserList";
import { AppRoute } from "./const";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import UserPage from "./Pages/UserPage";
import { useAuth } from "../src/hooks/use-auth"
import Header from "./components/Header/Header";
import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "./store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function App(): JSX.Element {
  const { isAuth, email } = useAuth();
  return (
    <>{
      isAuth ?
        <Header />
        :
        null
    }
      <Routes>
        <Route path={AppRoute.home} element={<HomePage />} />
        <Route path={AppRoute.login} element={<LoginPage />} />
        <Route path={AppRoute.registration} element={<RegistrationPage />} />
        <Route path={AppRoute.chat} element={<ChatPage />} />
        <Route path={AppRoute.userPage} element={<UserPage />} />
        <Route path={AppRoute.userList} element={<UserList />} />
        <Route path="*" element={<Navigate to={AppRoute.home} replace />} />
      </Routes>
    </>

  );
}

export default App;
