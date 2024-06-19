import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "O nome de usuário deve ter pelo menos 5 caracteres")
    .max(30, "O nome de usuário deve ter no máximo 30 caracteres")
    .required("Obrigatório"),
  password: Yup.string()
    .min(5, "A senha deve ter pelo menos 5 caracteres")
    .required("Obrigatório"),
});

export function CreateAccountForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col">
          <Field
            type="text"
            name="username"
            placeholder="Nome de usuário"
            className="w-full px-3 border focus:border-highlight focus:outline-none h-14 my-2"
          />
          <ErrorMessage name="username" component="div" className="text-red-500" />
          <Field
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full px-3 border focus:border-highlight focus:outline-none h-14 my-2"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto px-4 py-2 border bg-highlight hover:bg-dark-color focus:border-primary focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase"
          >
            Criar Conta
          </button>
        </Form>
      )}
    </Formik>
  );
}