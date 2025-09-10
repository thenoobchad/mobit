import React from "react";

import { logout } from "@/actions/auth";
import { getCurrentUser, getCurrentUserById } from "@/lib/currentUser";

export const Header = async () => {
  const user = await getCurrentUserById();

  return (
    <header className="w-full">
      <div className="flex h-10 w-full items-end justify-between px-2">
        <p className="flex flex-col">
          {user?.username}
          <span className="text-[10px] text-zinc-600">{user?.email}</span>
        </p>
        <button className="underline hover:text-red-600" onClick={logout}>
          Log out
        </button>
      </div>
    </header>
  );
};
