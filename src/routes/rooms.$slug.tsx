import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SUITES } from "./rooms";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const suite = SUITES.find((s) => s.slug === params.slug);
    if (!suite) throw notFound();
    return { suite };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.suite.name} — The Meera` },
          { name: "description", content: loaderData.suite.intro },
          { property: "og:title", content: `${loaderData.suite.name} — The Meera` },
          { property: "og:description", content: loaderData.suite.intro },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <div className="mx-auto max-w-xl px-6 py-40 text-center">
        <h1 className="font-serif text-4xl text-burgundy">Suite not found</h1>
        <Link to="/rooms" className="mt-8 inline-block text-[11px] uppercase tracking-wider-luxe text-burgundy">
          ← All Suites
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: SuiteDetail,
});

const amenities = [
  "King-size four-poster bed",
  "Private marble verandah",
  "Hand-loomed silk furnishings",
  "Curated minibar & afternoon tea",
  "Personal butler service",
  "Spa-grade bath amenities",
];

function SuiteDetail() {
  const { suite } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-28 md:pt-36">
          <div className="absolute inset-x-0 top-0 h-[min(52vh,520px)] overflow-hidden md:h-[min(58vh,600px)]">
            <img
              src={suite.image}
              alt=""
              aria-hidden
              className="h-full w-full object-cover"
            />
            <div className="hero-noise absolute inset-0 opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-b from-ivory/75 via-ivory/50 to-ivory" />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 md:px-12">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-wider-luxe text-burgundy hover:text-wine"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Suites
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="overflow-hidden rounded-2xl shadow-[0_30px_80px_-40px_rgba(80,20,20,0.35)] ring-1 ring-burgundy/5"
              >
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="h-[360px] w-full object-cover md:h-[480px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="rounded-3xl bg-cream/70 p-8 ring-1 ring-burgundy/6 backdrop-blur-sm md:p-10"
              >
                <div className="font-sans text-[11px] uppercase tracking-luxe text-gold">
                  {suite.size}
                </div>
                <h1 className="mt-3 font-serif text-5xl leading-[1.02] text-ink md:text-6xl">
                  {suite.name}
                </h1>
                <div className="hairline mt-8 w-24" />
                <p className="mt-8 font-sans leading-[1.9] text-ink/75">{suite.intro}</p>
                <p className="mt-6 font-sans leading-[1.9] text-ink/70">
                  Wake to filtered morning light through latticed jharokhas, take tea on the
                  verandah, and retreat in the evening to candlelit interiors arranged with the
                  quiet attention of our khansamas.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-y-3 border-t border-burgundy/10 pt-8 font-sans text-sm text-ink/80">
                  {amenities.map((a) => (
                    <div key={a}>· {a}</div>
                  ))}
                </div>

                <a
                  href="#booknow"
                  className="mt-10 inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-10 py-4 font-sans text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="booknow" className="bg-gradient-to-b from-ivory to-cream/80 py-24 md:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="text-[11px] uppercase tracking-luxe text-burgundy">Book Now</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Reserve the <span className="italic text-burgundy">{suite.name}.</span>
              </h2>
              <p className="mt-8 max-w-md leading-[1.9] text-ink/75">
                Share your preferred dates and our concierge will craft a stay composed entirely
                around you.
              </p>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
