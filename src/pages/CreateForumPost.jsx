import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GlobalStore } from "../GlobalStore";
import { useNavigate } from "react-router-dom";

export function CreateForumPost() {
  const addForumPost = GlobalStore((state) => state.addForumPost);
  const getLastPostId = GlobalStore((state) => state.getLastPostId);
  const user = GlobalStore((state) => state.user);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      content: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const post = {
        title: values.title,
        body: values.content,
        author: user.username,
      };

      setTimeout(() => {
        addForumPost(post, user.username);
        setSubmitting(false);
        navigate(`/post/${getLastPostId()}`);
      }, 400);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && <div>{formik.errors.title}</div>}

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      {formik.errors.content && <div>{formik.errors.content}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}
