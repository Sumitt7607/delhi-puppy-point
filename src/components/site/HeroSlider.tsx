import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1920&q=85",
    title: "Find Your Perfect Purebred Puppy in Delhi NCR",
    subtitle: "100% certified healthy puppies. KCI registered, vet-checked, with a free puppy starter kit and safe doorstep AC delivery across Delhi, Gurgaon, Noida & Faridabad.",
    actionText: "See Available Puppies",
    actionLink: "/services",
  },
  {
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1920&q=85",
    title: "Live Video Verification Before You Choose",
    subtitle: "Schedule a live WhatsApp video call to see our litters playing before visiting. Golden Retrievers, Labradors, Shih Tzus, German Shepherds & Beagles ready now.",
    actionText: "Live Video on WhatsApp",
    actionLink: "https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20am%20looking%20to%20adopt%20a%20puppy%20in%20Delhi%20NCR.%20Please%20share%20details.",
    isExternal: true,
  },
  {
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1920&q=85",
    title: "Healthy, Vaccinated & Raised with Love",
    subtitle: "Ethical kennel breeding with zero puppy mills. Every puppy arrives with full vaccination booklet, deworming certificate, diet chart, and lifetime breed support.",
    actionText: "Book Kennel Visit",
    actionLink: "/contact",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        go(1);
      } else {
        go(-1);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="group relative w-full overflow-hidden bg-black min-h-[470px] sm:min-h-[500px] lg:h-full lg:min-h-[520px] flex items-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Diwali Decorative Garland Ribbon Border */}
      <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.9)]" />

      {/* Diwali Decoration Ribbon - Top Left End */}
      <div className="absolute top-2 left-2 sm:top-3.5 sm:left-5 z-30 flex flex-col items-start select-none pointer-events-none">
        <div className="relative flex items-center gap-1 sm:gap-1.5 rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(217,119,6,0.65)] backdrop-blur-md">
          <span className="text-xs sm:text-sm animate-pulse">🪔</span>
          <span className="font-extrabold tracking-wide drop-shadow">Shubh Deepavali</span>
        </div>
        {/* Decorative hanging diya tassel */}
        <div className="ml-3 sm:ml-4 flex flex-col items-center">
          <div className="h-2.5 sm:h-3.5 w-0.5 bg-gradient-to-b from-amber-400 to-yellow-300 shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
          <span className="text-[11px] sm:text-xs drop-shadow-[0_0_8px_rgba(245,158,11,1)]">🏮</span>
        </div>
      </div>

      {/* Diwali Decoration Ribbon - Top Right End */}
      <div className="absolute top-2 right-2 sm:top-3.5 sm:right-5 z-30 flex flex-col items-end select-none pointer-events-none">
        <div className="relative flex items-center gap-1 sm:gap-1.5 rounded-full border border-amber-300/60 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(217,119,6,0.65)] backdrop-blur-md">
          <span className="font-extrabold tracking-wide drop-shadow">Diwali Dhamaka</span>
          <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-200 animate-pulse" />
        </div>
        {/* Decorative hanging diya tassel */}
        <div className="mr-3 sm:mr-4 flex flex-col items-center">
          <div className="h-2.5 sm:h-3.5 w-0.5 bg-gradient-to-b from-amber-400 to-yellow-300 shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
          <span className="text-[11px] sm:text-xs drop-shadow-[0_0_8px_rgba(245,158,11,1)]">🪔</span>
        </div>
      </div>

      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background image with cinematic zoom effect */}
          <img
            src={s.image}
            alt={s.title}
            className={`h-full w-full object-cover object-center transition-transform duration-10000 ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />

          {/* Deep cinematic overlays for maximum text legibility on all devices */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/35 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/60 sm:to-black/25" />
          {/* Warm Diwali golden ambient ember glow */}
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Hero Content - Responsive padding ensuring clearance below top ribbons */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 pt-14 pb-10 sm:px-10 sm:pt-16 sm:pb-14 md:px-14 lg:px-16 max-w-2xl text-white">
            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black leading-[1.15] sm:leading-tight tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {s.title}
            </h1>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-200/90 leading-relaxed drop-shadow max-w-xl">
              {s.subtitle}
            </p>

            {/* CTAs - Mobile-first flexible layout */}
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {s.isExternal ? (
                <a
                  href={s.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 sm:px-7 py-2.5 sm:py-3.5 font-display text-xs sm:text-sm font-black text-white shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-transform hover:scale-105 active:scale-95 text-center"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>{s.actionText}</span>
                </a>
              ) : (
                <Link
                  to={s.actionLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-deep to-pink px-6 sm:px-7 py-2.5 sm:py-3.5 font-display text-xs sm:text-sm font-black text-white shadow-[0_0_25px_rgba(234,44,115,0.4)] transition-transform hover:scale-105 active:scale-95 text-center"
                >
                  <span>{s.actionText}</span> &rarr;
                </Link>
              )}

              <a
                href="tel:+919870166623"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 sm:px-6 py-2.5 sm:py-3.5 font-display text-xs sm:text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95 text-center"
              >
                <Phone className="h-4 w-4 text-lime shrink-0" />
                <span>Call Now · +91 98701 66623</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Desktop / Tablet) */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 z-20 hidden sm:grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 opacity-75 hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 z-20 hidden sm:grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 opacity-75 hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bottom Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-7 sm:w-8 bg-pink-deep shadow-[0_0_12px_rgba(234,44,115,0.7)]"
                : "w-2 sm:w-2.5 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
