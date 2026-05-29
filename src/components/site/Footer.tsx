import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-burgundy bg-burgundy text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl text-ivory">The Meera</div>
            <div className="mt-2 text-[10px] tracking-luxe uppercase text-ivory/80">
              A Luxury Experience
            </div>
            <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-ivory/85">
              A timeless retreat where heritage craftsmanship, warm Indian hospitality and modern
              luxury come together for an unforgettable stay.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wider-luxe text-ivory/80">Explore</div>
            <ul className="mt-6 space-y-3 text-sm text-ivory/90">
              <li>
                <Link to="/" hash="about" className="hover:text-ivory">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" hash="weddings" className="hover:text-ivory">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/" hash="facility" className="hover:text-ivory">
                  Facility
                </Link>
              </li>
              <li>
                <Link to="/" hash="gallery" className="hover:text-ivory">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/" hash="inquiry" className="hover:text-ivory">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-wider-luxe text-ivory/80">Contact</div>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Civil Lines, Jaipur</li>
              <li>Rajasthan 302006, India</li>
              <li className="pt-3">+91 141 000 0000</li>
              <li>reservations@themeera.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row md:items-center">
          <div className="text-xs text-ivory/60">
            © {new Date().getFullYear()} The Meera. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-ivory/60">
            <a href="#" className="hover:text-ivory">
              Privacy
            </a>
            <a href="#" className="hover:text-ivory">
              Terms
            </a>
            <a href="#" className="hover:text-ivory">
              Press
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
