import React from "react";

import { logout } from "@/actions/auth";
import { getCurrentUserById } from "@/lib/currentUser";

export const UserHeader = async () => {
  const user = await getCurrentUserById();
  return (
    <header className="flex justify-between p-4">
      <div>{user?.email ?? "user"}</div>
      <button className="cursor-pointer hover:underline" onClick={logout}>
        Logout
      </button>
    </header>
  );
};
