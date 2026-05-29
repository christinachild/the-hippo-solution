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
  title: "Cautionary Tales",
  description:
    "The hippo bill was not a one-off. A short history of solving a problem by importing an animal, and watching it become a much bigger problem.",
};

export default function CautionaryTalesPage() {
  return (
    <div>
      <PageHero
        kicker="this keeps happening"
        title="A Brief History of Bad Ideas"
        lede="The hippo bill was not some lonely act of madness. It belongs to a proud tradition of looking at a problem, importing an animal to fix it, and then spending the next century regretting it."
      />

      <Section title="The all-stars of unintended consequences">
        <CardGrid cols={2}>
          <FactCard title="Cane toads in Australia" badge="1935">
            <p>
              About a hundred cane toads were shipped to Queensland to eat the
              beetles wrecking the sugarcane. The beetles lived high on the
              stalks, out of reach, so the toads ignored them and bred instead.
              They are poisonous, they have no local predators, and there are
              now upward of 200 million of them still spreading across the
              continent, poisoning everything that tries to eat them.
            </p>
          </FactCard>
          <FactCard title="Mongooses in Hawaii" badge="1883">
            <p>
              Plantation owners brought in the small Indian mongoose to kill the
              rats in the cane fields. One catch: rats are nocturnal and
              mongooses are not, so the two barely crossed paths. The mongoose,
              left without rats, devoured native ground-nesting birds and turtle
              eggs instead. Kauai stayed mongoose-free and is quietly grateful.
            </p>
          </FactCard>
          <FactCard title="Starlings in New York" badge="1890">
            <p>
              A man named Eugene Schieffelin released around 60 European
              starlings in Central Park, and another 40 the next year. Those
              birds founded the entire North American population, which peaked
              near 200 million and remains a major agricultural pest, though
              numbers have fallen by about half since the 1970s.
            </p>
          </FactCard>
          <FactCard title="Asian carp in the US" badge="1970s">
            <p>
              Imported to clean algae out of southern fish ponds and sewage
              lagoons. Floods let them escape into the Mississippi, and they have
              been muscling up the river system toward the Great Lakes ever
              since. Silver carp also leap out of the water at the sound of a
              boat motor, turning a quiet day on the river into a contact sport.
            </p>
          </FactCard>
          <FactCard title="Nutria in Louisiana" badge="1930s">
            <p>
              The local entry. South American rodents brought in for fur,
              escaped, and now eating the marsh to death and speeding the
              state{"'"}s coastal collapse. They were even floated as a way to
              control invasive plants, including water hyacinth. Setting one
              invader on another. Sound familiar?
            </p>
          </FactCard>
          <FactCard title="Rabbits in Australia" badge="1859">
            <p>
              A landowner released two dozen rabbits for hunting, a touch of
              home rather than a fix, and they spread about 100 kilometers a
              year, the fastest known mammal invasion ever recorded. The country
              built a thousand-mile fence to stop them. The fence did not stop
              them.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="not quite the same" title="The escapees, for the record">
        <p>
          A couple of famous invasions get lumped in here but belong in a
          slightly different bin. Nobody imported these to fix anything. They
          simply got loose.
        </p>
        <CardGrid cols={2}>
          <FactCard title="Burmese pythons in the Everglades">
            <p>
              Pets that were released or escaped, with a 1992 hurricane often
              blamed for freeing a facility full of them. However it started,
              they have collapsed the Everglades{"'"} mammals, with raccoon and
              opossum sightings down around 99 percent in the worst-hit areas.
            </p>
          </FactCard>
          <FactCard title="The cocaine hippos of Colombia">
            <p>
              The most on-the-nose example we have, and it gets its own full
              treatment on the{" "}
              <a className="font-medium text-blue underline decoration-blue/40 underline-offset-2 hover:text-sky" href="/what-if">
                what-if page
              </a>
              . Four hippos, a private zoo, a dead drug lord, and an invasive
              herd nobody can get under control. It is the hippo bill come to
              life, just one country south.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="keeping it honest" title="Two stories everyone overcooks">
        <MythFlag>
          <p>
            Kudzu, the vine that ate the South, mostly did not eat the South. It
            was pushed hard for erosion control in the 1930s, and it is real and
            invasive, but the legend wildly overstates how much ground it
            actually covers. It thrives on sunny roadsides where everyone can see
            it, which makes it look far more dominant than it is.
          </p>
        </MythFlag>
        <MythFlag>
          <p>
            The beloved tale that Schieffelin released the starlings to bring
            every bird mentioned in <em>Shakespeare</em> to America has no
            evidence behind it. The story first appears in the 1940s, decades
            after his death, as one naturalist{"'"}s guess. His own obituary
            mentions the starlings and says nothing about the Bard.
          </p>
        </MythFlag>
      </Section>

      <Section kicker="the moral" title="The pattern is the point">
        <p>
          Every one of these started as a reasonable-sounding plan pitched by
          confident people. Eat the beetles. Kill the rats. Clean the ponds.
          Control the weed. The animal always had its own agenda. The hippo bill
          is the one that got away, the rare case where the confident people
          were stopped before the animal could write the ending. Given the
          competition on this page, that is a genuinely happy outcome.
        </p>
        <Callout label="The takeaway" tone="gold">
          <p>
            If you ever find yourself in a hearing room arguing that the
            solution to your problem is a large foreign animal, this page is
            your sign to go home. The animal does not care about your plan. The
            animal has never read your plan. The animal is going to do whatever
            it wants, and there will be a great deal more of it next year.
          </p>
        </Callout>
      </Section>

      <PageNav prev={{ href: "/what-if", label: "What If" }} />
    </div>
  );
}
