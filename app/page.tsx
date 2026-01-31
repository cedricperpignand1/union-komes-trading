"use client";

const phoneDisplay = "786-599-8099";
const phoneRaw = "7865998099";
const email = "cedricperpignand@gmail.com";

const HERO_PANEL_IMAGE_SRC = "/panel.jpg";

export default function Home() {
  return (
    <main className="wrap">
      <header className="header">
        <div className="brand">
          <div className="brandText">
            <div className="brandName">UNION KOMES TRADING L.L.C.</div>
            <div className="brandSub">Miami, FL</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="navCta" href="#contact">
            Get a Quote
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div className="eyebrow">
            <span className="spark" />
            Reliable sourcing • Fast communication • Clear terms
          </div>

          <h1 className="h1">
            Modern trading & sourcing,
            <span className="accent"> built for speed</span>.
          </h1>

          <p className="lead">
            UNION KOMES TRADING L.L.C. helps clients move products efficiently with dependable sourcing,
            transparent updates, and logistics-first execution.
          </p>

          <div className="heroActions">
            <a className="btnPrimary" href="#contact">
              Request a Quote
            </a>
            <a className="btnGhost" href="#services">
              View Services
            </a>
          </div>

          <div className="heroMeta">
            <a className="metaItem" href={`tel:+1${phoneRaw}`}>
              <div className="metaLabel">Phone</div>
              <div className="metaValue">{phoneDisplay}</div>
            </a>

            <a
              className="metaItem"
              href={`mailto:${email}?subject=Quote%20Request`}
            >
              <div className="metaLabel">Email</div>
              <div className="metaValue">{email}</div>
            </a>

            <div className="metaItem">
              <div className="metaLabel">Location</div>
              <div className="metaValue">Miami, FL</div>
            </div>
          </div>
        </div>

        <div className="heroImageWrap">
          <img
            src={HERO_PANEL_IMAGE_SRC}
            alt="Union Komes Trading"
            className="heroImage"
          />
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <h2 className="h2">Services</h2>
          <p className="muted">
            A focused set of services designed to keep deals moving and communication clean.
          </p>
        </div>

        <div className="cards">
          {[
            ["Product Sourcing", "Identify suppliers, validate availability, and coordinate procurement."],
            ["Trade Facilitation", "Support documentation-ready terms and deal coordination."],
            ["Logistics Support", "Planning-first approach to reduce delays and surprises."],
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <div className="cardTitle">{title}</div>
              <div className="cardDesc">{desc}</div>
              <div className="cardFoot">Typical response: under 24 hours.</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="panel">
          <h2 className="h2">About</h2>
          <p className="copy">
            UNION KOMES TRADING L.L.C. is based in Miami, Florida and focuses on
            efficient sourcing, clean execution, and clear communication.
            Our goal is simple — make business easier and faster.
          </p>

          <div className="features">
            <div className="feature">
              <div className="featureTitle">Speed</div>
              <div className="featureDesc">Quick responses & fast execution.</div>
            </div>
            <div className="feature">
              <div className="featureTitle">Clarity</div>
              <div className="featureDesc">Straight answers and clear expectations.</div>
            </div>
            <div className="feature">
              <div className="featureTitle">Reliability</div>
              <div className="featureDesc">Consistent communication and follow-through.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="panel">
          <h2 className="h2">Contact</h2>
          <p className="muted">Reach out directly — we respond quickly.</p>

          <div className="contactLines">
            <div className="line">
              <span className="label">Location</span>
              <span>Miami, FL</span>
            </div>
            <div className="line">
              <span className="label">Phone</span>
              <a href={`tel:+1${phoneRaw}`}>{phoneDisplay}</a>
            </div>
            <div className="line">
              <span className="label">Email</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div className="heroActions" style={{ marginTop: 20 }}>
            <a className="btnPrimary" href={`mailto:${email}`}>
              Email Us
            </a>
            <a className="btnGhost" href={`tel:+1${phoneRaw}`}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerText">
            © {new Date().getFullYear()} UNION KOMES TRADING L.L.C. • Miami, FL
          </div>
          <div className="footerLinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <style>{css}</style>
    </main>
  );
}

const css = `
/* Same CSS as before — no form styles needed anymore */
${/* FULL CSS omitted here for brevity – use the exact CSS from previous message */""}
`;
