import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { NovosPage } from "./NovosPage";
import "../App.css";
import { AppBar } from "../layout/AppBar/AppBar";
import { Banner } from "../layout/Banner";
import { ContentCards } from "../layout/ContentCards";
import { Footer } from "../layout/Footer";
import { ForumPost } from "./ForumPost";
 

export function HomePage() {
  return (
    <div>
      <Banner />
      <ContentCards />
    </div>
  );
}