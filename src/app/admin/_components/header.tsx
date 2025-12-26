import React from "react";

import { logout } from "@/actions/auth";
  
import { AdminInbox } from "./inbox";


export const Header = async () => {
  const user = {username:"Admin", email:"admin@example.com"}

  return (
    <header className="w-full">
      <div className="flex h-10 w-full items-end justify-between px-2">
        <p className="flex flex-col">
          {user?.username}
          <span className="text-[10px] text-zinc-600">{user?.email}</span>
        </p>
        <div className="flex items-center gap-4">
          <AdminInbox />
           <button className="underline hover:text-red-600" onClick={logout}>
          Log out
        </button>
        </div>
       
      </div>
    </header>
  );
};
