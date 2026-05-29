import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Callout,
  MythFlag,
  FactCard,
  CardGrid,
  PageNav,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Lake Cow Bacon",
  description:
    "What does hippo actually taste like, and how would anyone cook one and a half tons of it? The strange culinary case for the bill.",
};

export default function LakeCowBaconPage() {
  return (
    <div>
      <PageHero
        kicker="the menu"
        title="Lake Cow Bacon"
        lede="The entire bill rested on a single assumption nobody in Congress had personally tested: that hippo is good eating. So let us settle it. What does a hippo taste like, and how on earth do you cook one?"
      />

      <Section kicker="the verdict" title="Pork, beef, or a shrug">
        <p>
          The 1910 sales pitch was confident. The USDA{"'"}s William Newton
          Irwin declared hippo meat tasted like a combination of pork and beef,
          which is the kind of thing you say about a meat you are trying to sell
          to a nervous public. The press ran with it and christened the product{" "}
          <strong>lake cow bacon</strong>, betting on the bacon association
          before a single American had taken a bite.
        </p>
        <p>
          Modern accounts, from people who have actually eaten it, are messier.
          The descriptions land all over the map: closer to beef or venison than
          to fish, a little sweet, lean, lightly marbled, somewhere between lamb
          and beef. Other eaters call it bland and flat, with no wildness to it
          at all. The honest summary is that hippo tastes like a mild red meat
          that cannot decide what it wants to be, which is roughly what you{"'"}
          d expect from a swimming cousin of the whale.
        </p>
        <Callout label="The pitch nobody could argue with" tone="gold">
          <p>
            One period line summed up the appeal better than any taste test: a
            little of him would go a long way. An adult hippo runs well past
            3,000 pounds. Whatever it tastes like, there is an enormous amount
            of it, and that was always the real argument.
          </p>
        </Callout>
      </Section>

      <Section kicker="do people eat it" title="Yes, but not here, and not legally">
        <p>
          People do eat hippo today, mainly as bushmeat in parts of West and
          Central Africa, where it is a traditional protein in some communities.
          It is not widespread, it is often unregulated, and it is a real
          conservation problem given how the species is doing. Humans have in
          fact been eating hippo for a very long time. Archaeologists have found
          hippo in some of the oldest cooked remains we know of, thousands of
          years old.
        </p>
        <p>
          In the United States, the meat the bill wanted to make a national
          staple is now simply illegal. You cannot buy it, order it, or serve
          it. The single most American ending to this story is that the dish
          Congress nearly mandated is the one dish you are now banned from
          eating.
        </p>
      </Section>

      <Section kicker="hypothetically" title="How you would actually cook the thing">
        <p>
          Where hippo is eaten, it gets the same treatment as any tough, lean
          wild red meat: cooked long, cooked hot, or cooked down. None of it is
          fussy. All of it assumes you have a great deal of meat and time.
        </p>
        <CardGrid cols={2}>
          <FactCard title="Grilled or roasted over fire">
            <p>
              The straightforward route. Big cuts cooked over open flame, the
              way most bushmeat is handled. Lean meat means it dries out fast, so
              this is a watch-it-closely situation.
            </p>
          </FactCard>
          <FactCard title="Stewed and braised">
            <p>
              The smart move for a tough animal. Low and slow in a pot, often in
              a soup or stew, until the lean muscle finally gives up and turns
              tender. This is how you would feed a village, or a bayou.
            </p>
          </FactCard>
          <FactCard title="Dried like jerky">
            <p>
              Cut thin and dried into something like biltong, the southern
              African dried meat. Practical before refrigeration, and a sensible
              plan when your animal weighs more than your truck.
            </p>
          </FactCard>
          <FactCard title="As, allegedly, bacon">
            <p>
              The bayou dream: hippo cured and sliced like bacon. There is no
              evidence anyone in 1910 actually produced lake cow bacon. The name
              came first. The product never existed. It remains the most famous
              meat that was never sold.
            </p>
          </FactCard>
        </CardGrid>
        <MythFlag>
          <p>
            If you go looking for an <em>authentic 1910 hippopotamus steak
            recipe</em> in the old newspapers, you will not find one. The
            Library of Congress has a whole guide to the era{"'"}s hippo
            coverage, but it is all about the debate and the Meat Question, not
            actual cooking instructions. Anyone selling you a vintage hippo
            recipe is improvising.
          </p>
        </MythFlag>
      </Section>

      <Section kicker="the swap" title="The invasive species we do eat">
        <p>
          The bill{"'"}s real logic, eat your way out of an ecological problem,
          did not die with it. Louisiana never got hippo on the menu, but it did
          start promoting nutria, the invasive swamp rat, as a lean guilt-free
          protein to encourage hunters to thin the herd. It turns out the
          eat-the-invader plan works fine. We just aimed it at a twenty-pound
          rodent instead of a two-ton river beast, which in hindsight was the
          correct call.
        </p>
      </Section>

      <PageNav
        prev={{ href: "/louisiana", label: "Louisiana" }}
        next={{ href: "/water-hyacinth", label: "The Weed" }}
      />
    </div>
  );
}
