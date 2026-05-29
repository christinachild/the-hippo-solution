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

const TITLE = "The American Hippo Bill";
const DESCRIPTION =
  "In 1910, Rep. Robert Broussard introduced H.R. 23261 to import hippos into Louisiana. Here is who was behind it and why it died.";
const PATH = "/the-bill";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function TheBillPage() {
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
        kicker="washington, 1910"
        title="The American Hippo Bill"
        lede="House Resolution 23261 asked Congress for a quarter million dollars to import hippopotamuses and turn the Louisiana bayou into a meat farm. It was not a joke. People testified."
      />

      <Section kicker="problem one" title="America had run low on meat">
        <p>
          By 1910 the country was growing faster than its cattle. Open range was
          vanishing, beef prices were climbing, and the public had worked itself
          into a fury at the meatpacking monopoly known as the Beef Trust. The
          newspapers called it the Meat Question, capital M, capital Q, the way
          you capitalize a thing you have decided is a crisis.
        </p>
        <p>
          Into this walked a Louisiana congressman named{" "}
          <strong>Robert Broussard</strong>, who represented the bayou country
          and went by the nickname Cousin Bob. Broussard had a district full of
          warm, wet, underused swampland that cattle could not graze. He also
          had a second problem creeping up his rivers, and he believed one
          animal could fix both at the same time.
        </p>
      </Section>

      <Section kicker="problem two" title="And a weed eating the waterways">
        <p>
          Louisiana was choking on water hyacinth, a pretty purple
          South American flower that had been handed out at a New Orleans world{"'"}
          s fair in the 1880s and then proceeded to carpet every bayou it could
          reach. It blocked boats, smothered fish, and doubled itself roughly
          every week or two. The state was losing the fight.
        </p>
        <p>
          Broussard{"'"}s logic, which is genuinely elegant if you do not think
          about it for more than a few seconds: hippos are enormous aquatic
          plant-eaters. Put hippos in the bayou, let them mow the hyacinth, and
          then harvest the hippos for meat. The weed becomes bacon. You can read
          the full sad career of that weed on the{" "}
          <a className="font-medium text-blue underline decoration-blue/40 underline-offset-2 hover:text-sky" href="/water-hyacinth">
            water hyacinth page
          </a>
          .
        </p>
      </Section>

      <Section kicker="the marketing" title="They called it lake cow bacon">
        <p>
          The plan needed a friendly name, and the press obliged. The{" "}
          <em>New York Times</em> reportedly branded hippo meat{" "}
          <strong>lake cow bacon</strong>, the idea being that a hippo was
          basically a cow that preferred water, and that a little of him would
          go a long way at the dinner table. A real advocacy outfit formed to
          push the cause, generally remembered as the{" "}
          <strong>New Food Supply Society</strong>.
        </p>
        <Callout label="The USDA was on board" tone="green">
          <p>
            A Department of Agriculture researcher named{" "}
            <strong>William Newton Irwin</strong> became one of the loudest
            voices for the scheme. Irwin was, wonderfully, a fruit specialist,
            not a livestock man. He told audiences hippos could add as much as a
            million pounds of meat a year, and reported that the meat tasted
            like a combination of pork and beef. He had notes.
          </p>
        </Callout>
      </Section>

      <Section kicker="the cast" title="The three men who showed up to argue for it">
        <CardGrid cols={3}>
          <FactCard title="Robert Broussard" badge="the sponsor">
            <p>
              Louisiana congressman, bayou native, the man who put the bill on
              paper. He moved on to the Senate in 1914 and died in office in
              1918, the hippos forever unranched.
            </p>
          </FactCard>
          <FactCard title="Frederick R. Burnham" badge="the scout">
            <p>
              An American frontier scout who fought in the Apache campaigns,
              became chief of scouts for the British in Africa, and taught
              woodcraft to the founder of the Boy Scouts. He helped inspire the
              lineage of adventure heroes that eventually led to Indiana Jones.
            </p>
          </FactCard>
          <FactCard title="Fritz Duquesne" badge="the spy">
            <p>
              A Boer soldier and spy nicknamed the Black Panther, and Burnham{"'"}
              s sworn personal enemy. Decades later he ran the Duquesne Spy
              Ring, the largest espionage case in US history. The FBI rolled it
              up days after Pearl Harbor.
            </p>
          </FactCard>
        </CardGrid>
        <Callout label="The detail that sounds invented" tone="purple">
          <p>
            Burnham and Duquesne had reportedly each been ordered to hunt down
            and kill the other during the Boer War, and had never actually met.
            They finally came face to face in 1910 in Washington, where they
            discovered they were both there lobbying for the same hippo bill,
            and ended up testifying side by side. The assassination detail comes
            mostly from Burnham{"'"}s own telling, so enjoy it with one eyebrow
            raised.
          </p>
        </Callout>
      </Section>

      <Section kicker="the ending" title="So how close did it come?">
        <p>
          The bill went to the House Committee on Agriculture in March 1910.
          Broussard, Burnham, and Duquesne all testified. And then the committee
          listened, considered the prospect of the American South being overrun
          by hippopotamuses, and quietly shelved it. The bill died in
          committee. It never reached a floor vote.
        </p>
        <p>
          It was killed less by ecological foresight than by simple practicality
          and squeamishness. Americans did not particularly want to eat swamp
          animals, and Congress did not particularly want to be the body that
          made it happen.
        </p>
        <MythFlag>
          <p>
            You will read everywhere that the bill <em>lost by a single vote</em>
            . It is a great line and it is almost certainly false. There was no
            floor vote at all to lose by one. The bill stalled in committee. The
            careful sources, the Smithsonian and the Library of Congress among
            them, all say shelved, not narrowly defeated. The romance is fun;
            the truth is quieter.
          </p>
        </MythFlag>
        <Callout label="One more careful footnote" tone="gold">
          <p>
            Teddy Roosevelt is often listed as a backer, and that is true in
            spirit. He loved the whole idea of importing big game for food and
            sport. A documented, formal endorsement of this specific bill is
            harder to pin down, so file him under enthusiastic, not signed on
            the dotted line.
          </p>
        </Callout>
      </Section>

      <PageNav
        prev={{ href: "/", label: "Home" }}
        next={{ href: "/hippos", label: "Hippo Facts" }}
      />
    </div>
  );
}
