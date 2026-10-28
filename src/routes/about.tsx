import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Dog, Heart, MessageCircle, Phone, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import goldenRetrieverImg from "@/assets/puppies/golden-retriever.jpg";
import germanShepherdImg from "@/assets/puppies/german-shepherd.png";
import labradorImg from "@/assets/puppies/labrador.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Delhi Puppy Point — Ethical Puppy Store in Delhi NCR" },
      {
        name: "description",
        content:
          "Learn about Delhi Puppy Point's ethical breeding philosophy, veterinary health standards, and clean kennel facility serving Delhi, Gurgaon, Noida, and Faridabad since 2014.",
      },
      { property: "og:title", content: "About Us | Delhi Puppy Point — Ethical Puppy Store in Delhi NCR" },
      {
        property: "og:description",
        content: "Over 5,000 purebred puppies placed into loving homes with 100% health guarantee and ethical care.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-pink to-pink-soft py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-deep px-3.5 py-1 text-xs font-black text-white uppercase shadow-sm">
            <Heart className="h-3.5 w-3.5 fill-current" /> For The Love of Dogs
          </span>
          <h1 className="mt-3 font-display text-4xl font-black text-ink md:text-5xl">
            About Delhi Puppy Point
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-ink/80 leading-relaxed">
            Founded with a passion for canine well-being, we have been Delhi NCR's premier ethical puppy destination for over a decade.
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2">
        <div>
          <span className="text-xs font-black tracking-wider text-pink-deep uppercase">
            Our Mission
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-4xl">
            Ethical, Healthy, and Loved From Day One
          </h2>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Delhi Puppy Point was started with one core mission: to put an end to commercial puppy mills and unhygienic brokers by providing families across Delhi NCR with healthy, certified, humanely raised purebred puppies.
          </p>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Every puppy born under our care grows up in clean, temperature-controlled nurseries with ample playtime, natural sunlight, early socialization with humans, and continuous care from our resident veterinary team. We never separate puppies from their mothers prematurely, ensuring natural immunity and steady, loving temperaments.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Zero cage confinement — open play and socialized environment",
              "Registered veterinary health inspection before any placement",
              "Transparent parental lineage and KCI paperwork verification",
              "Lifetime commitment to guide pet parents on diet, training, and vaccines",
            ].map((pt) => (
              <div key={pt} className="flex items-center gap-2.5 text-xs font-bold text-ink">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-lime-dark" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20would%20like%20to%20visit%20your%20kennel."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-xs sm:text-sm font-black text-white shadow hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" /> Book Kennel Visit on WhatsApp
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs sm:text-sm font-black text-white hover:bg-ink/90"
            >
              See Available Puppies &rarr;
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="col-span-2 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <img
              src={goldenRetrieverImg}
              alt="Healthy happy golden retriever puppy"
              loading="lazy"
              className="h-60 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src={germanShepherdImg}
              alt="German Shepherd puppy"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src={labradorImg}
              alt="Labrador puppy"
              loading="lazy"
              className="h-44 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="bg-pink-soft/70 py-16 border-y border-border/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-ink">
              The Delhi Puppy Point Standard
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              What sets us apart from ordinary pet shops in Delhi NCR.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              [
                ShieldCheck,
                "Veterinary Certified Health",
                "Full viral screening (Parvo, Corona, Distemper negative), initial DHPPi vaccination, and 3x deworming protocol with stamped certificate.",
              ],
              [
                Dog,
                "Ethical Breeding Only",
                "Mother dogs are given full rest between litters, top-tier nutrition, and live as cherished companions — never in cramped wire cages.",
              ],
              [
                UserCheck,
                "Doorstep AC Transit & Starter Pack",
                "Delivered safely to your home in Delhi, Gurugram, Noida, or Faridabad in air-conditioned pet cabs along with food, toys, and care guides.",
              ],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof ShieldCheck;
              return (
                <div key={t as string} className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pink-soft text-pink-deep">
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-black text-ink">{t as string}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
