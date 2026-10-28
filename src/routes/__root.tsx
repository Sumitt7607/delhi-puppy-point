import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { MobileBottomCta } from "@/components/site/MobileBottomCta";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  "@id": "https://www.delhipuppypoint.co.in/#store",
  name: "Delhi Puppy Point",
  legalName: "Delhi Puppy Point Pet Services",
  url: "https://www.delhipuppypoint.co.in",
  logo: "https://www.delhipuppypoint.co.in/favicon.svg",
  image: "https://www.delhipuppypoint.co.in/favicon.svg",
  description:
    "Delhi NCR's #1 verified purebred puppy store. KCI registered, vet-certified healthy puppies for sale with doorstep delivery in Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.",
  telephone: "+91-9870166623",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card, Net Banking",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chattarpur / South Delhi",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110074",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5023,
    longitude: 77.1772,
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Greater Noida" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "City", name: "Ghaziabad" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "520",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: ["https://wa.me/919870166623"],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "google2d48ed6ce5ed6c83" },
      { title: "Delhi Puppy Point | Certified Puppies for Sale in Delhi NCR" },
      {
        name: "description",
        content:
          "Buy 100% purebred, vet-certified healthy puppies for sale in Delhi, Gurgaon, Noida, Faridabad & Ghaziabad. Golden Retriever, Labrador, Shih Tzu, German Shepherd, Beagle & more with KCI papers and doorstep delivery.",
      },
      {
        name: "keywords",
        content:
          "puppies for sale in delhi, buy puppy delhi ncr, dog shop near me, golden retriever puppy delhi, labrador puppy price gurgaon, shih tzu puppy noida, kci certified puppies delhi, pet shop south delhi, dog breeders faridabad, ghaziabad puppy shop",
      },
      { name: "author", content: "Delhi Puppy Point" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-DL" },
      { name: "geo.placename", content: "Delhi NCR, New Delhi, Gurugram, Noida, Faridabad, Ghaziabad" },
      { name: "geo.position", content: "28.5023;77.1772" },
      { name: "ICBM", content: "28.5023, 77.1772" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: "Delhi Puppy Point" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: "Delhi Puppy Point | Certified Puppies for Sale in Delhi NCR" },
      {
        property: "og:description",
        content: "Delhi NCR's most trusted puppy adoption & sales center — 5,000+ healthy puppies placed with happy families.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.delhipuppypoint.co.in/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Delhi Puppy Point | Certified Puppies for Sale in Delhi NCR" },
      {
        name: "twitter:description",
        content: "Buy purebred, vet-certified healthy puppies with doorstep AC delivery across Delhi, Gurgaon, Noida & Faridabad.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.delhipuppypoint.co.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <MobileBottomCta />
    </QueryClientProvider>
  );
}
