"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

import { makeInvestment } from "@/actions/user";
import { db } from "@/db";
import { Packages, User } from "@/db/schema";

export const InvestBtn = ({ user, plan }: { user: User; plan: Packages }) => {
  const userId = user.id;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  if (!user) {
    redirect("/login");
  }

  const handleInvestment = async () => {
    setLoading(true);
    if (!plan.minInvestment || !user.wallet) return;

    if (user.wallet < plan.minInvestment) {
      setError("Balance is low. Please fund account.");
      setLoading(false);
    }
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("transId", plan.id);
    formData.append("title", plan.title);
    formData.append("amount", plan.minInvestment.toString());

    console.log(formData);
    //invest in DB
    try {
      const res = await makeInvestment(formData);

      if (!res?.success) {
        setError(res?.message);
      }
      setLoading(false);
    } catch (error) {
      setError("Something went wrong.");
    } finally {
    }
  };

  return (
    <>
      {loading ? (
        <p className="absolute top-1/2 right-1/2 animate-pulse">Loading...</p>
      ) : error ? (
        <div className="absolute top-0 right-0 flex h-screen w-screen flex-col items-center justify-center bg-black/10">
          <div className="flex flex-col gap-4 bg-white p-6">
            <p>{error}</p>
            <div className="flex justify-between">
              <Link href="/dashboard">Fund wallet</Link>
              <button onClick={() => setError(null)}>Go Back</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <button onClick={handleInvestment}>Invest</button>
    </>
  );
};
