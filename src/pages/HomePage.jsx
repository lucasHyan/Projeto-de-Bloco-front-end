import React, { useState, useEffect } from "react";
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


const useRandomUserAndComment = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    const fetchComments = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setComments(data);
    };

    fetchUsers().catch((error) =>
      console.error("Error fetching users:", error)
    );
    fetchComments().catch((error) =>
      console.error("Error fetching comments:", error)
    );
  }, []);

  const getRandomItem = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  };

  return {
    randomUser: getRandomItem(users),
    randomComment1: getRandomItem(comments),
    randomComment2: getRandomItem(comments),
  };
};

function HomePageContent() {
  const [showCards, setShowCards] = useState(true);
  const { randomUser, randomComment1, randomComment2 } =
    useRandomUserAndComment();

  const handleClick = () => {
    setShowCards(!showCards);
  };

  return (
    <>
      <Banner />
      {showCards ? (
        <ContentCards onClick={handleClick} />
      ) : (
        <ForumPost onClick={handleClick}>
          <ForumComment
            author={randomUser ? randomUser.name : "Loading..."}
            date="2022-01-01"
            content={randomComment1 ? randomComment1.body : "Loading..."}
            src={"https://source.unsplash.com/random/501x500"}
          />
          <ForumComment
            author={randomUser ? randomUser.name : "Loading..."}
            date="2023-05-12"
            content={randomComment2 ? randomComment2.body : "Loading..."}
            src={"https://source.unsplash.com/random/700x600"}
          />
        </ForumPost>
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
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
