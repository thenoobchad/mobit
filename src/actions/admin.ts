"use server";

import { revalidatePath } from "next/cache";

import { eq, sql } from "drizzle-orm";
import z from "zod";

import { db } from "@/db";
import { notifications, packages, transactions, users } from "@/db/schema";

type PlanType = {
  id: string;
  title: string;
  min: number;
  rate: number;
  description: string;
};

export type InvestmentType = PlanType[];

const InvestmentSchema = z.object({
  title: z.string().trim(),
  min: z.number().min(50, { message: "value cannot be less than 50" }),
  rate: z.number().min(2).max(10),
  description: z.string(),
});

const data = [
  {
    id: "1",
    title: "Basic",
    min: 100,
    rate: 3,
    description: "Flexible and returns",
  },
  {
    id: "2",
    title: "Pro",
    min: 500,
    rate: 9,
    description: "high rate and High returns",
  },
];

export async function getInvestmentPlans() {
  return {
    success: true,
    data: data,
  };
}

export async function createInvestmentPlans(formData: FormData) {
  console.log(formData);
  const validData = InvestmentSchema.safeParse(Object.fromEntries(formData));

  if (!validData.success) {
    console.log("Error check");
    return {
      success: false,
      errors: validData.error.flatten().fieldErrors,
    };
  }

  const { title, min, rate, description } = validData.data;

  const newData = {
    id: String(Math.floor(Math.random() * 10)),
    title,
    min,
    rate,
    description,
  };

  const newList = data.push(newData);

  return {
    success: true,
    data: newList,
  };
}

export async function toggleRole(userId: string) {
  // Fetch the user first
  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  if (!user || user.length === 0) return;

  const currentRole = user[0].role;
  const newRole = currentRole === "admin" ? "user" : "admin";

  await db.update(users).set({ role: newRole }).where(eq(users.id, userId));
}

//Delete user from database
export async function deleteUser(userId: string) {
  await db.delete(users).where(eq(users.id, userId));
  return {
    success: true,
    message: "User removed from database",
  };
}

//Edit database user

const editUserSchema = z.object({
  id: z.string(),
  wallet: z.string(),
  role: z.string(),
});

export async function editUser(formData: FormData) {
  const { success, data, error } = editUserSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) return null;

  const { id: userId, wallet, role } = data;
  // Fetch the user first

  await db
    .update(users)
    .set({
      wallet: Number(wallet),
      role: role as "admin" | "user",
    })
    .where(eq(users.id, userId));

  return {
    success: true,
    message: "User details updated",
  };
}

//create investment package

const packageSchema = z.object({
  title: z.string(),
  description: z.string(),
  minInvestment: z.string(),
  noteone: z.string(),
  notetwo: z.string(),
  notethree: z.string(),
  notefour: z.string(),
});

export async function createPackage(formData: FormData) {
  const { success, data, error } = packageSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) {
    return {
      success: false,
      message: "Enter valid details.",
    };
  }

  const {
    title,
    description,
    minInvestment,
    noteone,
    notetwo,
    notethree,
    notefour,
  } = data;
  const packageAmount = Number(minInvestment);

  try {
    await db
      .insert(packages)
      .values({
        title,
        description,
        minInvestment: packageAmount,
        noteone,
        notetwo,
        notethree,
        notefour,
      })
      .returning({ id: packages.id, title: packages.title });

    return {
      success: true,
      message: "Package created successfully.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error creating package",
    };
  }
}

export async function deletePackage(packageId: string) {
  await db.delete(packages).where(eq(packages.id, packageId));

  return {
    success: true,
    message: "Package delete.",
  };
}

//update user transaction status
export async function updateStatus(
  status: "approved" | "pending" | "failed",
  id: string
) {
  if (status == null) return null;

  await db
    .update(transactions)
    .set({ status: status })
    .where(eq(transactions.id, id));

  await db
    .update(users)
    .set({
      wallet: sql`${users.container} + ${users.wallet}`,
    })
    .where(
      eq(
        users.id,
        (
          await db
            .select()
            .from(transactions)
            .where(eq(transactions.id, id))
            .limit(1)
        )[0].userId
      )
    );

  await db
    .update(users)
    .set({
      container: 0,
    })
    .where(
      eq(
        users.id,
        (
          await db
            .select()
            .from(transactions)
            .where(eq(transactions.id, id))
            .limit(1)
        )[0].userId
      )
    );
}

export async function markNotificationAsRead (notificationId: string) {
  try {
    await db.update(notifications).set({ status: "read" }).where(eq(notifications.id, notificationId))
    return {
      success: true,
      message:"Notification marked as read"
    }
  } catch (error) {
    console.error("Error marking notification as read:", error)
    throw new Error("Failed to mark notification as read")
  }
}
