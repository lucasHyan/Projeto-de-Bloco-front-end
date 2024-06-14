import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ForumComment } from "../components/ForumComment";
import PostHeader from "../layout/ForumPost/PostHeader";
import PostContent from "../layout/ForumPost/PostContent";
import CommentForm from "../layout/ForumPost/CommentForm";
import { GlobalStore } from "../GlobalStore";

const findPostById = (id) => {
  const numId = Number(id);
  const post = GlobalStore((state) => state.posts.find((p) => p.id === numId));
  if (!post) {
    console.error(`Post with id: ${numId} not found`);
  } else if (!post.author) {
    console.error(`Post with id: ${numId} does not have an author`);
  }
  return post;
};

const findUserByUsername = (username) => {
  const user = GlobalStore((state) =>
    state.accounts.find((account) => account.username === username)
  );
  return user;
};

export function ForumPost({ children }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const post = findPostById(id);
  const user = post ? findUserByUsername(post.author) : null;
  const isLoggedIn = GlobalStore((state) => state.isLoggedIn);
  const loggedInUser = GlobalStore((state) => state.user);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  const handleCommentSubmit = (values) => {
    setComments([...comments, values]);
    // GlobalStore.getState().addCommentToPost(id, {
    //   message: values.comment,
    //   date: new Date().toISOString(),
    //   author: loggedInUser.username,
    //   image: loggedInUser.image,
    // });
  };

  const renderNotFound = () => <div>Post não encontrado</div>;

  const renderCommentForm = () => {
    return isLoggedIn ? (
      <CommentForm onSubmit={handleCommentSubmit} />
    ) : (
      <div>Você precisa estar logado para comentar.</div>
    );
  };

  if (!post || !user) {
    return renderNotFound();
  }

  return (
    <div className="bg-secondary p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-[1200px] mx-auto">
        <PostHeader
          title={post.title}
          onReport={() => alert("O post foi denunciado")}
          onBack={() => navigate("/")}
          onCopyLink={copyToClipboard}
        />
        <PostContent
          photo={user.image}
          author={user.username}
          date={post.date}
          content={post.body}
        />
        {children}
        {comments.map((comment, index) => (
          <ForumComment
            key={index}
            content={comment.message}
            date={comment.date}
            author={loggedInUser.username}
            src={loggedInUser.image}
          />
        ))}
        {renderCommentForm()}
      </div>
    </div>
  );
}
