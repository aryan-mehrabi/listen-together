import React, { useEffect } from "react";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Chat from "../pages/Chat";
import Modal from "./Modal"
import useAuth from "../context/AuthContext";
import useUser from "../context/UserContext";
import usePage from "../context/PageContext";
import useModal from "../context/ModalContext";

const Router = () => {
  const { modal } = useModal();
  const { userId } = useAuth();
  const { fetchUser, users } = useUser();
  const { page, setPage } = usePage();

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    } else if (userId === "") {
      setPage("home");
    }
  }, [userId]);

  useEffect(() => {
    const authUser = users[userId];
    if (authUser) {
      Object.values(authUser).length ? setPage("chat") : setPage("signup");
    }
  }, [users]);

  const renderApp = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "chat":
        return <Chat />;
      case "signup":
        return <SignUp />;
      default:
        return <div>loading</div>;
    }
  };
  return (
    <>
      {modal ? <Modal>{modal}</Modal> : null}
      {renderApp()}
    </>
  );
};

export default Router;
