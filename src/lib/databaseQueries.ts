import { desc } from "drizzle-orm";

import { db } from "@/db";
import { packages, transactions, users } from "@/db/schema";

export const getDatabaseUsers = async () => {
  const allUsers = await db.select().from(users);

  const databaseUsers = allUsers.filter((user) => user.role == "user");

  return {
    success: true,
    databaseUsers,
  };
};

export const getPackages = async () => {
  const allPackages = await db.select().from(packages);

  return allPackages ?? [];
};

export const getTransactions = async () => {
  return await db
    .select()
    .from(transactions)
    .orderBy(desc(transactions.createdAt));
};
