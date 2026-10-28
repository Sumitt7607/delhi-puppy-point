import { MessageCircle, Phone } from "lucide-react";

export function MobileBottomCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/80 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex items-center gap-2.5">
      <a
        href="tel:+919870166623"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-pink-deep py-2.5 px-3 text-xs font-black text-white shadow-md active:scale-95 transition-transform"
      >
        <Phone className="h-4 w-4 shrink-0" />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20am%20looking%20for%20a%20healthy%20puppy%20in%20Delhi%20NCR."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 px-3 text-xs font-black text-white shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
