import { Link } from "@tanstack/react-router";
import { Dog, Heart, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Available Puppies" },
  { to: "/about", label: "About Kennel" },
  { to: "/reviews", label: "Happy Pet Parents" },
  { to: "/contact", label: "Book & Visit" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-tr from-pink-deep to-pink text-white shadow-md transition-transform group-hover:scale-105">
            <Dog className="h-6 w-6" />
          </span>

          <span className="leading-tight">
            <span className="block font-display text-xl font-black tracking-tight text-ink">
              Delhi Puppy <span className="text-pink-deep">Point</span>
            </span>
            <span className="block text-[10px] font-extrabold tracking-widest text-muted-foreground uppercase">
              Purebred Puppies · Delhi NCR
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-bold text-ink transition-colors hover:text-pink-deep"
              activeProps={{ className: "text-pink-deep font-extrabold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20am%20looking%20to%20buy%20a%20healthy%20puppy%20in%20Delhi%20NCR.%20Please%20share%20available%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-extrabold text-white shadow-sm transition-all hover:bg-[#1ebe5d] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>

          <a
            href="tel:+919870166623"
            className="hidden items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-extrabold text-ink shadow-[var(--shadow-soft)] transition-colors hover:bg-lime-dark sm:flex"
          >
            <Phone className="h-3.5 w-3.5" /> +91 98701 66623
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-bold text-ink hover:bg-accent"
              activeProps={{ className: "bg-pink-soft text-pink-deep" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20want%20to%20inquire%20about%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-extrabold text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+919870166623"
              className="flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-xs font-extrabold text-ink"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
