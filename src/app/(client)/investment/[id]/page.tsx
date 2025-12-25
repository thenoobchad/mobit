import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";



import { InvestBtn } from "../invest-btn";

// cSpell:ignore ewkfjhfhjdfkh rhjfkf noteone notetwo notethree notefour erdfsefdfs

type Transaction = {
  id: string;
  title: string;
  amount: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  type: string;
};

type AppUser = {
  id: string;
  username: string;
  email: string;
  password: string;
  salt: string;
  role: "admin" | "user";
  container: number | null;
  wallet: number | null;
  transactions: Transaction[] | null;
  createdAt: Date;
  updatedAt: Date;
};

const Data = {
  id: "671524",
  title: "deposit",
  amount: 6527,
  userId: "24ewkfjhfhjdfkh",
  createdAt: new Date(),
  updatedAt: new Date(),
  status: "pending",
  type: "withdrawal",
};

const plan = {
  id: "4rhjfkf",
  title: "Basic plan",
  description: "pro invest",
  minInvestment: 3434,
  noteone: "cheap",
  notetwo: "deal in",
  notethree: "failed",
  notefour: "well",
  updatedAt: new Date(),
  createdAt: new Date(),
};

export default async function InvestmentPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: investmentId } = params; // renamed to avoid "declared but never read"

  // Provide an explicitly-typed user so `role` is narrowed to the union
  const user: AppUser = {
    id: "32132",
    role: "admin", // now matches "admin" | "user"
    username: "josh",
    password: "342353533",
    email: "dean@gmail.com",
    createdAt: new Date(),
    salt: "2343erdfsefdfs",
    updatedAt: new Date(),
    container: 65,
    wallet: 765,
    transactions: [Data],
  };

  if (!user) {
    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div>
        {/* <h4>The details of {plan.title}</h4>
        <p>The plan offers a {plan.description} with a minimum investment of {plan.minInvestment}</p>
        <p>Our Clients enjoy {plan.noteone}, {plan.notetwo}, {plan.notethree} and {plan.notefour}</p> */}
      </div>
      <div className="flex gap-4">
        <InvestBtn user={user} plan={plan} />
        <Link href="/dashboard">Cancel</Link>
      </div>
    </div>
  );
}