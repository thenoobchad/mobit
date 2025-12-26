import React from "react";

import { logout } from "@/actions/auth";


const user = {
  id: "23423225552",
  email: "chidielueme@gmail.com",

}

export const UserHeader = async () => {

  return (
    <header className="flex justify-between p-4">
      <div>{user?.email ?? "user"}</div>
      <button className="cursor-pointer hover:underline">
        Logout
      </button>
    </header>
  );
};
