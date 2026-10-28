import goldenRetrieverImg from "@/assets/puppies/golden-retriever.jpg";
import shihTzuImg from "@/assets/puppies/shih-tzu.jpg";
import labradorImg from "@/assets/puppies/labrador.jpg";
import germanShepherdImg from "@/assets/puppies/german-shepherd.png";
import pomeranianImg from "@/assets/puppies/pomeranian.jpg";
import beagleImg from "@/assets/puppies/beagle.jpg";
import huskyImg from "@/assets/puppies/husky.jpg";
import pugImg from "@/assets/puppies/pug.jpg";
import frenchBulldogImg from "@/assets/puppies/french-bulldog.png";
import malteseImg from "@/assets/puppies/maltese.png";
import dachshundImg from "@/assets/puppies/dachshund.jpg";
import cockerSpanielImg from "@/assets/puppies/cocker-spaniel.png";
import maltipooImg from "@/assets/puppies/maltipoo.jpg";
import tibetanMastiffImg from "@/assets/puppies/tibetan-mastiff.png";
import bichonFriseImg from "@/assets/puppies/bichon-frise.jpg";
import toyPoodleImg from "@/assets/puppies/toy-poodle.png";
import cavalierKingCharlesImg from "@/assets/puppies/cavalier-king-charles.jpg";
import rottweilerImg from "@/assets/puppies/rottweiler.jpg";
import blackGermanShepherdImg from "@/assets/puppies/black-german-shepherd.png";

export type PuppyCategory = "Family Dogs" | "Toy & Apartment" | "Guard & Large Dogs";

export type Puppy = {
  id: number;
  name: string;
  breed: string;
  category: PuppyCategory;
  image: string;
  status: string; // "Available"
  badge: string;
  desc: string;
  chatUrl: string;
};

// Aliases for backward compatibility
export type ServiceCategory = PuppyCategory;
export type Service = Puppy;

export const puppyCategories = [
  "All Puppies",
  "Family Dogs",
  "Toy & Apartment",
  "Guard & Large Dogs",
] as const;

export const serviceCategories = puppyCategories;

export const puppies: Puppy[] = [
  {
    id: 1,
    name: "Golden Retriever",
    breed: "Golden Retriever",
    category: "Family Dogs",
    image: goldenRetrieverImg,
    status: "Available",
    badge: "Most Popular",
    desc: "Affectionate, intelligent, and loyal — the perfect family companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Golden%20Retriever%20puppy.",
  },
  {
    id: 2,
    name: "Labrador",
    breed: "Labrador",
    category: "Family Dogs",
    image: labradorImg,
    status: "Available",
    badge: "Family Friendly",
    desc: "Outgoing, playful, and gentle — excellent with children.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Labrador%20puppy.",
  },
  {
    id: 3,
    name: "Shih Tzu",
    breed: "Shih Tzu",
    category: "Toy & Apartment",
    image: shihTzuImg,
    status: "Available",
    badge: "Apartment Favorite",
    desc: "Charming, lively, and affectionate — perfect lap dog for apartments.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Shih%20Tzu%20puppy.",
  },
  {
    id: 4,
    name: "Pomeranian",
    breed: "Pomeranian",
    category: "Toy & Apartment",
    image: pomeranianImg,
    status: "Available",
    badge: "Fluffy & Tiny",
    desc: "Tiny, fluffy, and full of personality — a lively companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Pomeranian%20puppy.",
  },
  {
    id: 5,
    name: "German Shepherd",
    breed: "German Shepherd",
    category: "Guard & Large Dogs",
    image: germanShepherdImg,
    status: "Available",
    badge: "Loyal Protector",
    desc: "Confident, courageous, and highly trainable loyal protectors.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20German%20Shepherd%20puppy.",
  },
  {
    id: 6,
    name: "Beagle",
    breed: "Beagle",
    category: "Family Dogs",
    image: beagleImg,
    status: "Available",
    badge: "Merry & Active",
    desc: "Curious, friendly, and merry — a great active family pet.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Beagle%20puppy.",
  },
  {
    id: 7,
    name: "Siberian Husky",
    breed: "Siberian Husky",
    category: "Guard & Large Dogs",
    image: huskyImg,
    status: "Available",
    badge: "Blue Eyes",
    desc: "Stunningly beautiful, social, and energetic adventure companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Siberian%20Husky%20puppy.",
  },
  {
    id: 8,
    name: "Pug",
    breed: "Pug",
    category: "Toy & Apartment",
    image: pugImg,
    status: "Available",
    badge: "Charming & Cute",
    desc: "Charming, mischievous, and loving small companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Pug%20puppy.",
  },
  {
    id: 9,
    name: "French Bulldog",
    breed: "French Bulldog",
    category: "Toy & Apartment",
    image: frenchBulldogImg,
    status: "Available",
    badge: "City Living",
    desc: "Playful, adaptable, and low-maintenance — ideal for city living.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20French%20Bulldog%20puppy.",
  },
  {
    id: 10,
    name: "Maltese",
    breed: "Maltese",
    category: "Toy & Apartment",
    image: malteseImg,
    status: "Available",
    badge: "Gentle & Glamorous",
    desc: "Gentle, trusting, and devoted — a glamorous yet friendly companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Maltese%20puppy.",
  },
  {
    id: 11,
    name: "Dachshund",
    breed: "Dachshund",
    category: "Toy & Apartment",
    image: dachshundImg,
    status: "Available",
    badge: "Bold & Spunky",
    desc: "Clever, curious, and spunky — a bold little dog with a big heart.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Dachshund%20puppy.",
  },
  {
    id: 12,
    name: "Cocker Spaniel",
    breed: "Cocker Spaniel",
    category: "Family Dogs",
    image: cockerSpanielImg,
    status: "Available",
    badge: "Sweet & Gentle",
    desc: "Sweet, gentle, and eager to please — wonderful with families.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Cocker%20Spaniel%20puppy.",
  },
  {
    id: 13,
    name: "Maltipoo",
    breed: "Maltipoo",
    category: "Toy & Apartment",
    image: maltipooImg,
    status: "Available",
    badge: "Hypoallergenic",
    desc: "Hypoallergenic, loving, and super intelligent — a joyful companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Maltipoo%20puppy.",
  },
  {
    id: 14,
    name: "Tibetan Mastiff",
    breed: "Tibetan Mastiff",
    category: "Guard & Large Dogs",
    image: tibetanMastiffImg,
    status: "Available",
    badge: "Noble Guardian",
    desc: "Majestic, loyal, and powerful — a noble guardian breed with a lion-like mane.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Tibetan%20Mastiff%20puppy.",
  },
  {
    id: 15,
    name: "Bichon Frisé",
    breed: "Bichon Frisé",
    category: "Toy & Apartment",
    image: bichonFriseImg,
    status: "Available",
    badge: "Fluffy Cloud",
    desc: "Cheerful, gentle, and hypoallergenic — a fluffy cloud of joy and affection.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Bichon%20Fris%C3%A9%20puppy.",
  },
  {
    id: 16,
    name: "Toy Poodle",
    breed: "Toy Poodle",
    category: "Toy & Apartment",
    image: toyPoodleImg,
    status: "Available",
    badge: "Highly Intelligent",
    desc: "Brilliant, elegant, and hypoallergenic — one of the most intelligent breeds.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Toy%20Poodle%20puppy.",
  },
  {
    id: 17,
    name: "Cavalier King Charles Spaniel",
    breed: "Cavalier King Charles Spaniel",
    category: "Family Dogs",
    image: cavalierKingCharlesImg,
    status: "Available",
    badge: "Ultimate Lap Dog",
    desc: "Gentle, graceful, and sweet-tempered — the ultimate companion lap dog.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Cavalier%20King%20Charles%20Spaniel%20puppy.",
  },
  {
    id: 18,
    name: "Rottweiler",
    breed: "Rottweiler",
    category: "Guard & Large Dogs",
    image: rottweilerImg,
    status: "Available",
    badge: "Devoted Guardian",
    desc: "Loyal, loving, and confident guardian — a devoted family protector.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Rottweiler%20puppy.",
  },
  {
    id: 19,
    name: "Black German Shepherd",
    breed: "Black German Shepherd",
    category: "Guard & Large Dogs",
    image: blackGermanShepherdImg,
    status: "Available",
    badge: "Rare & Majestic",
    desc: "Strikingly beautiful, intelligent, and alert — a rare and loyal companion.",
    chatUrl: "https://wa.me/919870166623?text=Hi!%20I%20am%20interested%20in%20a%20Black%20German%20Shepherd%20puppy.",
  },
];

export const services = puppies;

export const reviews = [
  {
    name: "Rajesh & Shalini Sharma",
    city: "Greater Kailash 1, Delhi",
    breed: "Golden Retriever",
    text: "We brought home our Golden Retriever puppy 'Leo' from Delhi Puppy Point last month. He was so healthy, playful, and already pee-pad trained! The vet checkup records were 100% genuine. The team checked in on us weekly.",
    rating: 5,
  },
  {
    name: "Dr. Vikram Mehta",
    city: "DLF Phase 5, Gurugram",
    breed: "Shih Tzu",
    text: "As a doctor, health hygiene is paramount for me. Delhi Puppy Point provided complete viral test reports, first DHPPi vaccination record, and delivered our Shih Tzu 'Bella' in an AC vehicle right to our doorstep.",
    rating: 5,
  },
  {
    name: "Priyanka Chauhan",
    city: "Sector 62, Noida",
    breed: "Beagle",
    text: "Did a live WhatsApp video call to see the litter before finalizing. No pressure, honest advice, and they gave us a complete puppy starter kit. 'Milo' has become the joy of our household!",
    rating: 5,
  },
  {
    name: "Amitav Roy",
    city: "Dwarka Sector 12, Delhi",
    breed: "German Shepherd",
    text: "Got a heavy-bone German Shepherd puppy for our villa. Remarkable bone structure and confident temperament. Their trainer even gave us guidance for crate training. Highly recommended in Delhi NCR!",
    rating: 5,
  },
  {
    name: "Neha & Rohan Kapoor",
    city: "Indirapuram, Ghaziabad",
    breed: "Labrador",
    text: "Best pet shop experience in NCR! Honest advice on breed selection for our 6-year-old daughter. Our yellow Lab 'Buddy' is gentle, energetic, and completely cleared by our own family vet.",
    rating: 5,
  },
  {
    name: "Tarun Saxena",
    city: "Green Fields, Faridabad",
    breed: "Siberian Husky",
    text: "Was nervous about getting a Husky in NCR, but Delhi Puppy Point walked us through summer care, nutrition, and cooling tips. 'Ghost' has stunning blue eyes and is bursting with energy!",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "How do I choose and buy a puppy from Delhi Puppy Point?",
    a: "You can browse our available puppies online or connect with our breed advisor on WhatsApp / Call (+91 98701 66623). We arrange a live WhatsApp video call so you can interact with the puppies in real-time. Once you pick your puppy, we prepare the health certificate and deliver safely to your doorstep anywhere in Delhi NCR.",
  },
  {
    q: "Are the puppies vaccinated and dewormed?",
    a: "Yes! Every single puppy is inspected by a registered veterinary doctor, given age-appropriate vaccinations (such as DHPPi/Puppy DP), and dewormed multiple times. You receive an official vaccination card signed by the vet.",
  },
  {
    q: "Do you provide KCI (Kennel Club of India) registration papers?",
    a: "Yes, KCI registration papers and microchipping are available for eligible purebred litters. We can provide the pedigree lineage certificate upon request.",
  },
  {
    q: "How does doorstep delivery work in Delhi, Gurgaon, Noida, Faridabad & Ghaziabad?",
    a: "We have dedicated, temperature-controlled, sanitized pet transit vehicles driven by trained pet handlers. Your puppy travels safely without heat exhaustion or stress, directly from our nursery to your home, often within 2 to 4 hours of confirmation.",
  },
  {
    q: "Can I visit your facility in Delhi NCR in person?",
    a: "Absolutely! We welcome prospective pet parents to visit our clean, hygienic kennel in South Delhi / Chattarpur by scheduling an appointment. Call or WhatsApp +91 98701 66623 to book a visit.",
  },
  {
    q: "What starter kit and support do I receive with my puppy?",
    a: "Every puppy comes with a Free Starter Kit: sample premium puppy food, diet chart, vaccination schedule passport, a favorite chew toy, and lifetime phone/WhatsApp advice for health, grooming, and training.",
  },
];
