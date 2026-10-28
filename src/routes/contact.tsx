import { createFileRoute } from "@tanstack/react-router";
import { Clock, Dog, Mail, MapPin, MessageCircle, Phone, Sparkles, Video, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const contactBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.delhipuppypoint.co.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact & Kennel Visit",
      item: "https://www.delhipuppypoint.co.in/contact",
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Delhi Puppy Point",
  description: "Schedule kennel visits, live WhatsApp video calls, or inquire about puppies.",
  url: "https://www.delhipuppypoint.co.in/contact",
  mainEntity: {
    "@type": "PetStore",
    name: "Delhi Puppy Point",
    telephone: "+91-9870166623",
    email: "info@delhipuppypoint.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9870166623",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Puppy & Kennel Visit | Delhi Puppy Point" },
      {
        name: "description",
        content:
          "Contact Delhi Puppy Point for puppy inquiries, live WhatsApp video calls, and kennel visit appointments in South Delhi and Gurugram. Call +91 98701 66623.",
      },
      {
        name: "keywords",
        content:
          "contact delhi puppy point, visit puppy kennel delhi, puppy shop phone number, live video call puppy buying, south delhi dog nursery",
      },
      { property: "og:title", content: "Book a Puppy & Kennel Visit | Delhi Puppy Point" },
      {
        property: "og:description",
        content: "Schedule your kennel visit or request instant WhatsApp photos and videos of available purebred puppies.",
      },
      { property: "og:url", content: "https://www.delhipuppypoint.co.in/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.delhipuppypoint.co.in/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(contactBreadcrumbSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(contactPageSchema),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "South Delhi",
    breed: "Golden Retriever Puppy",
    gender: "Any",
    housing: "Apartment / Flat",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/919870166623?text=${encodeURIComponent(
    `Hello Delhi Puppy Point, my name is ${formData.name || "Pet Lover"} from ${formData.city}. I am interested in inquiring about ${formData.breed} (${formData.gender} preference, living in ${formData.housing}). Note: ${formData.message || "Please share live videos and pricing."}`
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-gradient-to-b from-pink to-pink-soft py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-deep px-3.5 py-1 text-xs font-black text-white uppercase shadow-sm">
            <Dog className="h-3.5 w-3.5" /> Direct Support & Visits
          </span>
          <h1 className="mt-3 font-display text-4xl font-black text-ink md:text-5xl">
            Book Your Puppy & Visit Our Kennel
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm text-ink/80 leading-relaxed">
            Have questions about breed compatibility, puppy diet, or want to schedule a real-time WhatsApp video call? We are here for you 7 days a week.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2">
        {/* Contact info cards */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h2 className="font-display text-xl font-black text-ink">
              Reach Out Directly
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Instant responses within 5 to 10 minutes during working hours.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="https://wa.me/919870166623?text=Hello%20Delhi%20Puppy%20Point%2C%20I%20want%20to%20inquire%20about%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 p-4 transition-all hover:bg-[#25D366]/20"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white shadow-sm">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">WhatsApp 24/7 Helpline</p>
                  <p className="text-xs text-muted-foreground">Click to start instant live chat & video call</p>
                </div>
              </a>

              <a
                href="tel:+919870166623"
                className="flex items-center gap-4 rounded-2xl bg-pink-soft border border-border/80 p-4 transition-all hover:bg-pink-soft/80"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-pink-deep text-white shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">Direct Call / Helpline</p>
                  <p className="text-xs font-bold text-pink-deep">+91 98701 66623</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime text-ink shadow-sm">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">Kennel & Adoption Facility</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Main Chattarpur Road & DLF Phase 5 (By Appointment Only for puppy safety and hygiene)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-white shadow-sm">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">Visiting & Delivery Hours</p>
                  <p className="text-xs text-muted-foreground">Monday – Sunday: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Puppy Booking Form */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-ink">
                <CheckCircle2 className="h-10 w-10 text-lime-dark" />
              </div>
              <h2 className="font-display text-2xl font-black text-ink">
                Inquiry Received Successfully!
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-bold text-ink">{formData.name}</span>! Our breed specialist has been alerted and will reach out to <span className="font-bold text-ink">{formData.phone}</span> within 10 minutes.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-xs sm:text-sm font-black text-white shadow hover:bg-[#1ebe5d]"
                >
                  <MessageCircle className="h-4 w-4" /> Send Instant Message on WhatsApp Now
                </a>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-pink-deep underline"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display text-2xl font-black text-ink">
                    Puppy Inquiry & Booking
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Get video clips, pricing and vaccination proof instantly.
                  </p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-soft text-pink-deep">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Your Full Name *</label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-pink-deep focus:ring-1 focus:ring-pink-deep"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1">WhatsApp / Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98701 66623"
                    className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none focus:border-pink-deep focus:ring-1 focus:ring-pink-deep"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1">Breed Interested In</label>
                    <select
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-xs text-ink outline-none focus:border-pink-deep"
                    >
                      <option>Golden Retriever Puppy</option>
                      <option>Shih Tzu Puppy</option>
                      <option>Labrador Retriever Puppy</option>
                      <option>German Shepherd Puppy</option>
                      <option>Beagle Puppy</option>
                      <option>Siberian Husky Puppy</option>
                      <option>French Bulldog Puppy</option>
                      <option>Pomeranian (Toy Pom)</option>
                      <option>Rottweiler Puppy</option>
                      <option>Pug Puppy</option>
                      <option>Other / Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-1">Your City / Area in NCR</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-xs text-ink outline-none focus:border-pink-deep"
                    >
                      <option>South Delhi (GK / Saket / Chattarpur)</option>
                      <option>West Delhi (Dwarka / Punjabi Bagh / Janakpuri)</option>
                      <option>Central / East / North Delhi</option>
                      <option>Gurugram (DLF / Cyber City / Golf Course)</option>
                      <option>Noida / Greater Noida</option>
                      <option>Faridabad</option>
                      <option>Ghaziabad (Indirapuram / Vaishali)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1">Gender Preference</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-xs text-ink outline-none focus:border-pink-deep"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Any (Best Health)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink mb-1">Housing Type</label>
                    <select
                      value={formData.housing}
                      onChange={(e) => setFormData({ ...formData, housing: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-xs text-ink outline-none focus:border-pink-deep"
                    >
                      <option>Apartment / Flat</option>
                      <option>Independent House / Villa</option>
                      <option>Farmhouse with Lawn</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1">Notes / Questions</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us if you want a live video call or kennel visit timing..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-2 text-xs outline-none focus:border-pink-deep"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-pink-deep px-6 py-3.5 font-display text-sm font-black text-white shadow-md transition-transform hover:scale-[1.01] active:scale-95"
                >
                  Submit Puppy Inquiry &rarr;
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
