import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { NovosPage } from "./NovosPage";
import "../App.css";
import { AppBar } from "../layout/AppBar/AppBar";
import { Banner } from "../layout/Banner";
import { ContentCards } from "../layout/ContentCards";
import { Footer } from "../layout/Footer";
import { ForumPost } from "../layout/ForumPost";

function HomePageContent() {
  const [showCards, setShowCards] = useState(true);

  const handleClick = () => {
    setShowCards(!showCards);
  };

  return (
    <>
      <Banner />
      {showCards ? (
        <ContentCards onClick={handleClick} />
      ) : (
        <ForumPost onClick={handleClick} />
      )}
    </>
  );
}

export function HomePage() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="novos" element={<NovosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
