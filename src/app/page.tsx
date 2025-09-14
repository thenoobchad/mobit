import Link from "next/link";



import { getPackages } from "@/lib/databaseQueries";
import { Header } from "@/components/header";

export default async function Home() {
  const allPackages = await getPackages();
  if (!allPackages) return <div>No packages found</div>;

  return (
    <main>
      <section
        id="home"
        className="relative min-h-screen bg-[url('/images/backgroundimage.jpg')] bg-cover bg-center"
      >
        <div className="z-30 relative">

        <Header />
        </div>
        <div className="absolute inset-0 bg-white/90">
          <div className="mx-auto h-full max-w-5xl px-2 py-4 pt-30 md:px-0">
            Hero section
          </div>
        </div>
      </section>
      <section id="about" className="min-h-screen">
        <div className="mx-auto h-full max-w-5xl px-2 py-4 md:px-0">
          About section
        </div>
      </section>
      <section id="services" className="min-h-screen">
        <div className="mx-auto h-full max-w-5xl px-2 py-4 md:px-0">
          Services section
        </div>
      </section>
      <section id="investment" className="min-h-screen">
        <div className="mx-auto h-full max-w-5xl px-2 py-4 md:px-0">
          Investment section
        </div>
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
        <div className="mx-auto h-full max-w-5xl px-2 py-4 md:px-0">
          Review & FQ section
        </div>
      </section>
      <section className="min-h-screen">
        <div className="mx-auto h-full max-w-5xl px-2 py-4 md:px-0">
          Footer section
        </div>
      </section>
    </main>
  );
}