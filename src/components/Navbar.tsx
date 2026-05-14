import { AwetreeMark } from '@/components/AwetreeMark';

const navItems = [
  { href: '/#ventures', label: 'Ventures' },
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#public-sector', label: 'Public Sector' },
  { href: '/#operating-system', label: 'Operating System' },
  { href: '/contact/', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cloud/90 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-3 text-ink" aria-label="Awetree home">
          <AwetreeMark className="h-10 w-10 shrink-0" />
          <span className="leading-none">
            <span className="block text-xl font-black tracking-[0.14em]">AWETREE</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate/70">
              Operating Studio
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
