import { Dumbbell, Football, Basketball, Volleyball, Tennis, Goal, Activity, UtensilsCrossed, MountainSnow, Sunset, GolfBall } from "lucide-react";

const items = [
  { icon: Activity, title: "400m Track & Field", desc: "Competition-grade 400m surface with lanes and field event zones." },
  { icon: Football, title: "Full Soccer Field", desc: "Regulation turf field, divisible into quarters for training." },
  { icon: Goal, title: "Box Lacrosse", desc: "Indoor box setup with boards and protective netting." },
  { icon: MountainSnow, title: "Batting Cages", desc: "Multiple lanes with pitching machines and safety screens." },
  { icon: Tennis, title: "Tennis & Pickleball", desc: "Cushioned courts with LED lighting for day or night play." },
  { icon: Basketball, title: "Basketball Courts", desc: "High-performance hardwood courts for games and practice." },
  { icon: Dumbbell, title: "12,000 sqft Gym", desc: "Strength, cardio, and functional training zones." },
  { icon: Sunset, title: "Senior Program (2,500 sqft)", desc: "Dedicated wellness, mobility, and social space." },
  { icon: GolfBall, title: "Driving Range (12 bays)", desc: "Tee off with large-bucket options year-round." },
  { icon: Volleyball, title: "Volleyball Courts", desc: "Tournament-ready courts with premium nets." },
  { icon: UtensilsCrossed, title: "Concessions (1,500 sqft)", desc: "Quick bites, smoothies, and refreshments." },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything under one dome</h2>
        <p className="mt-3 text-blue-200 max-w-2xl">A complete family fitness destination across 180,000 sqft of climate-controlled space.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-white/10 bg-slate-800/60 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow group-hover:scale-105 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-blue-200/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
