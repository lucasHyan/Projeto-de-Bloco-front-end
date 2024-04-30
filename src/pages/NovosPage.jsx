import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionFlex from "../components/DescriptionFlex";
import useRandomUserAndComment from '../components/useRandomUserAndComment';

export function NovosPage() {
  const { randomUsers, randomComments } = useRandomUserAndComment(4, 4);

  return (
    <div className="w-full h-full bg-[#ff9999] p-32 px-4">
      <div className="flex flex-col items-center justify-center mx-auto max-w-[720px]">
        <h2 className="text-5xl mb-4">Descrição do site</h2>
        {randomUsers.map((user, index) => {
          const postId = Math.random().toString(36).substr(2) + Date.now().toString(36);
          return (
            <Link to={`/post/${postId}`} key={postId}>
              <DescriptionFlex
                src={`https://source.unsplash.com/random/800x600?${index}`}
                author={user ? user.name : "Loading..."}
                date={index === 0 ? "2022-01-01" : "2023-05-12"}
                content={randomComments[index] ? randomComments[index].body : "Loading..."}
                imageOnRight={index % 2 === 1}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}