import { cache } from "react";

import { eq } from "drizzle-orm";

import { getUserFromSession } from "@/actions/auth";
import { db } from "@/db";
import { users } from "@/db/schema";

export const getCurrentUser = cache(async () => {
  return await getUserFromSession();
});

export const getCurrentUserById = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser?.id) return null;

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.id, currentUser.id));
  return user;
};