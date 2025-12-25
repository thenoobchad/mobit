import { desc } from "drizzle-orm";




import { notifications, packages, transactions, users } from "@/db/schema";
import { id } from "zod/v4/locales";

export const getDatabaseUsers = async () => {

  return {
    success: true,
    data: [
      {id: "24ewkfjhfhjdfkh",
    username: "chidie",
    email: "chidie@gmail.com",
    password: "342353533",
    salt: "sdfdsfsdf",
    role: "admin",
    container: null,
    wallet: null,
    transactions: null,
    createdAt: new Date(),
      updatedAt: new Date()
    }
    ]
  }
}

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
  return [
    {
      id: "trx123",
      title: "Investment",
      amount: 5000,
      userId: "user123",
    }
  ]
};

//fetch notifications
export const getNotifications = async () => {
  try {
   
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw new Error("Failed to fetch notifications");
  }
}