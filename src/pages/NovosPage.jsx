import React from "react";
import { Link } from "react-router-dom";
import DescriptionFlex from "../components/DescriptionFlex";
import { GlobalStore } from "../GlobalStore";

function truncateText(text, limit) {
  if (text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
}

export function NovosPage() {
  const posts = GlobalStore((state) => state.posts);

  return (
    <div className="w-full h-full bg-[#ff9999] p-32 px-4">
      <div className="flex flex-col items-center justify-center mx-auto max-w-[720px]">
        <h2 className="text-5xl mb-4">Novos Posts</h2>
        {posts.length === 0 ? (
          <p>Nenhum post encontrado.</p>
        ) : (
          posts
            .slice(0, 10)
            .reverse()
            .map((post, index) => {
              const postId = post.id;
              return (
                <Link to={`/post/${postId}`} key={postId}>
                  <DescriptionFlex
                    src={post.image}
                    author={post.title}
                    date={post.date}
                    content={truncateText(post.body, 100)}
                    imageOnRight={index % 2 === 1}
                  />
                </Link>
              );
            })
        )}
      </div>
    </div>
  );
}
