import Link from "next/link";
import { Container, Stat } from "@/components/ui";
import { HippoMark } from "@/components/HippoMark";

const SECTIONS = [
  {
    href: "/the-bill",
    title: "The Bill",
    blurb:
      "A Louisiana congressman, a war hero, and a man who would later run a Nazi spy ring walk into a hearing room. They are all here to talk about hippos.",
  },
  {
    href: "/hippos",
    title: "Hippo Facts",
    blurb:
      "Their closest relatives are whales, they sweat what looks like blood, and they cannot actually swim. The animal we wanted to ranch is a deeply strange one.",
  },
  {
    href: "/louisiana",
    title: "Louisiana",
    blurb:
      "An official state meat pie. Drive-through daiquiris. A boot that is slowly sinking into the Gulf. The state chosen for this experiment had range.",
  },
  {
    href: "/lake-cow-bacon",
    title: "Lake Cow Bacon",
    blurb:
      "What does hippo taste like, and how would you cook one and a half tons of it? The newspapers had a name for the meat before anyone had tasted it.",
  },
  {
    href: "/water-hyacinth",
    title: "The Weed",
    blurb:
      "A pretty purple flower from the Amazon that doubles in a week, chokes rivers dead, and is the reason hippos were on the table at all.",
  },
  {
    href: "/what-if",
    title: "What If",
    blurb:
      "Suppose it had passed. Suppose the bayou filled with hippos. We do not have to imagine very hard, because Colombia is living it right now.",
  },
  {
    href: "/cautionary-tales",
    title: "Cautionary Tales",
    blurb:
      "Cane toads. Mongooses. Sixty starlings in Central Park. A short history of solving one problem by importing a much larger one.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <Container className="py-20 text-center sm:py-28">
          <HippoMark className="mx-auto h-20 w-20 text-blue" />
          <p className="mt-6 font-serif text-2xl italic text-blue sm:text-3xl">
            a true story, regrettably
          </p>
          <h1 className="mt-1 font-display text-5xl font-extrabold leading-none text-ink sm:text-7xl">
            The Hippo Solution
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            In 1910, the United States Congress came genuinely close to voting
            to release hippopotamuses into the swamps of Louisiana. On purpose.
            The plan was to let them fatten up, and then eat them. This is that
            story, plus every gloriously unhinged thing orbiting it.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/the-bill"
              className="rounded-full bg-blue px-6 py-3 font-display font-bold text-white transition-colors hover:bg-blue-deep"
            >
              Start with the bill
            </Link>
            <Link
              href="/what-if"
              className="rounded-full border-2 border-ink px-6 py-3 font-display font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Skip to the chaos
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Stat value="1910" label="The year Congress nearly did it" />
          <Stat value="$250k" label="Requested to buy and import the herd" />
          <Stat value="3,000 lb" label="Weight of one adult dinner guest" />
          <Stat value="0" label="Hippos that ultimately moved in" />
        </div>
      </Container>

      <Container className="pb-4">
        <div className="prose-bayou mx-auto max-w-2xl text-center">
          <p>
            It was called the American Hippo Bill, and on paper it solved two
            problems at once. America had a meat shortage and rising beef
            prices. Louisiana had an invasive weed strangling its waterways. The
            pitch: import hippos, let them eat the weed, then turn the hippos
            into dinner. Two birds, one enormous semi-aquatic mammal.
          </p>
          <p>
            Serious people backed it. The <em>New York Times</em> coined a name
            for the meat. The bill went to a committee hearing. And then,
            mercifully for everyone who has ever met a hippo, it quietly died.
          </p>
        </div>
      </Container>

      <Container className="py-12">
        <div className="fleur-rule mx-auto mb-10 max-w-sm">
          <span className="font-display text-sm font-bold uppercase tracking-widest">
            The whole saga
          </span>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-2xl border border-line bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue/40"
            >
              <h2 className="font-display text-2xl font-extrabold text-blue-deep">
                {s.title}
              </h2>
              <p className="mt-2 flex-1 text-[0.97rem] leading-relaxed text-ink-soft">
                {s.blurb}
              </p>
              <span className="mt-4 font-display text-sm font-bold text-coral-deep">
                Read on →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
