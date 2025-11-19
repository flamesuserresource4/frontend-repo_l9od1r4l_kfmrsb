import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Overview", href: "#home" },
    { label: "Facilities", href: "#facilities" },
    { label: "Pricing", href: "#pricing" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit Us", href: "#visit" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/20" />
          <span className="text-white font-semibold tracking-tight">Dome X</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-300 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a href="#pricing" className="ml-4 inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow">
            Book Time
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-4 space-y-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="block text-slate-200 py-2" onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium" onClick={() => setOpen(false)}>
              Book Time
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
