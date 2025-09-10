"use client";

import { RiDeleteBin4Fill } from "react-icons/ri";

import { deletePackage } from "@/actions/admin";

export const DeletePackageBtn = ({ packageId }: { packageId: string }) => {
  const onDeletHandler = async () => {
    const res = await deletePackage(packageId);
  };
  return (
    <button className="cursor-pointer" onClick={onDeletHandler}>
      <RiDeleteBin4Fill color="red" />
    </button>
  );
};
