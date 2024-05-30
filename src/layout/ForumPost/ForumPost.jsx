import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForumComment } from '../../components/ForumComment';
import PostHeader from './PostHeader';
import PostContent from './PostContent';
import CommentForm from './CommentForm';

export function ForumPost({
  title = "Placeholder Title",
  content = "Placeholder Content",
  author = "Placeholder Author",
  date = "Placeholder Date",
  photo = "https://source.unsplash.com/random/600x600",
  children,
}) {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  const handleCommentSubmit = (values, { setSubmitting }) => {
    setComments([...comments, values.message]);
    setSubmitting(false);
  };

  return (
    <div className="bg-secondary p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-[1200px] mx-auto">
        <PostHeader
          title={title}
          onReport={() => alert("O post foi denunciado")}
          onBack={() => navigate("/")}
          onCopyLink={copyToClipboard}
        />
        <PostContent
          photo={photo}
          author={author}
          date={date}
          content={content}
        />
        {children}
        {comments.map((comment, index) => (
          <ForumComment key={index} content={comment} />
        ))}
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
}