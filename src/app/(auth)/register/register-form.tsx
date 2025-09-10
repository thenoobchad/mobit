"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

import { login, register } from "@/actions/auth";
import { InputField } from "@/components/input";
import { SubmitButton } from "@/components/submit-button";

type RegisterDataType = {
  username: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const [errMsg, setErrMsg] = useState<string[] | undefined>(undefined);
  // const [state, loginAction, isPending] = useActionState(login, undefined)

  const [data, setData] = useState<RegisterDataType>({
    username: "",
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
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = await register(formData);
    // if (res.errors?.username) {
    //   setErrMsg(res.errors.username)
    // } else if (res.errors?.password) {
    //   setErrMsg(res.errors.password)
    // } else if(res.errors?.email) {
    //   setErrMsg(res.errors?.email)
    // }

    // redirect("/dashboard")
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex max-w-[350px] flex-col">
      <div className="flex flex-col gap-4">
        <InputField
          type="text"
          name="username"
          onChange={onChangeHandler}
          value={data.username}
          id="username"
          placeholder="e.g. realuser21"
        />

        <InputField
          type="text"
          name="email"
          id="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="e.g. user@gmail.com"
        />

        <InputField
          type="text"
          name="password"
          id="password"
          onChange={onChangeHandler}
          value={data.password}
          placeholder="e.g. ********"
        />
        {errMsg && <p className="text-sm text-red-500 italic">{errMsg}</p>}
        <SubmitButton caption="Submit" />
      </div>

      <p className="text-center text-zinc-600">
        Already have an account? <Link href="/login">Log in</Link>
      </p>
    </form>
  );
};
