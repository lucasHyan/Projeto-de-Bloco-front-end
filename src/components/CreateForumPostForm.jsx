import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Titulo deve ter pelo menos 5 caracteres")
    .max(100, "Titulo deve ter no máximo 100 caracteres")
    .required("Obrigatório"),
  description: Yup.string()
    .min(10, "O post deve ter pelo menos 10 caracteres")
    .max(1000, "O post deve ter no máximo 1000 caracteres")
    .required("Obrigatório"),
});

export function CreateForumPostForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col">
          <Field
            type="text"
            name="title"
            placeholder="Título"
            className="w-full px-3 border focus:border-highlight focus:outline-none h-14 my-2"
          />
          <ErrorMessage name="title" component="div" className="text-red-500" />
          <Field
            as="textarea"
            name="description"
            placeholder="Descrição"
            className="w-full px-3 border focus:border-highlight focus:outline-none h-20 my-2"
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto px-4 py-2 border bg-highlight hover:bg-dark-color focus:border-primary focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}