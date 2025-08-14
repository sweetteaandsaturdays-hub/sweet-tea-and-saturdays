// Show the page at request time (avoids static worker timeouts)
export const dynamic = 'force-dynamic';

// Minimal home page that ALWAYS renders (no imports, no next/image, no data fetches)
export default function Home() {
  // Feature flags (we'll re-enable real sections later)
  const SHOW_COLLECTIONS = true;
  const SHOW_FEATURED = true;
  const SHOW_STORY = true;
  const SHOW_EMAIL = true;

  // Demo images (swap to your photos later)
  const imgs = {
    hero: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
    fall: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
    winter: 'https://images.unsplash.com/photo-1608767549896-ec8b7c53a8e7?q=80&w=1600&auto=format&fit=crop',
    everyday: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=1600&auto=format&fit=crop',
    about: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1600&auto=format&fit=crop',
  };

  // A tiny inline “section” renderer that catches rendering errors and shows a friendly box instead of a white screen
  const Section = ({ children }) => {
    try {
      return children;
    } catch (e) {
      return (
        <div className="max-w-6xl mx-auto px-4 my-6">
          <div className="p-4 rounded-xl border border-red-300 bg-red-50 text-red-800">
            Something went wrong rendering this section. The rest of the page is fine.
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--cream,#F7F3EC)] text-[var(--charcoal,#2A2A2A)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--cream,#F7F3EC)]/90 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--evergreen,#4F6B4F)]" />
            <div className="leading-tight">
              <h1 className="font-serif text-xl">Sweet Tea & Saturdays</h1>
              <p className="text-xs text-black/60">Handcrafted wreaths & farmhouse florals</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-[var(--evergreen,#4F6B4F)]" href="#shop">Shop</a>
            <a className="hover:text-[var(--evergreen,#4F6B4F)]" href="#about">About</a>
            <a className="hover:text-[var(--evergreen,#4F6B4F)]" href="#email">Newsletter</a>
            <a className="hover:text-[var(--evergreen,#4F6B4F)]" href="#contact">Contact</a>
          </nav>
          <button className="px-4 py-2 rounded-xl bg-[var(--harvest,#C99B55)] hover:bg-[var(--cinnamon,#B7562C)] text-white text-sm shadow">
            View Cart (0)
          </button>
        </div>
      </header>

      {/* Hero (always renders) */}
      <section className="relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Welcome home, y'all.</h2>
            <p className="text-lg text-black/70 mb-6">
              Seasonal wreaths, everyday greens, and cozy farmhouse florals—crafted to last by Alice in Raleigh, NC.
            </p>
            <div className="flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-xl bg-[var(--evergreen,#4F6B4F)] text-white hover:opacity-90 shadow">Shop featured</a>
              <a href="#collections" className="px-5 py-3 rounded-xl border border-black/10 hover:border-black/20">Browse collections</a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow relative">
            <img src={imgs.hero} alt="Featured wreath" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Collections */}
      {SHOW_COLLECTIONS && (
        <Section>
          <section id="collections" className="bg-white/60 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-end justify-between mb-6">
                <h3 className="font-serif text-2xl">Shop by collection</h3>
                <a href="#shop" className="text-sm underline">View all</a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Fall', img: imgs.fall },
                  { name: 'Winter', img: imgs.winter },
                  { name: 'Everyday Greens', img: imgs.everyday },
                ].map((c) => (
                  <a key={c.name} href="#shop" className="group rounded-2xl overflow-hidden shadow bg-white">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={c.img} alt={c.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <span className="font-medium">{c.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-[var(--eucalyptus,#BFC9BB)]/60 text-black/70">Explore</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </Section>
      )}

      {/* Featured */}
      {SHOW_FEATURED && (
        <Section>
          <section id="shop" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h3 className="font-serif text-2xl mb-6">Featured wreaths</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="rounded-2xl overflow-hidden bg-white shadow">
                    <div className="relative aspect-[4/5]">
                      <img src={imgs.everyday} alt="Wreath" className="object-cover w-full h-full" />
                      <span className="absolute left-3 top-3 text-xs bg-[var(--cream,#F7F3EC)]/90 px-2 py-1 rounded-full border border-black/10">
                        Demo
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium leading-snug mb-1">Classic Eucalyptus Everyday</h4>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">$110</span>
                        <button className="text-sm px-3 py-2 rounded-lg bg-[var(--harvest,#C99B55)] hover:bg-[var(--cinnamon,#B7562C)] text-white">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Section>
      )}

      {/* Story */}
      {SHOW_STORY && (
        <Section>
          <section id="about" className="bg-white/70 py-12">
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl mb-3">Our Story</h3>
                <p className="text-black/75 leading-relaxed">
                  Sweet Tea & Saturdays began when Alice—a creator and Christian mom of two—started crafting wreaths for her own modern farmhouse.
                  Friends asked, orders followed, and a small business was born. Today we design faux‑floral pieces that last: lush grapevine wreaths,
                  evergreen rings, lamb’s‑ear candle rings, and seasonal centerpieces—made to welcome people home.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow relative">
                  <img src={imgs.about} alt="About" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </section>
        </Section>
      )}

      {/* Email capture */}
      {SHOW_EMAIL && (
        <Section>
          <section id="email" className="py-12">
            <div className="max-w-md mx-auto text-center px-4">
              <h3 className="font-serif text-2xl mb-3">Join our list</h3>
              <p className="text-black/70 mb-6">Be the first to see seasonal drops, restocks, and promos.</p>
              <form
                onSubmit={(e)=>{ e.preventDefault(); alert(`Thanks! We’ll add you to the list.`); }}
                className="flex gap-2"
              >
                <input required type="email" placeholder="you@example.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none" />
                <button className="px-5 py-3 rounded-xl bg-[var(--evergreen,#4F6B4F)] text-white hover:opacity-90">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-black/50 mt-2">
                We’ll email from sweetteaandsaturdays@gmail.com once connected.
              </p>
            </div>
          </section>
        </Section>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-[var(--charcoal,#2A2A2A)] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-lg mb-2">Sweet Tea & Saturdays</h4>
            <p className="text-white/70 text-sm">Handcrafted wreaths & farmhouse florals.</p>
          </div>
          <div>
            <h5 className="font-medium mb-2">Shop</h5>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="#collections" className="hover:underline">Collections</a></li>
              <li><a href="#shop" className="hover:underline">Featured</a></li>
              <li><a href="#" className="hover:underline">Gift cards (soon)</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Contact</h5>
            <p className="text-white/80 text-sm">sweetteaandsaturdays@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-white/50 text-xs py-4 border-t border-white/10">
          © {new Date().getFullYear()} Sweet Tea & Saturdays. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
