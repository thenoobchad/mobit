import Link from "next/link";



export default async function InvestmentPage() {
  const allPackages = [
    {
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
    },
  ]; 
  return (
    <div>
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
            <Link href="/">Subscribe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
