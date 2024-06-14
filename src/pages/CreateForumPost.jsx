import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GlobalStore } from '../GlobalStore';

export function CreateForumPost() {
  const addForumPost = GlobalStore(state => state.addForumPost); 

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required'),
      content: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        addForumPost(values); 
        setSubmitting(false);
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
      {formik.errors.title ? <div>{formik.errors.title}</div> : null}

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        onChange={formik.handleChange}
        value={formik.values.content}
      />
      {formik.errors.content ? <div>{formik.errors.content}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};