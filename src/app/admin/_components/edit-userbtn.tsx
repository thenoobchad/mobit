"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { MdEditSquare } from "react-icons/md";

import { editUser } from "@/actions/admin";
type User = {
  id: string;
  email: string;
  wallet: number;
  role: string;
};

export const EditUserbtn = (user: User) => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState({
    userId: user.id,
    wallet: String(user.wallet),
    role: user.role,
  });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //     console.log(data)
  // }, [data])

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", data.userId);
    formData.append("wallet", data.wallet);
    formData.append("role", data.role);

    const res = await editUser(formData);

    if (res?.success) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <p className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <MdEditSquare />
      </p>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 flex h-screen w-screen flex-col items-center justify-center bg-black/10">
          <div className="flex flex-col bg-white p-4">
            <div className="flex justify-between py-4">
              <h4 className="text-lg font-bold">Edit User Details</h4>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <label htmlFor="">Wallet Balance:</label>
                <input
                  type="text"
                  onChange={onChangeHandler}
                  name="wallet"
                  value={data.wallet as string}
                  placeholder="Enter amount"
                  className="h-10 border border-zinc-200 px-2 focus:outline-0"
                />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="">User Role:</label>
                <select
                  name="role"
                  onChange={onSelectHandler}
                  id="role"
                  value={data.role}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <input
                  hidden
                  type="text"
                  name="id"
                  value={user.id}
                  onChange={onChangeHandler}
                  placeholder=""
                />
              </div>
              <button className="">Save</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
