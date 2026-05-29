import Link from "next/link";
import { HippoMark } from "./HippoMark";
import { NAV_LINKS } from "./nav";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-ink text-paper">
      <div className="accent-strip" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <HippoMark className="h-8 w-8 text-sky" />
              <span className="font-display text-lg font-extrabold text-paper">
                The Hippo Solution
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              A true story about the time the United States government sat down,
              thought hard about a meat shortage, and decided the answer was a
              swamp full of hippos. Spoiler: it did not happen. We are still a
              little upset about it.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-paper/70 transition-colors hover:text-sky"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-white/15 pt-6 text-xs text-paper/50">
          <p>
            Built for fun and historical appreciation by{" "}
            <a
              href="https://christinachild.com"
              className="text-paper/70 underline decoration-white/30 underline-offset-2 transition-colors hover:text-sky"
            >
              Christina Child
            </a>
            . The hippos remain theoretical.
          </p>
          <p>
            thehipposolution.com. Sources include the Smithsonian, the Library
            of Congress, the FBI, and a frankly alarming number of facts about
            Louisiana that turned out to be true.
          </p>
        </div>
      </div>
    </footer>
  );
}
