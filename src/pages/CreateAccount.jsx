import React from "react";
import { GlobalStore } from "../GlobalStore";
import { useNavigate } from "react-router-dom";
import { CreateAccountForm } from "../components/CreateAccountForm";

export function CreateAccount() {
  const addAccount = GlobalStore((state) => state.addAccount);
  const login = GlobalStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      addAccount(values);
      login(values.username, values.password);
      setSubmitting(false);
      navigate(`/`);
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-5xl font-roboto leading-tight text-highlight text-center">
        Nova conta
      </h2>
      <CreateAccountForm onSubmit={onSubmit} />
    </div>
  );
}
