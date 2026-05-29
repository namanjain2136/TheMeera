import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/themeera-logo.png";

const links = [
  { label: "About", to: "/" as const, hash: "about" },
  { label: "Weddings", to: "/" as const, hash: "weddings" },
  { label: "Facility", to: "/" as const, hash: "facility" },
  { label: "Gallery", to: "/" as const, hash: "gallery" },
  { label: "Contact Us", to: "/" as const, hash: "inquiry" },
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
            "flex flex-col items-start leading-none transition-colors",
            solid ? "text-ink" : "text-ink",
          )}
        >
          <img src={logo} alt="The Meera" className="h-12 w-auto object-contain md:h-14" />
          <span className="mt-2 pl-1 text-[10px] uppercase tracking-luxe text-burgundy/80">
            A Luxury Experience
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

        <button aria-label="Open menu" onClick={() => setOpen(true)} className="lg:hidden text-ink">
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
          <Link to="/" onClick={() => setOpen(false)} className="flex flex-col items-start">
            <img src={logo} alt="The Meera" className="h-11 w-auto object-contain" />
            <span className="mt-2 pl-1 text-[10px] uppercase tracking-luxe text-burgundy/80">
              A Luxury Experience
            </span>
          </Link>
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
        </nav>
      </div>
    </header>
  );
}
