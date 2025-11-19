import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Dome X
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Air Support Fitness Center</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-5 text-lg text-blue-200"
            >
              A 180,000 sqft family destination for track & field, soccer, basketball, tennis, pickleball, lacrosse, batting cages, golf driving range, volleyball, and a full 12,000 sqft gym. Plus classes, concessions, and senior programs — all under one climate-controlled dome.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow">
                View Pricing
              </a>
              <a href="#facilities" className="inline-flex items-center px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10">
                Explore Facilities
              </a>
            </div>

            <p className="mt-6 text-sm text-blue-200/80">Open daily 6:00 AM – 10:00 PM • 701 Norwich-Westerly Rd, North Stonington, CT</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop"
                alt="Interior of a modern sports dome"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[
                "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1546519638-5f48f2a56a8b?q=80&w=800&auto=format&fit=crop",
              ].map((src, i) => (
                <img key={i} src={src} alt="Dome X facility" className="h-24 w-full object-cover rounded-lg border border-white/10" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
