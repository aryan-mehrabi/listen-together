import React, { useEffect, lazy, Suspense } from "react";
import Modal from "./Modal";
import useAuth from "context/AuthContext";
import useUser from "context/UserContext";
import usePage from "context/PageContext";
import useModal from "context/ModalContext";
import Spinner from "./Spinner";
import useError from "hooks/useError";

const Home = lazy(() => import("pages/Home"));
const SignUp = lazy(() => import("pages/SignUp"));
const Landing = lazy(() => import("pages/Landing"));

const Router = () => {
  const { modal } = useModal();
  const { userId } = useAuth();
  const { users, error, setError, fetchUser } = useUser();
  const errorComponent = useError(error, () => setError(""));
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
            <Spinner className="w-14 h-14" />
            {errorComponent}
          </div>
        );
    }
  };

  return (
    <div className="text-secondary bg-primary h-screen">
      {modal && <Modal>{modal}</Modal>}
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-full">
            <Spinner className="w-14 h-14" />
          </div>
        }
      >
        {renderApp()}
      </Suspense>
    </div>
  );
};

export default Router;
