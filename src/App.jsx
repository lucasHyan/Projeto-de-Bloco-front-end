import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NovosPage } from "./pages/NovosPage";
import { CreateAccount } from "./pages/CreateAccount";
import { HomePage } from "./pages/HomePage";
import { LoginForm } from "./pages/LoginForm";
import "./App.css";
import { AppBar } from "./layout/AppBar/AppBar";
import { Footer } from "./layout/Footer";
import { ForumPost } from "./pages/ForumPost";
import { CreateForumPost } from "./pages/CreateForumPost";
import { GlobalStore } from "./GlobalStore";

function App() {
  const isLoggedIn = GlobalStore((state) => state.isLoggedIn);
  const user = GlobalStore((state) => state.user);
  const allAccounts = GlobalStore((state) => state.accounts);
  console.log("User:", user);
  console.log("isLoggedIn:", isLoggedIn);
  console.log("allAccounts:", allAccounts)

  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="post/:id" element={<ForumPost />} />
        <Route path="novos" element={<NovosPage />} />
        <Route
          path="CreateForumPost"
          element={
            isLoggedIn ? <CreateForumPost /> : <Navigate to="/LoginForm" />
          }
        />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="LoginForm" element={<LoginForm />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
