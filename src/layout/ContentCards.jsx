import React from "react";
import { Link } from "react-router-dom";
import AboutText from "../components/AboutText";
import ContentCard from "../components/ContentCard";
import { GlobalStore } from "../GlobalStore";

export function ContentCards() {
  const posts = GlobalStore((state) => state.posts); 

  return (
    <div className="w-full overflow-hidden bg-secondary">
      <div className="w-full max-w-screen-lg mx-auto">
        <AboutText />
        <div className="grid grid-cols-1 Small-At:grid-cols-2 Medium-At:grid-cols-3 gap-4 pt-0 w-full max-w-screen-lg mx-auto">
          {posts.map((post, index) => (
            <Link to={`/post/${post.id}`} key={index}>
              <ContentCard
                image={post.image} 
                title={post.title}
                paragraph={post.body}
              />
            </Link>
          ))}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}