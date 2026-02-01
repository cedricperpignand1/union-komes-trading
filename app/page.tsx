"use client";

import { useMemo, useState } from "react";

const phoneDisplay = "786-599-8099";
const phoneRaw = "7865998099";
const email = "cedricperpignand@gmail.com";

// ✅ Put your image in /public and set the path here:
const HERO_PANEL_IMAGE_SRC = "/panel.jpg";

type OrderForm = {
  name: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  country: string;
  pounds: string;
  baleType: "mixed" | "sorted";
  notes: string;
};

export default function Home() {
  const [order, setOrder] = useState<OrderForm>({
    name: "",
    company: "",
    phone: "",
    email: "",
    address: "",
    country: "",
    pounds: "",
    baleType: "mixed",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(
    null
  );

  const poundsNumber = useMemo(() => {
    const n = Number(String(order.pounds).replace(/,/g, ""));
    return Number.isFinite(n) ? n : NaN;
  }, [order.pounds]);

  const canSubmit =
    order.name.trim().length >= 2 &&
    order.address.trim().length >= 6 &&
    order.country.trim().length >= 2 &&
    Number.isFinite(poundsNumber) &&
    poundsNumber > 0 &&
    !submitting;

  function update<K extends keyof OrderForm>(key: K, value: OrderForm[K]) {
    setOrder((prev) => ({ ...prev, [key]: value }));
    setStatus(null);
  }

  async function submitOrder(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!canSubmit) {
      setStatus({
        type: "err",
        msg: "Please fill in: name, address, country, and pounds (must be a positive number).",
      });
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...order,
          pounds: poundsNumber,
        }),
      });

      // ✅ show real error messages
      let data: any = null;
      let text = "";
      try {
        data = await res.json();
      } catch {
        try {
          text = await res.text();
        } catch {}
      }

      if (!res.ok) {
        throw new Error(data?.error || text || `Request failed (${res.status})`);
      }

      setStatus({ type: "ok", msg: "Order request sent. We’ll contact you shortly." });

      setOrder({
        name: "",
        company: "",
        phone: "",
        email: "",
        address: "",
        country: "",
        pounds: "",
        baleType: "mixed",
        notes: "",
      });
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="wrap">
      <header className="header">
        <div className="brand">
          <div className="brandText">
            <div className="brandName">UNION KOMES TRADING L.L.C.</div>
            <div className="brandSub">Miami, FL • Used Clothing Bales</div>
          </div>
        </div>

        <nav className="nav">
          <a className="orderLink" href="#order">
            Make an Order
          </a>
          <a href="#services">Bales</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="navCta" href="#order">
            Order Now
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
            UNION KOMES TRADING L.L.C. supplies used clothing bales from the USA for export
            buyers, wholesalers, and resellers — with clear terms, quick communication,
            and dependable sourcing.
          </p>

          <div className="heroActions">
            <a className="btnPrimary" href="#order">
              Make an Order
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
              href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Inquiry`}
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

        <div className="heroImageWrap" aria-label="Used clothing bales image">
          <img className="heroImage" src={HERO_PANEL_IMAGE_SRC} alt="Used clothing bales" />
        </div>
      </section>

      {/* ✅ ORDER PANEL moved BEFORE services */}
      <section id="order" className="section orderSection">
        <div className="sectionHead">
          <div className="orderHeadRow">
            <h2 className="h2">Make an Order</h2>
            <span className="badge">Fast Order Form</span>
          </div>
          <p className="muted">
            Fill this out and we’ll receive it instantly by email so we can confirm pricing + next steps.
          </p>
        </div>

        <div className="orderGrid">
          <form className="panel panelFeatured form" onSubmit={submitOrder}>
            <div className="featuredTop">
              <div className="featuredTitle">Place your bale request</div>
              <div className="featuredSub">Mixed or Sorted • Add pounds • Submit</div>
            </div>

            <div className="formRow2">
              <div className="field">
                <label className="lab">Full Name *</label>
                <input
                  className="input"
                  value={order.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label className="lab">Company (optional)</label>
                <input
                  className="input"
                  value={order.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="formRow2">
              <div className="field">
                <label className="lab">Phone (optional)</label>
                <input
                  className="input"
                  value={order.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+1 786..."
                />
              </div>
              <div className="field">
                <label className="lab">Email (optional)</label>
                <input
                  className="input"
                  value={order.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="buyer@email.com"
                />
              </div>
            </div>

            <div className="field">
              <label className="lab">Destination Address *</label>
              <input
                className="input"
                value={order.address}
                onChange={(e) => update("address", e.target.value)}
                placeholder="Street / City / State / Zip"
              />
            </div>

            <div className="formRow2">
              <div className="field">
                <label className="lab">Country *</label>
                <input
                  className="input"
                  value={order.country}
                  onChange={(e) => update("country", e.target.value)}
                  placeholder="e.g. United States"
                />
              </div>

              <div className="field">
                <label className="lab">Pounds Needed (lbs) *</label>
                <input
                  className="input"
                  value={order.pounds}
                  onChange={(e) => update("pounds", e.target.value)}
                  placeholder="e.g. 5000"
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="field">
              <label className="lab">Bale Type *</label>
              <div className="seg">
                <button
                  type="button"
                  className={`segBtn ${order.baleType === "mixed" ? "on" : ""}`}
                  onClick={() => update("baleType", "mixed")}
                >
                  Mixed
                </button>
                <button
                  type="button"
                  className={`segBtn ${order.baleType === "sorted" ? "on" : ""}`}
                  onClick={() => update("baleType", "sorted")}
                >
                  Sorted
                </button>
              </div>
            </div>

            <div className="field">
              <label className="lab">Notes (optional)</label>
              <textarea
                className="textarea"
                value={order.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Any restrictions (no shoes, no winter), categories needed, timeline, etc."
                rows={4}
              />
            </div>

            {status && <div className={`alert ${status.type}`}>{status.msg}</div>}

            <div className="heroActions">
              <button className="btnPrimary" type="submit" disabled={!canSubmit}>
                {submitting ? "Sending..." : "Submit Order"}
              </button>
              <a
                className="btnGhost"
                href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Order%20Request`}
              >
                Email Instead
              </a>
            </div>

            <div className="hint">
              * Required fields: Name, Address, Country, Pounds. Submits directly to our email.
            </div>
          </form>

          <div className="panel orderSide orderSideFeatured">
            <div className="sideTitle">What happens next</div>
            <div className="sideList">
              <div className="sideItem">
                <div className="sideK">1</div>
                <div className="sideV">We receive your order request instantly by email.</div>
              </div>
              <div className="sideItem">
                <div className="sideK">2</div>
                <div className="sideV">We confirm availability (mixed/sorted) and shipping options.</div>
              </div>
              <div className="sideItem">
                <div className="sideK">3</div>
                <div className="sideV">We reply with pricing + next steps (typically under 24 hours).</div>
              </div>
            </div>

            <div className="orderSideCTA">
              <div className="orderSideCTATitle">Need it urgent?</div>
              <div className="orderSideCTAText">Call now and we’ll lock in the details quickly.</div>
              <a className="btnPrimary" href={`tel:+1${phoneRaw}`}>
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES (Used Clothing Bales) now AFTER order */}
      <section id="services" className="section">
        <div className="sectionHead">
          <h2 className="h2">Used Clothing Bales</h2>
          <p className="muted">
            Simple, export-ready options. Tell us your destination + target grade and we’ll quote fast.
          </p>
        </div>

        <div className="cards">
          {[
            ["Mixed Used Clothing Bales", "Everyday assorted clothing — strong option for general resale markets."],
            ["Sorted / Category Bales", "Men / women / kids or category-focused bales depending on availability."],
            ["Logistics & Export Support", "Palletizing, loading coordination, and documentation-friendly terms."],
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
            <p className="muted">
              Based in Miami, Florida. Focused on reliable supply, clean communication, and smooth export flow.
            </p>
          </div>

          <p className="copy">
            UNION KOMES TRADING L.L.C. specializes in sourcing and supplying used clothing bales from the USA.
            We keep it simple: quick responses, clear terms, and consistent follow-through so buyers can plan
            shipments with confidence.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact contactSingle">
          <div className="panel">
            <div className="sectionHead tight">
              <h2 className="h2">Contact</h2>
              <p className="muted">Reach out for bale pricing or export questions.</p>
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
                  href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Inquiry`}
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="heroActions">
              <a className="btnPrimary" href="#order">
                Make an Order
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
            <a href="#order">Make an Order</a>
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
    --bg: #070A12;
    --panel: rgba(255,255,255,.06);
    --panel2: rgba(255,255,255,.045);
    --text: rgba(255,255,255,.92);
    --muted: rgba(255,255,255,.68);
    --line: rgba(255,255,255,.10);
    --shadow: 0 18px 55px rgba(0,0,0,.45);
    --shadow2: 0 10px 26px rgba(0,0,0,.35);
    --radius: 22px;

    --accent: #FACC15; /* yellow */
    --accent2: #22C55E; /* green */
    --orderGlowA: rgba(250,204,21,.14);
    --orderGlowB: rgba(34,197,94,.11);
  }

  * { box-sizing: border-box; }
  html, body { padding: 0; margin: 0; background: var(--bg); }
  a { color: inherit; text-decoration: none; }
  a:hover { text-decoration: underline; text-underline-offset: 4px; }

  .wrap{ min-height: 100vh; background: var(--bg); color: var(--text); }

  .wrap:before{
    content:"";
    position: fixed;
    inset: 0;
    z-index: -1;
    background:
      radial-gradient(1100px 700px at 15% 10%, rgba(250,204,21,.10), transparent 55%),
      radial-gradient(900px 600px at 85% 25%, rgba(34,197,94,.09), transparent 55%),
      radial-gradient(900px 700px at 40% 90%, rgba(250,204,21,.07), transparent 55%),
      linear-gradient(var(--bg), var(--bg));
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

  .brandText{ min-width: 0; }
  .brandName{ font-size: 13px; font-weight: 950; letter-spacing: .55px; }
  .brandSub{ font-size: 12px; color: var(--muted); margin-top: 2px; }

  .nav{ display: none; align-items: center; gap: 18px; font-size: 13px; color: var(--muted); }
  .nav a:hover{ text-decoration: none; color: rgba(255,255,255,.92); }

  .orderLink{
    color: rgba(255,255,255,.92);
    font-weight: 900;
  }

  .navCta{
    padding: 10px 14px;
    border-radius: 14px;
    background: rgba(250,204,21,.14);
    border: 1px solid rgba(250,204,21,.28);
    color: rgba(255,255,255,.95);
    font-weight: 950;
  }

  .hero{
    max-width: 1120px;
    margin: 0 auto;
    padding: 28px 20px 34px;
    display: grid;
    gap: 14px;
    grid-template-columns: 1fr;
  }

  .eyebrow{
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255,255,255,.06);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    font-size: 12px;
    color: rgba(255,255,255,.75);
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
    color: rgba(255,255,255,.96);
  }
  .accent{ color: var(--accent); }

  .lead{ margin-top: 14px; max-width: 62ch; font-size: 16px; color: rgba(255,255,255,.74); line-height: 1.7; }

  .heroActions{ margin-top: 18px; display: flex; gap: 10px; flex-wrap: wrap; }

  .btnPrimary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 12px 16px;
    border-radius: 16px;
    background: var(--accent);
    color: rgba(10,12,18,.96);
    font-weight: 950;
    font-size: 13px;
    border: 1px solid rgba(250,204,21,.35);
    box-shadow: var(--shadow2);
    cursor:pointer;
    text-decoration: none !important;
  }
  .btnPrimary:disabled{ opacity: .55; cursor: not-allowed; }

  .btnGhost{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 12px 16px;
    border-radius: 16px;
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.92);
    font-weight: 900;
    font-size: 13px;
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    text-decoration: none !important;
  }

  .heroMeta{ margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 10px; }

  .metaItem{
    border-radius: var(--radius);
    padding: 14px 14px;
    background: var(--panel);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    text-decoration: none !important;
  }
  .metaLabel{ font-size: 12px; font-weight: 900; color: rgba(255,255,255,.60); }
  .metaValue{ margin-top: 4px; font-size: 13px; color: rgba(255,255,255,.88); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .heroImageWrap{
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    background: #050710;
    min-height: 260px;
  }
  .heroImage{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center top;
    transform: scale(1.10) translateY(-10px);
    filter: contrast(1.03) saturate(1.05);
  }

  .section{ max-width: 1120px; margin: 0 auto; padding: 44px 20px; }

  .h2{ margin: 0; font-size: 26px; letter-spacing: -0.5px; color: rgba(255,255,255,.96); }
  .h2::after{
    content:"";
    display:block;
    width: 56px;
    height: 3px;
    border-radius: 999px;
    margin-top: 10px;
    background: linear-gradient(90deg, rgba(250,204,21,.95), rgba(34,197,94,.75));
  }

  .orderHeadRow{
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .badge{
    display:inline-flex;
    align-items:center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(250,204,21,.28);
    background: rgba(250,204,21,.12);
    color: rgba(255,255,255,.92);
    font-weight: 950;
    font-size: 12px;
    box-shadow: var(--shadow2);
  }

  .muted{ margin: 0; font-size: 13px; color: var(--muted); line-height: 1.6; max-width: 72ch; }

  .panel{ border-radius: 26px; padding: 18px; background: var(--panel); border: 1px solid var(--line); box-shadow: var(--shadow2); }

  /* ✅ ORDER: section stands out */
  .orderSection{
    position: relative;
    border-radius: 32px;
  }
  .orderSection:before{
    content:"";
    position:absolute;
    inset: -10px;
    z-index: -1;
    border-radius: 38px;
    background:
      radial-gradient(900px 420px at 20% 20%, var(--orderGlowA), transparent 60%),
      radial-gradient(900px 420px at 80% 35%, var(--orderGlowB), transparent 60%);
    filter: blur(6px);
    opacity: .95;
  }
  .orderSection:after{
    content:"";
    position:absolute;
    inset: 0;
    z-index: -1;
    border-radius: 32px;
    border: 1px solid rgba(250,204,21,.14);
    background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01));
  }

  /* ✅ Featured form panel */
  .panelFeatured{
    border: 1px solid rgba(250,204,21,.22);
    background: linear-gradient(180deg, rgba(250,204,21,.08), rgba(255,255,255,.05));
    box-shadow: 0 22px 70px rgba(250,204,21,.06), var(--shadow2);
  }
  .featuredTop{
    padding: 12px 12px 14px;
    border-radius: 18px;
    background: rgba(0,0,0,.20);
    border: 1px solid rgba(255,255,255,.10);
    margin-bottom: 12px;
  }
  .featuredTitle{ font-size: 14px; font-weight: 950; }
  .featuredSub{ margin-top: 4px; font-size: 12px; color: rgba(255,255,255,.66); }

  /* ✅ Order form styles */
  .orderGrid{ margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 12px; }
  .form{ padding: 18px; }

  .field{ display: grid; gap: 8px; margin-top: 12px; }
  .field:first-child{ margin-top: 0; }

  .lab{ font-size: 12px; color: rgba(255,255,255,.70); font-weight: 900; }

  .input, .textarea{
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(0,0,0,.22);
    color: rgba(255,255,255,.92);
    padding: 12px 12px;
    outline: none;
    transition: border-color .12s ease, box-shadow .12s ease;
  }
  .input:focus, .textarea:focus{
    border-color: rgba(250,204,21,.40);
    box-shadow: 0 0 0 4px rgba(250,204,21,.14);
  }

  .textarea{ resize: vertical; min-height: 110px; }

  .formRow2{ display: grid; grid-template-columns: 1fr; gap: 12px; }

  .seg{ display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .segBtn{
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.90);
    padding: 12px 12px;
    font-weight: 950;
    cursor: pointer;
    box-shadow: var(--shadow2);
  }
  .segBtn.on{
    border-color: rgba(250,204,21,.38);
    background: rgba(250,204,21,.14);
  }

  .alert{
    margin-top: 12px;
    padding: 12px 12px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.10);
    font-size: 13px;
    line-height: 1.5;
  }
  .alert.ok{
    background: rgba(34,197,94,.10);
    border-color: rgba(34,197,94,.22);
  }
  .alert.err{
    background: rgba(239,68,68,.10);
    border-color: rgba(239,68,68,.24);
  }

  .hint{ margin-top: 10px; font-size: 12px; color: rgba(255,255,255,.55); line-height: 1.6; }

  .orderSideFeatured{
    border: 1px solid rgba(34,197,94,.18);
    background: linear-gradient(180deg, rgba(34,197,94,.06), rgba(255,255,255,.04));
  }

  .orderSide{ padding: 18px; }
  .sideTitle{ font-size: 14px; font-weight: 950; }
  .sideList{ margin-top: 12px; display: grid; gap: 10px; }
  .sideItem{
    display: grid;
    grid-template-columns: 26px 1fr;
    gap: 10px;
    align-items: start;
    padding: 12px 12px;
    border-radius: 18px;
    background: rgba(255,255,255,.04);
    border: 1px solid rgba(255,255,255,.10);
  }
  .sideK{
    width: 26px; height: 26px;
    display:flex; align-items:center; justify-content:center;
    border-radius: 999px;
    background: rgba(250,204,21,.14);
    border: 1px solid rgba(250,204,21,.22);
    font-weight: 950;
    font-size: 12px;
  }
  .sideV{ font-size: 13px; color: rgba(255,255,255,.74); line-height: 1.6; }

  .orderSideCTA{
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(255,255,255,.10);
    display:grid;
    gap: 8px;
  }
  .orderSideCTATitle{ font-weight: 950; }
  .orderSideCTAText{ font-size: 12px; color: rgba(255,255,255,.66); line-height: 1.6; }

  /* Services cards */
  .cards{ margin-top: 18px; display:grid; grid-template-columns: 1fr; gap: 12px; }
  .card{ border-radius: 26px; padding: 18px; background: var(--panel); border: 1px solid var(--line); box-shadow: var(--shadow2); }
  .cardTitle{ font-size: 15px; font-weight: 950; }
  .cardDesc{ margin-top: 8px; font-size: 13px; color: rgba(255,255,255,.74); line-height: 1.7; }
  .cardFoot{ margin-top: 12px; font-size: 12px; color: rgba(255,255,255,.55); }

  .contactLines{ margin-top: 14px; display:grid; gap: 10px; }
  .line{
    display:flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,.04);
  }
  .label{ font-size: 12px; color: rgba(255,255,255,.58); font-weight: 900; }
  .value{ font-size: 13px; color: rgba(255,255,255,.80); }
  .valueLink{ font-size: 13px; color: rgba(255,255,255,.92); font-weight: 950; }

  .footer{ max-width: 1120px; margin: 0 auto; padding: 18px 20px 46px; }
  .footerInner{
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,.10);
    display:flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .footerText{ font-size: 11px; color: rgba(255,255,255,.55); }
  .footerLinks{ display:flex; gap: 14px; font-size: 11px; color: rgba(255,255,255,.62); }

  @media (min-width: 860px){
    .nav{ display:flex; }
    .hero{ grid-template-columns: 1.2fr .8fr; gap: 18px; padding-top: 36px; }
    .heroMeta{ grid-template-columns: repeat(3, 1fr); }
    .cards{ grid-template-columns: repeat(3, 1fr); }
    .formRow2{ grid-template-columns: 1fr 1fr; }
    .orderGrid{ grid-template-columns: 1.2fr .8fr; }
    .h1{ font-size: 52px; }
    .heroImageWrap{ min-height: 360px; }
  }
`;
