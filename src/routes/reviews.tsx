import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star, Sparkles, Dog } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { reviews } from "@/components/site/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Pet Parent Reviews | Delhi Puppy Point" },
      {
        name: "description",
        content:
          "Read genuine reviews and adoption stories from pet parents across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad who bought healthy puppies from Delhi Puppy Point.",
      },
      { property: "og:title", content: "Pet Parent Reviews | Delhi Puppy Point" },
      {
        property: "og:description",
        content: "Over 5,000 happy families across Delhi NCR rate Delhi Puppy Point 4.9/5 stars for healthy, purebred puppies.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-to-b from-pink to-pink-soft py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-deep px-3.5 py-1 text-xs font-black text-white uppercase shadow-sm">
            <Star className="h-3.5 w-3.5 fill-current text-lime" /> Rated 4.9/5 by 5,000+ Pet Parents
          </span>
          <h1 className="mt-3 font-display text-4xl font-black text-ink md:text-5xl">
            Customer Reviews & Adoption Stories
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-ink/80 leading-relaxed">
            Read real feedback from families throughout South Delhi, West Delhi, Gurugram, Noida, and Faridabad who found their dream companion at Delhi Puppy Point.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-lime-dark">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="rounded-full bg-pink-soft px-2.5 py-0.5 text-[10px] font-extrabold text-pink-deep">
                    {r.breed}
                  </span>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/85">
                  "{r.text}"
                </p>
              </div>

              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-extrabold text-ink">{r.name}</p>
                <p className="text-[11px] font-medium text-muted-foreground">{r.city}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Share your review or connect CTA */}
        <div className="mt-16 text-center rounded-3xl bg-lime p-8 text-ink">
          <h2 className="font-display text-2xl sm:text-3xl font-black">
            Are you already a Delhi Puppy Point Fur-Parent?
          </h2>
          <p className="mt-2 text-xs sm:text-sm max-w-xl mx-auto text-ink/85">
            We love seeing our puppies grow! Send us photos and updates on WhatsApp anytime. Our vet team is always here to assist with diet and health advice.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20want%20to%20share%20an%20update%20of%20my%20puppy."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs sm:text-sm font-black text-white hover:bg-black"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> Share Photo on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display text-xs sm:text-sm font-black text-ink shadow hover:bg-slate-50"
            >
              Book Your Puppy Today &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
