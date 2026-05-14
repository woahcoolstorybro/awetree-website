import type { Metadata } from 'next';
import { inquiryRoutes } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Route public-sector, mechanical, construction, healthcare-adjacent, AI, and venture inquiries through Awetree.',
};

export default function ContactPage() {
  return (
    <div className="section-shell">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow mb-4">Contact routing</p>
          <h1 className="text-5xl font-black tracking-tight">Start with the parent.</h1>
          <p className="muted-copy mt-6 text-lg leading-8">
            Awetree is the intake point when the opportunity is real, but the right lane is still
            forming. Use this front door for bids, service opportunities, construction work,
            healthcare-adjacent support, AI projects, or partnership conversations that need to be
            shaped before they are assigned.
          </p>
          <div className="mt-8 surface p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-copper">Email</p>
            <a className="mt-2 block text-2xl font-black text-ink" href="mailto:sasha@awetree.ca">
              sasha@awetree.ca
            </a>
          </div>
        </div>
        <div className="surface p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-black">Inquiry lanes</h2>
          <div className="grid gap-3">
            {inquiryRoutes.map((route) => (
              <div className="border border-line bg-cloud p-4" key={route}>
                <p className="font-semibold text-ink">{route}</p>
              </div>
            ))}
          </div>
          <p className="muted-copy mt-8 text-sm leading-6">
            Near-term implementation note: this can become a structured intake form with routing
            rules, CRM capture, and later team handoff for Awetree, Dew Point Mechanical, AOS,
            Luso Works, Xynyx, and Hononoh.
          </p>
        </div>
      </div>
    </div>
  );
}
