"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import {
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  isThemePreference,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/site/theme";

type ThemeState = { preference: ThemePreference; resolved: ResolvedTheme };

const OPTIONS: { value: ThemePreference; label: string; hint: string }[] = [
  { value: "light", label: "Luminoasă", hint: "Mereu luminoasă" },
  { value: "dark", label: "Întunecată", hint: "Mereu întunecată" },
  { value: "system", label: "Sistem", hint: "Urmează setarea dispozitivului" },
];

// The boot script in <head> owns data-theme; this store only reads it and reacts to its updates.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-theme-preference"] });
  return () => observer.disconnect();
}

function getSnapshot(): string {
  const root = document.documentElement;
  return `${root.getAttribute("data-theme-preference") ?? "system"}:${root.getAttribute("data-theme") ?? "light"}`;
}

// The server cannot know the theme; the switcher renders a neutral state until hydration.
const getServerSnapshot = () => "";

function parse(snapshot: string): ThemeState | null {
  if (!snapshot) return null;
  const [preference, resolved] = snapshot.split(":");
  return {
    preference: isThemePreference(preference) ? preference : "system",
    resolved: resolved === "dark" ? "dark" : "light",
  };
}

function savePreference(preference: ThemePreference) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Storage blocked: the event below still applies the choice until the page is reloaded.
  }
  const root = document.documentElement;
  const animate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (animate) root.classList.add("theme-switching");
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: preference }));
  if (animate) window.setTimeout(() => root.classList.remove("theme-switching"), 250);
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7Z" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

const ICONS = { light: SunIcon, dark: MoonIcon, system: MonitorIcon };

/** Disclosure button with three choices: light, dark, or follow the system. */
export function ThemeToggle() {
  const state = parse(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot));
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const buttons = panelRef.current?.querySelectorAll("button");
    (panelRef.current?.querySelector<HTMLButtonElement>('button[aria-pressed="true"]') ?? buttons?.[0])?.focus();
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const close = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  const onPanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close(true);
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const buttons = [...event.currentTarget.querySelectorAll("button")];
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement);
    const next = (index + (event.key === "ArrowDown" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[next]?.focus();
  };

  const choose = (preference: ThemePreference) => {
    savePreference(preference);
    close(true);
  };

  const CurrentIcon = state ? ICONS[state.preference] : SunIcon;
  const currentLabel = state
    ? state.preference === "system"
      ? `Sistem (acum ${state.resolved === "dark" ? "întunecată" : "luminoasă"})`
      : OPTIONS.find((option) => option.value === state.preference)?.label
    : null;

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={currentLabel ? `Temă: ${currentLabel}. Schimbă tema` : "Schimbă tema"}
        title="Schimbă tema"
        onClick={() => setOpen((value) => !value)}
        className="grid size-9 place-items-center rounded-lg border border-line bg-surface text-ink-body shadow-xs transition-colors hover:border-line-strong hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <CurrentIcon className={`size-[1.15rem] ${state ? "" : "opacity-0"}`} />
      </button>

      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="group"
          aria-label="Alege tema"
          onKeyDown={onPanelKeyDown}
          className="absolute top-full right-0 z-30 mt-2 w-60 rounded-xl border border-line bg-surface p-1.5 shadow-lg shadow-slate-900/10 dark:shadow-black/40"
        >
          <p className="px-2.5 pt-1.5 pb-1 text-xs font-semibold tracking-wide text-ink-muted uppercase">Temă</p>
          {OPTIONS.map((option) => {
            const Icon = ICONS[option.value];
            const selected = state?.preference === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={selected}
                onClick={() => choose(option.value)}
                className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent ${
                  selected ? "bg-accent-soft text-ink" : "text-ink-body hover:bg-surface-muted"
                }`}
              >
                <Icon className={`size-4 shrink-0 ${selected ? "text-accent-ink" : "text-ink-muted"}`} />
                <span className="flex-1">
                  <span className="block font-semibold">{option.label}</span>
                  <span className="block text-xs text-ink-muted">{option.hint}</span>
                </span>
                <span aria-hidden="true" className={`text-sm font-bold text-accent-ink ${selected ? "" : "invisible"}`}>
                  ✓
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
