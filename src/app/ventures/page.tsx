import type { Metadata } from 'next';
import { ventureMaturity, ventures, ventureWorlds } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Ventures',
  description: 'Awetree portfolio ventures and operating lanes.',
};

export default function VenturesPage() {
  return (
    <div className="section-shell">
      <div className="container-custom">
        <p className="eyebrow mb-4">Ventures</p>
        <h1 className="max-w-3xl text-5xl font-black tracking-tight">
          Ventures aligned to the worlds they work within.
        </h1>
        <p className="muted-copy mt-6 max-w-3xl text-lg leading-8">
          Awetree separates the portfolio by Built World and Knowledge Work, while leaving room for
          ventures like Xynyx that sit between physical infrastructure and intelligent operating
          systems.
        </p>
        <section className="mt-12 border-y border-line py-8">
          <p className="eyebrow mb-6">Maturity model</p>
          <div className="grid gap-4 md:grid-cols-4">
            {ventureMaturity.map((item) => (
              <div className="bg-cloud p-5" key={item.stage}>
                <h2 className="text-lg font-black uppercase tracking-[0.12em]">{item.stage}</h2>
                <p className="muted-copy mt-3 text-sm leading-6">{item.meaning}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-12 grid items-start gap-10">
          {ventureWorlds.map((world) => (
            <section className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[0.45fr_1fr]" key={world.id}>
              <div>
                <p className="eyebrow mb-4">{world.eyebrow}</p>
                <h2 className="text-3xl font-black tracking-tight">{world.title}</h2>
                <p className="muted-copy mt-4 leading-7">{world.body}</p>
              </div>
              <div className="grid items-stretch gap-6 md:grid-cols-2">
                {ventures
                  .filter((venture) => venture.world === world.id)
                  .map((venture) => (
                    <article className="surface flex h-full flex-col p-7" key={venture.name}>
                      <div className="min-h-[8.5rem]">
                        <p className="mb-3 inline-flex border border-line bg-cloud px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-copper">
                          {venture.maturity}
                        </p>
                        <h3 className="text-3xl font-black">{venture.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-slate/65">
                          {venture.status}
                        </p>
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
                          <p className="mt-1 text-sm font-semibold text-slate/65">
                            {venture.domain}
                          </p>
                        )}
                      </div>
                      <p className="muted-copy leading-7">{venture.focus}</p>
                      <p className="mt-auto pt-5 font-semibold text-ink">{venture.audience}</p>
                    </article>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
