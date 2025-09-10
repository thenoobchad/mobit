import Link from "next/link";

import { getPackages } from "@/lib/databaseQueries";

export default async function Home() {
  const allPackages = await getPackages();
  if (!allPackages) return <div>No packages found</div>;

  return (
    <main className="px-4">
      <section id="home" className="h-[900px]">
        Hero section
      </section>
      <section id="about" className="h-[900px]">
        About section
      </section>
      <section id="services" className="h-[900px]">
        Services section
      </section>
      <section id="investment" className="h-[900px]">
        Investment section
        <div className="flex flex-wrap justify-center gap-4">
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
      </section>
      <section id="faq" className="h-[900px]">
        Review & FQ section
      </section>
      <section className="h-[900px]">Footer section</section>
    </main>
  );
}
