import React from "react";
import { Link } from "react-router-dom";
import AboutText from "../components/AboutText";
import { ContentCard } from "../components/ContentCard";
import { GlobalStore } from "../GlobalStore";

export function ContentCards() {
  const posts = GlobalStore((state) => state.posts);

  return (
    <div>
      <AboutText />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-0 w-full max-w-screen-lg mx-auto">
        {posts.slice(0, 6).map((post, index) => (
          <Link to={`/post/${post.id}`} key={index}>
            <ContentCard
              image={post.image}
              title={post.title}
              paragraph={post.body}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
