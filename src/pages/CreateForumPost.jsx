import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GlobalStore } from "../GlobalStore";
import { useNavigate } from "react-router-dom";

export function CreateForumPost() {
  const addForumPost = GlobalStore((state) => state.addForumPost);
  const user = GlobalStore((state) => state.user);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, "Title must be at least 5 characters")
        .max(100, "Title must be at most 100 characters")
        .required("Required"),
      content: Yup.string()
        .min(10, "Content must be at least 10 characters")
        .max(1000, "Content must be at most 1000 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const post = {
        title: values.title,
        body: values.content,
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

      {formik.errors.submit && <div>{formik.errors.submit}</div>}

      <button type="submit">Submit</button>
    </form>
  );
}
