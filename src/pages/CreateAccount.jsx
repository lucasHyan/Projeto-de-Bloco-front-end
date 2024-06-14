import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GlobalStore } from "../GlobalStore";

export function CreateAccount() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Nome é obrigatório"), 
    password: Yup.string().required("Senha é obrigatória"),
  });

  const addAccount = GlobalStore((state) => state.addAccount);
  const login = GlobalStore((state) => state.login);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          addAccount(values);
          login(values.username, values.password);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" placeholder="Nome" /> 
          <ErrorMessage name="username" component="div" /> 
          <Field type="password" name="password" placeholder="Senha" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Criar Conta
          </button>
        </Form>
      )}
    </Formik>
  );
}