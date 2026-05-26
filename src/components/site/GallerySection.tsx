import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import heroPalace from "@/assets/hero-palace.jpg";
import weddings from "@/assets/weddings.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import dining from "@/assets/dining.jpg";
import ctaPalace from "@/assets/cta-palace.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

type Moment = {
  src: string;
  alt: string;
  caption: string;
};

const galleryMoments: Moment[] = [
  {
    src: heroPalace,
    alt: "The Meera heritage palace façade bathed in warm light",
    caption: "Palace & Grounds",
  },
  {
    src: weddings,
    alt: "An elegant celebration beneath palace arches",
    caption: "Celebrations",
  },
  {
    src: gallery1,
    alt: "Courtyard gathering at twilight",
    caption: "Evening Ambience",
  },
  {
    src: roomSuite,
    alt: "Luxury suite with heritage detailing",
    caption: "Suites & Rooms",
  },
  {
    src: aboutInterior,
    alt: "Refined interior with artisan craftsmanship",
    caption: "Interiors",
  },
  {
    src: dining,
    alt: "Fine dining with warm hospitality lighting",
    caption: "Dining",
  },
  {
    src: ctaPalace,
    alt: "Palace architecture and manicured lawns",
    caption: "Architecture",
  },
  {
    src: gallery2,
    alt: "Intimate moment in a palace corridor",
    caption: "Quiet Moments",
  },
  {
    src: gallery3,
    alt: "Garden lawns and architectural symmetry",
    caption: "Gardens",
  },
];

function GallerySlide({ moment, priority = false }: { moment: Moment; priority?: boolean }) {
  return (
    <figure className="group relative h-full overflow-hidden rounded-2xl bg-champagne/30 shadow-[0_24px_70px_-40px_rgba(90,35,35,0.28)] ring-1 ring-burgundy/[0.06]">
      <img
        src={moment.src}
        alt={moment.alt}
        loading={priority ? "eager" : "lazy"}
        className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-burgundy/[0.12] via-transparent to-ivory/[0.04]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-7">
        <span className="font-sans text-[10px] uppercase tracking-wider-luxe text-ivory/95 drop-shadow-sm md:text-[11px]">
          {moment.caption}
        </span>
      </figcaption>
    </figure>
  );
}

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-ivory via-cream/80 to-ivory py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-32 h-[480px] w-[480px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--burgundy) 10%, transparent), transparent 68%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-20 h-[420px] w-[420px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 14%, transparent), transparent 70%)",
          filter: "blur(36px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-burgundy/40" />
            <span className="font-sans text-[11px] uppercase tracking-luxe text-burgundy">
              The Palace in Frames
            </span>
          </div>
          <h2 className="mt-8 font-serif text-4xl leading-[1.02] text-ink md:text-6xl lg:text-[4.25rem]">
            Moments at <span className="italic text-burgundy">The Meera</span>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base leading-[1.85] text-ink/70 md:text-lg">
            A glimpse into our luxury hospitality, celebrations, and timeless experiences.
          </p>
          <div className="hairline mt-12 max-w-md" />
        </motion.header>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-16 md:mt-20"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {galleryMoments.map((moment, index) => (
                <div
                  key={moment.caption}
                  className="min-w-0 shrink-0 grow-0 basis-full px-1 sm:basis-[92%] sm:px-2 md:basis-[78%] lg:basis-[68%] xl:basis-[62%]"
                >
                  <div className="h-[min(58vw,360px)] sm:h-[380px] md:h-[420px] lg:h-[460px] xl:h-[480px]">
                    <GallerySlide moment={moment} priority={index === 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {galleryMoments.map((moment, index) => (
                <button
                  key={moment.caption}
                  type="button"
                  aria-label={`Go to slide ${index + 1}: ${moment.caption}`}
                  aria-current={selectedIndex === index ? "true" : undefined}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    selectedIndex === index
                      ? "w-8 bg-burgundy"
                      : "w-1.5 bg-burgundy/25 hover:bg-burgundy/45",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous image"
                disabled={!canPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/25 text-burgundy transition enabled:hover:border-burgundy/50 enabled:hover:bg-burgundy/5 disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="min-w-[4rem] text-center font-sans text-[11px] uppercase tracking-wider-luxe text-ink/50">
                {selectedIndex + 1} / {galleryMoments.length}
              </span>
              <button
                type="button"
                aria-label="Next image"
                disabled={!canNext}
                onClick={() => emblaApi?.scrollNext()}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-burgundy/25 text-burgundy transition enabled:hover:border-burgundy/50 enabled:hover:bg-burgundy/5 disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center font-sans text-[11px] uppercase tracking-wider-luxe text-ink/45 md:mt-20"
        >
          Curated hospitality · Celebrations · Timeless stays
        </motion.p>
      </div>
    </section>
  );
}
