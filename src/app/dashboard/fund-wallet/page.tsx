import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/currentUser";

import { PaymentSection } from "./payment-section";

export default async function FundPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div>
      Fund Wallet
      <PaymentSection user={user} />
    </div>
  );
}
