export const dynamic = 'force-dynamic';

export const dynamic = 'force-static';

export default function LandingPage() {
  // Feature flags: 'coming-soon' | true | false
  const features = { bowKits: 'coming-soon', teamInspired: 'coming-soon' };

  // Demo data (swap with your real photos later)
  const featured = [
    {
      id: 'grapevine-fall-berries',
      title: 'Grapevine Maple & Berry (Fall)',
      price: 125,
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
      badge: 'Fall',
    },
    {
      id: 'pine-cones-bells',
      title: 'Winter Pine with Cones & Bells',
      price: 98,
      img: 'https://images.unsplash.com/photo-1608767549896-ec8b7c53a8e7?q=80&w=1600&auto=format&fit=crop',
      badge: 'Winter',
    },
    {
      id: 'eucalyptus-classic',
      title: 'Classic Eucalyptus Everyday',
      price: 110,
      img: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=1600&auto=format&fit=crop',
      badge: 'Everyday',
    },
    {
      id: 'lambs-ear-ring',
      title: 'Lamb’s‑Ear Candle Ring',
      price: 89,
      img: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1600&auto=format&fit=crop',
      badge: 'Centerpiece',
    },
  ];

  const collections = [
    { name: 'Fall', img: featured[0].img, href: '#' },
    { name: 'Winter', img: featured[1].img, href: '#' },
    { name: 'Everyday Greens', img: featured[2].img, href: '#' },
    { name: 'Centerpieces & Candle Rings', img: featured[3].img, href: '#' },
  ];

  function Img({ src, alt, className }) {
    return <img src={src} alt={alt} className={className} loading="eager" decoding="async" />;
  }

  function ComingSoon({ title, body, interestTag, bg, border, button, buttonHover, textColor }) {
    return (
      <section className="py-12" style={{ background: bg }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow border" style={{ borderColor: border }}>
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-6 md:p-10" style={{ color: textColor }}>
                <h3 className="font-serif text-2xl md:text-3xl mb-3">{title}</h3>
                <p className="mb-6 text-black/70 md:max-w-[48ch]">{body}</p>

                {/* waitlist form */}
                <form
                  onSubmit={(e) => { e.preventDefault(); alert(`Thanks! We’ll let you know when it’s ready.`); }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="flex-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none"
                    aria-label={`Email for ${interestTag} waitlist`}
                  />
                  <button
                    className="px-5 py-3 rounded-xl text-white transition-colors"
                    style={{ background: button }}
                    onMouseOver={(e) => (e.currentTarget.style.background = buttonHover)}
                    onMouseOut={(e) => (e.currentTarget.style.background = button)}
                  >
                    Join Waitlist
                  </button>
                </form>

                <p className="text-xs text-black/50 mt-2">
                  We’ll email you when it launches. (Tag: {interestTag})
                </p>
              </div>

              <div className="md:col-span-2 bg-white/60 p-6 md:p-10 flex items-center justify-center">
                <div className="aspect-square w-full max-w-sm rounded-2xl bg-white border border-black/10 flex items-center justify-center">
                  <div className="text-center text-black/40">
                    <div className="text-6xl mb-2">🧰</div>
                    <div className="text-sm">Placeholder mock — imagery coming soon</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--charcoal)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--cream)]/90 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--evergreen)]" />
            <div className="leading-tight">
              <h1 className="font-serif text-xl">Sweet Tea & Saturdays</h1>
              <p className="text-xs text-black/60">Handcrafted wreaths & farmhouse florals</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-[var(--evergreen)]" href="#shop">Shop</a>
            <a className="hover:text-[var(--evergreen)]" href="#about">About</a>
            <a className="hover:text-[var(--evergreen)]" href="#email">Newsletter</a>
            <a className="hover:text-[var(--evergreen)]" href="#contact">Contact</a>
          </nav>
          <button className="px-4 py-2 rounded-xl bg-[var(--harvest)] hover:bg-[var(--cinnamon)] text-white text-sm shadow">
            View Cart (0)
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Welcome home, y'all.</h2>
            <p className="text-lg text-black/70 mb-6">
              Seasonal wreaths, everyday greens, and cozy farmhouse florals—crafted to last by Alice in Raleigh, NC.
            </p>
            <div className="flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-xl bg-[var(--evergreen)] text-white hover:opacity-90 shadow">Shop featured</a>
              <a href="#collections" className="px-5 py-3 rounded-xl border border-black/10 hover:border-black/20">Browse collections</a>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow relative">
            <Img src={featured[0].img} alt="Featured wreath" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="bg-white/60 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-serif text-2xl">Shop by collection</h3>
            <a href="#shop" className="text-sm underline">View all</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((c) => (
              <a key={c.name} href={c.href} className="group rounded-2xl overflow-hidden shadow bg-white">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-eucalyptus/60 text-black/70">Explore</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-serif text-2xl mb-6">Featured wreaths</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <div key={p.id} className="rounded-2xl overflow-hidden bg-white shadow">
                <div className="relative aspect-[4/5]">
                  <Img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <span className="absolute left-3 top-3 text-xs bg-[var(--cream)]/90 px-2 py-1 rounded-full border border-black/10">{p.badge}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-medium leading-snug mb-1">{p.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">${p.price}</span>
                    <button className="text-sm px-3 py-2 rounded-lg bg-[var(--harvest)] hover:bg-[var(--cinnamon)] text-white">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
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
              <Img src={featured[2].img} alt="About Sweet Tea & Saturdays" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section id="email" className="py-12">
        <div className="max-w-md mx-auto text-center px-4">
          <h3 className="font-serif text-2xl mb-3">Join our list</h3>
          <p className="text-black/70 mb-6">Be the first to see seasonal drops, restocks, and promos.</p>

          <form
            onSubmit={(e) => { e.preventDefault(); alert(`Thanks! We’ll add you to the list.`); }}
            className="flex gap-2"
          >
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-xl border border-black/10 focus:outline-none"
            />
            <button className="px-5 py-3 rounded-xl bg-[var(--evergreen)] text-white hover:opacity-90">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-black/50 mt-2">
            We'll send updates to sweetteaandsaturdays@gmail.com via our list provider once connected.
          </p>
        </div>
      </section>

      {/* Coming Soon: Bow Kits */}
      {features.bowKits && (
        <ComingSoon
          title="Coming Soon: Monthly Bow Kit Club"
          body="Monthly curated ribbon kits with everything you need to create beautiful farmhouse bows. Fresh palettes each month. Cancel anytime."
          interestTag="bow_kits"
          bg="#F7F3EC"
          border="#C99B55"
          button="#C99B55"
          buttonHover="#B7562C"
          textColor="#2A2A2A"
        />
      )}

      {/* Coming Soon: Team-Inspired */}
      {features.teamInspired && (
        <ComingSoon
          title="Coming Soon: Team‑Inspired Wreath Collection"
          body="Game‑day colorways for spirited front‑door style—without official logos. Join the waitlist to be notified at launch."
          interestTag="team"
          bg="#BFC9BB"
          border="#4F6B4F"
          button="#4F6B4F"
          buttonHover="#C99B55"
          textColor="#2A2A2A"
        />
      )}

      {/* Footer */}
      <footer id="contact" className="bg-[var(--charcoal)] text-white">
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
