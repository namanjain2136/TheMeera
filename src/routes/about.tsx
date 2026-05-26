import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";
import aboutInterior from "@/assets/about-interior.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Meera" },
      {
        name: "description",
        content:
          "The story of The Meera — a heritage palace in Jaipur reimagined as an intimate sanctuary of warm Indian hospitality.",
      },
      { property: "og:title", content: "About — The Meera" },
      {
        property: "og:description",
        content: "A living tribute to Rajasthan's regal past, reimagined for the modern traveller.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "Warm Hospitality", d: "Service offered with the quiet attention of a family home." },
  { n: "02", t: "Heritage Craft", d: "Every fresco, arch and textile honours Rajasthan's artisans." },
  { n: "03", t: "Modern Comfort", d: "Discreet contemporary luxury woven into the palace fabric." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        <section className="hero-ambient relative pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-burgundy/50" />
              <span className="text-[11px] uppercase tracking-luxe text-burgundy">
                About The Meera
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-ink md:text-7xl">
              A heritage palace, <span className="italic text-burgundy">reimagined.</span>
            </h1>
            <p className="mt-8 max-w-2xl leading-[1.9] text-ink/75">
              Set amidst ivory courtyards and centuries-old gardens, The Meera is a living tribute
              to Rajasthan's regal past — reimagined as an intimate sanctuary of fifty-two suites.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(80,20,20,0.3)]"
            >
              <img
                src={aboutInterior}
                alt="Grand lobby"
                className="h-[520px] w-full object-cover md:h-[640px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <div className="text-[11px] uppercase tracking-luxe text-gold">Our Story</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Composed with <span className="italic text-burgundy">unhurried grace.</span>
              </h2>
              <p className="mt-8 leading-[1.9] text-ink/75">
                Built in 1947 as a private residence for the royal family of Meera, the palace has
                opened its arches to discerning travellers for over seven decades. Every restoration
                has been guided by master artisans — descendants of those who first laid its
                lime-washed walls.
              </p>
              <p className="mt-6 leading-[1.9] text-ink/75">
                Today, The Meera remains a family-stewarded sanctuary. Our team of two hundred is
                drawn from villages across Rajasthan, carrying with them the warmth of home and the
                rituals of a region where guests are still received as gods.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <h2 className="max-w-xl font-serif text-4xl md:text-5xl">
              The values that shape <span className="italic text-burgundy">every stay.</span>
            </h2>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {values.map((v) => (
                <motion.div
                  key={v.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="border-t border-border pt-6"
                >
                  <div className="text-[11px] uppercase tracking-wider-luxe text-gold">{v.n}</div>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">{v.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-6 px-6 md:grid-cols-2 md:gap-8 md:px-12">
            {[gallery1, gallery2].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(80,20,20,0.3)]"
              >
                <img
                  src={src}
                  alt={`The Meera ${i + 1}`}
                  className="h-[420px] w-full object-cover transition-transform duration-[1800ms] hover:scale-[1.05] md:h-[520px]"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="booknow" className="bg-ivory py-24 md:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="text-[11px] uppercase tracking-luxe text-burgundy">Book Now</div>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Begin your stay at <span className="italic text-burgundy">The Meera.</span>
              </h2>
              <p className="mt-8 max-w-md leading-[1.9] text-ink/75">
                Our concierge will compose a journey befitting your visit.
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
