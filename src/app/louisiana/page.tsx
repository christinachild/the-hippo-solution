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

const TITLE = "Fun Facts About Louisiana";
const DESCRIPTION =
  "The state we chose to fill with hippos has an official meat pie, drive-through daiquiris, and a coastline that is actively leaving. A loving roast.";
const PATH = "/louisiana";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function LouisianaPage() {
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
        kicker="the chosen state"
        title="Fun Facts About Louisiana"
        lede="Of all the places to release a herd of carnivore-adjacent megafauna, Congress picked the one state that legislates its own snacks and is slowly dissolving into the Gulf. We say this with love. Mostly."
      />

      <Section kicker="the legal system" title="They do not have counties, or normal laws">
        <p>
          Louisiana is the only state with parishes instead of counties, a
          holdover from when the church drew the map and nobody has gotten
          around to fixing it in 200 years. There are 64 of them. It is also the
          only state running on a civil-law system descended from the same
          French and Spanish codes as Napoleon{"'"}s, which means the rest of
          America agreed on one legal tradition and Louisiana said no thank you.
        </p>
        <CardGrid cols={3}>
          <FactCard title="The pizza law">
            <p>
              It is a genuine crime to send someone food or services they did
              not order. Surprise a person with an uninvited pizza and you are
              looking at a fine up to $500 and as much as six months. The state
              has formally decided that a free pizza can be a felony-adjacent
              act of aggression.
            </p>
          </FactCard>
          <FactCard title="The dentures clause">
            <p>
              Bite someone with your false teeth and Louisiana upgrades it to
              aggravated battery, because the teeth legally count as a dangerous
              weapon. Somewhere there is a courtroom where this has mattered.
            </p>
          </FactCard>
          <FactCard title="The crawfish statute">
            <p>
              Stealing crawfish is addressed by its own specific theft law.
              Louisiana looked at all the things people might steal, thought
              hard about the mudbug, and gave it dedicated legislative
              protection.
            </p>
          </FactCard>
        </CardGrid>
        <MythFlag>
          <p>
            The viral one about it being illegal to <em>gargle in public</em> is
            folklore, not a statute. Same with the rule about how many
            sandwiches you can serve at a wake. Lawyers file these under
            internet, not under law. We are not going to pretend they are real
            just because they are funny.
          </p>
        </MythFlag>
      </Section>

      <Section kicker="the official menu" title="The state symbols are basically a lunch order">
        <p>
          Most states stop at a bird and a flower. Louisiana kept going. The
          legislature has, at various points, sat down and officially designated
          a state crustacean, a state cuisine, a state vegetable, a separate
          state vegetable plant, and not one but two state jellies. There is an
          official state doughnut that is not technically a doughnut and an
          official state meat pie that very much is a meat pie.
        </p>
        <Callout label="The full spread, all real" tone="gold">
          <p>
            State dog: the Catahoula Leopard Dog. State reptile: the alligator,
            because of course you can keep the alligator. State crustacean: the
            crawfish. State doughnut: the beignet, which has no hole and is
            therefore arguably not a doughnut, a fact Louisiana has chosen to
            ignore. State meat pie: the Natchitoches meat pie. State jellies:
            mayhaw and sugar cane, plural, two jellies, because picking one
            would have been rude to the other jelly.
          </p>
        </Callout>
      </Section>

      <Section kicker="the loophole" title="You can drink a daiquiri in your car. Sort of.">
        <p>
          Drive-through daiquiri shops are legal, and the workaround is a small
          masterpiece of legal reasoning. As long as the lid is sealed and the
          straw is not punched through, a frozen daiquiri does not count as an
          open container. So the shop tapes over the straw hole, hands you the
          straw separately, and the entire state agrees to pretend the cup of
          rum in your cupholder is closed. The instant you poke that straw in,
          you are committing a crime. It was invented in Lafayette in the early
          1980s, roughly five minutes after the open-container law passed.
        </p>
      </Section>

      <Section kicker="the geography" title="The state is flat, low, and leaving">
        <CardGrid cols={3}>
          <FactCard title="New Orleans is underwater, technically">
            <p>
              Around 65 percent of the city sits at or below sea level, with the
              lowest spots several feet under. The city is kept dry by pumps and
              faith. Into this, in 1910, we proposed adding hippos.
            </p>
          </FactCard>
          <FactCard title="The boot is dissolving">
            <p>
              Louisiana loses coastal land at a pace often dramatized as a
              football field roughly every hundred minutes. The famous boot
              shape on the map is partly a historical document at this point.
            </p>
          </FactCard>
          <FactCard title="The mountain is 535 feet">
            <p>
              The highest point in the entire state is Driskill Mountain, a
              generous 535 feet, one of the lowest high points in the country.
              You can summit it in tennis shoes during a lunch break and be home
              before the daiquiri melts.
            </p>
          </FactCard>
        </CardGrid>
      </Section>

      <Section kicker="the swamp economy" title="There is a bounty on the orange-toothed rat">
        <p>
          Louisiana already ran one import-an-animal experiment, and it went the
          way these things go. Nutria, large South American rodents with
          startling orange teeth, were brought in for the fur trade in the
          1930s, escaped, and now devour the marsh from the roots up, speeding
          along that disappearing coastline. The state{"'"}s response was a
          bounty: turn in a nutria tail, collect six dollars. Hunters take
          hundreds of thousands a season. People have also started eating them,
          marketed as a lean, guilt-free, patriotic protein. Hold that thought
          for the meat page.
        </p>
        <MythFlag>
          <p>
            The story that this is all <em>E.A. McIlhenny of Tabasco</em>
            {"'"}s fault is too tidy. He released some nutria in 1940, but he was
            at least the third nutria farmer in the state. The swamp rats had
            help. Do not let the hot sauce family take the whole rap.
          </p>
        </MythFlag>
      </Section>

      <Section kicker="in fairness" title="The things Louisiana is actually great at">
        <p>
          For all the roasting, the state earns it back at the table. Tabasco
          has been made by the same family on Avery Island since 1868, on top of
          a salt dome that plunges deeper underground than Mount Everest stands
          tall. Tony Chachere, a former pharmaceutical salesman, turned a green
          can of Creole seasoning into a religion. And Louisiana throws close to
          400 festivals a year, more than there are days, including a frog
          festival with frog racing, an alligator festival with gator on a
          stick, and a wildlife festival featuring competitive nutria skinning.
        </p>
        <Callout label="The point" tone="purple">
          <p>
            This is a state that legislates its jellies, drinks in the car
            within the letter of the law, eats its invasive species out of
            spite, and parties 400 times a year on land that is actively
            sinking. Honestly, releasing hippos into it would have fit right in.
            That is the scary part.
          </p>
        </Callout>
      </Section>

      <PageNav
        prev={{ href: "/hippos", label: "Hippo Facts" }}
        next={{ href: "/lake-cow-bacon", label: "Lake Cow Bacon" }}
      />
    </div>
  );
}
