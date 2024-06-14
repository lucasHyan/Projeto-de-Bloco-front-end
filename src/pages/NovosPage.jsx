import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionFlex from "../components/DescriptionFlex";
import { GlobalStore } from '../GlobalStore';

export function NovosPage() {
  const posts = GlobalStore(state => state.posts);

  return (
    <div className="w-full h-full bg-[#ff9999] p-32 px-4">
      <div className="flex flex-col items-center justify-center mx-auto max-w-[720px]">
        <h2 className="text-5xl mb-4">Descrição do site</h2>
        {posts.map((post, index) => {
          const postId = post.id;
          return (
            <Link to={`/post/${postId}`} key={postId}>
              <DescriptionFlex
                src={`https://source.unsplash.com/random/800x600?${index}`}
                author={post.author}
                date={post.date}
                content={post.content}
                imageOnRight={index % 2 === 1}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}