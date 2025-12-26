import { redirect } from "next/navigation";


import { PaymentSection } from "./payment-section";

export default async function FundPage() {
  const user = {
    id: "3124124",
    role:"admin"
  }
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
