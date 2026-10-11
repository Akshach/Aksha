import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "aksha-theme";

export function useThemePreference() {
    const [isDark, setIsDark] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        const dark = storedTheme === "dark";
        setIsDark(dark);
        document.documentElement.dataset["theme"] = dark ? "dark" : "light";
        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready) return;
        document.documentElement.dataset["theme"] = isDark ? "dark" : "light";
        window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
    }, [isDark, ready]);

    return {
        isDark,
        toggleTheme: () => setIsDark((value) => !value),
    };
}
