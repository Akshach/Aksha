import type { FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroDevice from "@/assets/hero-device.jpg";
import workBanking from "@/assets/work-banking.jpg";
import workTravel from "@/assets/work-travel.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workHealth from "@/assets/work-health.jpg";
import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akanksha Chaudhary — Product & UI/UX Designer, Digital Artist" },
      {
        name: "description",
        content:
          "Portfolio of Akanksha Chaudhary, a product and UI/UX designer and digital artist crafting interfaces, design systems and expressive visual work.",
      },
      { property: "og:title", content: "Akanksha Chaudhary — Product & UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Selected product, UI/UX and digital art work from a designer who moves between systems and pixels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
const EMAIL = "akankshachaudhary567@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/Akshach" },
  { label: "Twitter / X", href: "https://x.com/Akshach20" },
];

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const message = String(data.get("message") ?? "");
  const subject = encodeURIComponent(`Project enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}


const tools = [
  "Figma",
  "Procreate",
  "After Effects",
  "Blender",
  "Rive",
  "Framer",
  "Photoshop",
];

const gallery = [
  { src: art1, alt: "Abstract digital painting of aurora ribbons in teal and violet" },
  { src: art2, alt: "3D render of a glossy ceramic vessel in warm studio light" },
  { src: art3, alt: "Painterly digital character portrait with teal rim light" },
  { src: art4, alt: "Isometric 3D render of a cozy pastel living room" },
  { src: art5, alt: "Generative particle artwork of golden light streams" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="aurora-blob -left-24 -top-32 h-[520px] w-[520px] bg-aurora/30 animate-drift" />
        <div className="aurora-blob right-[-8rem] top-40 h-[460px] w-[460px] bg-aurora-2/25 animate-drift [animation-duration:20s] [animation-direction:reverse]" />
        <div className="aurora-blob bottom-[-6rem] left-1/3 h-[420px] w-[420px] bg-aurora-3/20 animate-drift [animation-duration:24s]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex items-center justify-between py-7">
          <span className="font-display text-lg font-medium tracking-tight">
            Akanksha <span className="text-aurora">Chaudhary</span>
          </span>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#gallery" className="transition-colors hover:text-foreground">
              Art
            </a>
            <a
              href="#contact"
              className="rounded-full bg-aurora px-4 py-2 text-sm font-medium text-primary-foreground ring-1 ring-aurora"
            >
              Say hello
            </a>
          </nav>
        </header>

        <section className="grid grid-cols-12 gap-6 py-10 sm:py-16">
          <div className="col-span-12 sm:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-aurora">
              Product &amp; UI/UX designer
            </span>
            <h1
              className="mt-5 font-display text-5xl leading-[1.05] text-balance sm:text-7xl"
              style={{ maxWidth: "12ch" }}
            >
              Designing interfaces people trust.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base text-pretty text-muted-foreground">
              I'm Akanksha Chaudhary — a designer who builds product, UI and digital art with a
              paper-craft feel and a commercial edge.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                View selected work
              </a>
              <div className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-aurora" /> Available for new projects
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className="glass relative rounded-2xl p-3">
              <img
                src={heroDevice}
                alt="Matte-black phone on brushed metal lit by teal aurora light"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between px-2 pt-3 text-xs text-muted-foreground">
                <span>Case: Nordwind App</span>
                <span className="text-aurora">2026</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden border-y border-line py-4">
          <div className="animate-marq flex w-max gap-10 whitespace-nowrap text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
                {tools.map((tool) => (
                  <span key={tool} className="flex gap-10">
                    {tool}
                    <span>·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="work" className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-2">
            <span className="sticky top-8 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
              01 —<br className="hidden sm:block" /> Selected work
            </span>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-6 sm:col-span-10">
            <article className="col-span-12 sm:col-span-7">
              <img
                src={workBanking}
                alt="Dark-theme banking dashboard with teal data visualisations on a laptop"
                loading="lazy"
                width={1440}
                height={1024}
                className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-white/5"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">Nordwind Banking</h3>
                <span className="text-xs text-muted-foreground">Lead product designer</span>
              </div>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                Redesigned onboarding and the money dashboard; +38% task completion in four
                months.
              </p>
            </article>

            <article className="col-span-12 sm:col-span-5">
              <img
                src={workTravel}
                alt="Travel booking mobile app screens in a warm sunset palette"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-white/5"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">Vela Travel</h3>
                <span className="text-xs text-muted-foreground">UI / UX</span>
              </div>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                A calm booking flow for a boutique airline; +22% bookings post-launch.
              </p>
            </article>

            <article className="col-span-12 sm:col-span-5">
              <img
                src={workBrand}
                alt="Brand identity paper swatches in teal and violet with a printed logo"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-white/5"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">Kiln Ceramics</h3>
                <span className="text-xs text-muted-foreground">Brand &amp; web</span>
              </div>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                Full identity and storefront for a ceramics studio; doubled online inquiries.
              </p>
            </article>

            <article className="col-span-12 sm:col-span-7">
              <img
                src={workHealth}
                alt="Wellness app interface with habit rings and soft teal gradients"
                loading="lazy"
                width={1440}
                height={1024}
                className="aspect-[4/3] w-full rounded-xl object-cover ring-1 ring-white/5"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">Halo Health</h3>
                <span className="text-xs text-muted-foreground">Product designer</span>
              </div>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                A habit-tracking companion; 4.8-star rating across 12k reviews.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative z-10">
        <div className="mx-auto max-w-6xl px-5 pt-20 sm:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                02 —
              </span>
              <h2
                className="mt-2 font-display text-4xl text-balance sm:text-5xl"
                style={{ maxWidth: "16ch" }}
              >
                Digital art, taped in.
              </h2>
            </div>
            <span className="hidden text-sm text-muted-foreground sm:block">
              Procreate · Blender · AE
            </span>
          </div>
        </div>
        <div className="mt-8 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
          {gallery.map((piece) => (
            <img
              key={piece.src}
              src={piece.src}
              alt={piece.alt}
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-72 shrink-0 snap-start rounded-xl object-cover ring-1 ring-white/5"
            />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 sm:col-span-2">
            <span className="sticky top-8 block text-xs uppercase tracking-[0.25em] text-muted-foreground">
              03 — About
            </span>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <h2
              className="font-display text-3xl text-balance sm:text-4xl"
              style={{ maxWidth: "20ch" }}
            >
              Product thinking, an artist's eye.
            </h2>
            <p className="mt-5 max-w-[48ch] text-base text-pretty text-muted-foreground">
              I move between systems and pixels — shipping product while keeping the work
              expressive. Print-trained, so I care about how color actually lands on a screen.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-aurora" /> Product &amp; system design
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-aurora-2" /> UI, motion &amp;
                prototyping
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-aurora-3" /> Digital art &amp; 3D
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-aurora-4" /> Brand &amp; art direction
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 sm:col-span-5">
              <span className="text-xs uppercase tracking-[0.25em] text-aurora">
                Let's make something
              </span>
              <h2
                className="mt-3 font-display text-4xl text-balance sm:text-5xl"
                style={{ maxWidth: "14ch" }}
              >
                Say hello.
              </h2>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-5 block text-sm text-muted-foreground transition-colors hover:text-aurora"
              >
                {EMAIL}
              </a>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full border border-line px-4 py-2 text-muted-foreground transition-transform hover:-translate-y-0.5 hover:text-foreground"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="col-span-12 space-y-4 sm:col-span-7"
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-muted-foreground">Your name</span>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-aurora"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-muted-foreground">Your email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-aurora"
                    placeholder="jane@studio.com"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="text-muted-foreground">Project details</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-aurora"
                  placeholder="What are we building?"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Send message
              </button>
              <p className="text-xs text-muted-foreground">
                Opens your mail app with the message pre-filled to {EMAIL}.
              </p>
            </form>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            © 2026 Akanksha Chaudhary — Product, UI &amp; digital art.
          </p>
        </div>
      </section>
    </div>
  );
}
