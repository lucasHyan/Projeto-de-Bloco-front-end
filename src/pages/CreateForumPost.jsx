import React from "react";
import { GlobalStore } from "../GlobalStore";
import { useNavigate } from "react-router-dom";
import { CreateForumPostForm } from "../components/CreateForumPostForm";

export function CreateForumPost() {
  const addForumPost = GlobalStore((state) => state.addForumPost);
  const user = GlobalStore((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    const post = {
      title: values.title,
      body: values.description,
      author: user.username,
    };
    try {
      addForumPost(post, user.username);
      setSubmitting(false);
      const lastPostId = GlobalStore.getState().lastPostId;
      navigate(`/post/${lastPostId}`);
    } catch (error) {
      setErrors({ submit: "There was an error submitting the post." });
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-5xl font-roboto leading-tight text-highlight text-center">
        Novo Post
      </h2>
      <CreateForumPostForm onSubmit={onSubmit} />
    </div>
  );
}
