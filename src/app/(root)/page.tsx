import { Button } from "@/components/button";
import { Converter } from "@/components/converter/converter";
import { FaqModal } from "@/components/faq-modal";
import { SubCard } from "@/components/sub-card";
import { faqs, footer, plans, uniqueness } from "@/constant/data";

const stats = [
  {
    number: "6M+",
    desc: "Active Users",
  },
  {
    number: "24/7",
    desc: "User Support",
  },
  {
    number: "160+",
    desc: "Countries",
  },
  {
    number: "$22B+",
    desc: "Trade Volume",
  },
];

export default async function Home() {
  const allPackages = null;
  return (
    <main className="w-full flex-col px-5 sm:px-3">
      {/* HERO SECTION */}
      <section id="home" className="relative mx-auto max-w-6xl">
        <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-6 pb-8">
            <h1 className="text-5xl leading-12 font-extrabold uppercase">
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
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-lg p-6 lg:px-10"
              >
                <p>BITCOIN PRICE</p>
                <h4 className="text-2xl font-semibold">67,594.79 USD</h4>
              </div>
            ))}
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
      <section id="home" className="mx-auto max-w-6xl bg-white">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-2">
          <h1 className="mt-20 mb-10">Investment Plans</h1>
          <div className="flex flex-col flex-wrap justify-center gap-8 md:flex-row w-full">
            {plans.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <SubCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET TO KNOW US */}

      <section id="home" className="mx-auto max-w-6xl bg-white">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-2">
          <h4 className="my-10">Why Choose Mobit</h4>
          <p >
            Our goal is to provide our investors with a reliable source of high
            income. While minimizing any possible risks and offering a
            high-quality service.
          </p>

          <div className="grid grid-cols-12 gap-4 my-6">
            {uniqueness.map((data, index) => (
              <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 p-3 border border-zinc-200 rounded">
                <div>{data.heading}</div>
                <div className="text-sm"> {data.desc}</div>
              </div>
            ))}
          </div>
        </div> 
      </section>


      {/* HOW IT WORKD */}

      <section id="home" className="mx-auto max-w-6xl bg-white">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-2">
          <h4>How Mobit Works</h4>
          <p>Get involved in our tremendous platform and invest. We will utilize your capital to produce profit in your wallet automatically.</p>

          <div></div>
        </div>
      </section>
      

      <section id="stats">
        <div className="grid grid-cols-2 items-center justify-center gap-y-8 bg-white py-8 sm:flex sm:gap-x-18">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="flex flex-col items-center gap-[5px]"
            >
              <h1 className="text-accent text-3xl font-bold sm:text-4xl">
                {stat.number}
              </h1>
              <p className="text-[14px] text-black/70 sm:text-[18px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section id="home" className="relative">
        <div className="inset-0 flex h-full w-full flex-col items-center justify-center">
          <h4 className="text-accent">Reviews & FAQs</h4>
          <h1 className="text-[18px] font-semibold text-black/50">
            Learn more about Mobit
          </h1>
          <div className="mt-10 flex w-full flex-col gap-y-3">
            {faqs.map((faq) => (
              <FaqModal
                key={faq.title}
                title={faq.title}
                description={faq.description}
              />
            ))}
          </div>
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
    </main>
  );
}
