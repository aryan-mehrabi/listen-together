import React from "react";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
import { PageProvider } from "../context/PageContext";
import { ChannelProvider } from "../context/ChannelContext";
import { ModalProvider } from "../context/ModalContext";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <AuthProvider>
          <UserProvider>
            <PageProvider>
              <ChannelProvider>
                <div className="text-secondary bg-primary h-screen">
                  <Router />
                </div>
              </ChannelProvider>
            </PageProvider>
          </UserProvider>
        </AuthProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
};

export default App;
