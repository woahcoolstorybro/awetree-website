import type { Metadata } from 'next';
import { ventures } from '@/lib/site-data';

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
          Focused brands with a shared operating backbone.
        </h1>
        <p className="muted-copy mt-6 max-w-3xl text-lg leading-8">
          Awetree lets each venture develop its own buyer language while the parent preserves the
          shared operating memory: offers, proposals, documentation, intake, and execution patterns
          that should not be rebuilt from scratch every time.
        </p>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {ventures.map((venture) => (
            <article className="surface flex h-full flex-col p-7" key={venture.name}>
              <div className="min-h-[8.5rem]">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-copper">
                  {venture.status}
                </p>
                <h2 className="text-3xl font-black">{venture.name}</h2>
                <p className="mt-1 text-sm font-semibold text-slate/65">{venture.domain}</p>
              </div>
              <p className="muted-copy leading-7">{venture.focus}</p>
              <p className="mt-auto pt-5 font-semibold text-ink">{venture.audience}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
