"use server";

import { eq } from "drizzle-orm";
import z, { number } from "zod";

import { db } from "@/db";
import { transactions, users } from "@/db/schema";
import { getCurrentUserById } from "@/lib/currentUser";


const paymentSchema = z.object({
  id: z.string(),
  amount: z.string(),
  mode: z.string(),
});

export async function makePayment(formData: FormData) {

  const { success, data } = paymentSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) {
    return {
      success: false,
      message: "Invalid data",
    };
  }

  const { id, amount, mode } = data;

  try {
    await db
      .update(users)
      .set({
        container: Number(amount),
      })
      .where(eq(users.id, id));

    await db.insert(transactions).values({
      title: "deposit",
      userId: id,
      amount: Number(amount),
      type: "deposit",
    });
    return {
      success: true,
      message: "Payment pending approval.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error making payment.",
    };
  }
}


const InvestmentSchema = z.object({
    userId: z.string(),
  transId: z.string(),
  title: z.string(),
  amount:z.string()
})

export async function makeInvestment(formData: any) {
  console.log("AAAAAAAAAAAA")
  const value = formData.get("amount")

   console.log(typeof value)
  const parsedData = InvestmentSchema.safeParse({
    userId: formData.get("userId"),
    transId: formData.get("transId"),
    title: formData.get("title"),
    amount : formData.get("amount")
  })

  
 
console.log("BBBBBBBBBBBB")
const { data, error } = parsedData
   
  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  console.log("CCCCCCCCCC")
  

  const { userId, transId: id, amount, title } = data
  
    const [user] = await db.select().from(users).where(eq(users.id, userId))
  
  const currentTransactions = user.transactions || []

  const [existingTransaction] = currentTransactions.map((transact) => transact.id === id)

  if (existingTransaction) {
    return {
      success: false,
      message:"Duplicate investment. Choose another Plan."
    }
  }
  const parsedvalue = Number(amount)
  const updatedWallet = user.wallet ? user.wallet  - parsedvalue : null

  const updatedTransactions = [...currentTransactions, { id, title, amount: Number(amount) }] 


   await db.update(users).set({ transactions: updatedTransactions, wallet: updatedWallet }).where(eq(users.id, userId)).returning()
  

  console.log("this is it transactions", user.transactions)
  
  console.log("this is wallet",user.wallet)
}