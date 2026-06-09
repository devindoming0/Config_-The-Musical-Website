const sponsors = [
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
  { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" },
  { name: "Accenture", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/accenture.svg" },
  { name: "Intuit", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intuit.svg" },
  { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vercel.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg" },
  { name: "Linear", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linear.svg" },
  { name: "Loom", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/loom.svg" },
  { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zapier.svg" },
  { name: "Anthropic", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/anthropic.svg" },
  { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" },
  { name: "Shopify", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg" },
  { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cloudflare.svg" },
  { name: "Webflow", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webflow.svg" },
  { name: "Datadog", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/datadog.svg" },
  { name: "1Password", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/1password.svg" },
  { name: "Pitch", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pitch.svg" },
  { name: "Mercury", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mercury.svg" },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="font-mono-label text-[11px] text-foreground/60 mb-4">PRODUCED IN ASSOCIATION WITH</div>
        <h2
          style={{ fontFamily: "'Figma Sans VF', sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          className="max-w-[820px] mb-10"
        >
          Thank you to our Config 2026 sponsors.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-border">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="border-r border-b border-border aspect-[2/1] flex items-center justify-center bg-card hover:bg-muted transition-colors p-6"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-8 w-auto max-w-[80%] opacity-80 hover:opacity-100 transition-opacity invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
