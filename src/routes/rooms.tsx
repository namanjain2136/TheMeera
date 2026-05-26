import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import roomSuite from "@/assets/room-suite.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import heroPalace from "@/assets/hero-palace.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — The Meera" },
      {
        name: "description",
        content:
          "Discover the heritage suites, royal courts and pavilion residences at The Meera, Jaipur.",
      },
      { property: "og:title", content: "Rooms & Suites — The Meera" },
      {
        property: "og:description",
        content:
          "A collection of fifty-two suites composed with quiet luxury and warm Indian hospitality.",
      },
    ],
  }),
  component: RoomsPage,
});

export const SUITES = [
  {
    slug: "heritage-suite",
    name: "Heritage Suite",
    size: "65 sqm",
    intro: "Carved wood, ivory linens, and a private verandah overlooking the central fountain.",
    image: roomSuite,
  },
  {
    slug: "royal-court-suite",
    name: "Royal Court Suite",
    size: "120 sqm",
    intro: "Two-bedroom residence with antique furnishings and a tranquil garden courtyard.",
    image: aboutInterior,
  },
  {
    slug: "maharaja-pavilion",
    name: "Maharaja Pavilion",
    size: "220 sqm",
    intro: "The grand pavilion suite — a private wing reserved for our most discerning guests.",
    image: gallery1,
  },
  {
    slug: "garden-villa",
    name: "Garden Villa",
    size: "180 sqm",
    intro: "A standalone villa wrapped in jasmine and frangipani with a private plunge pool.",
    image: gallery2,
  },
  {
    slug: "meera-residence",
    name: "Meera Residence",
    size: "260 sqm",
    intro: "A four-bedroom heritage residence ideal for families and intimate celebrations.",
    image: gallery3,
  },
];

const highlights = [
  { label: "Suites & Residences", value: "52" },
  { label: "Heritage Craft", value: "Artisan" },
  { label: "Courtyard Views", value: "Private" },
  { label: "Concierge", value: "24/7" },
];

function RoomsPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />

      <main>
        {/* Cinematic page hero */}
        <section className="relative min-h-[72vh] overflow-hidden md:min-h-[78vh]">
          <img
            src={roomSuite}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-noise absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/55 to-ivory"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-ivory/80 via-transparent to-ivory/30"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute -left-24 top-1/4 h-[400px] w-[400px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--burgundy) 16%, transparent), transparent 70%)",
              filter: "blur(32px)",
            }}
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.3 }}
            className="absolute -right-20 bottom-1/4 h-[360px] w-[360px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1280px] flex-col justify-end px-6 pb-20 pt-40 md:min-h-[78vh] md:px-12 md:pb-28 md:pt-48">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-burgundy/50" />
                <span className="font-sans text-[11px] uppercase tracking-luxe text-burgundy">
                  Rooms & Suites
                </span>
              </div>
              <h1 className="mt-8 max-w-3xl font-serif text-5xl leading-[1.02] text-ink md:text-7xl lg:text-[5.5rem]">
                Fifty-two sanctuaries of{" "}
                <span className="italic text-burgundy">quiet luxury.</span>
              </h1>
              <p className="mt-8 max-w-xl font-sans text-base leading-[1.9] text-ink/75 md:text-lg">
                Each suite at The Meera is its own composition — antique carved doors, hand-loomed
                textiles and gentle courtyard light. Choose the residence that suits your stay.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="relative border-y border-burgundy/8 bg-cream/90 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-12 md:py-14">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="text-center md:text-left"
              >
                <div className="font-serif text-3xl text-burgundy md:text-4xl">{item.value}</div>
                <div className="mt-2 font-sans text-[10px] uppercase tracking-wider-luxe text-ink/55">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Suites listing */}
        <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-cream/50 to-ivory py-24 md:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-40"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 12%, transparent), transparent 65%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative mx-auto max-w-[1280px] space-y-20 px-6 md:space-y-28 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-3xl text-ink md:text-4xl">
                Our <span className="italic text-burgundy">residences</span>
              </h2>
              <div className="hairline mt-6 max-w-xs" />
              <p className="mt-6 font-sans leading-[1.9] text-ink/70">
                From intimate heritage suites to private pavilions — each space is composed with
                warm light, refined materials, and the calm of palace living.
              </p>
            </motion.div>

            {SUITES.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`grid items-center gap-10 rounded-3xl p-6 ring-1 ring-burgundy/[0.06] md:gap-16 md:p-10 lg:grid-cols-2 lg:gap-20 ${
                  i % 2 === 0 ? "bg-ivory/80 shadow-[0_24px_80px_-50px_rgba(80,25,25,0.2)]" : "bg-cream/60"
                } ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="group overflow-hidden rounded-2xl shadow-[0_20px_60px_-35px_rgba(80,20,20,0.28)] ring-1 ring-burgundy/[0.05]">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-[320px] w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04] md:h-[400px] lg:h-[440px]"
                  />
                </div>
                <div>
                  <div className="font-sans text-[11px] uppercase tracking-luxe text-gold">
                    {s.size}
                  </div>
                  <h3 className="mt-3 font-serif text-4xl text-ink md:text-5xl">{s.name}</h3>
                  <div className="hairline mt-8 w-20" />
                  <p className="mt-8 max-w-md font-sans leading-[1.9] text-ink/75">{s.intro}</p>
                  <Link
                    to="/rooms/$slug"
                    params={{ slug: s.slug }}
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-burgundy bg-burgundy px-8 py-3.5 font-sans text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
                  >
                    View Suite <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden">
          <img
            src={heroPalace}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ivory/88 backdrop-blur-[2px]" />
          <div className="hero-noise absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-[1280px] px-6 py-24 text-center md:px-12 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-[11px] uppercase tracking-luxe text-burgundy">
                Reserve Your Stay
              </span>
              <h2 className="mt-6 font-serif text-4xl text-ink md:text-5xl">
                Begin your journey at <span className="italic text-burgundy">The Meera.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg font-sans leading-[1.9] text-ink/70">
                Our concierge will help you select the perfect suite and compose an arrival
                experience worthy of your visit.
              </p>
              <Link
                to="/"
                hash="booknow"
                className="mt-10 inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-10 py-4 font-sans text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
