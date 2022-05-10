import React from "react";
import Router from "./Router";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import { PageProvider } from "../context/PageContext";
import { ChannelProvider } from "../context/ChannelContext";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <PageProvider>
          <ChannelProvider>
            <Router />
          </ChannelProvider>
        </PageProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
