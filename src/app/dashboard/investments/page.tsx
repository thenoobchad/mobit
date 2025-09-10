import { getPackages } from "@/lib/databaseQueries";
import Link from "next/link";

export default async function InvestmentPage() {

   const { allPackages } = await getPackages();
  return <div>
    <div className="flex gap-4">
    {allPackages.map((plan) => (
                <div
                  className="flex min-w-[200px] flex-col gap-2 p-2 outline"
                  key={plan.id}
                >
                  <h4 className="text-xl font-semibold capitalize">{plan.title}</h4>
                  <p className="text-center text-5xl">{plan.minInvestment}</p>
                  <p>{plan.description}</p>
                  <div>
                    <ul>
                      <li>+ {plan.noteone}</li>
                      <li>+ {plan.notetwo}</li>
                      <li>+ {plan.notethree}</li>
                      <li>+ {plan.notefour}</li>
                    </ul>
                  </div>
                  <Link href={`/investment/${plan.id}`}>Subscribe</Link>
                </div>
              ))}
</div>
  </div>;
}
