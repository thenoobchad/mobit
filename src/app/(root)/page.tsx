import { HandCoins, User, UserCircle, UserRound, Wallet } from "lucide-react";



import { Button } from "@/components/button";
import { Converter } from "@/components/converter/converter";
import { FaqModal } from "@/components/faq-modal";
import { MultiCarousel } from "@/components/multi-carousel";
import { Notifications } from "@/components/notifications";
import { SubCard } from "@/components/sub-card";
import { faqs, footer, plans, stat, uniqueness } from "@/constant/data";





const transactions = [
  {
    name: "Frank Dalis",
    type: "withdrawa",
    amount: 8000,
  },
  {
    name: "Anita75",
    type: "deposit",
    amount: 1000,
  },
  {
    name: "Richie",
    type: "deposit",
    amount: 5000,
  },
  {
    name: "Stan65",
    type: "withdrawal",
    amount: 10500,
  },
  {
    name: "Mariam",
    type: "deposit",
    amount: 2500,
  },
  {
    name: "James",
    type: "withdrawal",
    amount: 500,
  },
  {
    name: "Andrew",
    type: "deposit",
    amount: 1000,
  },
  {
    name: "Kevin",
    type: "withdrawal",
    amount: 3000,
  },
];
export default async function Home() {
  const allPackages = null;
  return (
    <main className="w-full flex-col px-5 sm:px-3 relative">
      {/* HERO SECTION */}
      <section id="home" className="relative mx-auto my-30 max-w-6xl">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-6 pb-8">
            <h1 className="mt-10 text-5xl leading-12 font-extrabold uppercase">
              Fast & Secure <br /> Cryptocurrency Investment
            </h1>

            <p className="font-[14px] text-black/50">
              A cutting-edge platform to buy and sell cryptocurrency wiyh
              top-tier security and lightning-fast transactions.
            </p>

            <Button title="Get Started" />
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section id="home" className="mx-auto max-w-6xl bg-white">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-6">
          <div className="absolute -top-15 z-70 flex gap-3"></div>
        </div>
      </section>

      <section id="home" className="mx-auto max-w-6xl bg-white">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-2 px-2">
          <div className="mb-8 flex flex-col lg:flex-row">
            {stat.map((stat) => {
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center rounded-lg p-6 lg:px-10"
                >
                  <p className="uppercase">{stat.title}</p>
                  <h4 className="text-2xl font-semibold">{stat.figure}</h4>
                </div>
              );
            })}
          </div>

          <h4>About Us</h4>
          <p>
            We are an international financial company engaged in investment
            activities, which are related to trading on financial markets and
            cryptocurrency exchanges performed by qualified professional
            traders.
          </p>
          <p>
            Our goal is to provide our investors with a reliable source of
            income, while minimizing any possible risks and offer a high quality
            service, allowing us to automate and simplify the relations between
            the investors and the trustees. We work towards increasing your
            profit margin by profitable investment. We look forward to you being
            part of our community.
          </p>

          <div className="my-8">
            <Button title="More Info" />
          </div>
        </div>
      </section>

      {/* INVESTMENT SECTION */}
      <section id="home" className="mx-auto my-30 max-w-6xl bg-white">
        <div className="relative flex w-full flex-col items-center justify-center gap-2">
          <h1 className="mt-20 mb-10">Investment Plans</h1>
          <div className="flex w-full flex-col flex-wrap justify-center gap-8 md:flex-row">
            {plans.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <SubCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET TO KNOW US */}

      <section id="home" className="mx-auto my-30 max-w-6xl bg-white">
        <div className="relative flex w-full flex-col items-center justify-center gap-2">
          <h4 className="my-10">Why Choose Mobit</h4>
          <p>
            Our goal is to provide our investors with a reliable source of high
            income. While minimizing any possible risks and offering a
            high-quality service.
          </p>

          <div className="my-6 grid grid-cols-12 gap-4">
            {uniqueness.map((data, index) => (
              <div
                key={index}
                className="col-span-12 rounded border border-zinc-200 p-3 sm:col-span-6 md:col-span-4"
              >
                <div className="mb-4 flex gap-4">
                  <span>
                    <data.icon />
                  </span>
                  {data.heading}
                </div>
                <div className="text-sm"> {data.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKD */}

      <section id="home" className="mx-auto my-30 max-w-6xl bg-white">
        <div className="relative flex w-full flex-col items-center justify-center gap-2">
          <h4>How Mobit Works</h4>
          <p>
            Get involved in our tremendous platform and invest. We will utilize
            your capital to produce profit in your wallet automatically.
          </p>
          <div className="my-4 grid grid-cols-12 gap-10">
            <div
              className={`col-span-12 flex flex-col items-center gap-4 md:col-span-6`}
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-3">
                <UserRound size={30} />
                <span className="absolute top-1 -right-1.5 flex h-6.5 w-6.5 items-center justify-center rounded-full border-3 text-xs">
                  01
                </span>
              </div>
              <h4 className="whitespace-nowrap">Create Account</h4>
            </div>
            <div
              className={`col-span-12 flex flex-col items-center gap-4 md:col-span-6`}
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-3">
                <HandCoins size={30} />
                <span className="absolute top-1 -right-1.5 flex h-6.5 w-6.5 items-center justify-center rounded-full border-3 text-xs">
                  03
                </span>
              </div>
              <h4 className="whitespace-nowrap">Invest in Plan</h4>
            </div>
            <div
              className={`col-span-12 flex flex-col items-center gap-4 md:col-span-12`}
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-3">
                <Wallet size={30} />
                <span className="absolute top-1 -right-1.5 flex h-6.5 w-6.5 items-center justify-center rounded-full border-3 text-xs">
                  03
                </span>
              </div>
              <h4 className="whitespace-nowrap">Get Profit</h4>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}

      <section id="home" className="relative mx-auto max-w-6xl bg-white">
        <div className="inset-0 flex h-full w-full flex-col items-center justify-center">
          <h4 className="text-accent text-lg">Reviews & FAQs</h4>
          <p className="mt-4 text-sm text-zinc-700">
            We answer some of your Frequently Asked Questions regarding our
            platform. if you have a query that is not answered here. Please
            contact us.
          </p>
          <div className="mt-6 flex w-full flex-col gap-y-7">
            {faqs.map((faq) => (
              <FaqModal
                key={faq.id}
                title={faq.title}
                description={faq.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section id="home" className="relative mx-auto my-30 max-w-6xl bg-white">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1>What our Users and Partners say about Us</h1>
          <p>
            Numbers speak volume, results are evidence of our dedicated team of
            hardworking individuals
          </p>

          <div className="my-10 h-full w-full overflow-hidden">
            <MultiCarousel />
          </div>
        </div>
      </section>

      {/* OUR TEAM */}

       <section id="home" className="relative mx-auto my-30 max-w-6xl bg-white">
        <div className="flex h-full w-full flex-col items-center justify-center">
           <h1>Our Team</h1>
          <p>
            Numbers speak volume, results are evidence of our dedicated team of
            hardworking individuals
          </p>
        </div>
        </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid h-full max-w-[700px] grid-cols-2 items-start gap-4 px-5 py-6 sm:flex sm:flex-row sm:justify-between sm:px-3">
          {footer.map((item) => (
            <div key={item.head} className="flex flex-col gap-2">
              <h1>{item.head}</h1>

              {item.list ? (
                <ul>
                  {item.list.map((link) => {
                    if ("icon" in link) {
                      return (
                        <li
                          key={link.link}
                          className="hover:text-accent flex cursor-pointer items-center gap-2 text-[14px] text-black/70"
                        >
                          <span aria-hidden>{link.icon}</span>
                        </li>
                      );
                    }

                    // now TypeScript knows `link` has `title`
                    return (
                      <li
                        key={link.link}
                        className="hover:text-accent cursor-pointer text-[14px] text-black/70"
                      >
                        {link.title}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-[14px] text-black/70">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <Notifications transactions={transactions} />
    </main>
  );
}