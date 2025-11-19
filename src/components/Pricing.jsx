const pricing = [
  { name: "Track & Field (per hour)", price: "$50–$125" },
  { name: "Basketball Court (per court)", price: "$80–$125" },
  { name: "Volleyball Court (per court)", price: "$80–$125" },
  { name: "Full Soccer Field (per hour)", price: "$600–$800" },
  { name: "Quarter Soccer Field (per hour)", price: "$150–$200" },
  { name: "Batting Cage (per lane)", price: "$40–$60" },
  { name: "Driving Range (large bucket)", price: "$10–$15" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple pricing for every sport</h2>
            <p className="mt-3 text-blue-200 max-w-xl">Reserve courts, fields, lanes, or classes by the hour. Group and membership packages available on request.</p>

            <div className="mt-8 space-y-3">
              {pricing.map((p) => (
                <div key={p.name} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-slate-800/60">
                  <span className="text-white">{p.name}</span>
                  <span className="text-cyan-300 font-semibold">{p.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6">
            <h3 className="text-white font-semibold text-xl">Quick booking</h3>
            <form className="mt-4 grid gap-4">
              <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400" placeholder="Your name" />
              <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400" placeholder="Email or phone" />
              <select className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white">
                {pricing.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
              </select>
              <input type="datetime-local" className="px-4 py-3 rounded-lg bg-slate-900/60 border border-white/10 text-white" />
              <button type="button" onClick={() => alert('Thanks! Our team will reach out to confirm your booking.')} className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold">Request to Book</button>
            </form>
            <p className="mt-3 text-xs text-blue-200/80">Submitting doesn’t charge you. We’ll confirm availability first.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
