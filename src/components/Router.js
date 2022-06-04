import React, { useEffect } from "react";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Landing from "../pages/Landing";
import Modal from "./Modal";
import useAuth from "../context/AuthContext";
import useUser from "../context/UserContext";
import usePage from "../context/PageContext";
import useModal from "../context/ModalContext";
import Spinner from "./Spinner";

const Router = () => {
  const { modal } = useModal();
  const { userId } = useAuth();
  const { fetchUser, users } = useUser();
  const { page, setPage } = usePage();

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    } else if (userId === "") {
      setPage("landing");
    }
  }, [userId]);

  useEffect(() => {
    const authUser = users[userId];
    if (authUser) {
      Object.values(authUser).length ? setPage("home") : setPage("signup");
    }
  }, [users]);

  const renderApp = () => {
    switch (page) {
      case "landing":
        return <Landing />;
      case "home":
        return <Home />;
      case "signup":
        return <SignUp />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <Spinner />
          </div>
        );
    }
  };
  return (
    <>
      {modal && <Modal>{modal}</Modal>}
      {renderApp()}
    </>
  );
};

export default Router;
