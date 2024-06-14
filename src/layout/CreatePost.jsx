import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class Post {
  constructor(username, profilePicture, title, content, date) {
    this.user = {
      username: username,
      profilePicture: profilePicture,
    };
    this.title = title;
    this.content = content;
    this.date = date;
  }
}

const PostSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  profilePicture: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  content: Yup.string().required("Required"),
});

export function CreatePost() {
  return (
    <div>
      <h1>Create a new post</h1>
      <Formik
        initialValues={{
          username: "",
          profilePicture: "",
          title: "",
          content: "",
        }}
        validationSchema={PostSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const post = new Post(
              values.username,
              values.profilePicture,
              values.title,
              values.content,
              new Date().toISOString()
            );
            console.log(post);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" />
            <Field
              type="text"
              name="profilePicture"
              placeholder="Profile Picture URL"
            />
            <ErrorMessage name="profilePicture" component="div" />
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="div" />
            <Field type="text" name="content" placeholder="Content" />
            <ErrorMessage name="content" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
