import React from "react";
import Router from "./Router";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import { PageProvider } from "../context/PageContext";

const App = () => {
  return (
      <AuthProvider>
        <UserProvider>
          <PageProvider>
            <Router />
          </PageProvider>
        </UserProvider>
      </AuthProvider>
  );
};

export default App;
