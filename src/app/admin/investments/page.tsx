
import { DeletePackageBtn } from "./_components/delete-packagebtn";
import { PackageForm } from "./package-form";

const allPackages = [
  {
    id:"1234",
    title:"sold",
    description: "basic",
    minInvestment: 4545,
  }
]
export default async function InvestmentPage() {
 

  if (!allPackages) {
    return <p>No packages..</p>;
  }

  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h4>Investment Plans</h4>
        <PackageForm />
      </div>
      <div>
        <table className="my-4 w-full">
          <thead>
            <tr className="border-b border-zinc-600">
              <td className="py-1">Title</td>
              <td className="py-1">Description</td>
              <td className="py-1">Min</td>
              <td className="py-1">Created At</td>
              <td className="py-1">Actions</td>
            </tr>
          </thead>
          <tbody>
            {allPackages.map((plan) => (
              <tr key={plan.id} className="border-b border-zinc-300">
                <td className="py-1">{plan.title}</td>
                <td className="py-1">{plan.description}</td>
                <td className="py-1">{plan.minInvestment}</td>
                <td className="py-1"></td>
                <td className="py-1">
                  <DeletePackageBtn packageId={plan.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
