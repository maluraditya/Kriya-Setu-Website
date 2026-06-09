import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

import appCss from "../styles.css?url";


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

export const Route = createRootRoute({
  head: () => {
    const getBaseUrl = () => {
      if (typeof window !== "undefined") return window.location.origin;
      if (typeof process !== "undefined" && process.env?.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
      if (typeof process !== "undefined" && process.env?.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
      return "https://kriyasetu.com";
    };

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Kriya Setu — Bridging Knowledge and Real Competence" },
        { name: "description", content: "AI-powered experiential learning platform helping institutions move from memorisation to mastery." },
        { name: "author", content: "KRIYASETU LLP" },
        { name: "keywords", content: "Kriya Setu, Experiential Learning, AI Education, Conceptual Clarity, EdTech, India Education, NEP 2020, School Curriculum" },
        
        // Open Graph (WhatsApp, LinkedIn, Facebook)
        { property: "og:site_name", content: "Kriya Setu" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Kriya Setu — Bridging Knowledge and Real Competence" },
        { property: "og:description", content: "AI-powered experiential learning platform helping institutions move from memorisation to mastery." },
        { property: "og:image", content: `${getBaseUrl()}/og-image.png` },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Kriya Setu — Bridging Knowledge and Real Competence" },
        
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Kriya Setu — Bridging Knowledge and Real Competence" },
        { name: "twitter:description", content: "AI-powered experiential learning platform helping institutions move from memorisation to mastery." },
        { name: "twitter:image", content: `${getBaseUrl()}/og-image.png` },
      ],
    links: [
      {
        rel: "icon",
        href: "/logo.png",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        href: "/logo.png",
      },
      {
        rel: "canonical",
        href: getBaseUrl(),
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "KRIYASETU LLP",
          "alternateName": "Kriya Setu",
          "url": getBaseUrl(),
          "logo": `${getBaseUrl()}/logo.png`,
          "email": "hello@kriyasetu.com",
          "description": "AI-powered experiential learning platform helping institutions move from memorisation to mastery.",
          "foundingLocation": "India",
          "sameAs": [
            "https://www.linkedin.com/company/kriyasetu",
            "https://twitter.com/kriyasetu"
          ]
        }),
      },
    ],
  };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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
  return (
    <>
      <Outlet />
      <Toaster position="top-center" />
      <WhatsAppButton />
    </>
  );
}

