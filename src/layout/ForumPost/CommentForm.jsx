import React from 'react';
import { Formik, Form, Field } from 'formik';

const CommentForm = ({ onSubmit }) => (
  <Formik initialValues={{ message: "" }} onSubmit={onSubmit}>
    <Form
      className="grid grid-rows-1 grid-cols-1 w-full font-roboto gap-1"
      style={{ gridTemplateAreas: `"message message"` }}
    >
      <Field
        as="textarea"
        name="message"
        placeholder="Seu comentário"
        className="w-full px-3 border focus:border-primary focus:outline-none "
        style={{ gridArea: "message" }}
      />
      <button
        type="submit"
        className="ml-auto px-4 py-2 border bg-primary hover:bg-highlight focus:border-primary focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase"
      >
        Comentar
      </button>
    </Form>
  </Formik>
);

export default CommentForm;