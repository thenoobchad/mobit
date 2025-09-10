"use client";

import { ChangeEvent } from "react";

type InputFieldType = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
}: InputFieldType) => (
  <div className="flex w-full flex-col gap-2">
    <label htmlFor={name} className="text-sm capitalize">
      {name}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      required
      className="h-10 w-full border border-zinc-400 bg-zinc-200 px-4 focus:outline-none"
    />
  </div>
);
