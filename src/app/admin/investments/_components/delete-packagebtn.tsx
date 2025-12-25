"use client";

import { RiDeleteBin4Fill } from "react-icons/ri";



export const DeletePackageBtn = ({ packageId }: { packageId: string }) => {
  const onDeletHandler = async () => {
    
  };
  return (
    <button className="cursor-pointer" onClick={onDeletHandler}>
      <RiDeleteBin4Fill color="red" />
    </button>
  );
};
