import React from 'react';
import { useParams } from 'react-router-dom';
import useRandomUserAndComment from '../components/useRandomUserAndComment';
import { ForumPost } from "../layout/ForumPost";
import { ForumComment } from "../components/ForumComment";

export function PostPage() {
  const { id } = useParams();
  const { randomUsers, randomComments } = useRandomUserAndComment();

  const randomUser = randomUsers[0];
  const randomComment1 = randomComments[0];
  const randomComment2 = randomComments[1];

  return (
    <div className="w-full h-full bg-[#ff9999] p-32 px-4">
      <h2 className="text-5xl mb-4">Post {id}</h2>
      <ForumPost>
        {randomUser && randomComment1 && (
          <ForumComment
            author={randomUser.name}
            date="2022-01-01"
            content={randomComment1.body}
            src={"https://source.unsplash.com/random/501x500"}
          />
        )}
        {randomUser && randomComment2 && (
          <ForumComment
            author={randomUser.name}
            date="2023-05-12"
            content={randomComment2.body}
            src={"https://source.unsplash.com/random/700x600"}
          />
        )}
      </ForumPost>
    </div>
  );
}