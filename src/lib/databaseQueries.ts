import { desc } from "drizzle-orm";



import { db } from "@/db";
import { notifications, packages, transactions, users } from "@/db/schema";





export const getDatabaseUsers = async () => {
  const allUsers = await db.select().from(users);

  const databaseUsers = allUsers.filter((user) => user.role == "user");

  return {
    success: true,
    databaseUsers,
  };
};

export const getPackages = async () => {
  // const allPackages = await db?.select()?.from(packages) ;
  
  return [
    {id: "123",
    title: "Premium",
    description: "Real Dem",
    minInvestment: 5,
    noteone: null,
    notetwo: null,
    notethree: null,
    notefour: null,
    createdAt: "12-23-2035",
      updatedAt: "12-23-2035",
    }
  ];
};

export const getTransactions = async () => {
  return await db
    .select()
    .from(transactions)
    .orderBy(desc(transactions.createdAt));
};

//fetch notifications
export const getNotifications = async () => {
  try {
    const notificationsList = await db?.select()?.from(notifications)?.orderBy(desc(notifications.createdAt))
    return notificationsList;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw new Error("Failed to fetch notifications");
  }
}