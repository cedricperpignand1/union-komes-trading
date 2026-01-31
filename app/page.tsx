"use client";

const phone = "(305) 555-0147"; // placeholder
const email = "sales@unionkomestrading.com"; // placeholder

export default function Home() {
  return (
    <main className="wrap">
      <div className="bg" />

      <header className="header">
        <div className="brand">
          <div className="logo">UK</div>
          <div>
            <div className="brandName">UNION KOMES TRADING L.L.C.</div>
            <div className="brandSub">Miami, FL</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="cta" href="#contact">
            Get a Quote
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroGrid">
          <div>
            <div className="pill">
              <span className="dot" />
              Reliable sourcing • Fast communication • Clear terms
            </div>

            <h1 className="h1">
              Modern trading & sourcing, <span className="accent">built for speed</span>.
            </h1>

            <p className="lead">
              UNION KOMES TRADING L.L.C. helps clients move products efficiently
              with dependable sourcing, transparent updates, and logistics-first execution.
            </p>

            <div className="btnRow">
              <a className="btnPrimary" href="#contact">
                Request a Quote
              </a>
              <a className="btnSecondary" href="#services">
                View Services
              </a>
            </div>

            <div className="infoGrid">
              <div className="infoCard">
                <div className="infoTitle">Phone</div>
                <div className="infoText">{phone}</div>
              </div>
              <div className="infoCard">
                <div className="infoTitle">Email</div>
                <div className="infoText">{email}</div>
              </div>
            </div>
          </div>

          <div className="sideCard">
            <div className="sideInner">
              <div className="kicker">What you get</div>
              <ul className="ul">
                <li>
                  <span className="b a" /> Sourcing & supplier coordination with clear timelines
                </li>
                <li>
                  <span className="b b2" /> Negotiation support and documentation-ready terms
                </li>
                <li>
                  <span className="b c" /> Logistics-first planning to reduce delays & surprises
                </li>
              </ul>

              <div className="badgeGrid">
                <div className="badge">
                  <div className="badgeTop">Fast</div>
                  <div className="badgeSub">Response</div>
                </div>
                <div className="badge">
                  <div className="badgeTop">Clear</div>
                  <div className="badgeSub">Updates</div>
                </div>
                <div className="badge">
                  <div className="badgeTop">Trusted</div>
                  <div className="badgeSub">Execution</div>
                </div>
              </div>
            </div>

            <div className="note">
              Note: placeholders (phone/email) can be replaced anytime. Location shown as “Miami, FL” only.
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h2 className="h2">Services</h2>
        <p className="muted">
          A focused set of services designed to keep deals moving and communication clean.
        </p>

        <div className="cards">
          {[
            ["Product Sourcing", "Identify suppliers, validate availability, and coordinate procurement."],
            ["Trade Facilitation", "Support documentation-ready terms, coordination, and timeline alignment."],
            ["Logistics Support", "Planning-first approach to reduce delays and simplify delivery steps."],
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <div className="cardTitle">{title}</div>
              <div className="cardDesc">{desc}</div>
              <div className="hr" />
              <div className="cardFoot">Get a quote in under 24 hours (typical).</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="panel">
          <h2 className="h2">About</h2>
          <p className="copy">
            UNION KOMES TRADING L.L.C. is based in Miami, Florida. We focus on reliable execution:
            fast communication, clean terms, and a logistics-first mindset so clients can move confidently
            and avoid unnecessary friction.
          </p>

          <div className="triple">
            {[
              ["Speed", "Short response times & quick turnarounds."],
              ["Clarity", "Straight answers, simple next steps."],
              ["Reliability", "Process-driven coordination and updates."],
            ].map(([k, v]) => (
              <div key={k} className="mini">
                <div className="miniTitle">{k}</div>
                <div className="miniDesc">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contactGrid">
          <div className="panel">
            <h2 className="h2">Contact</h2>
            <p className="muted">Send a quick message and we’ll respond with next steps.</p>

            <div className="line">
              <span className="label">Location:</span> Miami, FL
            </div>
            <div className="line">
              <span className="label">Phone:</span> {phone}
            </div>
            <div className="line">
              <span className="label">Email:</span> {email}
            </div>

            <div className="btnRow">
              <a
                className="btnPrimary"
                href={`mailto:${email}?subject=Quote%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
              >
                Email Us
              </a>
              <a className="btnSecondary" href="#services">
                See Services
              </a>
            </div>
          </div>

          <form
            className="panel"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! This form is a placeholder for now.");
            }}
          >
            <div className="formTitle">Quick inquiry form</div>
            <div className="formNote">(Front-end only for now — we can wire it to email later.)</div>

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
  .wrap { min-height: 100vh; position: relative; }
  .bg {
    position: fixed; inset: 0; z-index: -1;
    background:
      radial-gradient(ellipse at top, rgba(99,102,241,0.22), transparent 55%),
      radial-gradient(ellipse at bottom, rgba(16,185,129,0.18), transparent 55%),
      linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.95));
  }

  .header {
    max-width: 1100px; margin: 0 auto; padding: 24px 20px;
    display: flex; justify-content: space-between; align-items: center; gap: 16px;
  }
  .brand { display: flex; align-items: center; gap: 12px; }
  .logo {
    width: 40px; height: 40px; border-radius: 16px;
    display: grid; place-items: center;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    font-weight: 900; font-size: 12px; letter-spacing: .5px;
  }
  .brandName { font-size: 13px; font-weight: 900; letter-spacing: .4px; }
  .brandSub { font-size: 12px; color: rgba(244,244,245,0.65); }

  .nav { display: none; gap: 18px; align-items: center; font-size: 13px; color: rgba(244,244,245,0.75); }
  .nav a:hover { color: #fff; }
  .cta {
    padding: 10px 14px; border-radius: 14px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    color: #fff;
  }

  .hero { max-width: 1100px; margin: 0 auto; padding: 24px 20px 48px; }
  .heroGrid { display: grid; gap: 18px; grid-template-columns: 1fr; }

  .pill {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 6px 10px; border-radius: 999px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    font-size: 12px; color: rgba(244,244,245,0.9);
  }
  .dot { width: 8px; height: 8px; border-radius: 999px; background: rgba(52,211,153,1); }

  .h1 { margin: 14px 0 0; font-size: 44px; line-height: 1.05; letter-spacing: -0.8px; }
  .accent { color: rgba(165,180,252,0.95); }
  .lead { margin-top: 14px; max-width: 560px; font-size: 16px; color: rgba(244,244,245,0.78); }

  .btnRow { margin-top: 18px; display: flex; gap: 10px; flex-wrap: wrap; }
  .btnPrimary {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 16px; border-radius: 16px;
    background: #fff; color: #09090b;
    font-weight: 900; font-size: 13px; border: none; cursor: pointer;
  }
  .btnSecondary {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 16px; border-radius: 16px;
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
    color: #fff; font-weight: 900; font-size: 13px;
  }

  .infoGrid { margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 10px; }
  .infoCard {
    border-radius: 18px; padding: 14px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  }
  .infoTitle { font-size: 12px; font-weight: 900; }
  .infoText { margin-top: 4px; font-size: 13px; color: rgba(244,244,245,0.78); }

  .sideCard {
    border-radius: 26px; padding: 16px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  }
  .sideInner {
    border-radius: 20px; padding: 18px;
    background: linear-gradient(135deg, rgba(99,102,241,0.22), rgba(16,185,129,0.10));
    border: 1px solid rgba(255,255,255,0.10);
  }
  .kicker { font-size: 11px; letter-spacing: 1.2px; text-transform: uppercase; font-weight: 900; }
  .ul { margin: 14px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
  .ul li { display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: rgba(244,244,245,0.85); line-height: 1.4; }
  .b { width: 8px; height: 8px; border-radius: 999px; margin-top: 6px; }
  .a { background: rgba(165,180,252,0.95); }
  .b2 { background: rgba(110,231,183,0.95); }
  .c { background: rgba(244,244,245,0.9); }

  .badgeGrid { margin-top: 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .badge {
    border-radius: 18px; padding: 12px; text-align: center;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  }
  .badgeTop { font-weight: 900; }
  .badgeSub { font-size: 11px; color: rgba(244,244,245,0.7); }

  .note { margin-top: 10px; font-size: 11px; color: rgba(244,244,245,0.55); }

  .section { max-width: 1100px; margin: 0 auto; padding: 40px 20px; }
  .h2 { margin: 0; font-size: 26px; letter-spacing: -0.4px; }
  .muted { margin: 10px 0 0; font-size: 13px; color: rgba(244,244,245,0.62); line-height: 1.5; }

  .cards { margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 12px; }
  .card {
    border-radius: 26px; padding: 18px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  }
  .cardTitle { font-size: 16px; font-weight: 900; }
  .cardDesc { margin-top: 8px; font-size: 13px; color: rgba(244,244,245,0.78); line-height: 1.6; }
  .hr { margin-top: 14px; height: 1px; background: rgba(255,255,255,0.10); }
  .cardFoot { margin-top: 12px; font-size: 11px; color: rgba(244,244,245,0.6); }

  .panel {
    border-radius: 26px; padding: 18px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);
  }
  .copy { margin: 12px 0 0; font-size: 13px; color: rgba(244,244,245,0.78); line-height: 1.7; }

  .triple { margin-top: 16px; display: grid; grid-template-columns: 1fr; gap: 12px; }
  .mini {
    border-radius: 18px; padding: 14px;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);
  }
  .miniTitle { font-weight: 900; font-size: 13px; }
  .miniDesc { margin-top: 6px; font-size: 12px; color: rgba(244,244,245,0.72); line-height: 1.6; }

  .contactGrid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 18px; }
  .line { margin-top: 12px; font-size: 13px; color: rgba(244,244,245,0.75); }
  .label { color: rgba(244,244,245,0.55); margin-right: 6px; }

  .formTitle { font-weight: 900; font-size: 13px; }
  .formNote { margin-top: 8px; font-size: 11px; color: rgba(244,244,245,0.55); }
  .field { display: grid; gap: 8px; margin-top: 14px; font-size: 12px; color: rgba(244,244,245,0.75); }
  .input {
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(9,9,11,0.55);
    padding: 12px 14px;
    color: #fff;
    outline: none;
    font-size: 13px;
  }

  .footer { max-width: 1100px; margin: 0 auto; padding: 20px 20px 40px; }
  .footerInner {
    padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.10);
    display: flex; gap: 12px; flex-wrap: wrap;
    justify-content: space-between; align-items: center;
  }
  .footerText { font-size: 11px; color: rgba(244,244,245,0.55); }
  .footerLinks { display: flex; gap: 14px; font-size: 11px; color: rgba(244,244,245,0.6); }
  .footerLinks a:hover { color: #fff; }

  @media (min-width: 860px) {
    .nav { display: flex; }
    .heroGrid { grid-template-columns: 1.15fr 0.85fr; }
    .infoGrid { grid-template-columns: 1fr 1fr; }
    .cards { grid-template-columns: repeat(3, 1fr); }
    .triple { grid-template-columns: repeat(3, 1fr); }
    .contactGrid { grid-template-columns: 1fr 1fr; }
  }
`;
