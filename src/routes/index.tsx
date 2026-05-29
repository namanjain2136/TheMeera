import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { InquiryForm } from "@/components/site/InquiryForm";

import aboutInterior from "@/assets/about-interior.jpg";
import introVideo from "@/assets/intro.mp4";
import heroPalace from "@/assets/hero-palace.jpg";
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
    <section className="hero-ambient relative overflow-hidden">
      <div className="hero-noise absolute inset-0 opacity-20 z-0" />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full"
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

      <div className="relative z-0 w-full overflow-hidden">
        <div className="h-screen w-full">
          <video
            src={introVideo}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-top"
            aria-label="Intro video showcasing The Meera"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center px-6 py-16 text-center text-ink md:px-12">
        <p
          className="max-w-3xl px-4 font-serif text-[1.9rem] leading-[1.18] text-[#8c1f1f] md:text-[2.55rem] transition duration-300 ease-out hover:font-bold hover:text-[#a42d2d]"
          style={{ textShadow: "0 0 2px rgba(0,0,0,0.18), 0 0 10px rgba(140,31,31,0.18)" }}
        >
          Indian heritage reimagined as timeless luxury.
        </p>
        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#b53a2c] bg-transparent px-7 py-3 text-[11px] uppercase tracking-wider-luxe text-[#b53a2c] shadow-sm transition-all duration-300 ease-out hover:bg-[#b53a2c] hover:text-[#fff4d0] hover:shadow-[0_0_24px_rgba(181,58,44,0.24)]"
        >
          Discover The Meera
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
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
            A palace of warmth,
            <br />
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
    <Section id="facility" eyebrow="Facility" className="bg-cream">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <h2 className="max-w-xl font-serif text-4xl leading-[1.05] md:text-6xl">
          Suites composed with <span className="italic text-burgundy">quiet luxury.</span>
        </h2>
        <a
          href="/rooms"
          className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-[11px] font-semibold uppercase tracking-wider-luxe text-[#5c220f] shadow-[0_10px_30px_rgba(212,175,55,0.22)] transition duration-300 hover:bg-[#b88d22] hover:text-white"
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
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#b53a2c] bg-transparent px-4 py-2 text-[11px] uppercase tracking-wider-luxe text-[#b53a2c] transition duration-300 hover:bg-[#b53a2c] hover:text-[#fff4d0] hover:shadow-[0_0_18px_rgba(181,58,44,0.24)]"
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
            A celebration as <span className="italic text-burgundy">timeless</span> as the palace
            itself.
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
            href="#inquiry"
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
    <Section id="inquiry" eyebrow="Contact Us" className="bg-ivory">
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
              <div className="text-[11px] uppercase tracking-wider-luxe text-gold">
                Reservations
              </div>
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
