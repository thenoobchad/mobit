"use client";

import Link from "next/link";
import { ChangeEvent, useActionState, useEffect, useState } from "react";

import { login } from "@/actions/auth";
import { InputField } from "@/components/input";
import { SubmitButton } from "@/components/submit-button";

export const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const { success, message } = await login(undefined, formData);

    if (!success) {
      setMessage(message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex max-w-[350px] flex-col">
      <div className="flex flex-col gap-4">
        <InputField
          onChange={onChangeHandler}
          value={data.email}
          type="text"
          name="email"
          id="email"
          placeholder="e.g. user@gmail.com"
        />

        <InputField
          onChange={onChangeHandler}
          value={data.password}
          type="text"
          name="password"
          id="password"
          placeholder="e.g. ********"
        />
        {message && (
          <p className="text-center text-sm text-red-500 italic">{message}</p>
        )}
        <SubmitButton caption="Login in" />
      </div>
      <p className="text-center text-zinc-600">
        Don't have an account? <Link href="/register">Register</Link>{" "}
      </p>
    </form>
  );
};
