const phone = "(305) 555-0147"; // placeholder
const email = "sales@unionkomestrading.com"; // placeholder

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.bg} />

      <header style={styles.header}>
        <div style={styles.brand}>
          <div style={styles.logo}>UK</div>
          <div>
            <div style={styles.brandName}>UNION KOMES TRADING L.L.C.</div>
            <div style={styles.brandSub}>Miami, FL</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a style={styles.navLink} href="#services">Services</a>
          <a style={styles.navLink} href="#about">About</a>
          <a style={styles.navLink} href="#contact">Contact</a>
          <a style={styles.navCta} href="#contact">Get a Quote</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.pill}>
              <span style={styles.pillDot} />
              Reliable sourcing • Fast communication • Clear terms
            </div>

            <h1 style={styles.h1}>
              Modern trading & sourcing, <span style={styles.h1Accent}>built for speed</span>.
            </h1>

            <p style={styles.lead}>
              UNION KOMES TRADING L.L.C. helps clients move products efficiently
              with dependable sourcing, transparent updates, and logistics-first execution.
            </p>

            <div style={styles.heroBtns}>
              <a href="#contact" style={styles.primaryBtn}>Request a Quote</a>
              <a href="#services" style={styles.secondaryBtn}>View Services</a>
            </div>

            <div style={styles.infoGrid}>
              <div style={styles.infoCard}>
                <div style={styles.infoTitle}>Phone</div>
                <div style={styles.infoText}>{phone}</div>
              </div>
              <div style={styles.infoCard}>
                <div style={styles.infoTitle}>Email</div>
                <div style={styles.infoText}>{email}</div>
              </div>
            </div>
          </div>

          <div style={styles.sideCard}>
            <div style={styles.sideInner}>
              <div style={styles.kicker}>What you get</div>
              <ul style={styles.ul}>
                <li style={styles.li}><span style={styles.bulletA} /> Sourcing & supplier coordination with clear timelines</li>
                <li style={styles.li}><span style={styles.bulletB} /> Negotiation support and documentation-ready terms</li>
                <li style={styles.li}><span style={styles.bulletC} /> Logistics-first planning to reduce delays & surprises</li>
              </ul>

              <div style={styles.badges}>
                <div style={styles.badge}><div style={styles.badgeTop}>Fast</div><div style={styles.badgeSub}>Response</div></div>
                <div style={styles.badge}><div style={styles.badgeTop}>Clear</div><div style={styles.badgeSub}>Updates</div></div>
                <div style={styles.badge}><div style={styles.badgeTop}>Trusted</div><div style={styles.badgeSub}>Execution</div></div>
              </div>
            </div>

            <div style={styles.note}>
              Note: placeholders (phone/email) can be replaced anytime. Location shown as “Miami, FL” only.
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.sectionHead}>
          <h2 style={styles.h2}>Services</h2>
          <p style={styles.muted}>
            A focused set of services designed to keep deals moving and communication clean.
          </p>
        </div>

        <div style={styles.cards}>
          {[
            { title: "Product Sourcing", desc: "Identify suppliers, validate availability, and coordinate procurement." },
            { title: "Trade Facilitation", desc: "Support documentation-ready terms, coordination, and timeline alignment." },
            { title: "Logistics Support", desc: "Planning-first approach to reduce delays and simplify delivery steps." },
          ].map((c) => (
            <div key={c.title} style={styles.card}>
              <div style={styles.cardTitle}>{c.title}</div>
              <div style={styles.cardDesc}>{c.desc}</div>
              <div style={styles.hr} />
              <div style={styles.cardFoot}>Get a quote in under 24 hours (typical).</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.panel}>
          <h2 style={styles.h2}>About</h2>
          <p style={styles.copy}>
            UNION KOMES TRADING L.L.C. is based in Miami, Florida. We focus on reliable execution:
            fast communication, clean terms, and a logistics-first mindset so clients can move confidently
            and avoid unnecessary friction.
          </p>

          <div style={styles.triple}>
            {[
              ["Speed", "Short response times & quick turnarounds."],
              ["Clarity", "Straight answers, simple next steps."],
              ["Reliability", "Process-driven coordination and updates."],
            ].map(([k, v]) => (
              <div key={k} style={styles.mini}>
                <div style={styles.miniTitle}>{k}</div>
                <div style={styles.miniDesc}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <div style={styles.contactGrid}>
          <div style={styles.panel}>
            <h2 style={styles.h2}>Contact</h2>
            <p style={styles.muted}>Send a quick message and we’ll respond with next steps.</p>

            <div style={styles.contactLine}><span style={styles.label}>Location:</span> Miami, FL</div>
            <div style={styles.contactLine}><span style={styles.label}>Phone:</span> {phone}</div>
            <div style={styles.contactLine}><span style={styles.label}>Email:</span> {email}</div>

            <div style={styles.heroBtns}>
              <a
                style={styles.primaryBtn}
                href={`mailto:${email}?subject=Quote%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
              >
                Email Us
              </a>
              <a style={styles.secondaryBtn} href="#services">See Services</a>
            </div>
          </div>

          <form style={styles.panel} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.formTitle}>Quick inquiry form</div>
            <div style={styles.formNote}>(Front-end only for now — we can wire it to email later.)</div>

            <div style={styles.field}>
              <div style={styles.fieldLabel}>Name</div>
              <input style={styles.input} placeholder="Your name" />
            </div>

            <div style={styles.field}>
              <div style={styles.fieldLabel}>Email</div>
              <input style={styles.input} type="email" placeholder="you@email.com" />
            </div>

            <div style={styles.field}>
              <div style={styles.fieldLabel}>Message</div>
              <textarea style={{...styles.input, minHeight: 120}} placeholder="What are you looking to source / trade?" />
            </div>

            <button style={styles.primaryBtn} type="submit">Submit (placeholder)</button>
          </form>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerText}>
            © {new Date().getFullYear()} UNION KOMES TRADING L.L.C. • Miami, FL
          </div>
          <div style={styles.footerLinks}>
            <a style={styles.footerLink} href="#services">Services</a>
            <a style={styles.footerLink} href="#about">About</a>
            <a style={styles.footerLink} href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: { minHeight: "100vh", position: "relative" },
  bg: {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    background:
      "radial-gradient(ellipse at top, rgba(99,102,241,0.22), transparent 55%), radial-gradient(ellipse at bottom, rgba(16,185,129,0.18), transparent 55%), linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.95))",
  },

  header: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "24px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 16,
    display: "grid",
    placeItems: "center",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontWeight: 700,
    letterSpacing: 0.5,
    fontSize: 12,
  },
  brandName: { fontSize: 13, fontWeight: 700, letterSpacing: 0.4 },
  brandSub: { fontSize: 12, color: "rgba(244,244,245,0.65)" },

  nav: { display: "none", gap: 18, alignItems: "center" },
  navLink: { color: "rgba(244,244,245,0.75)", textDecoration: "none", fontSize: 13 },
  navCta: {
    textDecoration: "none",
    fontSize: 13,
    color: "#fff",
    padding: "10px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  hero: { maxWidth: 1100, margin: "0 auto", padding: "24px 20px 48px" },
  heroGrid: { display: "grid", gap: 18, gridTemplateColumns: "1fr" },

  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    fontSize: 12,
    color: "rgba(244,244,245,0.9)",
  },
  pillDot: { width: 8, height: 8, borderRadius: 999, background: "rgba(52,211,153,1)" },

  h1: { marginTop: 14, marginBottom: 0, fontSize: 44, lineHeight: 1.05, letterSpacing: -0.8 },
  h1Accent: { color: "rgba(165,180,252,0.95)" },
  lead: { marginTop: 14, maxWidth: 560, fontSize: 16, color: "rgba(244,244,245,0.78)" },

  heroBtns: { marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" },
  primaryBtn: {
    appearance: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 16,
    background: "#fff",
    color: "#09090b",
    fontWeight: 700,
    fontSize: 13,
  },
  secondaryBtn: {
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 16px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    fontWeight: 700,
    fontSize: 13,
  },

  infoGrid: { marginTop: 18, display: "grid", gridTemplateColumns: "1fr", gap: 10 },
  infoCard: {
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 14,
  },
  infoTitle: { fontSize: 12, fontWeight: 700, color: "#fff" },
  infoText: { marginTop: 4, fontSize: 13, color: "rgba(244,244,245,0.78)" },

  sideCard: {
    borderRadius: 26,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 16,
  },
  sideInner: {
    borderRadius: 20,
    padding: 18,
    background:
      "linear-gradient(135deg, rgba(99,102,241,0.22), rgba(16,185,129,0.10))",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  kicker: { fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: "rgba(244,244,245,0.9)", fontWeight: 800 },
  ul: { margin: "14px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 10 },
  li: { display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "rgba(244,244,245,0.85)", lineHeight: 1.4 },
  bulletA: { width: 8, height: 8, marginTop: 6, borderRadius: 999, background: "rgba(165,180,252,0.95)" },
  bulletB: { width: 8, height: 8, marginTop: 6, borderRadius: 999, background: "rgba(110,231,183,0.95)" },
  bulletC: { width: 8, height: 8, marginTop: 6, borderRadius: 999, background: "rgba(244,244,245,0.9)" },

  badges: { marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 },
  badge: {
    borderRadius: 18,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 12,
    textAlign: "center",
  },
  badgeTop: { fontSize: 13, fontWeight: 800 },
  badgeSub: { fontSize: 11, color: "rgba(244,244,245,0.7)" },

  note: { marginTop: 10, fontSize: 11, color: "rgba(244,244,245,0.55)" },

  section: { maxWidth: 1100, margin: "0 auto", padding: "40px 20px" },
  sectionHead: { maxWidth: 680 },
  h2: { margin: 0, fontSize: 26, letterSpacing: -0.4 },
  muted: { marginTop: 10, marginBottom: 0, fontSize: 13, color: "rgba(244,244,245,0.62)", lineHeight: 1.5 },

  cards: { marginTop: 18, display: "grid", gridTemplateColumns: "1fr", gap: 12 },
  card: {
    borderRadius: 26,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 18,
  },
  cardTitle: { fontSize: 16, fontWeight: 800 },
  cardDesc: { marginTop: 8, fontSize: 13, color: "rgba(244,244,245,0.78)", lineHeight: 1.6 },
  hr: { marginTop: 14, height: 1, background: "rgba(255,255,255,0.10)" },
  cardFoot: { marginTop: 12, fontSize: 11, color: "rgba(244,244,245,0.6)" },

  panel: {
    borderRadius: 26,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 18,
  },
  copy: { marginTop: 12, marginBottom: 0, fontSize: 13, color: "rgba(244,244,245,0.78)", lineHeight: 1.7 },

  triple: { marginTop: 16, display: "grid", gridTemplateColumns: "1fr", gap: 12 },
  mini: {
    borderRadius: 18,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 14,
  },
  miniTitle: { fontSize: 13, fontWeight: 800 },
  miniDesc: { marginTop: 6, fontSize: 12, color: "rgba(244,244,245,0.72)", lineHeight: 1.6 },

  contactGrid: { display: "grid", gridTemplateColumns: "1fr", gap: 12 },
  contactLine: { marginTop: 12, fontSize: 13, color: "rgba(244,244,245,0.75)" },
  label: { color: "rgba(244,244,245,0.55)", marginRight: 6 },

  formTitle: { fontSize: 13, fontWeight: 800, color: "#fff" },
  formNote: { marginTop: 8, fontSize: 11, color: "rgba(244,244,245,0.55)" },
  field: { marginTop: 14 },
  fieldLabel: { fontSize: 12, color: "rgba(244,244,245,0.75)", marginBottom: 8 },
  input: {
    width: "100%",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(9,9,11,0.55)",
    padding: "12px 14px",
    color: "#fff",
    outline: "none",
    fontSize: 13,
  },

  footer: { maxWidth: 1100, margin: "0 auto", padding: "20px 20px 40px" },
  footerInner: {
    paddingTop: 16,
    borderTop: "1px solid rgba(255,255,255,0.10)",
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { fontSize: 11, color: "rgba(244,244,245,0.55)" },
  footerLinks: { display: "flex", gap: 14 },
  footerLink: { fontSize: 11, color: "rgba(244,244,245,0.6)", textDecoration: "none" },
};

// Simple responsive tweaks without CSS framework
if (typeof window !== "undefined") {
  const mq = window.matchMedia("(min-width: 860px)");
  const apply = () => {
    (styles.nav as any).display = mq.matches ? "flex" : "none";
    (styles.heroGrid as any).gridTemplateColumns = mq.matches ? "1.15fr 0.85fr" : "1fr";
    (styles.infoGrid as any).gridTemplateColumns = mq.matches ? "1fr 1fr" : "1fr";
    (styles.cards as any).gridTemplateColumns = mq.matches ? "repeat(3, 1fr)" : "1fr";
    (styles.triple as any).gridTemplateColumns = mq.matches ? "repeat(3, 1fr)" : "1fr";
    (styles.contactGrid as any).gridTemplateColumns = mq.matches ? "1fr 1fr" : "1fr";
  };
  apply();
  mq.addEventListener?.("change", apply);
}
