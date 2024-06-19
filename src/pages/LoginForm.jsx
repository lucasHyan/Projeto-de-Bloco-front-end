import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GlobalStore } from "../GlobalStore";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Obrigatório"),
  password: Yup.string().required("Obrigatório"),
});

export function LoginForm() {
  const login = GlobalStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    login(values.username, values.password);
    navigate("/");
    setSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-5xl font-roboto leading-tight text-highlight text-center">
        Login
      </h2>
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col">
          <Field
            type="text"
            name="username"
            placeholder="Nome de usuário"
            className="w-full px-3 border focus:border-highlight focus:outline-none h-14 my-2"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500"
          />
          <Field
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full px-3 border focus:border-highlight focus:outline-none h-14 my-2"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-auto px-4 py-2 border bg-highlight hover:bg-dark-color focus:border-primary focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase"
          >
            Entrar
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
}
