import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Chat from "../pages/Chat";
import { AuthProvider } from "../context/AuthContext";
import { UserProvider } from "../context/UserContext";
const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
