"use client";

import Link from "next/link";

export const UserSidebar = () => {
  return (
    <div className="min-h-screen border-r border-zinc-400 p-2 md:relative md:w-[200px] lg:w-[300px]">
      <Link href="/" className="flex h-10 items-center pl-4">
        Eiobit.io
      </Link>
      <ul className="mt-4 flex w-full flex-col gap-4 pl-4 text-sm">
        <li className="hover:underline">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard">Fund wallet</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard">Withdrawal</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard">Investments</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard">Transactions</Link>
        </li>

        <li className="hover:underline">
          <Link href="/dashboard">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
