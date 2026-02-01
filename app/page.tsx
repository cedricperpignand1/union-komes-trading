"use client";

const phoneDisplay = "786-599-8099";
const phoneRaw = "7865998099";
const email = "cedricperpignand@gmail.com";

// ✅ Put your image in /public and set the path here:
const HERO_PANEL_IMAGE_SRC = "/panel.jpg"; // e.g. /bales.jpg

export default function Home() {
  return (
    <main className="wrap">
      <header className="header">
        <div className="brand">
          {/* ✅ Removed the circled UK logo */}
          <div className="brandText">
            <div className="brandName">UNION KOMES TRADING L.L.C.</div>
            <div className="brandSub">Miami, FL • Used Clothing Bales</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#services">Bales</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="navCta" href="#contact">
            Get Pricing
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div className="eyebrow">
            <span className="spark" aria-hidden />
            Export-ready bales • Fast quotes • Consistent supply
          </div>

          <h1 className="h1">
            Used clothing bales,
            <span className="accent"> packed & ready to ship</span>.
          </h1>

          <p className="lead">
            UNION KOMES TRADING L.L.C. supplies used clothing bales from the USA for export buyers,
            wholesalers, and resellers — with clear terms, quick communication, and dependable sourcing.
          </p>

          <div className="heroActions">
            <a className="btnPrimary" href="#contact">
              Request Pricing
            </a>
            <a className="btnGhost" href="#services">
              View Bale Options
            </a>
          </div>

          <div className="heroMeta">
            <a className="metaItem" href={`tel:+1${phoneRaw}`}>
              <div className="metaLabel">Phone</div>
              <div className="metaValue">{phoneDisplay}</div>
            </a>

            <a
              className="metaItem"
              href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Pricing%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.`}
            >
              <div className="metaLabel">Email</div>
              <div className="metaValue">{email}</div>
            </a>

            <div className="metaItem">
              <div className="metaLabel">Location</div>
              <div className="metaValue">Miami, FL (USA)</div>
            </div>
          </div>
        </div>

        {/* ✅ Replaced the “What you get” panel with an image */}
        <div className="heroImageWrap" aria-label="Hero panel image">
          <img
            className="heroImage"
            src={HERO_PANEL_IMAGE_SRC}
            alt="Used clothing bales ready for export"
            loading="eager"
          />
        </div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <h2 className="h2">Used Clothing Bales</h2>
          <p className="muted">
            Simple, export-ready options. Tell us your destination + target grade and we’ll quote fast.
          </p>
        </div>

        <div className="cards">
          {[
            [
              "Mixed Used Clothing Bales",
              "Everyday assorted clothing — a strong option for general resale markets.",
            ],
            [
              "Sorted / Category Bales",
              "Men / women / kids or category-focused bales depending on availability.",
            ],
            [
              "Logistics & Export Support",
              "Palletizing, loading coordination, and documentation-friendly terms.",
            ],
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <div className="cardTitle">{title}</div>
              <div className="cardDesc">{desc}</div>
              <div className="cardFoot">Typical quote response: under 24 hours.</div>
            </div>
          ))}
        </div>

        <div className="note">
          <div className="noteTitle">What to include for fastest pricing</div>
          <div className="noteDesc">
            Destination country • Estimated quantity (lbs or bales) • Preferred mix (men/women/kids) •
            Any restrictions (no shoes, no winter, etc.)
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="panel">
          <div className="sectionHead tight">
            <h2 className="h2">About</h2>
            <p className="muted">
              Based in Miami, Florida. Focused on reliable supply, clean communication, and smooth export flow.
            </p>
          </div>

          <p className="copy">
            UNION KOMES TRADING L.L.C. specializes in sourcing and supplying used clothing bales from the USA.
            We keep it simple: quick responses, clear terms, and consistent follow-through so buyers can plan
            shipments with confidence.
          </p>

          <div className="features">
            {[
              ["Consistent Supply", "Reliable sourcing and straightforward availability updates."],
              ["Fast Pricing", "Quick quotes based on destination and volume."],
              ["Export-Minded", "Logistics-first coordination to reduce delays and confusion."],
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
        {/* ✅ Form removed — keeping the layout and styling */}
        <div className="contact contactSingle">
          <div className="panel">
            <div className="sectionHead tight">
              <h2 className="h2">Contact</h2>
              <p className="muted">
                Reach out for bale pricing. Include destination + quantity for the fastest quote.
              </p>
            </div>

            <div className="contactLines">
              <div className="line">
                <span className="label">Location</span>
                <span className="value">Miami, FL (USA)</span>
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
                  href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Pricing%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.&body=Destination%20Country%3A%0AQuantity%20(lbs%20or%20bales)%3A%0APreferred%20Mix%20(men%2Fwomen%2Fkids)%3A%0ANotes%2FRestrictions%3A%0A`}
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="heroActions">
              <a
                className="btnPrimary"
                href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Pricing%20Request%20-%20UNION%20KOMES%20TRADING%20L.L.C.&body=Destination%20Country%3A%0AQuantity%20(lbs%20or%20bales)%3A%0APreferred%20Mix%20(men%2Fwomen%2Fkids)%3A%0ANotes%2FRestrictions%3A%0A`}
              >
                Email for Pricing
              </a>
              <a className="btnGhost" href={`tel:+1${phoneRaw}`}>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerText">
            © {new Date().getFullYear()} UNION KOMES TRADING L.L.C. • Used Clothing Bales • Miami, FL
          </div>
          <div className="footerLinks">
            <a href="#services">Bales</a>
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
    object-fit: cover;
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

  /* ✅ ensures contact panel stays left and doesn't stretch weirdly */
  .contactSingle{
    grid-template-columns: 1fr;
    max-width: 720px;
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

  /* ✅ New note card under Services */
  .note{
    margin-top: 12px;
    border-radius: 26px;
    padding: 16px 18px;
    background: rgba(79,70,229,.06);
    border: 1px solid rgba(79,70,229,.16);
    box-shadow: var(--shadow2);
  }
  .noteTitle{
    font-size: 13px;
    font-weight: 900;
    color: rgba(11,18,32,.88);
  }
  .noteDesc{
    margin-top: 6px;
    font-size: 12px;
    color: rgba(11,18,32,.70);
    line-height: 1.7;
    max-width: 92ch;
  }

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

    /* contact stays single column even on desktop */
    .contact{ grid-template-columns: 1fr; }

    .h1{ font-size: 52px; }
    .heroImageWrap{ min-height: 360px; }
  }
`;
