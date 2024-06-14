import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NovosPage } from "./pages/NovosPage";
import { CreateAccount } from "./pages/CreateAccount";
import { HomePage } from "./pages/HomePage"; 
import "./App.css";
import { AppBar } from "./layout/AppBar/AppBar";
import { Footer } from "./layout/Footer";
import { ForumPost } from "./pages/ForumPost";
import { CreateForumPost } from "./pages/CreateForumPost";

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="post/:id" element={<ForumPost />} />
        <Route path="novos" element={<NovosPage />} />
        <Route path="CreateForumPost" element={<CreateForumPost />} /> 
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;