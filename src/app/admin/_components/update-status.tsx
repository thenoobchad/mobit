"use client";

import { ChangeEvent, useEffect, useState } from "react";

import z from "zod";

import { updateStatus } from "@/actions/admin";

export const UpdateStatus = ({
  status,
  id,
}: {
  status: "approved" | "failed" | "pending" | null;
  id: string;
}) => {
  const [approved, setIsApproved] = useState(false);
  const [declined, setIsDeclined] = useState(false);
  const [data, setData] = useState<"approved" | "pending" | "failed">(
    "pending"
  );
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", onClose);
  }, []);

  const onApproveHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsApproved(e.target.checked);
    setIsDeclined(false);
    if (e.target.checked) {
      setData("approved");
      //database call

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsOpen(false);
    }
  };

  const onDeclineHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setIsDeclined(e.target.checked);
    if (e.target.checked) {
      setData("failed");
      //database call

      setIsOpen(false);
    }

    console.log(e.target.value as typeof data);
  };
  return (
    // <select name="status" onChange={onChangeHandler}>
    //   <option defaultChecked value="null">Pending</option>
    //   <option value="success">Success</option>
    //   <option value="failed">Failed</option>
    // </select>
    <div className="relative flex">
      <div className="flex gap-2">
        {status}
        <span onClick={() => setIsOpen((prev) => !prev)}>x</span>
      </div>
      {isOpen && (
        <div className="absolute z-10 flex w-fit flex-col items-end justify-end bg-white p-2">
          <div className="flex items-center gap-2">
            <span>Approve</span>
            <input
              type="checkbox"
              onChange={onApproveHandler}
              checked={approved}
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Decline</span>
            <input
              type="checkbox"
              onChange={onDeclineHandler}
              checked={declined}
            />
          </div>
        </div>
      )}
    </div>
  );
};
