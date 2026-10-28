import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import type { Puppy } from "./data";

export function ServiceCard({ service }: { service: Puppy }) {
  const whatsappUrl =
    service.chatUrl ||
    `https://wa.me/919870166623?text=${encodeURIComponent(
      `Hi! I am interested in a ${service.name} puppy.`
    )}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-pink-deep/40">
      {/* Puppy Image with Available Badge */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={service.image}
          alt={`${service.name} puppy for sale in Delhi NCR`}
          loading="lazy"
          width={640}
          height={480}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Available Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-emerald-600/95 px-3 py-1 text-xs font-black text-white shadow-md backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          {service.status || "Available"}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 text-center">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-ink transition-colors group-hover:text-pink-deep">
            {service.name}
          </h3>

          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* WhatsApp Chat & Call Now Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 py-3 text-xs sm:text-sm font-extrabold text-white shadow-sm transition-all hover:bg-[#1ebe5d] active:scale-95"
          >
            <MessageCircle className="h-4 w-4 shrink-0" /> Chat
          </a>

          <a
            href="tel:+919870166623"
            className="flex items-center justify-center gap-1.5 rounded-full bg-pink-deep px-4 py-3 text-xs sm:text-sm font-extrabold text-white shadow-sm transition-all hover:bg-pink-deep/90 active:scale-95"
          >
            <Phone className="h-4 w-4 shrink-0" /> Call Now
          </a>
        </div>
      </div>
    </article>
  );
}

// Named alias
export const PuppyCard = ServiceCard;
