import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Facilities from './components/Facilities'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Visit from './components/Visit'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <Pricing />
        <Gallery />
        <Visit />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/80">© {new Date().getFullYear()} Dome X. All rights reserved.</p>
          <p className="text-blue-200/60 text-sm">Made with love for the North Stonington community.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
