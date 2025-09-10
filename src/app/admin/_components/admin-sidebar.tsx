"use client";

import Link from "next/link";

export const AdminSidebar = () => {
  return (
    <div className="min-h-screen border-r border-zinc-400 p-2 md:relative md:w-[200px] lg:w-[300px]">
      <Link href="/" className="flex h-10 items-center pl-4">
        Ebito
      </Link>
      <ul className="mt-4 flex w-full flex-col gap-4 pl-4 text-sm">
        <li className="hover:underline">
          <Link href="/admin">Dashboard</Link>
        </li>
        <li className="hover:underline">
          <Link href="/admin/users">Users</Link>
        </li>
        <li className="hover:underline">
          <Link href="/admin/investments">Investments</Link>
        </li>
        <li className="hover:underline">
          <Link href="/admin/transactions">Transactions</Link>
        </li>
        <li className="hover:underline">
          <Link href="/admin/payments">Payments</Link>
        </li>
        <li className="hover:underline">
          <Link href="/admin/settings">Site settings</Link>
        </li>
      </ul>
    </div>
  );
};
