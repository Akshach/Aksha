import { useEffect, useState, type CSSProperties, type FormEvent } from "react";
import {
    ArrowDownRight,
    ArrowUpRight,
    BookOpen,
    Check,
    ExternalLink,
    Github,
    LayoutDashboard,
    Mail,
    Menu,
    Moon,
    Palette,
    ShieldCheck,
    Sparkles,
    Sun,
    X,
} from "lucide-react";
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
                    "Akanksha Chaudhary is a product designer and Web3 builder creating clear, expressive digital products.",
            },
            { property: "og:title", content: "Akanksha Chaudhary — Product designer" },
            { property: "og:type", content: "website" },
        ],
    }),
    component: Index,
});

const EMAIL = "akankshachaudhary567@gmail.com";
const projects = [
    {
        number: "01",
        name: "Saviours",
        type: "Product design / Web3 / AI security",
        description:
            "Making onchain threat intelligence understandable before an agent signs a transaction.",
        snapshot: "/saviours-live.png",
        darkSnapshot: "/saviours-dark.png",
        lightAspect: "1.03 / 1",
        darkAspect: "2.12 / 1",
        className: "project-saviours",
        href: "https://www.saviours.xyz/",
        caseStudyHref: "/work/saviours",
        caseStudyStatus: "published" as const,
        role: "Product design · systems",
        evidence: "Live product + case study",
        liveLabel: "Open Saviours",
        tags: ["Ethereum", "ENS", "AI agents", "$0 memory hit"],
    },
    {
        number: "02",
        name: "AI Prep",
        type: "Product design / AI / Education",
        description:
            "A focused preparation experience that turns research, study plans, and practice into one flow.",
        snapshot: "/aiprep-live.png",
        darkSnapshot: "/ai-prep-dark.png",
        lightAspect: "1.03 / 1",
        darkAspect: "1.55 / 1",
        className: "project-ai",
        href: "https://aiprep-kappa.vercel.app/",
        caseStudyHref: "/work/ai-prep",
        caseStudyStatus: "published" as const,
        role: "Product design · UX",
        evidence: "Live product + case study",
        liveLabel: "Open AI Prep",
        tags: ["UX strategy", "Information architecture"],
    },
    {
        number: "03",
        name: "ThemeVault",
        type: "Product design / Frontend / Systems",
        description:
            "A playful theme playground for discovering, tuning, and exporting expressive UI systems.",
        snapshot: "/theme-vault.png",
        darkSnapshot: "/theme-vault-dark.png",
        lightAspect: "1.71 / 1",
        darkAspect: "1.73 / 1",
        className: "project-theme",
        href: "https://theme-vaultv1.vercel.app/",
        caseStudyHref: "/work/themevault",
        caseStudyStatus: "published" as const,
        role: "UI/UX · frontend",
        evidence: "Live product + case study",
        liveLabel: "Open ThemeVault",
        tags: ["Design systems", "React", "Tokens"],
    },
    {
        number: "04",
        name: "InView LMS",
        type: "Product / UI/UX / Learning",
        description: "Clearer learning flows and content architecture for people building a new skill.",
        className: "project-inview",
        caseStudyHref: null,
        caseStudyStatus: "in-progress" as const,
        role: "Product · learning",
        evidence: "Case study in progress",
        liveLabel: "Case study soon",
        tags: ["User flows", "Responsive design"],
    },
];
const experiments = [art1, art2, art3, art4, art5];
const showcaseProjects = [projects[0], projects[2], projects[1]];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
    if (project.name === "Saviours") {
        return (
            <div className="product-visual saviours-visual">
                <div className="visual-toolbar">
                    <span>
                        <i /> Saviours / memory
                    </span>
                    <small>LIVE</small>
                </div>
                <div className="threat-card">
                    <div className="threat-icon">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <span>THREAT STATUS</span>
                        <strong>TAINTED</strong>
                        <small>Memory hit · resolved via ENS</small>
                    </div>
                    <b>BLOCK</b>
                </div>
                <div className="visual-metrics">
                    <span>
                        <small>confidence</small>
                        <strong>98.4%</strong>
                    </span>
                    <span>
                        <small>saved lookups</small>
                        <strong>1,284</strong>
                    </span>
                    <span>
                        <small>resolve cost</small>
                        <strong>$0</strong>
                    </span>
                </div>
                <div className="visual-command">
                    <span>
                        <i /> Agent signature paused
                    </span>
                    <Check size={15} />
                </div>
            </div>
        );
    }
    if (project.name === "AI Prep") {
        return (
            <div className="product-visual prep-visual">
                <div className="visual-toolbar">
                    <span>
                        <LayoutDashboard size={14} /> AI Prep / today
                    </span>
                    <small>12 day streak</small>
                </div>
                <div className="prep-heading">
                    <span>Good morning, Akanksha</span>
                    <strong>Your next best move</strong>
                </div>
                <div className="prep-progress">
                    <span>
                        <i style={{ width: "72%" }} />
                    </span>
                    <b>72%</b>
                </div>
                <div className="prep-list">
                    <div>
                        <span>01</span>
                        <strong>Review product thinking</strong>
                        <Check size={14} />
                    </div>
                    <div>
                        <span>02</span>
                        <strong>Practice one case study</strong>
                        <div className="empty-check" />
                    </div>
                </div>
            </div>
        );
    }
    if (project.name === "ThemeVault") {
        return (
            <div className="product-visual theme-visual">
                <div className="visual-toolbar">
                    <span>
                        <Palette size={14} /> ThemeVault / studio
                    </span>
                    <small>EDITING</small>
                </div>
                <div className="theme-preview">
                    <div className="theme-window">
                        <span />
                        <span />
                        <span />
                    </div>
                    <strong>soft / electric</strong>
                    <small>Live theme preview</small>
                </div>
                <div className="theme-controls">
                    <span>
                        <i className="swatch swatch-one" /> color
                    </span>
                    <span>
                        <i className="swatch swatch-two" /> type
                    </span>
                    <span>
                        <i className="swatch swatch-three" /> radius
                    </span>
                </div>
            </div>
        );
    }
    return (
        <div className="product-visual inview-visual">
            <div className="visual-toolbar">
                <span>
                    <BookOpen size={14} /> InView / library
                </span>
                <small>THIS WEEK</small>
            </div>
            <div className="course-card">
                <span>COURSE PROGRESS</span>
                <strong>
                    Design systems
                    <br />
                    <em>from first principles.</em>
                </strong>
                <div>
                    <i style={{ width: "64%" }} />
                </div>
                <small>8 of 12 lessons</small>
            </div>
            <div className="lesson-row">
                <span>Next up</span>
                <strong>Tokens that scale</strong>
                <ArrowUpRight size={14} />
            </div>
        </div>
    );
}

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
    const [cursor, setCursor] = useState({ x: -200, y: -200 });
    const [isDark, setIsDark] = useState(false);
    const [themeReady, setThemeReady] = useState(false);
    const [activeShowcase, setActiveShowcase] = useState(0);
    const [heroState, setHeroState] = useState<"detected" | "resolved">("detected");
    const activeProject = showcaseProjects[activeShowcase] ?? showcaseProjects[0]!;
    const cursorStyle = {
        "--cursor-x": `${cursor.x}px`,
        "--cursor-y": `${cursor.y}px`,
    } as CSSProperties;

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("aksha-theme");
        setIsDark(storedTheme === "dark");
        setThemeReady(true);
    }, []);

    useEffect(() => {
        if (!themeReady) return;
        document.documentElement.dataset["theme"] = isDark ? "dark" : "light";
        window.localStorage.setItem("aksha-theme", isDark ? "dark" : "light");
    }, [isDark, themeReady]);

    return (
        <div
            className={`portfolio-shell min-h-screen overflow-hidden text-foreground ${isDark ? "theme-dark" : ""}`}
            style={cursorStyle}
            onPointerMove={(event) => {
                if (event.pointerType !== "touch") {
                    setCursor({ x: event.clientX, y: event.clientY });
                }
            }}
        >
            <div className="grain" aria-hidden="true" />
            <div className="cursor-aura" aria-hidden="true" />
            <header className="site-header mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
                <a href="#top" className="brand-mark" aria-label="Akanksha Chaudhary home">
                    AC<span>.</span>
                </a>
                <button
                    className="theme-toggle"
                    type="button"
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    aria-pressed={isDark}
                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    onClick={() => setIsDark((value) => !value)}
                >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    <span>{isDark ? "Light" : "Dark"}</span>
                </button>
                <nav className="desktop-nav" aria-label="Main navigation">
                    <a href="#work">
                        Work <span>01</span>
                    </a>
                    <a href="#about">
                        About <span>02</span>
                    </a>
                    <a href="#resume">
                        Resume <span>03</span>
                    </a>
                    <a href="/aksha.pdf" target="_blank" rel="noreferrer">
                        PDF <span>↗</span>
                    </a>
                    <a href="#contact" className="nav-contact">
                        Let's talk <ArrowUpRight size={14} />
                    </a>
                </nav>
                <details className="mobile-nav">
                    <summary aria-label="Open navigation">
                        <Menu size={19} />
                        <X size={19} />
                    </summary>
                    <div className="mobile-nav-panel">
                        <a href="#work">
                            Selected work <ArrowUpRight size={16} />
                        </a>
                        <a href="#about">
                            About me <ArrowUpRight size={16} />
                        </a>
                        <a href="#resume">
                            Resume <ArrowUpRight size={16} />
                        </a>
                        <a href="#contact">
                            Let's talk <ArrowUpRight size={16} />
                        </a>
                    </div>
                </details>
            </header>

            <main id="top">
                <section className="hero mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
                    <div className="hero-topline">
                        <p className="eyebrow">
                            <span className="eyebrow-dot" /> Product designer · UI/UX designer · visual thinker
                        </p>
                        <p className="hero-index">
                            Product designer / Web3 builder <span>© 2026</span>
                        </p>
                    </div>
                    <div className="hero-grid">
                        <div className="hero-copy">
                            <h1>
                                Designing the <em>trust layer</em> for the next internet.
                            </h1>
                            <p className="hero-intro">
                                I’m Akanksha, a product designer creating clear, trustworthy experiences for complex
                                products across Web3, AI, education, and design systems.
                            </p>
                            <div className="hero-proof" aria-label="Portfolio highlights">
                                <span><strong>3</strong> live products</span>
                                <span><strong>4+</strong> years designing</span>
                                <span><strong>4</strong> focus areas</span>
                            </div>
                            <div className="hero-actions">
                                <a href="#work" className="button button-dark">
                                    Explore selected work <ArrowDownRight size={16} />
                                </a>
                                        <a href="#contact" className="text-link">
                                    <Mail size={15} /> Start a conversation
                                </a>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-orbit hero-orbit-one">DESIGN / SYSTEMS / CARE</div>
                            <button
                                className={`hero-product-wrap hero-product-state-${heroState}`}
                                type="button"
                                aria-label={`Safety memory status: ${heroState}. Click to ${heroState === "detected" ? "resolve the threat" : "show the threat again"}.`}
                                onClick={() => setHeroState((state) => (state === "detected" ? "resolved" : "detected"))}
                            >
                                <div className="hero-product-heading">
                                    <span>
                                        <Sparkles size={13} /> LIVE BUILD / 01
                                    </span>
                                    <small>SAFETY MEMORY</small>
                                </div>
                                <div className="hero-verdict">
                                    <div className="hero-verdict-icon">
                                        <ShieldCheck size={26} />
                                    </div>
                                    <div>
                                        <small>WALLET CHECK / ENS</small>
                                        <strong>{heroState === "detected" ? "TAINTED" : "RESOLVED"}</strong>
                                        <span>
                                            {heroState === "detected"
                                                ? "Known threat detected before signature"
                                                : "Memory match resolved before signature"}
                                        </span>
                                    </div>
                                </div>
                                <div className="hero-signal-row">
                                    <span>
                                        <i /> {heroState === "detected" ? "AGENT FLOW PAUSED" : "AGENT FLOW CLEARED"}
                                    </span>
                                    <b>98.4% confidence</b>
                                </div>
                                <div className="hero-product-foot">
                                    <span>0x935b...de48</span>
                                    <span>
                                        {heroState === "detected" ? "click to resolve" : "resolve cost"}{" "}
                                        <b>{heroState === "detected" ? "↗" : "$0"}</b>
                                    </span>
                                </div>
                            </button>
                            <span className="hero-interaction-hint">Click the safety check to explore the state</span>
                            <div className="hero-note">
                                <ShieldCheck size={17} />
                                <span>Currently designing safer, clearer tools for the next internet.</span>
                            </div>
                        </div>
                    </div>
                    <div className="scroll-cue">
                        <ArrowDownRight size={16} /> Scroll to see the work <span>↓</span>
                    </div>
                </section>

                <div className="live-build-strip" aria-label="Live project links">
                    <div className="live-build-track">
                        <span>
                            <i /> LIVE BUILDS
                        </span>
                        <a href="https://www.saviours.xyz/" target="_blank" rel="noreferrer noopener">
                            Saviours <ArrowUpRight size={13} />
                        </a>
                        <b>·</b>
                        <a href="https://theme-vaultv1.vercel.app/" target="_blank" rel="noreferrer noopener">
                            ThemeVault <ArrowUpRight size={13} />
                        </a>
                        <b>·</b>
                        <a href="https://aiprep-kappa.vercel.app/" target="_blank" rel="noreferrer noopener">
                            AI Prep <ArrowUpRight size={13} />
                        </a>
                        <b>·</b>
                        <span>DESIGN / SYSTEMS / CARE</span>
                    </div>
                </div>

                <section id="work" className="work-section mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
                    <div className="section-intro">
                        <div className="section-label">
                            <span>01</span>
                            <span>Selected work</span>
                        </div>
                        <p>
                            Real products, real links, and the design decisions behind Web3, AI, and learning
                            tools.
                        </p>
                    </div>
                    <div className="work-overview" aria-label="Project overview">
                        {projects.map((project) => (
                            <a
                                key={project.name}
                                className="work-overview-card"
                                href={project.caseStudyHref ?? "#contact"}
                                aria-label={
                                    project.caseStudyHref
                                        ? `Read the ${project.name} case study`
                                        : `Ask about the ${project.name} project`
                                }
                            >
                                <div className="work-overview-topline">
                                    <span>{project.number}</span>
                                    <span className={project.caseStudyStatus === "published" ? "status-live" : ""}>
                                        {project.caseStudyStatus === "published" ? "Published" : "In progress"}
                                    </span>
                                </div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="work-overview-meta">
                                    <span>{project.role}</span>
                                    <span>{project.evidence}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="showcase-shell">
                        <div className="showcase-copy">
                            <div className="showcase-meta">
                                <span>
                                    <i /> LIVE PROJECT / 0{activeShowcase + 1}
                                </span>
                                <small>CLICK TO EXPLORE</small>
                            </div>
                            <p className="project-type">{activeProject.type}</p>
                            <h2>{activeProject.name}</h2>
                            <p className="showcase-description">{activeProject.description}</p>
                            <div className="showcase-tags">
                                {activeProject.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            {activeProject.caseStudyHref ? (
                                <a
                                    className="showcase-link showcase-case-study"
                                    href={activeProject.caseStudyHref}
                                >
                                    Read case study <ArrowUpRight size={15} />
                                </a>
                            ) : (
                                <span className="showcase-link showcase-case-study showcase-link-disabled">
                                    Case study in progress <span aria-hidden="true">↗</span>
                                </span>
                            )}
                            <a
                                className="showcase-link"
                                href={activeProject.href}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Open live product <ArrowUpRight size={15} />
                            </a>
                            <div className="showcase-tabs" role="tablist" aria-label="Featured live projects">
                                {showcaseProjects.map((project, index) => (
                                    <button
                                        key={project!.name}
                                        id={`project-tab-${index}`}
                                        className={index === activeShowcase ? "is-active" : ""}
                                        onClick={() => setActiveShowcase(index)}
                                        role="tab"
                                        aria-selected={index === activeShowcase}
                                        aria-controls="project-showcase-panel"
                                    >
                                        {project!.name}
                                        <span>0{index + 1}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div
                            id="project-showcase-panel"
                            role="tabpanel"
                            aria-labelledby={`project-tab-${activeShowcase}`}
                            className={`showcase-screen ${activeProject.className}`}
                            style={
                                {
                                    "--showcase-ratio": isDark ? activeProject.darkAspect : activeProject.lightAspect,
                                } as CSSProperties
                            }
                        >
                            <img
                                src={
                                    isDark && activeProject.darkSnapshot
                                        ? activeProject.darkSnapshot
                                        : activeProject.snapshot
                                }
                                alt={`${activeProject.name} ${isDark ? "dark theme" : "light theme"} product showcase`}
                            />
                            <div className="showcase-caption">
                                <span>REAL INTERFACE</span>
                                <strong>{activeProject.name}</strong>
                                <small>Designed for clarity, not decoration.</small>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="now-section mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
                    <div className="now-card">
                        <div className="now-marker">
                            <span className="eyebrow-dot" /> Exploration / 2026
                        </div>
                        <div className="now-content">
                            <div>
                                <p className="project-type">Currently building</p>
                                <h2>TALE</h2>
                            </div>
                            <div>
                                <p className="now-description">
                                    Turning onchain activity into a human story — a wallet identity experience built
                                    around meaning, memory, and shareable moments.
                                </p>
                                <p className="now-meta">AI interpretation · wallet identity · visual storytelling</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="collaboration-section mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
                    <div className="section-intro">
                        <div className="section-label">
                            <span>02</span>
                            <span>How I work</span>
                        </div>
                        <p>A flexible design partner for teams turning a rough idea into something people can trust.</p>
                    </div>
                    <div className="collaboration-grid">
                        {[
                            ["01", "Frame", "Clarify the audience, tension, and decision the product needs to help someone make."],
                            ["02", "Shape", "Turn messy requirements into a focused flow, visual language, and a shared direction."],
                            ["03", "Prototype", "Make the idea tangible early, test the edges, and bring engineering into the conversation."],
                            ["04", "Ship", "Polish the details that make a product feel calm, coherent, and ready for real use."],
                        ].map(([number, title, description]) => (
                            <div className="collaboration-step" key={number}>
                                <span>{number}</span>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="about" className="manifesto-section">
                    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                            <p className="section-label light">
                            <span>03</span>
                                <span>Point of view</span>
                            </p>
                            <p className="manifesto-stamp">
                                GOOD
                                <br />
                                DESIGN
                                <br />
                                <em>FEELS</em>
                                <br />
                                OBVIOUS.
                            </p>
                        </div>
                        <div className="manifesto-copy">
                            <p className="manifesto-lede">
                                The best products make a complicated thing feel like it was always meant to be that
                                way.
                            </p>
                            <p>
                                I work from early ideas to real interfaces: user journeys, visual systems,
                                prototypes, and the details that help people feel oriented. My background in
                                teaching and community keeps me close to the questions people actually have.
                            </p>
                            <a href="#resume" className="underlined-link">
                                A little more about how I work <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    id="resume"
                    className="resume-section mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
                >
                    <div className="section-intro">
                        <div className="section-label">
                            <span>04</span>
                            <span>Experience & toolkit</span>
                        </div>
                        <p>
                            A product practice shaped by curiosity, teaching, and getting close to the people
                            using the thing.
                        </p>
                        <a className="underlined-link section-action" href="/aksha.pdf" target="_blank" rel="noreferrer">
                            Download résumé <ArrowUpRight size={15} />
                        </a>
                    </div>
                    <div className="resume-grid">
                        <div className="resume-column">
                            <p className="resume-label">Experience</p>
                            <div className="resume-item">
                                <div>
                                    <h3>Freelance product designer</h3>
                                    <p>Independent · 2021 — Present</p>
                                </div>
                                <p>
                                    Designing product interfaces, user journeys, and visual systems for early-stage
                                    products across Web3, AI, education, and developer tools.
                                </p>
                            </div>
                            <div className="resume-item">
                                <div>
                                    <h3>Freelance teacher & curriculum creator</h3>
                                    <p>Independent · 2021 — Present</p>
                                </div>
                                <p>
                                    Creating structured learning materials that make complex concepts easier to
                                    understand through clear explanations and practical examples.
                                </p>
                            </div>
                            <div className="resume-item">
                                <div>
                                    <h3>Community manager</h3>
                                    <p>Web3 & technology communities</p>
                                </div>
                                <p>
                                    Supporting communities through product communication, user feedback, and content
                                    that builds trust around emerging technology.
                                </p>
                            </div>
                        </div>
                        <div className="resume-column">
                            <p className="resume-label">Capabilities</p>
                            <div className="capability-list">
                                <span>UI / UX design</span>
                                <span>Product strategy</span>
                                <span>Information architecture</span>
                                <span>Prototyping</span>
                                <span>Design systems</span>
                                <span>Ethereum & ENS</span>
                                <span>React / TypeScript</span>
                                <span>AI product design</span>
                            </div>
                            <div className="education">
                                <p className="resume-label">Education</p>
                                <h3>University of Delhi</h3>
                                <p>Bachelor of Science (B.Sc.)</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="experiments-section mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
                    <div className="section-intro">
                        <div className="section-label">
                            <span>05</span>
                            <span>Side quests</span>
                        </div>
                        <p>
                            Painting, 3D, motion, and visual experiments that keep the work curious. A small
                            supporting practice behind the interfaces.
                        </p>
                    </div>
                    <div className="experiment-strip">
                        {experiments.map((src, index) => (
                            <img key={src} src={src} alt={`Visual experiment ${index + 1}`} loading="lazy" />
                        ))}
                    </div>
                </section>

                <section id="contact" className="contact-section mx-auto max-w-7xl px-5 pb-8 sm:px-8">
                    <div className="contact-inner">
                        <div>
                            <p className="kicker">Have a product in mind?</p>
                            <h2>
                                Let’s make it <em>feel like something.</em>
                            </h2>
                            <a className="email-link" href={`mailto:${EMAIL}`}>
                                {EMAIL} <ArrowUpRight size={17} />
                            </a>
                            <p className="contact-note">
                                Share what you are making, where you are stuck, and what a useful next step would
                                look like. The button opens your email app with the details pre-filled.
                            </p>
                            <div className="social-links">
                                <a
                                    href="https://github.com/Akshach"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="GitHub"
                                >
                                    <Github size={18} />
                                </a>
                                <a
                                    href="https://x.com/Aksha1812"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="X profile"
                                >
                                    <span className="social-letter">𝕏</span>
                                </a>
                                <a href={`mailto:${EMAIL}`} aria-label="Email">
                                    <Mail size={18} />
                                </a>
                                <a href="#top" aria-label="Back to top">
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
                            <label htmlFor="contact-name">Your name</label>
                            <input
                                id="contact-name"
                                name="name"
                                required
                                autoComplete="name"
                                placeholder="Your name"
                            />
                            <label htmlFor="contact-email">Your email</label>
                            <input
                                id="contact-email"
                                name="email"
                                required
                                type="email"
                                autoComplete="email"
                                placeholder="Your email"
                            />
                            <label htmlFor="contact-message">Project details</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows={3}
                                placeholder="What are you making, and what would you like help with?"
                            />
                            <button className="button button-light" type="submit">
                                Send enquiry <ArrowUpRight size={16} />
                            </button>
                        </form>
                    </div>
                    <footer>
                        <span>Akanksha Chaudhary · Product, UI/UX & visual design</span>
                        <a href="https://x.com/Aksha1812" target="_blank" rel="noreferrer noopener">
                            X / @Aksha1812 <ArrowUpRight size={13} />
                        </a>
                        <span>© 2026</span>
                    </footer>
                </section>
            </main>
        </div>
    );
}
