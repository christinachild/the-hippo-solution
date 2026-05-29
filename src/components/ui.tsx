import { ReactNode } from "react";
import Link from "next/link";

export function PageHero({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="font-serif text-2xl italic text-blue sm:text-3xl">{kicker}</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink sm:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {lede}
          </p>
        )}
        <div className="fleur-rule mx-auto mt-8 max-w-xs">
          <span className="text-xl">&#9670;</span>
        </div>
      </div>
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-4xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  title,
  kicker,
  children,
}: {
  title: ReactNode;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-12">
      <Container>
        {kicker && (
          <p className="mb-1 font-serif text-xl italic text-blue sm:text-2xl">
            {kicker}
          </p>
        )}
        <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6 prose-bayou">{children}</div>
      </Container>
    </section>
  );
}

const calloutStyles = {
  gold: "border-blue/30 bg-blue/[0.06]",
  purple: "border-sky/40 bg-sky/[0.08]",
  green: "border-coral/40 bg-coral/[0.07]",
} as const;

const calloutLabel = {
  gold: "text-blue-deep",
  purple: "text-sky-deep",
  green: "text-coral-deep",
} as const;

export function Callout({
  label,
  tone = "gold",
  children,
}: {
  label?: string;
  tone?: keyof typeof calloutStyles;
  children: ReactNode;
}) {
  return (
    <div className={`my-6 rounded-xl border px-5 py-4 ${calloutStyles[tone]}`}>
      {label && (
        <p className={`mb-1.5 font-display text-sm font-bold uppercase tracking-wider ${calloutLabel[tone]}`}>
          {label}
        </p>
      )}
      <div className="prose-bayou text-[0.97rem]">{children}</div>
    </div>
  );
}

export function MythFlag({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 flex gap-3 rounded-xl border border-coral/45 bg-coral/[0.07] px-5 py-4">
      <span className="select-none text-2xl leading-none text-coral-deep" aria-hidden="true">
        &#9888;
      </span>
      <div>
        <p className="mb-1 font-display text-sm font-bold uppercase tracking-wider text-coral-deep">
          Hold on, that one is a myth
        </p>
        <div className="prose-bayou text-[0.97rem]">{children}</div>
      </div>
    </div>
  );
}

export function FactCard({
  title,
  children,
  badge,
}: {
  title: ReactNode;
  children: ReactNode;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 shadow-sm transition-colors hover:border-blue/40">
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-blue px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-blue-deep">
        {title}
      </h3>
      <div className="mt-2 prose-bayou text-[0.97rem]">{children}</div>
    </div>
  );
}

export function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 text-center shadow-sm">
      <div className="font-display text-4xl font-extrabold text-blue sm:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-sm leading-snug text-ink-soft">{label}</div>
    </div>
  );
}

export function CardGrid({
  children,
  cols = 2,
}: {
  children: ReactNode;
  cols?: 2 | 3;
}) {
  const colClass =
    cols === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>{children}</div>
  );
}

export function PageNav({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <Container className="mt-4 mb-4">
      <div className="flex items-stretch justify-between gap-4">
        {prev ? (
          <NavArrow href={prev.href} label={prev.label} dir="prev" />
        ) : (
          <span />
        )}
        {next ? (
          <NavArrow href={next.href} label={next.label} dir="next" />
        ) : (
          <span />
        )}
      </div>
    </Container>
  );
}

function NavArrow({
  href,
  label,
  dir,
}: {
  href: string;
  label: string;
  dir: "prev" | "next";
}) {
  return (
    <Link
      href={href}
      className={`group flex max-w-[48%] flex-col rounded-xl border border-line bg-card px-5 py-3 shadow-sm transition-colors hover:border-blue/40 ${
        dir === "next" ? "items-end text-right" : "items-start"
      }`}
    >
      <span className="text-xs uppercase tracking-wider text-ink-soft/70">
        {dir === "next" ? "Next" : "Previous"}
      </span>
      <span className="font-display font-bold text-blue-deep">
        {dir === "prev" ? "← " : ""}
        {label}
        {dir === "next" ? " →" : ""}
      </span>
    </Link>
  );
}
