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
          <Link href="/dashboard/fund-wallet">Fund wallet</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard/withdrawal">Withdrawal</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard/investments">Investments</Link>
        </li>
        <li className="hover:underline">
          <Link href="/dashboard/transactions">Transactions</Link>
        </li>

        <li className="hover:underline">
          <Link href="/dashboard/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
