import { Clock, MapPin, Phone } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Visit Dome X</h2>
            <ul className="mt-6 space-y-4 text-blue-200">
              <li className="flex items-start gap-3"><Clock className="mt-1 text-cyan-300" /><span><span className="text-white font-medium">Hours:</span> 6:00 AM – 10:00 PM daily</span></li>
              <li className="flex items-start gap-3"><MapPin className="mt-1 text-cyan-300" /><span><span className="text-white font-medium">Address:</span> 701 Norwich-Westerly Rd, North Stonington, CT</span></li>
              <li className="flex items-start gap-3"><Phone className="mt-1 text-cyan-300" /><span><span className="text-white font-medium">Contact:</span> (555) 123-4567 • info@domex.com</span></li>
            </ul>

            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-slate-800/60">
              <p className="text-blue-200 text-sm">Yoga and Pilates classes run daily. Check our schedule on arrival or call ahead to reserve a spot.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Dome X Map"
              src="https://www.google.com/maps?q=701%20Norwich-Westerly%20Road,%20North%20Stonington,%20CT&output=embed"
              className="w-full h-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
