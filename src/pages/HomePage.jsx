import React, { useState } from "react";
import "../App.css";
import { AppBar } from "../layout/AppBar/AppBar";
import { Banner } from "../layout/Banner";
import { SecondBanner } from "../layout/SecondBanner";
import { ContentCards } from "../layout/ContentCards";
import { SiteDescription } from "../layout/SiteDescription";
import { Footer } from "../layout/Footer";
import { Form } from "../layout/Form";
import { ForumPost } from "../layout/ForumPost";

export function HomePage() {
  const [showCards, setShowCards] = useState(true);

  const handleClick = () => {
    setShowCards(false);
  }

  return (
    <>
      <AppBar />
      <Banner />
      {showCards ? <ContentCards onClick={handleClick} /> : <ForumPost />}
      <Footer />
    </>
  );
}