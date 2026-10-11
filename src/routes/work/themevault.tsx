import { ArrowLeft, ArrowUpRight, Check, Code2, Eye, SlidersHorizontal } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyThemeToggle } from "@/components/case-study-theme-toggle";
import { useThemePreference } from "@/hooks/use-theme-preference";

export const Route = createFileRoute("/work/themevault")({
    head: () => ({
        meta: [
            { title: "ThemeVault — Case study by Akanksha Chaudhary" },
            {
                name: "description",
                content:
                    "A product design case study about making UI themes discoverable, previewable, customizable, and exportable.",
            },
        ],
    }),
    component: ThemeVaultCaseStudy,
});

function ThemeVaultCaseStudy() {
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
                    <p className="eyebrow"><span className="eyebrow-dot" /> Product design / Systems / Frontend</p>
                    <h1>Turning a theme library into a <em>playground.</em></h1>
                    <p className="case-lede">
                        ThemeVault helps people browse, preview, tune, and export UI themes without losing the
                        connection between a visual choice and the system behind it.
                    </p>
                    <a href="https://theme-vaultv1.vercel.app/" target="_blank" rel="noreferrer noopener" className="button button-dark">
                        Open live product <ArrowUpRight size={16} />
                    </a>
                </div>
                <div className="case-hero-visual">
                    <img src="/theme-vault.png" alt="ThemeVault theme playground" />
                    <span>LIVE INTERFACE / 03</span>
                </div>
            </section>

            <section className="case-facts" aria-label="Project facts">
                <div><span>Role</span><strong>Product designer</strong></div>
                <div><span>Focus</span><strong>Theme exploration</strong></div>
                <div><span>Context</span><strong>Design systems / frontend</strong></div>
                <div><span>Status</span><strong>Live product</strong></div>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">01 / The product problem</div>
                <div>
                    <h2>Choosing a theme should feel immediate, not irreversible.</h2>
                    <p>
                        Theme marketplaces often separate discovery from implementation. ThemeVault connects the
                        gallery, responsive preview, customization controls, and export paths so users can move from
                        “I like this” to “I can use this” in one continuous flow.
                    </p>
                    <div className="case-proof-list">
                        <span>Discover</span>
                        <span>Preview</span>
                        <span>Tune</span>
                        <span>Export</span>
                    </div>
                </div>
            </section>

            <section className="case-section case-two-column">
                <div className="case-section-label">02 / Key decisions</div>
                <div className="decision-list">
                    <article><strong><Eye size={16} /></strong><div><h3>Make previews the primary surface</h3><p>Responsive previews let people evaluate a theme in context before committing to it.</p></div></article>
                    <article><strong><SlidersHorizontal size={16} /></strong><div><h3>Expose the design tokens</h3><p>Font size, spacing, radius, and color controls turn a theme into something people can understand and shape.</p></div></article>
                    <article><strong><Code2 size={16} /></strong><div><h3>Keep the output portable</h3><p>CSS, Tailwind, React, Figma, and ZIP export options connect visual exploration to implementation.</p></div></article>
                </div>
            </section>

            <section className="case-section case-highlight">
                <div className="case-section-label">03 / The design principle</div>
                <blockquote>Let people test the feeling before they take the code.</blockquote>
                <p>
                    The product makes the visual decision reversible and observable: browse broadly, preview deeply,
                    customize the system, then export when the choice feels right.
                </p>
            </section>

            <section className="case-section case-interface">
                <div className="case-section-label">04 / The interface</div>
                <div className="case-interface-card case-interface-card-light">
                    <div className="visual-toolbar"><span><SlidersHorizontal size={14} /> ThemeVault / playground</span><small>LIVE PREVIEW</small></div>
                    <div className="threat-card theme-trust-card">
                        <div className="threat-icon"><Check size={20} /></div>
                        <div><span>ACTIVE THEME</span><strong>SOFT / ELECTRIC</strong><small>Responsive preview · tokens editable</small></div>
                        <b>APPLY</b>
                    </div>
                    <div className="visual-command"><span><i /> Theme applied across preview</span><Check size={15} /></div>
                </div>
            </section>

            <section className="case-section case-outcome">
                <div className="case-section-label">05 / Outcome</div>
                <div>
                    <h2>A system for moving from taste to reusable UI.</h2>
                    <p>
                        The documented outcome is a public theme gallery and playground that connects discovery,
                        customization, persistence, and export. Usage and conversion impact are intentionally not
                        claimed without product analytics.
                    </p>
                    <div className="case-outcome-note">
                        <span>Evidence type</span>
                        <strong>Qualitative product workflow</strong>
                        <p>Features and architecture are based on the project’s published README and live product.</p>
                    </div>
                    <a href="https://github.com/Akshach/ThemeVault" target="_blank" rel="noreferrer noopener" className="underlined-link">
                        View project documentation <ArrowUpRight size={15} />
                    </a>
                </div>
            </section>

            <footer className="case-footer">
                <span>Akanksha Chaudhary · Product, UI/UX & visual design</span>
                <nav className="case-footer-nav" aria-label="Case study navigation">
                    <a href="/#work"><ArrowLeft size={13} /> All selected work</a>
                    <a href="/work/saviours">Next case study <ArrowUpRight size={13} /></a>
                </nav>
            </footer>
        </main>
    );
}
