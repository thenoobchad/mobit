import { eq } from "drizzle-orm";

import { db } from "@/db";
import { sessions, users } from "@/db/schema";

import { RegisterForm } from "./register-form";

export default async function Register() {
  const regUsers = await db
    .select({ email: users.email, id: users.id })
    .from(users);

  const regUsersSession = await db.select().from(sessions);

  const filteredData = regUsersSession.filter(
    (usersSession) => usersSession.userId == regUsers[0].id
  );

  if (!regUsers) return "No users in databse";

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <h4 className="py-2 text-center text-xl">Sign up</h4>
        <p className="mb-3 text-center">Register account to enter</p>
        <RegisterForm />
      </div>
    </section>
  );
}
