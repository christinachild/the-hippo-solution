import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Callout,
  MythFlag,
  FactCard,
  CardGrid,
  Stat,
  Container,
  PageNav,
} from "@/components/ui";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/seo";

const TITLE = "The Weed That Started It";
const DESCRIPTION =
  "Water hyacinth choked Louisiana's waterways and helped inspire the hippo bill. The plant's rampage, its real uses, and the disasters it caused worldwide.";
const PATH = "/water-hyacinth";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function WaterHyacinthPage() {
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
        kicker="the actual villain"
        title="The Weed That Started It"
        lede="Before there were hippos, there was a flower. Water hyacinth is a gorgeous purple menace that turned Louisiana's bayous into solid green carpet, and it is half the reason anyone was thinking about hippos at all."
      />

      <Container className="py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Stat value="1 week" label="How fast a mat can double in the heat" />
          <Stat value="200 tons" label="Plant matter packed into a single acre" />
          <Stat value="186" label="Countries it has now invaded" />
          <Stat value="1884" label="The year it arrived in New Orleans" />
        </div>
      </Container>

      <Section kicker="origin story" title="It came to a party and never left">
        <p>
          Water hyacinth, <em>Pontederia crassipes</em>, used to go by{" "}
          <em>Eichhornia crassipes</em>, and is native to the Amazon basin. The
          standard account, repeated so often it is practically gospel, is that
          it arrived in the United States at the 1884 World{"'"}s Industrial and
          Cotton Centennial Exposition in New Orleans, handed out to fairgoers
          as a charming ornamental, commonly credited to the Japanese delegation.
        </p>
        <p>
          People took the pretty flower home and dropped it in their ponds and
          rivers, and the plant, free of the South American insects that keep it
          in check, did what it does. By around 1900 it had clogged Florida{"'"}
          s St. Johns River so thoroughly that boats could not pass. Louisiana
          got the same treatment. A free party favor became a permanent
          infrastructure crisis.
        </p>
        <MythFlag>
          <p>
            The 1880s arrival is solid. The tidy detail that the{" "}
            <em>Japanese delegation personally handed it out</em> is the popular
            version, not airtight history. Several accounts of how it entered
            the country exist, and the exact hand-off is murkier than the story
            usually admits. Believe the broad strokes, not the brochure.
          </p>
        </MythFlag>
      </Section>

      <Section kicker="why it is a nightmare" title="What the weed actually does">
        <p>
          Under warm conditions water hyacinth can double its mass in a week to
          two. It forms mats so dense you can nearly walk on them, and those
          mats are not just inconvenient. They block sunlight and kill the
          plants below. They strip oxygen out of the water as the dead material
          rots, suffocating fish. They jam boats, ferries, irrigation canals,
          and hydropower intakes. And they create the kind of still water that
          breeds mosquitoes by the cloud. It is, by common agreement, one of the
          worst aquatic weeds on the planet.
        </p>
      </Section>

      <Section kicker="the hippo pitch, briefly" title="So why not a hippo?">
        <p>
          Here is where our story slots in. A giant aquatic plant-eater that
          would happily mow acres of hyacinth and could then be eaten sounded,
          to Congressman Broussard and friends, like the obvious fix. The weed
          becomes meat, the rivers run clear, everyone wins. The actual solutions
          the world eventually landed on were less dramatic and considerably
          less likely to capsize a fishing boat.
        </p>
        <CardGrid cols={3}>
          <FactCard title="Machines">
            <p>
              Harvester boats, draglines, and booms physically haul the mats
              out. It works in the short term, it is expensive, and the plant
              grows right back. This is the dull, effective, hippo-free option.
            </p>
          </FactCard>
          <FactCard title="Herbicides">
            <p>
              Chemical control knocks infestations down, especially in Florida{"'"}
              s ongoing maintenance program. The catch is that the dead plant
              still rots and pulls oxygen out of the water on its way down.
            </p>
          </FactCard>
          <FactCard title="Weevils">
            <p>
              The headline science: two South American weevils that eat the
              plant in its native range, released in Florida in the 1970s and
              now spread across the country. A bug, not a beast. Far easier to
              ranch than a hippo.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="the redemption arc" title="The weed is actually useful">
        <p>
          For all the damage, water hyacinth is not pure villain. Once you have
          piles of the stuff, people have found genuinely good things to do with
          it. The four well-established uses are real and in service around the
          world right now.
        </p>
        <CardGrid cols={2}>
          <FactCard title="It cleans water" badge="proven">
            <p>
              The fibrous roots pull heavy metals like lead and cadmium and
              excess nutrients out of polluted water. It is used in constructed
              wetlands for wastewater treatment. The one hard rule: a plant used
              to soak up toxic metals must never be fed to animals afterward,
              because everything it absorbed is now inside it.
            </p>
          </FactCard>
          <FactCard title="It becomes compost and fodder" badge="proven">
            <p>
              Harvested biomass composts into a solid soil amendment, and the
              protein-rich leaves can be dried and fed to pigs, cattle, ducks,
              and fish. Same toxic-uptake warning applies. You are what your
              hyacinth ate.
            </p>
          </FactCard>
          <FactCard title="It gets woven into things" badge="commercial">
            <p>
              Dried stalks are turned into baskets, bags, mats, sandals, and
              furniture. It is a real cottage industry in the Philippines,
              Indonesia, Bangladesh, and Kenya, and one of the few cases of
              turning the weed into actual money.
            </p>
          </FactCard>
          <FactCard title="It makes biogas and paper" badge="small scale">
            <p>
              Anaerobic digestion turns it into methane, best when co-digested
              with manure, and the fiber pulps into a modest paper. Both are
              real but small scale. Biofuel and medicinal uses exist mostly in
              the research-and-maybe-someday column.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="not just here" title="Where else it has wrecked the place">
        <CardGrid cols={2}>
          <FactCard title="Lake Victoria, East Africa">
            <p>
              The flagship modern catastrophe. First reported in 1989, it peaked
              in the late 1990s covering tens of thousands of acres, strangling
              ferries and fishing and threatening the lake{"'"}s famous fish. A
              combination of weevils and a strong El Niño finally beat it back.
            </p>
          </FactCard>
          <FactCard title="Bengal, India">
            <p>
              It earned the nickname Terror of Bengal and did enormous economic
              damage around the turn of the 20th century. It has picked up
              menacing folk names everywhere it goes: German weed in Bangladesh,
              Florida Devil in South Africa, Japanese Trouble in Sri Lanka.
            </p>
          </FactCard>
          <FactCard title="The Congo River">
            <p>
              Introduced in the mid 20th century, it spread the length of the
              Congo within about fourteen years, deoxygenating the water and
              blocking fishermen around Kinshasa.
            </p>
          </FactCard>
          <FactCard title="Florida and California">
            <p>
              Florida has been fighting it continuously for over a century, and
              it has taken hold in California{"'"}s Sacramento delta. It does not
              leave. It just gets managed, forever, at great expense.
            </p>
          </FactCard>
        </CardGrid>
        <MythFlag>
          <p>
            Two romantic Bengal claims float around: that the plant arrived as a
            lover{"'"}s gift from Warren Hastings, and that it helped cause the
            1943 Bengal famine. The first is folklore. The second is a contested
            secondary claim, not established fact. The Terror of Bengal name is
            real. The love story and the famine link are not things to state
            flatly.
          </p>
        </MythFlag>
      </Section>

      <PageNav
        prev={{ href: "/lake-cow-bacon", label: "Lake Cow Bacon" }}
        next={{ href: "/what-if", label: "What If" }}
      />
    </div>
  );
}
