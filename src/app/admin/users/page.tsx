import React from "react";

import { db } from "@/db";
import { users } from "@/db/schema";
import { getDatabaseUsers } from "@/lib/databaseQueries";

import { DeleteUserBtn } from "../_components/delete-userbtn";
import { EditUserbtn } from "../_components/edit-userbtn";

export default async function UsersPage() {
  const { databaseUsers: usersData } = await getDatabaseUsers();
  return (
    <div>
      <table className="mx-auto my-4 w-full">
        <thead>
          <tr className="my-4 border-b border-zinc-300">
            <td>Email</td>
            <td>Username</td>
            <td>Role</td>
            <td>Balance</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.username || "null"}</td>
              <td>{user.role}</td>
              <td>$ {user.wallet}</td>
              <td className="flex items-center gap-1 p-2">
                <EditUserbtn {...user} /> <DeleteUserBtn userId={user?.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
