import { Link } from "@tanstack/react-router";
import { Dog, Heart, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-background pb-16 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Col */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-pink-deep text-white">
              <Dog className="h-6 w-6" />
            </span>
            <span className="font-display text-2xl font-black text-white">
              Delhi Puppy <span className="text-pink">Point</span>
            </span>
          </div>
          <p className="text-xs leading-relaxed text-background/75">
            Delhi NCR's certified purebred puppy store. We believe every home deserves the unconditional
            love of a healthy, joyful, vet-certified puppy. Ethical breeding, zero cage mills, and 100% health guarantee.
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs text-lime">
            <ShieldCheck className="h-4 w-4" /> 100% KCI Registered & Vet Checked
          </div>
        </div>

        {/* Popular Breeds */}
        <div>
          <h4 className="font-display text-base font-extrabold text-white">Popular Breeds in Delhi NCR</h4>
          <ul className="mt-3 space-y-2 text-xs text-background/75">
            <li><Link to="/services" className="hover:text-pink transition-colors">Golden Retriever Puppies</Link></li>
            <li><Link to="/services" className="hover:text-pink transition-colors">Shih Tzu Puppies (Hypoallergenic)</Link></li>
            <li><Link to="/services" className="hover:text-pink transition-colors">Labrador Retriever Puppies</Link></li>
            <li><Link to="/services" className="hover:text-pink transition-colors">German Shepherd Show-line</Link></li>
            <li><Link to="/services" className="hover:text-pink transition-colors">Beagle & Siberian Husky Puppies</Link></li>
            <li><Link to="/services" className="hover:text-pink transition-colors">Toy Pomeranian & French Bulldog</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-base font-extrabold text-white">Adoption & Information</h4>
          <ul className="mt-3 space-y-2 text-xs text-background/75">
            <li><Link to="/about" className="hover:text-pink transition-colors">About Our Kennel & Ethics</Link></li>
            <li><Link to="/services" className="hover:text-pink transition-colors">All Available Puppies</Link></li>
            <li><Link to="/reviews" className="hover:text-pink transition-colors">Real Pet Parent Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-pink transition-colors">Book a Kennel Visit</Link></li>
            <li><Link to="/contact" className="hover:text-pink transition-colors">Live Video Call Request</Link></li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h4 className="font-display text-base font-extrabold text-white">Contact & Kennel Location</h4>
          <ul className="mt-3 space-y-3 text-xs text-background/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
              <span>Main Chattarpur Road & DLF Phase 5, Delhi NCR</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
              <a href="tel:+919870166623" className="hover:text-white font-bold">+91 98701 66623</a>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
              <a
                href="https://wa.me/919870166623?text=Hi%20Delhi%20Puppy%20Point%2C%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp 24/7 Helpline
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
              <span>delhipuppypoint@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15 py-5 text-center text-xs text-background/60">
        <p>© {new Date().getFullYear()} Delhi Puppy Point. All rights reserved. Serving Delhi, Gurugram, Noida, Faridabad & Ghaziabad with certified love.</p>
      </div>
    </footer>
  );
}
