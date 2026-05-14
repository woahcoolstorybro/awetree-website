import { SectionHeading } from '@/components/SectionHeading';
import { capabilities, capabilityStatement, operatingPrinciples, ventures } from '@/lib/site-data';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container-custom relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-moss">
              Founder-led operating studio
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl">
              A parent company for work that has to hold up in the real world.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/78">
              Awetree is the operating home for specialized service and technology ventures in
              mechanical systems, construction delivery, healthcare-adjacent facility support,
              public-sector work, and applied AI.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="primary-button bg-moss text-ink hover:bg-white" href="#ventures">
                View Ventures
              </a>
              <a className="secondary-button border-white/30 text-white hover:border-moss hover:text-moss" href="/contact/">
                Route an Inquiry
              </a>
            </div>
          </div>
          <div className="surface border-white/15 bg-white/[0.04] p-6 shadow-none">
            <p className="eyebrow mb-5 text-moss">What Awetree holds</p>
            <div className="grid gap-4">
              {[
                'The current commercial front door for bids, buyers, and partnership conversations',
                'A practical home for service, construction, facility, and AI ventures',
                'A shared system for intake, proposals, documentation, and delivery memory',
                'A future command layer for focused teams assigned to each operating lane',
              ].map((item) => (
                <div className="border border-white/15 bg-white/5 p-5" key={item}>
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ventures" className="section-shell bg-cloud">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Portfolio"
            title="One parent. Clear lanes. Less drag."
            body="Each venture can speak to its own buyer. Awetree holds the trust, operating memory, proposal logic, and documentation behind the scenes."
          />
          <div className="grid gap-5 lg:grid-cols-5">
            {ventures.map((venture) => (
              <article className="surface flex flex-col p-6" key={venture.name}>
                <div className="mb-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-copper">
                    {venture.status}
                  </p>
                  <h3 className="text-2xl font-black">{venture.name}</h3>
                  {venture.href ? (
                    <a
                      className="mt-1 inline-block text-sm font-semibold text-slate/65 underline-offset-4 hover:text-copper hover:underline"
                      href={venture.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {venture.domain}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-slate/65">{venture.domain}</p>
                  )}
                </div>
                <p className="muted-copy text-sm leading-6">{venture.focus}</p>
                <p className="mt-5 border-t border-line pt-5 text-sm font-semibold text-ink">
                  {venture.audience}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="section-shell bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Capabilities"
            title="Awetree turns opportunity into organized work."
            body="The parent brand makes the system easier to understand for buyers, partners, public-sector reviewers, and future team members."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div className="surface p-5" key={capability}>
                <p className="mb-4 text-xs font-black tracking-[0.22em] text-copper">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="font-bold text-ink">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="public-sector" className="section-shell bg-deep-green text-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4 text-moss">Public sector</p>
            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
              A stable bidding identity with specialized delivery behind it.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Awetree gives public-sector opportunities a clear commercial front door while the
              right operating brand supplies the field knowledge, technical depth, and delivery
              focus required by the scope.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              'Capability statements by venture, service lane, and buyer context',
              'Bid-ready language for scopes that need practical execution',
              'Clear routing from opportunity to the right operating brand',
              'Documentation discipline for repeatable proposal and delivery response',
            ].map((item) => (
              <div className="border border-white/15 bg-white/5 p-5" key={item}>
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Capability statement"
            title="The parent should be easy to evaluate."
            body="This is the seed of a public-sector and partner-facing capability statement. It makes Awetree legible without forcing every venture into the same story."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {capabilityStatement.map((item) => (
              <div className="surface p-6" key={item.label}>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-copper">
                  {item.label}
                </p>
                <p className="text-lg font-semibold leading-7 text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="operating-system" className="section-shell bg-cloud">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Operating system"
            title="Validate. Investigate. Iterate."
            body="This is the parent logic that can later onboard focused teams per lane without forcing every brand to solve the same operating problems from scratch."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {operatingPrinciples.map((principle) => (
              <article className="surface p-8" key={principle.name}>
                <h3 className="mb-4 text-2xl font-black">{principle.name}</h3>
                <p className="muted-copy leading-7">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container-custom">
          <div className="surface grid gap-8 bg-ink p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="eyebrow mb-4 text-moss">Next step</p>
              <h2 className="text-3xl font-black text-white md:text-4xl">
                Bring unclear opportunities to Awetree first.
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                When the right brand is obvious, route directly. When the path is still forming,
                Awetree holds the conversation and shapes the next move.
              </p>
            </div>
            <a className="primary-button bg-moss text-ink hover:bg-white" href="/contact/">
              Contact Awetree
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
