"use server";

import { revalidatePath } from "next/cache";

import { eq, sql } from "drizzle-orm";
import z from "zod";


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
  
  return {
    success: true,
    data: "hi there",
  };
}

export async function toggleRole(userId: string) {

}

//Delete user from database
export async function deleteUser(userId: string) {

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
 
}

//update user transaction status
export async function updateStatus(
  status: "approved" | "pending" | "failed",
  id: string
) {
  
}

export async function markNotificationAsRead (notificationId: string) {

}
