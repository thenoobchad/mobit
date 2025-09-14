import { cache } from "react";

import { eq } from "drizzle-orm";

import { getUserFromSession } from "@/actions/auth";
import { db } from "@/db";
import { users } from "@/db/schema";

export const getCurrentUser = cache(async () => {
  return await getUserFromSession();
});

export const getCurrentUserById = async () => {
  const user = await getCurrentUser();
  if (user != null) {
    return null
  }
};
