import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in, do stuff with userAuth
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {user ? (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
