import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GlobalStore } from "../GlobalStore";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export function LoginForm() {
  const { login, accounts, user } = GlobalStore((state) => ({
    login: state.login,
    accounts: state.accounts,
    user: state.user,
  }));

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Current accounts:", accounts);
      login(values.username, values.password);
      console.log("Current user:", user);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
}