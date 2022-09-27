import React, { lazy, Suspense } from "react";
// import Router from "./Router";
import { QueryClient, QueryClientProvider } from "react-query";
// import { AuthProvider } from "context/AuthContext";
// import { UserProvider } from "context/UserContext";
// import { ChannelProvider } from "context/ChannelContext";
import { PageProvider } from "context/PageContext";
import { ModalProvider } from "context/ModalContext";
import Spinner from "./Spinner";

// const ModalProvider = lazy(() => import("context/ModalContext").then(module => ({default:module.ModalProvider})))
const AuthProvider = lazy(() => import("context/AuthContext").then(module => ({default:module.AuthProvider})));
const UserProvider = lazy(() => import("context/UserContext").then(module => ({default:module.UserProvider})));
const ChannelProvider = lazy(() => import("context/ChannelContext").then(module => ({default:module.ChannelProvider})));
// const PageProvider = lazy(() => import("context/PageContext").then(module => ({default:module.PageProvider})))
const Router = lazy(() => import("./Router"));

const App = () => {
  const queryClient = new QueryClient();

  const fallback = (
    <div className="flex items-center justify-center text-secondary bg-primary h-screen">
      <Spinner className="w-14 h-14" />
    </div>
  );

  return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={fallback}>
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
        </Suspense>
      </QueryClientProvider>
  );
};

export default App;
