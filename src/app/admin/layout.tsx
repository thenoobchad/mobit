import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

import { getCurrentUser } from "@/lib/currentUser";

import { AdminSidebar } from "./_components/admin-sidebar";
import { Header } from "./_components/header";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  // if (!user) {
  //   redirect("/");
  // }

  return (
    <div className="flex w-full">
      <AdminSidebar />
      <main className="w-full overflow-y-auto">
        <Header />
        <section className="mt-4 p-2">{children}</section>
      </main>
    </div>
  );
}
