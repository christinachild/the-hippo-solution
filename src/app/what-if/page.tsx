import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Callout,
  FactCard,
  CardGrid,
  Stat,
  Container,
  PageNav,
} from "@/components/ui";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo";

const TITLE = "What If It Had Passed";
const DESCRIPTION =
  "Imagine the bill went through and the bayou filled with hippos. We barely have to imagine, because Pablo Escobar already ran the experiment.";
const PATH = "/what-if";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function WhatIfPage() {
  return (
    <div>
      <JsonLd
        data={[
          articleSchema({ title: TITLE, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <PageHero
        kicker="the alternate timeline"
        title="What If It Had Passed?"
        lede="Picture it. The bill goes through. The first hippos splash into the Atchafalaya. America becomes a nation of hippo ranchers. It is a beautiful dream, and it would have been an absolute catastrophe, and we know this because someone already tried it."
      />

      <Section kicker="the dream" title="The bayou as Congress imagined it">
        <p>
          In the rosy 1910 version, it all just works. Hippos drift through the
          bayou grazing the water hyacinth down to nothing. The rivers run
          clear. Ranchers tend their herds of lake cows. Diners across America
          tuck into affordable lake cow bacon, free at last from the Beef Trust.
          Louisiana becomes the protein capital of the nation, and the
          hippopotamus takes its rightful place beside the longhorn in the
          iconography of the American frontier.
        </p>
        <p>
          It is a genuinely lovely picture if you stop there. The trouble starts
          the moment you remember what a hippo is actually like.
        </p>
      </Section>

      <Section kicker="the reality" title="Three reasons it would have gone wrong">
        <CardGrid cols={3}>
          <FactCard title="You cannot ranch them">
            <p>
              Hippos do not herd, do not domesticate, and do not take direction.
              They top out over 3,000 pounds, run faster than you, and have no
              interest in your fences. There is a reason no commercial hippo
              ranch exists anywhere on Earth. Several people figured this out the
              hard way so we would not have to.
            </p>
          </FactCard>
          <FactCard title="They are extremely dangerous">
            <p>
              Aggressive, territorial, and lethal in exactly the water you would
              be ranching them in. The plan put one of the most hostile large
              animals alive into the fishing and shipping lanes of an entire
              state. The body count is debated. The danger is not.
            </p>
          </FactCard>
          <FactCard title="It is one invasive fix for another">
            <p>
              The entire scheme was to fight an invasive species, the hyacinth,
              by introducing a far larger invasive species on purpose. We have a
              long catalog of how that goes. It is the exact mistake that let the
              weed in to begin with.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="the receipts" title="Colombia ran the experiment for us">
        <p>
          We do not have to speculate, because the universe built a control
          group. In the early 1980s the drug lord Pablo Escobar imported four
          hippos, one male and three females, for the private zoo at his
          Colombian estate. When he was killed in 1993, the hippos were simply
          left behind in the warm, predator-free, water-rich Magdalena River
          valley, which is about as close to hippo paradise as the Western
          Hemisphere gets.
        </p>
        <p>
          They bred. They are still breeding. Four hippos became the largest
          invasive hippo population on Earth, ranging miles from the old estate,
          fouling waterways and threatening native manatees and caimans.
        </p>

        <Container className="px-0 py-6">
          <div className="grid grid-cols-3 gap-4">
            <Stat value="4" label="Hippos Escobar brought in" />
            <Stat value="~180" label="Hippos in Colombia now" />
            <Stat value="1,000+" label="Projected by the 2030s if unchecked" />
          </div>
        </Container>

        <p>
          Colombia has tried sterilization, which is expensive and dangerous,
          and relocation, which fizzled. The animals kept multiplying anyway,
          and the government has now been forced toward culling, a decision so
          contested that an overseas billionaire offered to fly some of them to
          a sanctuary instead. This is the outcome from <em>four</em> hippos
          nobody planted on purpose.
        </p>
        <Callout label="Now do the math on the bill" tone="purple">
          <p>
            The American Hippo Bill proposed importing them deliberately, in
            numbers, across an entire state of warm water and zero natural
            predators, and then encouraging a whole industry around them.
            Colombia is losing to four. We were one committee vote of common
            sense away from finding out what losing to a federally funded herd
            looks like.
          </p>
        </Callout>
      </Section>

      <Section kicker="the verdict" title="The dream was a trap">
        <p>
          The honest conclusion is the funny one. Every charming thing about the
          plan, the clear rivers and the cheap meat and the ranchers on the
          bayou, depended on the hippopotamus being a cooperative animal it has
          never once been. The bill dying in committee was not a tragedy. It was
          the single most responsible thing the House Committee on Agriculture
          ever accidentally did.
        </p>
      </Section>

      <PageNav
        prev={{ href: "/water-hyacinth", label: "The Weed" }}
        next={{ href: "/cautionary-tales", label: "Cautionary Tales" }}
      />
    </div>
  );
}
