import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515524738708-327f6b0037a7?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521417531039-98f0a84bd8a3?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571731956672-acb70f1a6b9a?q=80&w=1600&auto=format&fit=crop",
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Inside the air structure</h2>
            <p className="mt-3 text-blue-200 max-w-2xl">Swipe through photos of the dome, courts, fields, and training spaces. All images are representative visuals.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {images.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i+1}`} className={`w-2.5 h-2.5 rounded-full ${i===active ? 'bg-cyan-400' : 'bg-white/30'}`} onClick={() => setActive(i)} />
            ))}
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
            <img src={images[active]} alt="Dome X" className="w-full h-full object-cover" />
          </div>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {images.map((src, i) => (
              <button key={i} onClick={() => setActive(i)} className={`group relative rounded-lg overflow-hidden border ${i===active ? 'border-cyan-400' : 'border-white/10'}`}>
                <img src={src} alt="thumb" className="h-20 w-full object-cover" />
                <span className={`absolute inset-0 ${i===active ? 'bg-cyan-400/0' : 'bg-black/20'} group-hover:bg-black/0 transition-colors`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
