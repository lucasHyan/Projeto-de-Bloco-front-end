import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { NovosPage } from "./NovosPage";
import { PostPage } from "../components/PostPage";
import "../App.css";
import { AppBar } from "../layout/AppBar/AppBar";
import { Banner } from "../layout/Banner";
import { ContentCards } from "../layout/ContentCards";
import { Footer } from "../layout/Footer";
import { ForumPost } from "../layout/ForumPost";
import { ForumComment } from "../components/ForumComment";
import useRandomUserAndComment from "../hooks/useRandomUserAndComment"; 

export function HomePage() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<><Banner /><Outlet /></>}>
          <Route index element={<ContentCards />} />
          <Route path="post/:id" element={<ForumPost />} />
          <Route path="novos" element={<NovosPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}