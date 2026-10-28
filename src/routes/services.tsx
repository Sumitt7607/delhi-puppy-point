import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Dog, Heart, MessageCircle, Phone, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServiceCard } from "@/components/site/ServiceCard";
import { puppies, puppyCategories, type PuppyCategory } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Available Puppies for Sale in Delhi NCR | Delhi Puppy Point" },
      {
        name: "description",
        content:
          "Browse purebred puppies for sale in Delhi, Gurgaon, Noida, Faridabad & Ghaziabad. Golden Retriever, Labrador, Shih Tzu, German Shepherd, Beagle, Husky & more with KCI papers.",
      },
      { property: "og:title", content: "Available Puppies for Sale in Delhi NCR | Delhi Puppy Point" },
      {
        property: "og:description",
        content: "100% vaccinated, dewormed, vet-certified puppies available with doorstep delivery in Delhi NCR.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState<(typeof puppyCategories)[number]>("All Puppies");
  const visible =
    active === "All Puppies" ? puppies : puppies.filter((s) => s.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-pink to-pink-soft py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-deep px-3.5 py-1 text-xs font-black text-white uppercase shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-lime" /> Certified Purebred Breeds
          </span>
          <h1 className="mt-3 font-display text-4xl font-black text-ink md:text-5xl">
            Available Puppies in Delhi NCR
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-ink/80 leading-relaxed">
            All our puppies undergo a strict 21-point veterinarian health examination, are vaccinated with age-appropriate shots, dewormed, and socialized. Enjoy same-day safe AC doorstep delivery across Delhi, Gurugram, Noida, Faridabad, and Ghaziabad.
          </p>
        </div>
      </section>

      {/* Filter and Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-wrap justify-center gap-2.5">
          {puppyCategories.map((c) => {
            const count =
              c === "All Puppies" ? puppies.length : puppies.filter((s) => s.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-extrabold transition-all shadow-sm ${
                  active === c
                    ? "bg-pink-deep text-white scale-105"
                    : "border border-border bg-card text-ink hover:bg-pink-soft"
                }`}
              >
                {c} <span className="opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Puppies Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* Free Starter Kit Promo */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-pink-soft/80 p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-black uppercase text-ink">
                Included With Every Puppy
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-black text-ink">
                Free Puppy Starter Welcome Kit
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                We make your first days as a pet parent seamless and stress-free. Every puppy from Delhi Puppy Point arrives with:
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-bold text-ink">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-deep" /> Premium Puppy Starter Food Pack
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-deep" /> Stainless Steel Feeding Bowl
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-deep" /> Soft Teething Chew Toy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-deep" /> Vet Vaccination Passport
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-deep" /> Personalized Diet & Feeding Chart
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-pink-deep" /> 24/7 Pet Counselor Helpline
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-card p-6 text-center border border-border">
              <Sparkles className="h-8 w-8 text-pink-deep" />
              <h3 className="font-display text-lg font-black text-ink">
                Have a specific breed in mind?
              </h3>
              <p className="text-xs text-muted-foreground">
                Looking for Maltipoo, Chow Chow, Cocker Spaniel, or Great Dane? We source purebred litters from audited ethical breeders.
              </p>
              <a
                href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20am%20looking%20for%20a%20specific%20breed."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-xs font-black text-white shadow hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-4 w-4" /> Inquire Custom Breed on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
