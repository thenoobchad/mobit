import React from "react";

type SubmitButtonType = {
  caption: string;
  disabled?: boolean;
};

export const SubmitButton = ({ caption, disabled }: SubmitButtonType) => {
  const isPending = false;
  return (
    <button
      type="submit"
      className={`my-2 h-10 w-full bg-zinc-800 text-sm font-semibold tracking-wider text-white hover:bg-zinc-700`}
      disabled={isPending}
    >
      {caption}
    </button>
  );
};
