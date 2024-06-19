import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ForumComment } from "../layout/ForumPost/ForumComment";
import { PostHeader } from "../layout/ForumPost/PostHeader";
import { PostContent } from "../layout/ForumPost/PostContent";
import { CommentForm } from "../layout/ForumPost/CommentForm";
import { GlobalStore } from "../GlobalStore";

const findPostById = (id) => {
  const numId = Number(id);
  const post = GlobalStore((state) => state.posts.find((p) => p.id === numId));
  if (!post) {
    console.error(`Post with id: ${numId} not found`);
  }
  return post;
};

const findUserByUsername = (username) => {
  const user = GlobalStore((state) =>
    state.accounts.find((account) => account.username === username)
  );
  return user;
};

export function ForumPost() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const post = findPostById(id);
  const user = post ? findUserByUsername(post.author) : null;
  const isLoggedIn = GlobalStore((state) => state.isLoggedIn);
  const loggedInUser = GlobalStore((state) => state.user);
  const upvotePost = GlobalStore((state) => state.upvotePost);
  const downvotePost = GlobalStore((state) => state.downvotePost);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  const handleCommentSubmit = (values) => {
    setComments([...comments, values]);
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
      <div className="bg-white shadow-lg rounded-lg border-t border-l border-r  border-black max-w-[1200px] mx-auto">
        <PostHeader
          title={post.title}
          onReport={() => alert("O post foi denunciado")}
          onBack={() => navigate("/")}
          onCopyLink={copyToClipboard}
        />
        <PostContent
          src={user.image}
          author={user.username}
          date={post.date}
          content={post.body}
          id={post.id}
          points={post.points}
          onUpvote={() => upvotePost(post.id, loggedInUser)}
          onDownvote={downvotePost}
        />
        {comments.map((comment, index) => (
          <ForumComment
            key={index}
            content={comment.message}
            date={comment.date}
            author={loggedInUser ? loggedInUser.username : "Anônimo"}
            src={loggedInUser ? loggedInUser.image : ""}
          />
        ))}
        {renderCommentForm()}
      </div>
    </div>
  );
}
