"use client";

const phoneDisplay = "786-599-8099";
const phoneRaw = "7865998099";
const email = "cedricperpignand@gmail.com";

// ✅ Put your image in /public and set the path here:
const HERO_PANEL_IMAGE_SRC = "/panel.jpg"; // e.g. /what-you-get.jpg

export default function Home() {
  return (
    <main className="wrap">
      <header className="header">
        <div className="brand">
          {/* ✅ Removed the circled UK logo */}
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
            <span className="spark" aria-hidden />
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
              href={`mailto:${email}?subject=Quote%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
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

        {/* ✅ Replaced the “What you get” panel with an image */}
        <div className="heroImageWrap" aria-label="Hero panel image">
          <img
            className="heroImage"
            src={HERO_PANEL_IMAGE_SRC}
            alt="Union Komes Trading"
            loading="eager"
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
            ["Trade Facilitation", "Support documentation-ready terms, coordination, and timeline alignment."],
            ["Logistics Support", "Planning-first approach to reduce delays and simplify delivery steps."],
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <div className="cardTitle">{title}</div>
              <div className="cardDesc">{desc}</div>
              <div className="cardFoot">Typical quote response: under 24 hours.</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="panel">
          <div className="sectionHead tight">
            <h2 className="h2">About</h2>
            <p className="muted">Based in Miami, Florida. Built around speed, clarity, and execution.</p>
          </div>

          <p className="copy">
            UNION KOMES TRADING L.L.C. focuses on dependable coordination — fast communication, clean terms,
            and a logistics-first mindset so clients can move confidently and avoid unnecessary friction.
          </p>

          <div className="features">
            {[
              ["Speed", "Short response times & quick turnarounds."],
              ["Clarity", "Straight answers, simple next steps."],
              ["Reliability", "Process-driven coordination and updates."],
            ].map(([k, v]) => (
              <div key={k} className="feature">
                <div className="featureTitle">{k}</div>
                <div className="featureDesc">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact">
          <div className="panel">
            <div className="sectionHead tight">
              <h2 className="h2">Contact</h2>
              <p className="muted">Send a quick message and we’ll respond with next steps.</p>
            </div>

            <div className="contactLines">
              <div className="line">
                <span className="label">Location</span>
                <span className="value">Miami, FL</span>
              </div>
              <div className="line">
                <span className="label">Phone</span>
                <a className="valueLink" href={`tel:+1${phoneRaw}`}>
                  {phoneDisplay}
                </a>
              </div>
              <div className="line">
                <span className="label">Email</span>
                <a
                  className="valueLink"
                  href={`mailto:${email}?subject=Quote%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="heroActions">
              <a
                className="btnPrimary"
                href={`mailto:${email}?subject=Quote%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
              >
                Email Us
              </a>
              <a className="btnGhost" href={`tel:+1${phoneRaw}`}>
                Call Now
              </a>
            </div>
          </div>

          <form
            className="panel"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! This form is front-end only right now.");
            }}
          >
            <div className="formTitle">Quick inquiry</div>
            <div className="formNote">Front-end only for now — we can wire this to email later.</div>

            <label className="field">
              <span>Name</span>
              <input className="input" placeholder="Your name" />
            </label>

            <label className="field">
              <span>Email</span>
              <input className="input" type="email" placeholder="you@email.com" />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                className="input"
                style={{ minHeight: 120 }}
                placeholder="What are you looking to source / trade?"
              />
            </label>

            <button className="btnPrimary" type="submit">
              Submit
            </button>
          </form>
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
  :root{
    --bg: #ffffff;
    --text: #0b1220;
    --muted: rgba(11,18,32,.64);
    --line: rgba(15,23,42,.10);
    --shadow: 0 18px 50px rgba(2,6,23,.08);
    --shadow2: 0 10px 30px rgba(2,6,23,.06);
    --radius: 22px;
    --accent: #4f46e5;
    --accent2: #10b981;
  }

  * { box-sizing: border-box; }
  html, body { padding: 0; margin: 0; }
  a { color: inherit; text-decoration: none; }
  a:hover { text-decoration: underline; text-underline-offset: 4px; }

  .wrap{
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
  }

  .wrap:before{
    content:"";
    position: fixed;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(1200px 700px at 15% 10%, rgba(79,70,229,.10), transparent 55%),
      radial-gradient(900px 600px at 85% 25%, rgba(16,185,129,.10), transparent 55%),
      radial-gradient(900px 700px at 40% 90%, rgba(79,70,229,.06), transparent 55%),
      linear-gradient(#fff, #fff);
  }

  .header{
    max-width: 1120px;
    margin: 0 auto;
    padding: 22px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
  }

  .brand{
    display:flex;
    align-items:center;
    gap: 12px;
    min-width: 0;
  }

  .brandText{ min-width: 0; }
  .brandName{
    font-size: 13px;
    font-weight: 900;
    letter-spacing: .45px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .brandSub{
    font-size: 12px;
    color: var(--muted);
    margin-top: 2px;
  }

  .nav{
    display: none;
    align-items: center;
    gap: 18px;
    font-size: 13px;
    color: rgba(11,18,32,.72);
  }
  .nav a{ text-decoration: none; }
  .nav a:hover{ text-decoration: none; color: rgba(11,18,32,.95); }

  .navCta{
    padding: 10px 14px;
    border-radius: 14px;
    background: rgba(79,70,229,.10);
    border: 1px solid rgba(79,70,229,.18);
    color: rgba(11,18,32,.95);
    font-weight: 900;
  }

  .hero{
    max-width: 1120px;
    margin: 0 auto;
    padding: 28px 20px 34px;
    display: grid;
    gap: 14px;
    grid-template-columns: 1fr;
  }

  .heroInner{
    padding: 12px 2px 4px;
  }

  .eyebrow{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,.75);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    font-size: 12px;
    color: rgba(11,18,32,.75);
  }

  .spark{
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
  }

  .h1{
    margin: 16px 0 0;
    font-size: 46px;
    line-height: 1.05;
    letter-spacing: -1px;
  }
  .accent{ color: var(--accent); }

  .lead{
    margin-top: 14px;
    max-width: 62ch;
    font-size: 16px;
    color: rgba(11,18,32,.72);
    line-height: 1.7;
  }

  .heroActions{
    margin-top: 18px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btnPrimary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 12px 16px;
    border-radius: 16px;
    background: var(--text);
    color: #fff;
    font-weight: 900;
    font-size: 13px;
    border: 1px solid rgba(2,6,23,.10);
    box-shadow: var(--shadow2);
    cursor:pointer;
    text-decoration: none !important;
  }

  .btnGhost{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 12px 16px;
    border-radius: 16px;
    background: rgba(255,255,255,.80);
    color: rgba(11,18,32,.92);
    font-weight: 900;
    font-size: 13px;
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    text-decoration: none !important;
  }

  .heroMeta{
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .metaItem{
    border-radius: var(--radius);
    padding: 14px 14px;
    background: rgba(255,255,255,.80);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    transition: transform .12s ease, box-shadow .12s ease;
    text-decoration: none !important;
  }
  .metaItem:hover{
    transform: translateY(-1px);
    box-shadow: var(--shadow);
  }

  .metaLabel{
    font-size: 12px;
    font-weight: 900;
    color: rgba(11,18,32,.62);
  }
  .metaValue{
    margin-top: 4px;
    font-size: 13px;
    color: rgba(11,18,32,.86);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* ✅ NEW image panel styles */
  .heroImageWrap{
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    background: rgba(255,255,255,.85);
    min-height: 260px;
  }
  .heroImage{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover; /* change to 'contain' if you don't want any cropping */
    object-position: center;
  }

  .section{
    max-width: 1120px;
    margin: 0 auto;
    padding: 44px 20px;
  }

  .sectionHead{
    display:flex;
    flex-direction: column;
    gap: 10px;
  }
  .sectionHead.tight{ gap: 8px; }

  .h2{
    margin: 0;
    font-size: 26px;
    letter-spacing: -0.5px;
  }
  .muted{
    margin: 0;
    font-size: 13px;
    color: rgba(11,18,32,.64);
    line-height: 1.6;
    max-width: 72ch;
  }

  .cards{
    margin-top: 18px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .card{
    border-radius: 26px;
    padding: 18px;
    background: rgba(255,255,255,.82);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
  }
  .cardTitle{ font-size: 15px; font-weight: 900; }
  .cardDesc{ margin-top: 8px; font-size: 13px; color: rgba(11,18,32,.72); line-height: 1.7; }
  .cardFoot{ margin-top: 12px; font-size: 12px; color: rgba(11,18,32,.56); }

  .panel{
    border-radius: 26px;
    padding: 18px;
    background: rgba(255,255,255,.82);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
  }

  .copy{
    margin: 14px 0 0;
    font-size: 13px;
    color: rgba(11,18,32,.72);
    line-height: 1.85;
    max-width: 78ch;
  }

  .features{
    margin-top: 16px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .feature{
    border-radius: 20px;
    padding: 14px;
    background: rgba(255,255,255,.70);
    border: 1px solid var(--line);
  }
  .featureTitle{ font-weight: 900; font-size: 13px; }
  .featureDesc{ margin-top: 6px; font-size: 12px; color: rgba(11,18,32,.62); line-height: 1.7; }

  .contact{
    margin-top: 18px;
    display:grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .contactLines{
    margin-top: 14px;
    display:grid;
    gap: 10px;
  }

  .line{
    display:flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,.70);
  }
  .label{ font-size: 12px; color: rgba(11,18,32,.58); font-weight: 800; }
  .value{ font-size: 13px; color: rgba(11,18,32,.80); }
  .valueLink{
    font-size: 13px;
    color: rgba(11,18,32,.88);
    font-weight: 900;
    text-decoration: none;
  }
  .valueLink:hover{ text-decoration: underline; text-underline-offset: 4px; }

  .formTitle{ font-weight: 900; font-size: 13px; }
  .formNote{ margin-top: 8px; font-size: 11px; color: rgba(11,18,32,.55); }

  .field{
    display:grid;
    gap: 8px;
    margin-top: 14px;
    font-size: 12px;
    color: rgba(11,18,32,.72);
  }

  .input{
    width: 100%;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,.90);
    padding: 12px 14px;
    color: rgba(11,18,32,.92);
    outline: none;
    font-size: 13px;
    box-shadow: inset 0 1px 0 rgba(2,6,23,.04);
  }
  .input:focus{
    border-color: rgba(79,70,229,.35);
    box-shadow: 0 0 0 4px rgba(79,70,229,.10);
  }

  .footer{
    max-width: 1120px;
    margin: 0 auto;
    padding: 18px 20px 46px;
  }
  .footerInner{
    padding-top: 16px;
    border-top: 1px solid var(--line);
    display:flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .footerText{ font-size: 11px; color: rgba(11,18,32,.55); }
  .footerLinks{
    display:flex;
    gap: 14px;
    font-size: 11px;
    color: rgba(11,18,32,.60);
  }
  .footerLinks a{ text-decoration: none; }
  .footerLinks a:hover{ text-decoration: underline; text-underline-offset: 4px; }

  @media (min-width: 860px){
    .nav{ display:flex; }
    .hero{
      grid-template-columns: 1.2fr .8fr;
      align-items: start;
      gap: 18px;
      padding-top: 36px;
    }
    .heroMeta{ grid-template-columns: repeat(3, 1fr); }
    .cards{ grid-template-columns: repeat(3, 1fr); }
    .features{ grid-template-columns: repeat(3, 1fr); }
    .contact{ grid-template-columns: 1fr 1fr; }
    .h1{ font-size: 52px; }
    .heroImageWrap{ min-height: 360px; }
  }
`;
