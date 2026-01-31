export default function Home() {
  const phone = "(305) 555-0147"; // placeholder number (replace anytime)
  const email = "sales@unionkomestrading.com"; // placeholder (replace anytime)

  return (
    <main className="min-h-screen">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.20),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.95))]" />
      </div>

      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <span className="text-sm font-semibold tracking-wide">UK</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide">
              UNION KOMES TRADING L.L.C.
            </p>
            <p className="text-xs text-zinc-400">Miami, FL</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a className="hover:text-white" href="#services">
            Services
          </a>
          <a className="hover:text-white" href="#about">
            About
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
          <a
            className="rounded-xl bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 hover:bg-white/15"
            href="#contact"
          >
            Get a Quote
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8 md:pb-16 md:pt-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Reliable sourcing • Fast communication • Clear terms
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Modern trading & sourcing,
              <span className="text-indigo-300"> built for speed</span>.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
              UNION KOMES TRADING L.L.C. helps clients move products efficiently
              with dependable sourcing, transparent updates, and logistics-first
              execution.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                View Services
              </a>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold text-white">Phone</p>
                <p className="mt-1 text-zinc-300">{phone}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold text-white">Email</p>
                <p className="mt-1 text-zinc-300">{email}</p>
              </div>
            </div>
          </div>

          {/* Hero card */}
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/10 p-6 ring-1 ring-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                What you get
              </p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />
                  Sourcing & supplier coordination with clear timelines
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  Negotiation support and documentation-ready terms
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-zinc-200" />
                  Logistics-first planning to reduce delays & surprises
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["Fast", "Response"],
                  ["Clear", "Updates"],
                  ["Trusted", "Execution"],
                ].map(([a, b]) => (
                  <div
                    key={a}
                    className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10"
                  >
                    <p className="text-sm font-semibold text-white">{a}</p>
                    <p className="text-xs text-zinc-300">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-zinc-400">
              Note: Replace placeholders (phone/email) any time. No full address
              shown — currently “Miami, FL” only.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Services
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              A focused set of services designed to keep deals moving and
              communication clean.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Product Sourcing",
              desc: "Identify suppliers, validate availability, and coordinate procurement.",
            },
            {
              title: "Trade Facilitation",
              desc: "Support documentation-ready terms, coordination, and timeline alignment.",
            },
            {
              title: "Logistics Support",
              desc: "Planning-first approach to reduce delays and simplify delivery steps.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/7"
            >
              <p className="text-base font-semibold text-white">{card.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {card.desc}
              </p>
              <div className="mt-5 h-px w-full bg-white/10" />
              <p className="mt-4 text-xs text-zinc-400">
                Get a quote in under 24 hours (typical).
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
            UNION KOMES TRADING L.L.C. is based in Miami, Florida. We focus on
            reliable execution: fast communication, clean terms, and a
            logistics-first mindset so clients can move confidently and avoid
            unnecessary friction.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Speed", "Short response times & quick turnarounds."],
              ["Clarity", "Straight answers, simple next steps."],
              ["Reliability", "Process-driven coordination and updates."],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <p className="text-sm font-semibold text-white">{k}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Send a quick message and we’ll respond with next steps.
            </p>

            <div className="mt-6 space-y-3 text-sm text-zinc-200">
              <p>
                <span className="text-zinc-400">Location:</span> Miami, FL
              </p>
              <p>
                <span className="text-zinc-400">Phone:</span> {phone}
              </p>
              <p>
                <span className="text-zinc-400">Email:</span> {email}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
                href={`mailto:${email}?subject=Quote%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
              >
                Email Us
              </a>
              <a
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                href="#services"
              >
                See Services
              </a>
            </div>
          </div>

          <form
            className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-sm font-semibold text-white">
              Quick inquiry form
            </p>
            <p className="mt-2 text-xs text-zinc-400">
              (This is a front-end form only for now. We can wire it to email or
              a database later.)
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="text-xs text-zinc-300">Name</span>
                <input
                  className="mt-2 w-full rounded-2xl bg-zinc-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-xs text-zinc-300">Email</span>
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl bg-zinc-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                  placeholder="you@email.com"
                />
              </label>

              <label className="block">
                <span className="text-xs text-zinc-300">Message</span>
                <textarea
                  className="mt-2 min-h-[120px] w-full rounded-2xl bg-zinc-950/60 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                  placeholder="What are you looking to source / trade?"
                />
              </label>

              <button
                className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
                type="submit"
              >
                Submit (placeholder)
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} UNION KOMES TRADING L.L.C. • Miami, FL
          </p>
          <div className="flex gap-5 text-xs text-zinc-400">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
