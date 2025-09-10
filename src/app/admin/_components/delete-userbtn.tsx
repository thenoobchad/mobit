"use client";

import { RiDeleteBin4Fill } from "react-icons/ri";

import { deleteUser } from "@/actions/admin";

export const DeleteUserBtn = ({ userId }: { userId: string }) => {
  const onDeletHandler = async () => {
    const res = await deleteUser(userId);
  };
  return (
    <button className="cursor-pointer" onClick={onDeletHandler}>
      <RiDeleteBin4Fill color="red" />
    </button>
  );
};
