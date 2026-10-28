import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
  Star,
  Dog,
  Sparkles,
  Phone,
  MessageCircle,
  Video,
  Award,
  Truck,
  HelpCircle,
  Heart,
  Smile,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServiceCard } from "@/components/site/ServiceCard";
import { puppies, reviews, faqs } from "@/components/site/data";

import client1Img from "@/assets/customer-4.jpg";
import client2Img from "@/assets/customer-3.jpg";
import client3Img from "@/assets/customer-5.jpg";
import client4Img from "@/assets/customer-2.jpg";
import goldenRetrieverImg from "@/assets/puppies/golden-retriever.jpg";
import labradorImg from "@/assets/puppies/labrador.jpg";
import shihTzuImg from "@/assets/puppies/shih-tzu.jpg";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Puppies for Sale in Delhi NCR | Delhi Puppy Point" },
      {
        name: "description",
        content:
          "Buy certified healthy puppies for sale in Delhi, Gurgaon, Noida, Faridabad & Ghaziabad. Golden Retriever, Labrador, Shih Tzu, German Shepherd, Beagle, Husky with KCI papers, vet certificate and AC home delivery.",
      },
      {
        name: "keywords",
        content:
          "puppies for sale in delhi, puppy shop near me, buy puppies delhi, purebred puppies delhi ncr, dog sale in gurgaon, noida puppy kennel, kci puppies delhi",
      },
      { property: "og:title", content: "Puppies for Sale in Delhi NCR | Delhi Puppy Point" },
      {
        property: "og:description",
        content: "Delhi NCR's #1 trusted puppy store. 100% purebred, vaccinated, dewormed puppies with live video calls and safe home delivery.",
      },
      { property: "og:url", content: "https://www.delhipuppypoint.co.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.delhipuppypoint.co.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section: Slider + Quick Photo Grid */}
      <section className="w-full border-b border-border/60">
        <div className="grid lg:grid-cols-[1.8fr_1fr]">
          <HeroSlider />
          <div className="grid grid-cols-2 grid-rows-2 gap-0.5 bg-border/40">
            {[
              { img: client1Img, alt: "Happy client holding puppy in Delhi" },
              { img: client2Img, alt: "Happy client with Shih Tzu puppy in Gurugram" },
              { img: client3Img, alt: "Happy client with puppy in Noida" },
              { img: client4Img, alt: "Happy client with Toy Poodle puppy in Delhi NCR" },
            ].map((p, i) => (
              <Link
                key={i}
                to="/reviews"
                className="group relative block overflow-hidden bg-black aspect-[4/3] sm:aspect-square lg:aspect-auto"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Trust Counters */}
      <section className="bg-lime py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center md:grid-cols-4">
          {[
            ["5,000+", "Happy Puppies Placed"],
            ["100%", "Purebred & KCI Certified"],
            ["21-Point", "Vet Health Checkup"],
            ["Same Day", "AC Delivery Across NCR"],
          ].map(([count, label]) => (
            <div key={label} className="space-y-0.5">
              <p className="font-display text-2xl font-black text-ink md:text-3xl">
                {count}
              </p>
              <p className="text-xs font-bold tracking-wider text-ink/80 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Live Video Call & Safety Announcement */}
      <section className="bg-pink-soft/80 border-b border-border/60 py-4 px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-pink-deep text-white shadow-sm">
              <Video className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm sm:text-base font-black text-ink">
                Want to see puppies live before making a decision?
              </p>
              <p className="text-xs text-muted-foreground">
                Schedule a 5-minute WhatsApp video tour to watch the puppies play in real-time.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919870166623?text=Hello%20Delhi%20Puppy%20Point%2C%20I%20would%20like%20to%20request%20a%20live%20WhatsApp%20video%20call%20to%20see%20available%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-extrabold text-white shadow transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> Live Video Call Now
            </a>
            <a
              href="tel:+919870166623"
              className="inline-flex items-center gap-1.5 rounded-full border border-pink-deep bg-background px-4 py-2.5 text-xs font-extrabold text-pink-deep hover:bg-pink-soft"
            >
              <Phone className="h-3.5 w-3.5" /> Call Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Puppies For Sale Catalog Grid */}
      <section className="paw-bg py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1 rounded-full bg-lime/40 px-3.5 py-1 text-xs font-extrabold uppercase text-ink">
              <Sparkles className="h-3.5 w-3.5 text-lime-dark" /> Available Litters in Delhi NCR
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
              Healthy & Certified Puppies for Sale
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every puppy is vet inspected, vaccinated, socialized, and ready to become a cherished member of your family.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {puppies.map((p) => (
              <ServiceCard key={p.id} service={p} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-display text-sm font-extrabold text-white shadow-lg transition-transform hover:scale-105"
            >
              Explore Complete Breed Directory & Pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Step Easy Adoption / Purchase Process */}
      <section className="bg-background py-16 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black tracking-wider text-pink-deep uppercase">
              How It Works
            </span>
            <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-4xl">
              Bringing Your Puppy Home in 4 Simple Steps
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We make welcoming a new fur-baby transparent, stress-free, and safe.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Choose Your Breed",
                desc: "Browse our active litters online or consult our breed counselor based on your home size and family lifestyle.",
              },
              {
                step: "02",
                title: "Live Video Verification",
                desc: "Meet the puppies in real-time over WhatsApp video call or visit our hygienic kennel facility in Chattarpur, South Delhi.",
              },
              {
                step: "03",
                title: "Vet Health Clearance",
                desc: "Our veterinary doctor conducts a fresh health checkup, signs vaccination paperwork, and prepares the puppy's passport.",
              },
              {
                step: "04",
                title: "Safe Doorstep Delivery",
                desc: "Your puppy is transported in a sanitized AC pet cab directly to your home with a free starter kit and diet schedule.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-4xl font-black text-pink-soft">
                  {s.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-black text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Delhi Puppy Point */}
      <section className="bg-pink-soft py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <span className="text-xs font-black tracking-wider text-pink-deep uppercase">
              Ethical Standards & Care
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black text-ink">
              Why Delhi Puppy Point is Delhi NCR's Most Trusted Pet Store
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Unlike ordinary pet shops or unverified brokers, we operate with 100% veterinary oversight, ethical breeding, and zero tolerance for puppy mills.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                ["100% Purebred Lineage Guaranteed", "All parent dogs are verified for pure bloodline and health. KCI papers and microchips provided."],
                ["21-Point Veterinary Health Inspection", "Every pup is checked for congenital defects, parvo, distemper, joints, heart, and coat before leaving."],
                ["Free Comprehensive Puppy Starter Kit", "Includes starter nutrition kibble, feeding bowl, favorite chew toy, diet chart, and vaccination passport."],
                ["Doorstep Climate-Controlled Delivery", "Dedicated AC vehicles across Delhi, Gurugram, Noida, Greater Noida, Faridabad & Ghaziabad."],
                ["Lifetime Pet Parenting Guidance", "Get continuous phone and WhatsApp support for puppy training, teething, grooming, and diet from certified experts."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-deep" />
                  <div>
                    <p className="font-display font-extrabold text-ink">{t}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20want%20to%20know%20more%20about%20puppy%20health%20guarantee."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-pink-deep px-6 py-3 font-display text-xs sm:text-sm font-extrabold text-white shadow transition-all hover:bg-pink-deep/90"
              >
                Inquire on WhatsApp
              </a>
              <Link
                to="/about"
                className="rounded-full border border-border bg-card px-6 py-3 font-display text-xs sm:text-sm font-extrabold text-ink transition-colors hover:bg-accent"
              >
                Learn More About Our Kennel
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={goldenRetrieverImg}
                alt="Healthy Golden Retriever puppy at Delhi Puppy Point"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={labradorImg}
                alt="Yellow Labrador puppy playing"
                loading="lazy"
                className="h-44 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={shihTzuImg}
                alt="Fluffy Shih Tzu puppy"
                loading="lazy"
                className="h-44 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-background py-12 border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
          {[
            [ShieldCheck, "15-Day Viral Health Guarantee", "We stand behind the health of every puppy with our written medical guarantee."],
            [BadgeCheck, "KCI Certified & Microchipped", "Purebred lineage with official Kennel Club of India paperwork options."],
            [HeartHandshake, "Lifetime Pet Support", "Advice on teething, diet, vaccinations, and grooming whenever you need."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={t as string} className="flex gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pink-soft text-pink-deep">
                  <I className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-base font-extrabold text-ink">{t as string}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-black tracking-wider text-pink-deep uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-4xl">
            Happy Pet Parents Across Delhi NCR
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Over 5,000 families in Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad have trusted Delhi Puppy Point.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-lime-dark">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="rounded-full bg-pink-soft px-2.5 py-0.5 text-[10px] font-bold text-pink-deep">
                    {r.breed}
                  </span>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/85">
                  "{r.text}"
                </p>
              </div>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-extrabold text-ink">{r.name}</p>
                <p className="text-[11px] text-muted-foreground">{r.city}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-pink-deep hover:underline"
          >
            Read All Reviews & Adoption Stories &rarr;
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-pink-soft/50 py-16 border-t border-border/80">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black tracking-wider text-pink-deep uppercase">
              Got Questions?
            </span>
            <h2 className="mt-2 font-display text-3xl font-black text-ink md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to know about buying a puppy in Delhi NCR.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between font-display text-base font-extrabold text-ink select-none">
                  <span>{f.q}</span>
                  <span className="ml-4 text-pink-deep transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-pink-deep to-pink py-16 text-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-1 text-xs font-black uppercase text-white backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-lime" /> Delhi NCR Doorstep Delivery
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Ready to Welcome Your New Puppy Home?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
            Call our helpline or WhatsApp us directly. Our breed specialists are standing by to share live photos, videos, and guide you to the perfect puppy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919870166623?text=Hello%20Delhi%20Puppy%20Point%2C%20I%20am%20ready%20to%20buy%20a%20puppy.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-display text-sm font-black text-white shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Video & Booking
            </a>
            <a
              href="tel:+919870166623"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-display text-sm font-black text-white shadow-lg transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5 text-lime" /> Call +91 98701 66623
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
