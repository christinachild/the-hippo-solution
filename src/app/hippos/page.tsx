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
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo";

const TITLE = "Fun Facts About Hippos";
const DESCRIPTION =
  "The animal Congress wanted to ranch is one of the strangest on Earth. True, surprising hippo facts, with the myths flagged.";
const PATH = "/hippos";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function HipposPage() {
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
        kicker="know your guest"
        title="Fun Facts About Hippos"
        lede="Before you invite three thousand pounds of anything into your home state, it helps to know what you are dealing with. The hippopotamus is a much weirder animal than the bill seemed to appreciate."
      />

      <Section title="The greatest hits">
        <CardGrid cols={2}>
          <FactCard title="Their cousins are whales">
            <p>
              Forget pigs. DNA puts the hippo{"'"}s closest living relatives
              among the whales and dolphins. They share an ancestor that split
              off around 55 million years ago. One branch went off to become
              orcas. The other stayed in the river and got chunky.
            </p>
          </FactCard>
          <FactCard title="They sweat something like blood">
            <p>
              Hippos ooze a substance that turns red within minutes, which is
              why people call it blood sweat. It is neither blood nor sweat. The
              pigments, hipposudoric and norhipposudoric acid, work as a
              built-in sunscreen and antibiotic. Scientists have spent years
              trying to keep the stuff stable in a lab and mostly failed.
            </p>
          </FactCard>
          <FactCard title="They cannot actually swim">
            <p>
              A hippo is too dense to float. In deep water it does not swim so
              much as walk, trot, and bounce along the bottom, pushing off and
              briefly going airborne between strides. The most aquatic-looking
              land mammal is technically just moonwalking underwater.
            </p>
          </FactCard>
          <FactCard title="And yet they are fast on land">
            <p>
              For something shaped like a parked car, a hippo can move,
              hitting somewhere around nineteen to twenty miles per hour in
              short bursts. You are not outrunning it. This is worth remembering
              before you propose herding them.
            </p>
          </FactCard>
          <FactCard title="The mouth is the headline">
            <p>
              Guinness recognizes the hippo as having the largest mouth of any
              land animal, gaping to about 150 degrees. The canine and incisor
              teeth grow for life. The record canine measured nearly four feet.
              That yawn you find adorable is a threat display.
            </p>
          </FactCard>
          <FactCard title="Babies nurse underwater">
            <p>
              A hippo calf can nurse below the surface, folding its ears back
              and sealing its nostrils shut to keep the water out. Newborns
              surface to breathe about every thirty seconds. They arrive
              weighing as much as a grown human.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="the gross one" title="The propeller-tail dung shower">
        <p>
          Hippos mark their territory by defecating while spinning the tail like
          a propeller, flinging dung in every direction to advertise dominance
          at the borders of their patch. It is exactly as undignified as it
          sounds, and it doubles as a property line.
        </p>
        <Callout label="It is also load-bearing for the ecosystem" tone="green">
          <p>
            That dung is not just for show. Hippos graze on land at night and
            deposit enormous volumes of nutrients into rivers, feeding fish and
            insects. They have been called the life force of African rivers. Too
            many hippos in one pool can crash the oxygen and tip the other way,
            so it is a Goldilocks situation, but at the right density they are
            keeping whole waterways alive one spinning tail at a time.
          </p>
        </Callout>
      </Section>

      <Section kicker="handle with care" title="About the danger">
        <p>
          Hippos are aggressive, territorial, and genuinely lethal, especially
          in the water they are defending. They are not the gentle river cows
          the 1910 marketing department implied. This is the central problem
          with the entire hippo ranch concept, and it is a big one.
        </p>
        <MythFlag>
          <p>
            The famous stat that hippos kill <em>about 500 people a year</em> is
            repeated everywhere and sourced almost nowhere. Estimates swing from
            the dozens into the thousands, and nobody is keeping a tidy global
            ledger. Hippos are absolutely dangerous. The precise body count is
            folklore wearing a lab coat.
          </p>
        </MythFlag>
        <MythFlag>
          <p>
            You may also have heard that <em>hippo milk is pink</em>. It is not.
            Hippo milk is white, like every other mammal{"'"}s. The myth went
            viral off a single 2013 social post and refuses to die. The
            confusion comes from that red skin secretion. Their milk has never
            seen the color pink.
          </p>
        </MythFlag>
      </Section>

      <PageNav
        prev={{ href: "/the-bill", label: "The Bill" }}
        next={{ href: "/louisiana", label: "Louisiana" }}
      />
    </div>
  );
}
