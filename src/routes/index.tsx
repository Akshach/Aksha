import type { FormEvent } from "react";
import { ArrowUpRight, Github, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Akanksha Chaudhary — Product designer & UI/UX designer" },
            {
                name: "description",
                content:
                    "Akanksha Chaudhary is a product designer and UI/UX designer creating clear, expressive digital products.",
            },
            {
                property: "og:title",
                content: "Akanksha Chaudhary — Product designer & UI/UX designer",
            },
            { property: "og:type", content: "website" },
        ],
    }),
    component: Index,
});

const EMAIL = "akankshachaudhary567@gmail.com";
const art = [
    { src: art1, alt: "Abstract digital painting with aurora ribbons" },
    { src: art2, alt: "Glossy ceramic vessel in warm studio light" },
    { src: art3, alt: "Painterly digital character portrait" },
    { src: art4, alt: "Isometric pastel living room" },
    { src: art5, alt: "Generative artwork made from golden light streams" },
];
const experience = [
    ["Saviours", "Onchain security / product design"],
    ["ThemeVault", "Product design / frontend"],
    ["InView LMS", "Learning experience / UI UX"],
    ["yieldAI", "Product experience / crypto"],
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

function Index() {
    return (
        <div className="portfolio-shell min-h-screen overflow-hidden text-foreground">
            <div className="grain" aria-hidden="true" />
            <header className="site-header mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
                <a href="#top" className="brand-mark" aria-label="Akanksha Chaudhary home">
                    AC<span>.</span>
                </a>
                <nav className="flex items-center gap-5 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:gap-8">
                    <a href="#work" className="hover:text-foreground">
                        Work
                    </a>
                    <a href="#about" className="hover:text-foreground">
                        About
                    </a>
                    <a href="#contact" className="nav-contact">
                        Let's talk <ArrowUpRight size={14} />
                    </a>
                </nav>
            </header>
            <main id="top">
                <section className="hero mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            <span className="eyebrow-dot" /> Product designer · UI/UX designer · visual thinker
                        </p>
                        <h1>
                            Designing the <em>trust layer</em> for the next internet.
                        </h1>
                        <p className="hero-intro">
                            I’m Akanksha, a product designer focused on UI/UX, visual systems, and thoughtful
                            digital experiences. I turn complicated systems into products people can understand,
                            trust, and actually use.
                        </p>
                        <div className="hero-actions">
                            <a href="#work" className="button button-dark">
                                See the build <ArrowUpRight size={16} />
                            </a>
                            <a
                                href="https://www.saviours.xyz/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="text-link"
                            >
                                <span className="live-dot" /> Try Saviours
                            </a>
                        </div>
                    </div>
                    <div className="hero-signal">
                        <div className="signal-top">
                            <span className="signal-pulse" /> LIVE BUILD / 01
                        </div>
                        <div className="signal-screen">
                            <div className="signal-address">
                                0x935b...de48 <span>ENS</span>
                            </div>
                            <div className="signal-verdict">
                                <ShieldCheck size={22} />
                                <div>
                                    <strong>TAINTED</strong>
                                    <small>memory hit · resolve $0</small>
                                </div>
                            </div>
                            <div className="signal-line">
                                <span /> Saviours blocked a risky signature before MetaMask opened.
                            </div>
                        </div>
                        <div className="signal-caption">
                            <Sparkles size={15} /> A product case study in public, composable security.
                        </div>
                    </div>
                </section>
                <section id="work" className="feature-section mx-auto max-w-7xl px-5 sm:px-8">
                    <div className="section-label">
                        <span>01</span>
                        <span>Featured case study</span>
                    </div>
                    <article className="saviours-feature">
                        <div className="feature-heading">
                            <div>
                                <p className="kicker">Saviours · onchain security / product / frontend</p>
                                <h2>
                                    Investigate once.
                                    <br />
                                    <em>Resolve free, forever.</em>
                                </h2>
                            </div>
                            <p className="feature-summary">
                                A public threat-memory layer for agents and wallets. Saviours turns expensive
                                onchain investigation into a permanent ENS-resolved safety signal.
                            </p>
                        </div>
                        <div className="saviours-stage">
                            <div className="stage-grid" aria-hidden="true" />
                            <div className="stage-card stage-main">
                                <div className="stage-label">MEMORY HIT · SOURCE=ENS</div>
                                <div className="stage-status">
                                    <span className="stop-icon" /> BLOCK
                                </div>
                                <h3>TAINTED</h3>
                                <p>
                                    FLASHLOAN_ONE_SHOT
                                    <br />
                                    ATOMIC_MULTI_PROTOCOL
                                </p>
                                <div className="stage-meta">
                                    <span>ENS resolve</span>
                                    <strong>$0</strong>
                                    <span>·</span>
                                    <span>4572 ms</span>
                                </div>
                            </div>
                            <div className="stage-card stage-side">
                                <div className="stage-label">KILL SWITCH · LIVE PROOF</div>
                                <h3>
                                    CAST WORKS
                                    <br />
                                    <em>IF WE DIE</em>
                                </h3>
                                <div className="stage-check">
                                    <ShieldCheck size={16} /> Public Sepolia proof
                                </div>
                                <div className="stage-tags">
                                    <span>The Graph</span>
                                    <span>ENSv2</span>
                                    <span>Bazantic</span>
                                </div>
                            </div>
                            <div className="stage-orbit orbit-one">01 / CHECK MEMORY</div>
                            <div className="stage-orbit orbit-two">02 / BLOCK OR WARN</div>
                        </div>
                        <div className="proof-grid">
                            <div>
                                <span className="proof-number">01</span>
                                <strong>Memory before signature</strong>
                                <p>
                                    Check saviours.status first. A known threat stops the flow before the wallet
                                    prompt.
                                </p>
                            </div>
                            <div>
                                <span className="proof-number">02</span>
                                <strong>Agent pays on miss</strong>
                                <p>
                                    Discovery is metered once. Every agent after the first gets the resolve for free.
                                </p>
                            </div>
                            <div>
                                <span className="proof-number">03</span>
                                <strong>Server can disappear</strong>
                                <p>
                                    The verdict lives in ENS. The product stays useful even when the gateway is gone.
                                </p>
                            </div>
                        </div>
                        <div className="feature-footer">
                            <div className="feature-facts">
                                <span>The Graph</span>
                                <span>ENSv2</span>
                                <span>Bazantic</span>
                                <span>Sepolia</span>
                            </div>
                            <div className="feature-links">
                                <a href="https://www.saviours.xyz/" target="_blank" rel="noreferrer noopener">
                                    Open live product <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href="https://www.saviours.xyz/gateway"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Explore gateway <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href="https://ethglobal.com/showcase/saviour-9j673"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    View project showcase <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
                <section className="principles-band">
                    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
                        <div>
                            <p className="section-label light">
                                <span>02</span>
                                <span>My point of view</span>
                            </p>
                            <h2>
                                Good design starts <em>before</em> the screen.
                            </h2>
                        </div>
                        <div className="principles-copy">
                            <p>
                                I care about the full journey: how someone finds a product, understands it, makes a
                                decision, and chooses to come back. The polished pixels matter, but so does the
                                thinking underneath them.
                            </p>
                            <p>
                                My background across product design, teaching, curriculum, and community keeps me
                                close to the people on the other side of the interface. I like making complex things
                                feel clear without sanding off their personality.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
                    <div className="section-label">
                        <span>03</span>
                        <span>Selected experience</span>
                    </div>
                    <div className="experience-grid">
                        <div>
                            <h2>
                                Different problems.
                                <br />
                                <em>Same curiosity.</em>
                            </h2>
                            <p className="muted-copy">
                                From learning platforms to crypto products and NFT worlds, I bring product thinking,
                                visual craft, and a bias toward making the thing real.
                            </p>
                        </div>
                        <div className="experience-list">
                            {experience.map(([name, role], index) => (
                                <div className="experience-row" key={name}>
                                    <span>0{index + 1}</span>
                                    <strong>{name}</strong>
                                    <small>{role}</small>
                                    <ArrowUpRight size={17} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="art-section mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
                    <div className="section-label">
                        <span>04</span>
                        <span>When pixels become play</span>
                    </div>
                    <div className="art-heading">
                        <h2>
                            A side quest in <em>visual worlds.</em>
                        </h2>
                        <p>
                            Traditional painting, 3D, motion, memes, and the odd experiment that refuses to fit in
                            a portfolio category.
                        </p>
                    </div>
                    <div className="art-strip">
                        {art.map((piece) => (
                            <img key={piece.src} src={piece.src} alt={piece.alt} loading="lazy" />
                        ))}
                    </div>
                </section>
                <section id="contact" className="contact-section mx-auto max-w-7xl px-5 pb-8 sm:px-8">
                    <div className="contact-inner">
                        <div>
                            <Layers3 size={22} />
                            <p className="kicker">Have a product in mind?</p>
                            <h2>
                                Let’s make it
                                <br />
                                <em>feel like something.</em>
                            </h2>
                            <a className="email-link" href={`mailto:${EMAIL}`}>
                                {EMAIL} <ArrowUpRight size={17} />
                            </a>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
                            <input name="name" required placeholder="Your name" />
                            <input name="email" required type="email" placeholder="Your email" />
                            <textarea name="message" required rows={3} placeholder="Tell me a little about it" />
                            <button className="button button-light" type="submit">
                                Send enquiry <ArrowUpRight size={16} />
                            </button>
                        </form>
                    </div>
                    <footer>
                        <span>Akanksha Chaudhary · Product, UI/UX & visual design</span>
                        <a href="https://github.com/Akshach" target="_blank" rel="noreferrer noopener">
                            GitHub <ArrowUpRight size={13} />
                        </a>
                        <span>© 2026</span>
                    </footer>
                </section>
            </main>
        </div>
    );
}
