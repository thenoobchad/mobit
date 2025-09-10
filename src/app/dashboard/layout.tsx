import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

import { getCurrentUser } from "@/lib/currentUser";

import { UserHeader } from "./_components/user-header";
import { UserSidebar } from "./_components/user-sidebar";

export default async function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex w-full">
      <UserSidebar />
      <main className="w-full overflow-y-auto">
        <UserHeader />
        <section className="p-2">{children}</section>
      </main>
    </div>
  );
}
