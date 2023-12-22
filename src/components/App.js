import React, { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { PageProvider } from "context/PageContext";
import { ModalProvider } from "context/ModalContext";
import Spinner from "./Spinner";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

const AuthProvider = lazy(() =>
  import("context/AuthContext").then((module) => ({
    default: module.AuthProvider,
  }))
);
const UserProvider = lazy(() =>
  import("context/UserContext").then((module) => ({
    default: module.UserProvider,
  }))
);
const ChannelProvider = lazy(() =>
  import("context/ChannelContext").then((module) => ({
    default: module.ChannelProvider,
  }))
);
const MemberProvider = lazy(() =>
  import("context/MemberContext").then((module) => ({
    default: module.MemberProvider,
  }))
);
const MessageProvider = lazy(() =>
  import("context/MessageContext").then((module) => ({
    default: module.MessageProvider,
  }))
);

const Router = lazy(() => import("./Router"));

const App = () => {
  const queryClient = new QueryClient();

  const fallback = (
    <div className="flex items-center justify-center text-secondary bg-primary h-screen">
      <Spinner className="w-14 h-14" />
    </div>
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={fallback}>
          <ModalProvider>
            <AuthProvider>
              <UserProvider>
                <PageProvider>
                  <ChannelProvider>
                    <MemberProvider>
                      <MessageProvider>
                        <Router />
                      </MessageProvider>
                    </MemberProvider>
                  </ChannelProvider>
                </PageProvider>
              </UserProvider>
            </AuthProvider>
          </ModalProvider>
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
