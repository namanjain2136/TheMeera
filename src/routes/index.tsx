import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";

import aboutInterior from "@/assets/about-interior.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import weddings from "@/assets/weddings.jpg";
import { GallerySection } from "@/components/site/GallerySection";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        {eyebrow && (
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy/50" />
            <span className="text-[11px] uppercase tracking-luxe text-burgundy">{eyebrow}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-ambient relative h-screen min-h-[680px] w-full overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="hero-noise absolute inset-0 opacity-60" />

      {/* Soft floating ornamental glows */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--burgundy) 18%, transparent), transparent 70%)",
          filter: "blur(20px)",
          animation: "drift 22s ease-in-out infinite",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4 }}
        className="absolute -right-32 bottom-10 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
          filter: "blur(24px)",
          animation: "drift 28s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-ink">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-burgundy/50" />
          <span className="text-[11px] uppercase tracking-luxe text-burgundy">
            A Heritage Sanctuary · Jaipur
          </span>
          <span className="h-px w-10 bg-burgundy/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mt-8 font-serif text-[3.75rem] leading-[0.95] tracking-wide text-burgundy md:text-[7.25rem] lg:text-[9rem]"
        >
          The Meera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-8 max-w-xl font-serif text-lg italic text-ink/75 md:text-xl"
        >
          Where Indian heritage is reimagined as timeless luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#booknow"
            className="inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-10 py-4 text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
          >
            Book Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-luxe text-burgundy hover:text-wine"
          >
            Discover The Meera <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-luxe text-burgundy/70"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About The Meera">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
            A palace of warmth,<br />
            <span className="italic text-burgundy">crafted for the modern traveller.</span>
          </h2>
          <div className="hairline mt-10 w-24" />
          <p className="mt-10 max-w-lg text-base leading-[1.9] text-ink/75">
            Set amidst ivory courtyards and centuries-old gardens, The Meera is a living tribute to
            Rajasthan's regal past. Each arch, each fresco, each lamp tells a story of artisans who
            shaped a kingdom — now reimagined as an intimate sanctuary of fifty-two suites.
          </p>
          <p className="mt-6 max-w-lg text-base leading-[1.9] text-ink/75">
            From sunlit breakfasts on the marble verandah to candlelit gatherings beneath the dome,
            every moment is composed with the quiet care of a home, and the grace of a palace.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
            <Stat n="52" label="Suites & Villas" />
            <Stat n="14" label="Acres of Gardens" />
            <Stat n="120+" label="Royal Weddings" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(80,20,20,0.35)]">
            <img
              src={aboutInterior}
              alt="The Meera grand lobby"
              loading="lazy"
              className="h-[600px] w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.04] md:h-[720px]"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden rounded-xl bg-ivory px-10 py-8 shadow-[0_10px_40px_-15px_rgba(80,20,20,0.25)] md:block">
            <div className="font-serif text-3xl text-burgundy">Est. 1947</div>
            <div className="mt-1 text-[11px] uppercase tracking-luxe text-ink/60">
              A Heritage Address
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl text-burgundy md:text-5xl">{n}</div>
      <div className="mt-2 text-[11px] uppercase tracking-wider-luxe text-ink/60">{label}</div>
    </div>
  );
}

const rooms = [
  {
    name: "Heritage Suite",
    desc: "Carved wood, ivory linens, and a private verandah overlooking the central fountain.",
    size: "65 sqm",
  },
  {
    name: "Royal Court Suite",
    desc: "Two-bedroom residence with antique furnishings and a tranquil garden courtyard.",
    size: "120 sqm",
  },
  {
    name: "Maharaja Pavilion",
    desc: "The grand pavilion suite — a private wing reserved for our most discerning guests.",
    size: "220 sqm",
  },
];

function Rooms() {
  return (
    <Section id="rooms" eyebrow="Rooms & Accommodation" className="bg-cream">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <h2 className="max-w-xl font-serif text-4xl leading-[1.05] md:text-6xl">
          Suites composed with <span className="italic text-burgundy">quiet luxury.</span>
        </h2>
        <a
          href="/rooms"
          className="text-[11px] uppercase tracking-wider-luxe text-burgundy underline-offset-8 hover:underline"
        >
          View all suites →
        </a>
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="group overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(80,20,20,0.3)]">
            <img
              src={roomSuite}
              alt="Heritage suite at The Meera"
              loading="lazy"
              className="h-[480px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04] md:h-[600px]"
            />
          </div>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-luxe text-gold">Featured</div>
              <h3 className="mt-2 font-serif text-3xl">{rooms[0].name}</h3>
            </div>
            <div className="text-[11px] uppercase tracking-wider-luxe text-ink/60">
              {rooms[0].size}
            </div>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70">{rooms[0].desc}</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {rooms.slice(1).map((r, i) => (
            <motion.div
              key={r.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-border pt-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl">{r.name}</h3>
                <span className="text-[11px] uppercase tracking-wider-luxe text-ink/60">
                  {r.size}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{r.desc}</p>
              <a
                href="/rooms"
                className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider-luxe text-burgundy hover:text-wine"
              >
                Explore <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Weddings() {
  return (
    <section id="weddings" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] grid gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-30px_rgba(80,20,20,0.35)]"
        >
          <img
            src={weddings}
            alt="Wedding mandap at The Meera"
            loading="lazy"
            className="h-[460px] w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.04] lg:h-full"
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy/60" />
            <span className="text-[11px] uppercase tracking-luxe text-burgundy">
              Weddings & Celebrations
            </span>
          </div>
          <h2 className="mt-8 font-serif text-4xl leading-[1.05] md:text-5xl">
            A celebration as <span className="italic text-burgundy">timeless</span> as the palace itself.
          </h2>
          <p className="mt-8 max-w-md leading-[1.9] text-ink/75">
            From intimate ceremonies in the moonlit courtyard to grand processions through our
            arched corridors, The Meera composes weddings of singular elegance — carried by warm
            hospitality, honoured by tradition.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-y-3 text-sm text-ink/80">
            <li>· Heritage mandap settings</li>
            <li>· Sangeet & mehendi pavilions</li>
            <li>· Curated culinary journeys</li>
            <li>· Full-palace buy-outs</li>
          </ul>
          <a
            href="#booknow"
            className="mt-12 inline-flex w-fit items-center justify-center rounded-full border border-burgundy bg-burgundy px-10 py-4 text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
          >
            Plan Your Wedding
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function BookNow() {
  return (
    <Section id="booknow" eyebrow="Book Now" className="bg-ivory">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
            Begin your stay at <span className="italic text-burgundy">The Meera.</span>
          </h2>
          <p className="mt-8 max-w-md leading-[1.9] text-ink/75">
            Our concierge will compose a journey befitting your visit — from arrival blessings to
            private gatherings beneath the stars. Share a few details and we will respond within
            twenty-four hours.
          </p>

          <div className="mt-12 space-y-6 border-t border-border pt-10 text-sm text-ink/80">
            <div>
              <div className="text-[11px] uppercase tracking-wider-luxe text-gold">Reservations</div>
              <div className="mt-2 font-serif text-2xl text-burgundy">+91 141 000 0000</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider-luxe text-gold">Email</div>
              <div className="mt-2 font-serif text-xl">reservations@themeera.com</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider-luxe text-gold">Address</div>
              <div className="mt-2">Civil Lines, Jaipur, Rajasthan 302006</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <InquiryForm />
        </motion.div>
      </div>
    </Section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Weddings />
        <Rooms />
        <GallerySection />
        <BookNow />
      </main>
      <Footer />
    </div>
  );
}
