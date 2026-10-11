import { ArrowLeft, ArrowUpRight, Check, Database, Network, ShieldCheck, WalletCards } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyThemeToggle } from "@/components/case-study-theme-toggle";
import { useThemePreference } from "@/hooks/use-theme-preference";

export const Route = createFileRoute("/work/saviours")({
    head: () => ({
        meta: [
            { title: "Saviours — Case study by Akanksha Chaudhary" },
            {
                name: "description",
                content:
                    "A product design case study about making onchain threat intelligence understandable before a wallet signature.",
            },
        ],
    }),
    component: SavioursCaseStudy,
});

function SavioursCaseStudy() {
    const { isDark, toggleTheme } = useThemePreference();

    return (
        <main className={`case-study-shell ${isDark ? "theme-dark" : ""}`}>
            <header className="case-study-header">
                <a href="/" className="brand-mark" aria-label="Back to portfolio">
                    AC<span>.</span>
                </a>
                <div className="case-header-actions">
                    <CaseStudyThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                    <a href="/" className="case-back-link">
                        <ArrowLeft size={15} /> Back to portfolio
                    </a>
                </div>
            </header>

            <section className="case-hero">
                <div className="case-hero-copy">
                    <p className="eyebrow"><span className="eyebrow-dot" /> Product design / Web3 security</p>
                    <h1>Making wallet threats <em>understandable</em> before a signature.</h1>
                    <p className="case-lede">
                        Saviours is security memory for AI agents: investigate a threat once, name the verdict on
                        ENS, and let every agent after resolve it without paying to rediscover the same fact.
                    </p>
                    <a href="https://www.saviours.xyz/" target="_blank" rel="noreferrer noopener" className="button button-dark">
                        Open live product <ArrowUpRight size={16} />
                    </a>
                </div>
                <div className="case-hero-visual">
                    <img src="/saviours-dark.png" alt="Saviours threat review interface" />
                    <span>LIVE INTERFACE / 01</span>
                </div>
            </section>

            <section className="case-facts" aria-label="Project facts">
                <div><span>Role</span><strong>Product designer</strong></div>
                <div><span>Focus</span><strong>Threat comprehension</strong></div>
                <div><span>Context</span><strong>Web3 / AI agents</strong></div>
                <div><span>Status</span><strong>Live product</strong></div>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">01 / My contribution</div>
                <div>
                    <h2>Turn expensive security research into a reusable decision.</h2>
                    <p>
                        I shaped the product story and interface around two audiences at once: a person who needs to
                        understand a wallet warning, and an agent that needs a deterministic result it can act on.
                        The design makes the verdict legible without hiding the evidence and trust boundary behind it.
                    </p>
                    <div className="case-proof-list">
                        <span>Trust boundary</span>
                        <span>Verdict language</span>
                        <span>Agent-ready resolution</span>
                    </div>
                </div>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">02 / The problem</div>
                <div>
                    <h2>Detection without memory makes every agent start from zero.</h2>
                    <p>
                        Autonomous agents can encounter the same malicious address repeatedly. If every consumer
                        calls the evidence and AI layers again, the system pays repeatedly and users still have to
                        translate technical signals into a decision under pressure.
                    </p>
                    <p>
                        The design challenge was to make a security verdict portable: understandable to people,
                        resolvable by software, and explicit about what is known versus unknown.
                    </p>
                </div>
            </section>

            <section className="case-section case-evidence">
                <div className="case-section-label">03 / From evidence to memory</div>
                <div className="evidence-grid">
                    <article className="evidence-card evidence-before">
                        <span>01 / INVESTIGATE</span>
                        <strong>Graph + signals</strong>
                        <p>Evidence is gathered, derived, explained, and cited.</p>
                        <small>The expensive path runs on a miss.</small>
                    </article>
                    <div className="evidence-arrow" aria-hidden="true">→</div>
                    <article className="evidence-card evidence-after">
                        <span>02 / REMEMBER</span>
                        <strong>ENS verdict</strong>
                        <p>WATCH or TAINTED becomes portable memory.</p>
                        <small>SAFE is never written as an endorsement.</small>
                    </article>
                </div>
            </section>

            <section className="case-section case-architecture">
                <div className="case-section-label">04 / The product loop</div>
                <div className="case-architecture-grid">
                    <article>
                        <div className="case-architecture-icon"><Network size={18} /></div>
                        <span>01 / Investigate</span>
                        <h3>Find evidence</h3>
                        <p>The Graph and pinned analysis paths provide the evidence layer for a new address.</p>
                    </article>
                    <article>
                        <div className="case-architecture-icon"><ShieldCheck size={18} /></div>
                        <span>02 / Validate</span>
                        <h3>Own the verdict</h3>
                        <p>Signals and validation decide whether the result is UNKNOWN, WATCH, or TAINTED.</p>
                    </article>
                    <article>
                        <div className="case-architecture-icon"><Database size={18} /></div>
                        <span>03 / Remember</span>
                        <h3>Name the result</h3>
                        <p>ENSv2 stores the portable status so downstream consumers do not need to repeat the work.</p>
                    </article>
                    <article>
                        <div className="case-architecture-icon"><WalletCards size={18} /></div>
                        <span>04 / Resolve</span>
                        <h3>Act at the edge</h3>
                        <p>Wallets, agents, MCP, and the shield resolve memory first: BLOCK, WARN, or ESCALATE.</p>
                    </article>
                </div>
            </section>

            <section className="case-section case-highlight">
                <div className="case-section-label">05 / The design principle</div>
                <blockquote>Name the truth once. Make it useful everywhere.</blockquote>
                <p>
                    The interface leads with a plain-language state, then progressively reveals the technical
                    context. The architecture applies the same principle: resolve memory first, investigate only
                    when the system has no trusted answer.
                </p>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">06 / Key decisions</div>
                <div className="decision-list">
                    <article><strong>01</strong><div><h3>Resolve before investigating</h3><p>A MEMORY HIT is the fastest and cheapest path: no Graph, no AI, and no repeated discovery.</p></div></article>
                    <article><strong>02</strong><div><h3>Keep UNKNOWN honest</h3><p>No name is not an endorsement. The product preserves uncertainty instead of forcing a SAFE conclusion.</p></div></article>
                    <article><strong>03</strong><div><h3>Separate evidence from explanation</h3><p>The Graph provides evidence, deterministic signals shape the assessment, and AI explains without owning the status.</p></div></article>
                    <article><strong>04</strong><div><h3>Make the pause visible</h3><p>BLOCK and WARN turn an invisible security check into a moment people and agents can understand.</p></div></article>
                </div>
            </section>

            <section className="case-section case-interface">
                <div className="case-section-label">07 / The interface</div>
                <div className="case-interface-card">
                    <div className="visual-toolbar"><span><ShieldCheck size={14} /> Saviours / memory</span><small>LIVE</small></div>
                    <div className="threat-card">
                        <div className="threat-icon"><ShieldCheck size={20} /></div>
                        <div><span>THREAT STATUS</span><strong>TAINTED</strong><small>Memory hit · resolved via ENS</small></div>
                        <b>BLOCK</b>
                    </div>
                    <div className="visual-command"><span><i /> Agent signature paused</span><Check size={15} /></div>
                </div>
            </section>

            <section className="case-section case-outcome">
                <div className="case-section-label">08 / Outcome</div>
                <div>
                    <h2>A security memory layer, not another warning screen.</h2>
                    <p>
                        Saviours connects a human-readable verdict with an agent-readable resolution path. A first
                        investigation can create a durable memory, and every later consumer can act on that memory
                        without paying to rediscover the same threat.
                    </p>
                    <div className="case-outcome-note">
                        <span>Evidence type</span>
                        <strong>Documented product architecture</strong>
                        <p>
                            The outcome is based on the product’s published trust model and live integration surfaces;
                            quantitative adoption and savings are intentionally not claimed here.
                        </p>
                    </div>
                    <a href="https://www.saviours.xyz/" target="_blank" rel="noreferrer noopener" className="underlined-link">
                        Try Saviours live <ArrowUpRight size={15} />
                    </a>
                </div>
            </section>

            <footer className="case-footer">
                <span>Akanksha Chaudhary · Product, UI/UX & visual design</span>
                <nav className="case-footer-nav" aria-label="Case study navigation">
                    <a href="/#work"><ArrowLeft size={13} /> All selected work</a>
                    <a href="/work/ai-prep">Next case study <ArrowUpRight size={13} /></a>
                </nav>
            </footer>
        </main>
    );
}
