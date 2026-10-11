import { ArrowLeft, ArrowUpRight, Check, Database, Mic, Search } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyThemeToggle } from "@/components/case-study-theme-toggle";
import { useThemePreference } from "@/hooks/use-theme-preference";

export const Route = createFileRoute("/work/ai-prep")({
    head: () => ({
        meta: [
            { title: "AI Prep — Case study by Akanksha Chaudhary" },
            {
                name: "description",
                content:
                    "A product design case study about turning research, trusted memory, and practice into one focused preparation flow.",
            },
        ],
    }),
    component: AiPrepCaseStudy,
});

function AiPrepCaseStudy() {
    const { isDark, toggleTheme } = useThemePreference();

    return (
        <main className={`case-study-shell ${isDark ? "theme-dark" : ""}`}>
            <header className="case-study-header">
                <a href="/" className="brand-mark" aria-label="Back to portfolio">AC<span>.</span></a>
                <div className="case-header-actions">
                    <CaseStudyThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                    <a href="/" className="case-back-link"><ArrowLeft size={15} /> Back to portfolio</a>
                </div>
            </header>

            <section className="case-hero">
                <div className="case-hero-copy">
                    <p className="eyebrow"><span className="eyebrow-dot" /> Product design / AI / Education</p>
                    <h1>Preparation that stays grounded in <em>trusted evidence.</em></h1>
                    <p className="case-lede">
                        AI Prep is a preparation OS for research, study plans, practice, and interview rehearsal —
                        designed around the idea that an answer should be useful and trustworthy.
                    </p>
                    <a href="https://aiprep-kappa.vercel.app/" target="_blank" rel="noreferrer noopener" className="button button-dark">
                        Open live product <ArrowUpRight size={16} />
                    </a>
                </div>
                <div className="case-hero-visual">
                    <img
                        src="/aiprep-live.png"
                        alt="AI Prep preparation dashboard"
                        width="1440"
                        height="1400"
                        fetchPriority="high"
                        decoding="async"
                    />
                    <span>LIVE INTERFACE / 02</span>
                </div>
            </section>

            <section className="case-facts" aria-label="Project facts">
                <div><span>Role</span><strong>Product designer</strong></div>
                <div><span>Contribution</span><strong>Product flow + trust model</strong></div>
                <div><span>Focus</span><strong>Trustworthy preparation</strong></div>
                <div><span>Context</span><strong>AI / interview prep</strong></div>
                <div><span>Status</span><strong>Beta product</strong></div>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">01 / The product problem</div>
                <div>
                    <h2>Good preparation is more than a chat box.</h2>
                    <p>
                        Preparation often fragments across notes, search results, flashcards, mock interviews, and
                        forgotten mistakes. AI Prep brings those moments into one workspace while keeping a clear
                        boundary between a researched claim and trusted memory.
                    </p>
                    <div className="case-proof-list">
                        <span>Research to claims</span>
                        <span>Approval before memory</span>
                        <span>Practice loops</span>
                    </div>
                </div>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">02 / The system</div>
                <div className="decision-list">
                    <article><strong><Search size={16} /></strong><div><h3>Research with citations</h3><p>Web research and uploaded documents become inspectable inputs instead of invisible AI context.</p></div></article>
                    <article><strong><Database size={16} /></strong><div><h3>Approve trusted memory</h3><p>Claims move into the mentor’s trusted memory only after the learner reviews and approves them.</p></div></article>
                    <article><strong><Mic size={16} /></strong><div><h3>Practice across modes</h3><p>Plans, MCQs, text mocks, and voice rehearsal share a common evaluation loop.</p></div></article>
                </div>
            </section>

            <section className="case-section case-highlight">
                <div className="case-section-label">03 / The design principle</div>
                <blockquote>Make confidence a visible part of the workflow.</blockquote>
                <p>
                    The product treats trust as a sequence of user decisions: inspect the evidence, approve what is
                    useful, then practice with the resulting memory.
                </p>
            </section>

            <section className="case-section case-interface">
                <div className="case-section-label">04 / The interface</div>
                <div className="case-interface-card case-interface-card-light">
                    <div className="visual-toolbar"><span><Check size={14} /> AI Prep / trusted memory</span><small>REVIEW</small></div>
                    <div className="threat-card prep-trust-card">
                        <div className="threat-icon"><Check size={20} /></div>
                        <div><span>CLAIM STATUS</span><strong>APPROVED</strong><small>Source reviewed · ready for practice</small></div>
                        <b>USE</b>
                    </div>
                    <div className="visual-command"><span><i /> Memory updated</span><Check size={15} /></div>
                </div>
            </section>

            <section className="case-section case-outcome">
                <div className="case-section-label">05 / Outcome</div>
                <div>
                    <h2>A preparation loop with a clearer trust boundary.</h2>
                    <p>
                        The documented outcome is a connected product model spanning research, approval, planning,
                        practice, and evaluation. Quantitative learning impact is intentionally not claimed here.
                    </p>
                    <div className="case-outcome-note">
                        <span>Evidence type</span>
                        <strong>Qualitative product architecture</strong>
                        <p>Capabilities and trust model are based on the project’s published product documentation.</p>
                    </div>
                    <a href="https://aiprep-kappa.vercel.app/" target="_blank" rel="noreferrer noopener" className="underlined-link">
                        Explore the live product <ArrowUpRight size={15} />
                    </a>
                </div>
            </section>

            <footer className="case-footer">
                <span>Akanksha Chaudhary · Product, UI/UX & visual design</span>
                <nav className="case-footer-nav" aria-label="Case study navigation">
                    <a href="/#work" aria-label="Return to all selected work"><ArrowLeft size={13} /> All selected work</a>
                    <a href="/work/themevault" aria-label="Read the ThemeVault case study next">Next: ThemeVault <ArrowUpRight size={13} /></a>
                </nav>
            </footer>
        </main>
    );
}
