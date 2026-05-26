import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/" as const, hash: "home" },
  { label: "About", to: "/" as const, hash: "about" },
  { label: "Weddings", to: "/" as const, hash: "weddings" },
  { label: "Rooms", to: "/" as const, hash: "rooms" },
  { label: "Gallery", to: "/" as const, hash: "gallery" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On non-home routes, keep navbar always solid for contrast.
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(120,40,40,0.06)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <Link
          to="/"
          className={cn(
            "flex flex-col leading-none transition-colors",
            solid ? "text-ink" : "text-ink",
          )}
        >
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-burgundy">
            The Meera
          </span>
          <span className="mt-1 text-[10px] tracking-luxe uppercase opacity-70">
            Heritage · Hospitality
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-[12px] uppercase tracking-wider-luxe text-ink/75 transition-colors hover:text-burgundy"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          hash="booknow"
          className="hidden md:inline-flex items-center justify-center border border-burgundy bg-burgundy px-6 py-3 text-[11px] uppercase tracking-wider-luxe text-ivory transition-all duration-300 hover:bg-transparent hover:text-burgundy"
        >
          Book Now
        </Link>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-ink"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ivory transition-opacity duration-500 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-serif text-2xl text-burgundy">The Meera</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-ink">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="booknow"
            onClick={() => setOpen(false)}
            className="mt-6 border border-burgundy bg-burgundy px-8 py-3 text-[11px] uppercase tracking-wider-luxe text-ivory"
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
