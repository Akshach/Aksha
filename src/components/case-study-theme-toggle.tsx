import { Moon, Sun } from "lucide-react";

export function CaseStudyThemeToggle({
    isDark,
    toggleTheme,
}: {
    isDark: boolean;
    toggleTheme: () => void;
}) {
    return (
        <button
            className="theme-toggle"
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            <span>{isDark ? "Light" : "Dark"}</span>
        </button>
    );
}
