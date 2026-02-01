"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";

const phoneDisplay = "786-599-8099";
const phoneRaw = "7865998099";
const email = "unionkometrading@gmail.com";

// ✅ Put your image in /public and set the path here:
const HERO_PANEL_IMAGE_SRC = "/panel.jpg";

type Lang = "en" | "ht" | "es";

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

const I18N: Record<
  Lang,
  {
    langLabel: string;

    // top language bar
    chooseLanguage: string;

    // nav
    navMakeOrder: string;
    navBales: string;
    navAbout: string;
    navContact: string;
    navOrderNow: string;

    // brand
    brandSub: string;

    // hero
    eyebrow: string;
    h1a: string;
    h1bAccent: string;
    lead: string;
    heroBtnPrimary: string;
    heroBtnGhost: string;

    // meta
    metaPhone: string;
    metaEmail: string;
    metaLocation: string;

    // order section
    orderTitle: string;
    orderBadge: string;
    orderMuted: string;

    featuredTitle: string;
    featuredSub: string;

    // form labels
    fullName: string;
    fullNamePh: string;

    company: string;
    companyPh: string;

    phone: string;
    phonePh: string;

    emailLabel: string;
    emailPh: string;

    destination: string;
    destinationPh: string;

    country: string;
    countryPh: string;

    pounds: string;
    poundsPh: string;

    baleType: string;
    baleMixed: string;
    baleSorted: string;

    notes: string;
    notesPh: string;

    submit: string;
    sending: string;
    emailInstead: string;
    hint: string;

    // status messages
    errFill: string;
    okSent: string;
    errGeneric: string;

    // side panel
    nextTitle: string;
    next1: string;
    next2: string;
    next3: string;
    urgentTitle: string;
    urgentText: string;
    call: (phone: string) => string;

    // services
    servicesTitle: string;
    servicesMuted: string;
    card1t: string;
    card1d: string;
    card2t: string;
    card2d: string;
    card3t: string;
    card3d: string;
    cardFoot: string;

    // about
    aboutTitle: string;
    aboutMuted: string;
    aboutCopy: string;

    // contact
    contactTitle: string;
    contactMuted: string;

    // footer
    footerText: string;
  }
> = {
  en: {
    langLabel: "English",
    chooseLanguage: "Language:",
    navMakeOrder: "Make an Order",
    navBales: "Bales",
    navAbout: "About",
    navContact: "Contact",
    navOrderNow: "Order Now",
    brandSub: "Miami, FL • Used Clothing Bales",
    eyebrow: "Export-ready bales • Fast quotes • Consistent supply",
    h1a: "Used clothing bales,",
    h1bAccent: " packed & ready to ship",
    lead:
      "UNION KOMES TRADING L.L.C. supplies used clothing bales from the USA for export buyers, wholesalers, and resellers — with clear terms, quick communication, and dependable sourcing.",
    heroBtnPrimary: "Make an Order",
    heroBtnGhost: "View Bale Options",
    metaPhone: "Phone",
    metaEmail: "Email",
    metaLocation: "Location",
    orderTitle: "Make an Order",
    orderBadge: "Fast Order Form",
    orderMuted:
      "Fill this out and we’ll receive it instantly by email so we can confirm pricing + next steps.",
    featuredTitle: "Place your bale request",
    featuredSub: "Mixed or Sorted • Add pounds • Submit",
    fullName: "Full Name *",
    fullNamePh: "Your name",
    company: "Company (optional)",
    companyPh: "Company name",
    phone: "Phone (optional)",
    phonePh: "+1 786...",
    emailLabel: "Email (optional)",
    emailPh: "buyer@email.com",
    destination: "Destination Address *",
    destinationPh: "Street / City / State / Zip",
    country: "Country *",
    countryPh: "e.g. United States",
    pounds: "Pounds Needed (lbs) *",
    poundsPh: "e.g. 5000",
    baleType: "Bale Type *",
    baleMixed: "Mixed",
    baleSorted: "Sorted",
    notes: "Notes (optional)",
    notesPh: "Any restrictions (no shoes, no winter), categories needed, timeline, etc.",
    submit: "Submit Order",
    sending: "Sending...",
    emailInstead: "Email Instead",
    hint:
      "* Required fields: Name, Address, Country, Pounds. Submits directly to our email.",
    errFill:
      "Please fill in: name, address, country, and pounds (must be a positive number).",
    okSent: "Order request sent. We’ll contact you shortly.",
    errGeneric: "Something went wrong.",
    nextTitle: "What happens next",
    next1: "We receive your order request instantly by email.",
    next2: "We confirm availability (mixed/sorted) and shipping options.",
    next3: "We reply with pricing + next steps (typically under 24 hours).",
    urgentTitle: "Need it urgent?",
    urgentText: "Call now and we’ll lock in the details quickly.",
    call: (p) => `Call ${p}`,
    servicesTitle: "Used Clothing Bales",
    servicesMuted:
      "Simple, export-ready options. Tell us your destination + target grade and we’ll quote fast.",
    card1t: "Mixed Used Clothing Bales",
    card1d: "Everyday assorted clothing — strong option for general resale markets.",
    card2t: "Sorted / Category Bales",
    card2d: "Men / women / kids or category-focused bales depending on availability.",
    card3t: "Logistics & Export Support",
    card3d: "Palletizing, loading coordination, and documentation-friendly terms.",
    cardFoot: "Typical quote response: under 24 hours.",
    aboutTitle: "About",
    aboutMuted:
      "Based in Miami, Florida. Focused on reliable supply, clean communication, and smooth export flow.",
    aboutCopy:
      "UNION KOMES TRADING L.L.C. specializes in sourcing and supplying used clothing bales from the USA. We keep it simple: quick responses, clear terms, and consistent follow-through so buyers can plan shipments with confidence.",
    contactTitle: "Contact",
    contactMuted: "Reach out for bale pricing or export questions.",
    footerText: "Used Clothing Bales • Miami, FL",
  },

  ht: {
    langLabel: "Kreyòl Ayisyen",
    chooseLanguage: "Lang:",
    navMakeOrder: "Fè yon kòmand",
    navBales: "Bale yo",
    navAbout: "Sou nou",
    navContact: "Kontak",
    navOrderNow: "Kòmande kounye a",
    brandSub: "Miami, FL • Bale Rad Itilize",
    eyebrow: "Bale pare pou ekspòtasyon • Pri rapid • Stock stab",
    h1a: "Bale rad itilize,",
    h1bAccent: " anbale & pare pou voye",
    lead:
      "UNION KOMES TRADING L.L.C. bay bale rad itilize soti Etazini pou achtè ekspòtasyon, grossist, ak revandè — ak kondisyon klè, repons rapid, ak sous serye.",
    heroBtnPrimary: "Fè yon kòmand",
    heroBtnGhost: "Gade opsyon bale yo",
    metaPhone: "Telefòn",
    metaEmail: "Imèl",
    metaLocation: "Kote",
    orderTitle: "Fè yon kòmand",
    orderBadge: "Fòm rapid",
    orderMuted:
      "Ranpli sa a, n ap resevwa li imedyatman pa imèl pou nou konfime pri + etap kap vini yo.",
    featuredTitle: "Mete demann bale ou",
    featuredSub: "Melanje oswa Triye • Mete liv • Voye",
    fullName: "Non konplè *",
    fullNamePh: "Non ou",
    company: "Konpayi (opsyonèl)",
    companyPh: "Non konpayi an",
    phone: "Telefòn (opsyonèl)",
    phonePh: "+1 786...",
    emailLabel: "Imèl (opsyonèl)",
    emailPh: "buyer@email.com",
    destination: "Adrès destinasyon *",
    destinationPh: "Lari / Vil / Eta / Kòd postal",
    country: "Peyi *",
    countryPh: "eg. Ayiti",
    pounds: "Kantite liv (lbs) *",
    poundsPh: "eg. 5000",
    baleType: "Kalite bale *",
    baleMixed: "Melanje",
    baleSorted: "Triye",
    notes: "Nòt (opsyonèl)",
    notesPh: "Nenpòt restriksyon (pa soulye, pa sezon fredi), kategori, delè, elatriye.",
    submit: "Voye kòmand",
    sending: "Ap voye...",
    emailInstead: "Voye pa imèl",
    hint:
      "* Chan obligatwa: Non, Adrès, Peyi, Liv. Li ale dirèkteman nan imèl nou.",
    errFill:
      "Tanpri ranpli: non, adrès, peyi, ak liv (dwe yon nimewo pozitif).",
    okSent: "Nou resevwa demann ou a. N ap kontakte ou byento.",
    errGeneric: "Gen yon pwoblèm.",
    nextTitle: "Kisa k ap pase apre",
    next1: "Nou resevwa demann ou a imedyatman pa imèl.",
    next2: "Nou konfime disponiblite (melanje/triyè) ak opsyon chajman.",
    next3: "Nou reponn ak pri + etap kap vini yo (an jeneral < 24 èdtan).",
    urgentTitle: "Ou bezwen li vit?",
    urgentText: "Rele kounye a pou nou fè sa rapid.",
    call: (p) => `Rele ${p}`,
    servicesTitle: "Bale Rad Itilize",
    servicesMuted:
      "Opsyon senp, pare pou ekspòtasyon. Di nou destinasyon + kalite ou vize a, n ap ba ou pri rapid.",
    card1t: "Bale Melanje",
    card1d: "Rad chak jou melanje — bon pou mache revann nòmal.",
    card2t: "Bale Triye / Pa Kategori",
    card2d: "Gason / fi / timoun oswa bale pa kategori selon sa ki disponib.",
    card3t: "Lojistik & Sipò Ekspòtasyon",
    card3d: "Palèt, kowòdinasyon chajman, ak tèm fasil pou dokiman.",
    cardFoot: "Repons pou pri: an jeneral < 24 èdtan.",
    aboutTitle: "Sou nou",
    aboutMuted:
      "Nou baze nan Miami, Florid. Nou konsantre sou stock serye, bon kominikasyon, ak ekspòtasyon san tèt chaje.",
    aboutCopy:
      "UNION KOMES TRADING L.L.C. espesyalize nan jwenn epi founi bale rad itilize soti Etazini. Nou fè li senp: repons rapid, kondisyon klè, epi nou suiv dosye yo seryezman pou achtè yo ka planifye chajman yo ak konfyans.",
    contactTitle: "Kontak",
    contactMuted: "Ekri oswa rele pou pri bale oswa kesyon ekspòtasyon.",
    footerText: "Bale Rad Itilize • Miami, FL",
  },

  es: {
    langLabel: "Español",
    chooseLanguage: "Idioma:",
    navMakeOrder: "Hacer un pedido",
    navBales: "Fardos",
    navAbout: "Nosotros",
    navContact: "Contacto",
    navOrderNow: "Pedir ahora",
    brandSub: "Miami, FL • Fardos de ropa usada",
    eyebrow:
      "Fardos listos para exportación • Cotización rápida • Suministro constante",
    h1a: "Fardos de ropa usada,",
    h1bAccent: " empacados y listos para enviar",
    lead:
      "UNION KOMES TRADING L.L.C. suministra fardos de ropa usada desde EE. UU. para compradores de exportación, mayoristas y revendedores — con términos claros, comunicación rápida y abastecimiento confiable.",
    heroBtnPrimary: "Hacer un pedido",
    heroBtnGhost: "Ver opciones de fardos",
    metaPhone: "Teléfono",
    metaEmail: "Correo",
    metaLocation: "Ubicación",
    orderTitle: "Hacer un pedido",
    orderBadge: "Formulario rápido",
    orderMuted:
      "Completa esto y lo recibiremos al instante por correo para confirmar precio + próximos pasos.",
    featuredTitle: "Solicita tu fardo",
    featuredSub: "Mixto o Clasificado • Agrega libras • Enviar",
    fullName: "Nombre completo *",
    fullNamePh: "Tu nombre",
    company: "Empresa (opcional)",
    companyPh: "Nombre de la empresa",
    phone: "Teléfono (opcional)",
    phonePh: "+1 786...",
    emailLabel: "Correo (opcional)",
    emailPh: "buyer@email.com",
    destination: "Dirección de destino *",
    destinationPh: "Calle / Ciudad / Estado / Código postal",
    country: "País *",
    countryPh: "ej. República Dominicana",
    pounds: "Libras necesarias (lbs) *",
    poundsPh: "ej. 5000",
    baleType: "Tipo de fardo *",
    baleMixed: "Mixto",
    baleSorted: "Clasificado",
    notes: "Notas (opcional)",
    notesPh:
      "Restricciones (sin zapatos, sin invierno), categorías, tiempos, etc.",
    submit: "Enviar pedido",
    sending: "Enviando...",
    emailInstead: "Enviar por correo",
    hint:
      "* Campos obligatorios: Nombre, Dirección, País, Libras. Se envía directo a nuestro correo.",
    errFill:
      "Por favor completa: nombre, dirección, país y libras (debe ser un número positivo).",
    okSent: "Solicitud enviada. Te contactaremos pronto.",
    errGeneric: "Algo salió mal.",
    nextTitle: "Qué sigue",
    next1: "Recibimos tu solicitud al instante por correo.",
    next2: "Confirmamos disponibilidad (mixto/clasificado) y opciones de envío.",
    next3:
      "Respondemos con precio + próximos pasos (normalmente en menos de 24 horas).",
    urgentTitle: "¿Lo necesitas urgente?",
    urgentText: "Llama ahora y cerramos los detalles rápido.",
    call: (p) => `Llamar ${p}`,
    servicesTitle: "Fardos de ropa usada",
    servicesMuted:
      "Opciones simples y listas para exportación. Dinos destino + calidad objetivo y cotizamos rápido.",
    card1t: "Fardos mixtos de ropa usada",
    card1d: "Ropa surtida de uso diario — ideal para reventa general.",
    card2t: "Fardos clasificados / por categoría",
    card2d: "Hombre / mujer / niños o por categoría según disponibilidad.",
    card3t: "Logística y soporte de exportación",
    card3d:
      "Paletizado, coordinación de carga y términos amigables para documentación.",
    cardFoot: "Respuesta típica: menos de 24 horas.",
    aboutTitle: "Nosotros",
    aboutMuted:
      "Basados en Miami, Florida. Enfocados en suministro confiable, comunicación clara y exportación fluida.",
    aboutCopy:
      "UNION KOMES TRADING L.L.C. se especializa en abastecer y suministrar fardos de ropa usada desde EE. UU. Lo mantenemos simple: respuestas rápidas, términos claros y cumplimiento consistente para que los compradores planifiquen sus envíos con confianza.",
    contactTitle: "Contacto",
    contactMuted: "Escríbenos o llámanos para precios o preguntas de exportación.",
    footerText: "Fardos de ropa usada • Miami, FL",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = I18N[lang];

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
      setStatus({ type: "err", msg: t.errFill });
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
          lang,
        }),
      });

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

      setStatus({ type: "ok", msg: t.okSent });

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
      setStatus({ type: "err", msg: err?.message || t.errGeneric });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="wrap">
      {/* ✅ Top language bar */}
      <div className="topBar">
        <div className="topBarInner">
          <div className="topBarLeft">
            <span className="topBarLabel">{t.chooseLanguage}</span>
            <div className="langPills" role="tablist" aria-label="Language selector">
              <button
                type="button"
                className={`langPill ${lang === "en" ? "on" : ""}`}
                onClick={() => setLang("en")}
                role="tab"
                aria-selected={lang === "en"}
              >
                English
              </button>
              <button
                type="button"
                className={`langPill ${lang === "ht" ? "on" : ""}`}
                onClick={() => setLang("ht")}
                role="tab"
                aria-selected={lang === "ht"}
              >
                Kreyòl
              </button>
              <button
                type="button"
                className={`langPill ${lang === "es" ? "on" : ""}`}
                onClick={() => setLang("es")}
                role="tab"
                aria-selected={lang === "es"}
              >
                Español
              </button>
            </div>
          </div>

          <div className="topBarRight">
            <a className="topMiniLink" href={`tel:+1${phoneRaw}`}>
              {phoneDisplay}
            </a>
            <span className="dot" aria-hidden />
            <a
              className="topMiniLink"
              href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Inquiry`}
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="brand">
          {/* ✅ Logo next to company name */}
          <div className="brandLogoWrap" aria-hidden>
            <Image
              src="/logoukt1.png"
              alt="UNION KOMES TRADING logo"
              width={44}
              height={44}
              className="brandLogo"
              priority
            />
          </div>

          <div className="brandText">
            <div className="brandName">UNION KOMES TRADING L.L.C.</div>
            <div className="brandSub">{t.brandSub}</div>
          </div>
        </div>

        <nav className="nav">
          <a className="orderLink" href="#order">
            {t.navMakeOrder}
          </a>
          <a href="#services">{t.navBales}</a>
          <a href="#about">{t.navAbout}</a>
          <a href="#contact">{t.navContact}</a>
          <a className="navCta" href="#order">
            {t.navOrderNow}
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div className="eyebrow">
            <span className="spark" aria-hidden />
            {t.eyebrow}
          </div>

          <h1 className="h1">
            {t.h1a}
            <span className="accent">{t.h1bAccent}</span>.
          </h1>

          <p className="lead">{t.lead}</p>

          <div className="heroActions">
            <a className="btnPrimary" href="#order">
              {t.heroBtnPrimary}
            </a>
            <a className="btnGhost" href="#services">
              {t.heroBtnGhost}
            </a>
          </div>

          <div className="heroMeta">
            <a className="metaItem" href={`tel:+1${phoneRaw}`}>
              <div className="metaLabel">{t.metaPhone}</div>
              <div className="metaValue">{phoneDisplay}</div>
            </a>

            <a
              className="metaItem"
              href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Inquiry`}
            >
              <div className="metaLabel">{t.metaEmail}</div>
              <div className="metaValue">{email}</div>
            </a>

            <div className="metaItem">
              <div className="metaLabel">{t.metaLocation}</div>
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
            <h2 className="h2">{t.orderTitle}</h2>
            <span className="badge">{t.orderBadge}</span>
          </div>
          <p className="muted">{t.orderMuted}</p>
        </div>

        <div className="orderGrid">
          <form className="panel panelFeatured form" onSubmit={submitOrder}>
            <div className="featuredTop">
              <div className="featuredTitle">{t.featuredTitle}</div>
              <div className="featuredSub">{t.featuredSub}</div>
            </div>

            <div className="formRow2">
              <div className="field">
                <label className="lab">{t.fullName}</label>
                <input
                  className="input"
                  value={order.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t.fullNamePh}
                />
              </div>
              <div className="field">
                <label className="lab">{t.company}</label>
                <input
                  className="input"
                  value={order.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder={t.companyPh}
                />
              </div>
            </div>

            <div className="formRow2">
              <div className="field">
                <label className="lab">{t.phone}</label>
                <input
                  className="input"
                  value={order.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={t.phonePh}
                />
              </div>
              <div className="field">
                <label className="lab">{t.emailLabel}</label>
                <input
                  className="input"
                  value={order.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder={t.emailPh}
                />
              </div>
            </div>

            <div className="field">
              <label className="lab">{t.destination}</label>
              <input
                className="input"
                value={order.address}
                onChange={(e) => update("address", e.target.value)}
                placeholder={t.destinationPh}
              />
            </div>

            <div className="formRow2">
              <div className="field">
                <label className="lab">{t.country}</label>
                <input
                  className="input"
                  value={order.country}
                  onChange={(e) => update("country", e.target.value)}
                  placeholder={t.countryPh}
                />
              </div>

              <div className="field">
                <label className="lab">{t.pounds}</label>
                <input
                  className="input"
                  value={order.pounds}
                  onChange={(e) => update("pounds", e.target.value)}
                  placeholder={t.poundsPh}
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="field">
              <label className="lab">{t.baleType}</label>
              <div className="seg">
                <button
                  type="button"
                  className={`segBtn ${order.baleType === "mixed" ? "on" : ""}`}
                  onClick={() => update("baleType", "mixed")}
                >
                  {t.baleMixed}
                </button>
                <button
                  type="button"
                  className={`segBtn ${order.baleType === "sorted" ? "on" : ""}`}
                  onClick={() => update("baleType", "sorted")}
                >
                  {t.baleSorted}
                </button>
              </div>
            </div>

            <div className="field">
              <label className="lab">{t.notes}</label>
              <textarea
                className="textarea"
                value={order.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder={t.notesPh}
                rows={4}
              />
            </div>

            {status && <div className={`alert ${status.type}`}>{status.msg}</div>}

            <div className="heroActions">
              <button className="btnPrimary" type="submit" disabled={!canSubmit}>
                {submitting ? t.sending : t.submit}
              </button>
              <a
                className="btnGhost"
                href={`mailto:${email}?subject=Used%20Clothing%20Bales%20-%20Order%20Request`}
              >
                {t.emailInstead}
              </a>
            </div>

            <div className="hint">{t.hint}</div>
          </form>

          <div className="panel orderSide orderSideFeatured">
            <div className="sideTitle">{t.nextTitle}</div>
            <div className="sideList">
              <div className="sideItem">
                <div className="sideK">1</div>
                <div className="sideV">{t.next1}</div>
              </div>
              <div className="sideItem">
                <div className="sideK">2</div>
                <div className="sideV">{t.next2}</div>
              </div>
              <div className="sideItem">
                <div className="sideK">3</div>
                <div className="sideV">{t.next3}</div>
              </div>
            </div>

            <div className="orderSideCTA">
              <div className="orderSideCTATitle">{t.urgentTitle}</div>
              <div className="orderSideCTAText">{t.urgentText}</div>
              <a className="btnPrimary" href={`tel:+1${phoneRaw}`}>
                {t.call(phoneDisplay)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SERVICES now AFTER order */}
      <section id="services" className="section">
        <div className="sectionHead">
          <h2 className="h2">{t.servicesTitle}</h2>
          <p className="muted">{t.servicesMuted}</p>
        </div>

        <div className="cards">
          {[
            [t.card1t, t.card1d],
            [t.card2t, t.card2d],
            [t.card3t, t.card3d],
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <div className="cardTitle">{title}</div>
              <div className="cardDesc">{desc}</div>
              <div className="cardFoot">{t.cardFoot}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="panel">
          <div className="sectionHead tight">
            <h2 className="h2">{t.aboutTitle}</h2>
            <p className="muted">{t.aboutMuted}</p>
          </div>

          <p className="copy">{t.aboutCopy}</p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="contact contactSingle">
          <div className="panel">
            <div className="sectionHead tight">
              <h2 className="h2">{t.contactTitle}</h2>
              <p className="muted">{t.contactMuted}</p>
            </div>

            <div className="contactLines">
              <div className="line">
                <span className="label">{t.metaLocation}</span>
                <span className="value">Miami, FL (USA)</span>
              </div>

              <div className="line">
                <span className="label">{t.metaPhone}</span>
                <a className="valueLink" href={`tel:+1${phoneRaw}`}>
                  {phoneDisplay}
                </a>
              </div>

              <div className="line">
                <span className="label">{t.metaEmail}</span>
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
                {t.navMakeOrder}
              </a>
              <a className="btnGhost" href={`tel:+1${phoneRaw}`}>
                {t.call(phoneDisplay)}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerText">
            © {new Date().getFullYear()} UNION KOMES TRADING L.L.C. • {t.footerText}
          </div>
          <div className="footerLinks">
            <a href="#order">{t.navMakeOrder}</a>
            <a href="#services">{t.navBales}</a>
            <a href="#about">{t.navAbout}</a>
            <a href="#contact">{t.navContact}</a>
          </div>
        </div>
      </footer>

      <style>{css}</style>
    </main>
  );
}

const css = `
  :root{
    /* ✅ Light mode theme */
    --bg: #F6F7FB;
    --panel: rgba(255,255,255,.78);
    --panel2: rgba(255,255,255,.62);
    --text: rgba(15,23,42,.94);      /* slate-900 */
    --muted: rgba(15,23,42,.62);
    --line: rgba(15,23,42,.12);

    --shadow: 0 18px 55px rgba(15,23,42,.10);
    --shadow2: 0 10px 26px rgba(15,23,42,.08);
    --radius: 22px;

    /* Keep yellow as the main accent */
    --accent: #FACC15; /* yellow */
    --accent2: #16A34A; /* green */
    --orderGlowA: rgba(250,204,21,.22);
    --orderGlowB: rgba(22,163,74,.14);

    --inkOnAccent: rgba(10,12,18,.96);
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
      radial-gradient(1100px 700px at 15% 10%, rgba(250,204,21,.22), transparent 55%),
      radial-gradient(900px 600px at 85% 25%, rgba(34,197,94,.14), transparent 55%),
      radial-gradient(900px 700px at 40% 90%, rgba(59,130,246,.10), transparent 55%),
      linear-gradient(var(--bg), var(--bg));
  }

  /* ✅ Top language bar */
  .topBar{
    position: sticky;
    top: 0;
    z-index: 30;
    backdrop-filter: blur(10px);
    background: rgba(246,247,251,.72);
    border-bottom: 1px solid var(--line);
  }
  .topBarInner{
    max-width: 1120px;
    margin: 0 auto;
    padding: 10px 20px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap: 12px;
  }
  .topBarLeft{
    display:flex;
    align-items:center;
    gap: 10px;
    min-width: 0;
  }
  .topBarLabel{
    font-size: 12px;
    color: rgba(15,23,42,.62);
    font-weight: 950;
    letter-spacing: .2px;
  }
  .langPills{ display:flex; gap: 8px; flex-wrap: wrap; }
  .langPill{
    border-radius: 999px;
    padding: 8px 10px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,.75);
    color: rgba(15,23,42,.86);
    font-size: 12px;
    font-weight: 950;
    cursor: pointer;
    box-shadow: var(--shadow2);
  }
  .langPill.on{
    border-color: rgba(250,204,21,.55);
    background: rgba(250,204,21,.28);
    color: rgba(15,23,42,.92);
  }
  .topBarRight{
    display:none;
    align-items:center;
    gap: 10px;
    color: rgba(15,23,42,.62);
    font-size: 12px;
    white-space: nowrap;
  }
  .topMiniLink{
    color: rgba(15,23,42,.80);
    font-weight: 950;
  }
  .dot{
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: rgba(15,23,42,.30);
  }

  .header{
    max-width: 1120px;
    margin: 0 auto;
    padding: 18px 20px 22px;
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
  .brandLogoWrap{
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: rgba(255,255,255,.80);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    display:flex;
    align-items:center;
    justify-content:center;
    overflow: hidden;
    flex: 0 0 auto;
  }
  .brandLogo{
    width: 34px !important;
    height: 34px !important;
    object-fit: contain;
  }

  .brandText{ min-width: 0; }
  .brandName{
    font-size: 13px;
    font-weight: 950;
    letter-spacing: .55px;
    color: rgba(15,23,42,.94);
  }
  .brandSub{ font-size: 12px; color: var(--muted); margin-top: 2px; }

  .nav{
    display: none;
    align-items: center;
    gap: 18px;
    font-size: 13px;
    color: rgba(15,23,42,.62);
  }
  .nav a:hover{ text-decoration: none; color: rgba(15,23,42,.92); }

  .orderLink{
    color: rgba(15,23,42,.92);
    font-weight: 950;
  }

  .navCta{
    padding: 10px 14px;
    border-radius: 14px;
    background: rgba(250,204,21,.35);
    border: 1px solid rgba(250,204,21,.55);
    color: rgba(15,23,42,.92);
    font-weight: 950;
    box-shadow: var(--shadow2);
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
    background: rgba(255,255,255,.75);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    font-size: 12px;
    color: rgba(15,23,42,.74);
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
    color: rgba(15,23,42,.96);
  }
  .accent{ color: #D6A800; } /* slightly deeper yellow for readability */

  .lead{
    margin-top: 14px;
    max-width: 62ch;
    font-size: 16px;
    color: rgba(15,23,42,.72);
    line-height: 1.7;
  }

  .heroActions{ margin-top: 18px; display: flex; gap: 10px; flex-wrap: wrap; }

  .btnPrimary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding: 12px 16px;
    border-radius: 16px;
    background: var(--accent);
    color: var(--inkOnAccent);
    font-weight: 950;
    font-size: 13px;
    border: 1px solid rgba(250,204,21,.55);
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
    background: rgba(255,255,255,.78);
    color: rgba(15,23,42,.92);
    font-weight: 950;
    font-size: 13px;
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    text-decoration: none !important;
  }

  .heroMeta{ margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 10px; }

  .metaItem{
    border-radius: var(--radius);
    padding: 14px 14px;
    background: rgba(255,255,255,.78);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
    text-decoration: none !important;
  }
  .metaLabel{ font-size: 12px; font-weight: 950; color: rgba(15,23,42,.56); }
  .metaValue{
    margin-top: 4px;
    font-size: 13px;
    color: rgba(15,23,42,.88);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .heroImageWrap{
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid var(--line);
    box-shadow: var(--shadow);
    background: rgba(255,255,255,.65);
    min-height: 260px;
  }
  .heroImage{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center top;
    transform: scale(1.06) translateY(-6px);
    filter: contrast(1.02) saturate(1.02);
  }

  .section{ max-width: 1120px; margin: 0 auto; padding: 44px 20px; }

  /* ✅ Yellow heading underline stays */
  .h2{
    margin: 0;
    font-size: 26px;
    letter-spacing: -0.5px;
    color: rgba(15,23,42,.94);
  }
  .h2::after{
    content:"";
    display:block;
    width: 56px;
    height: 3px;
    border-radius: 999px;
    margin-top: 10px;
    background: linear-gradient(90deg, rgba(250,204,21,.95), rgba(22,163,74,.75));
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
    border: 1px solid rgba(250,204,21,.55);
    background: rgba(250,204,21,.22);
    color: rgba(15,23,42,.92);
    font-weight: 950;
    font-size: 12px;
    box-shadow: var(--shadow2);
  }

  .muted{
    margin: 0;
    font-size: 13px;
    color: rgba(15,23,42,.62);
    line-height: 1.6;
    max-width: 72ch;
  }

  .panel{
    border-radius: 26px;
    padding: 18px;
    background: rgba(255,255,255,.80);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
  }

  /* ✅ Order section glow */
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
    filter: blur(10px);
    opacity: .95;
  }
  .orderSection:after{
    content:"";
    position:absolute;
    inset: 0;
    z-index: -1;
    border-radius: 32px;
    border: 1px solid rgba(250,204,21,.22);
    background: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.18));
  }

  .panelFeatured{
    border: 1px solid rgba(250,204,21,.45);
    background: linear-gradient(180deg, rgba(250,204,21,.20), rgba(255,255,255,.78));
    box-shadow: 0 22px 70px rgba(250,204,21,.12), var(--shadow2);
  }
  .featuredTop{
    padding: 12px 12px 14px;
    border-radius: 18px;
    background: rgba(255,255,255,.72);
    border: 1px solid var(--line);
    margin-bottom: 12px;
  }
  .featuredTitle{ font-size: 14px; font-weight: 950; color: rgba(15,23,42,.92); }
  .featuredSub{ margin-top: 4px; font-size: 12px; color: rgba(15,23,42,.62); }

  .orderGrid{ margin-top: 18px; display: grid; grid-template-columns: 1fr; gap: 12px; }
  .form{ padding: 18px; }

  .field{ display: grid; gap: 8px; margin-top: 12px; }
  .field:first-child{ margin-top: 0; }

  .lab{ font-size: 12px; color: rgba(15,23,42,.70); font-weight: 950; }

  .input, .textarea{
    width: 100%;
    border-radius: 16px;
    border: 1px solid rgba(15,23,42,.14);
    background: rgba(255,255,255,.92);
    color: rgba(15,23,42,.92);
    padding: 12px 12px;
    outline: none;
    transition: border-color .12s ease, box-shadow .12s ease;
  }
  .input::placeholder, .textarea::placeholder{ color: rgba(15,23,42,.45); }
  .input:focus, .textarea:focus{
    border-color: rgba(250,204,21,.70);
    box-shadow: 0 0 0 4px rgba(250,204,21,.18);
  }

  .textarea{ resize: vertical; min-height: 110px; }

  .formRow2{ display: grid; grid-template-columns: 1fr; gap: 12px; }

  .seg{ display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .segBtn{
    border-radius: 16px;
    border: 1px solid rgba(15,23,42,.14);
    background: rgba(255,255,255,.82);
    color: rgba(15,23,42,.92);
    padding: 12px 12px;
    font-weight: 950;
    cursor: pointer;
    box-shadow: var(--shadow2);
  }
  .segBtn.on{
    border-color: rgba(250,204,21,.70);
    background: rgba(250,204,21,.25);
  }

  .alert{
    margin-top: 12px;
    padding: 12px 12px;
    border-radius: 16px;
    border: 1px solid rgba(15,23,42,.12);
    font-size: 13px;
    line-height: 1.5;
  }
  .alert.ok{
    background: rgba(22,163,74,.12);
    border-color: rgba(22,163,74,.22);
  }
  .alert.err{
    background: rgba(239,68,68,.12);
    border-color: rgba(239,68,68,.22);
  }

  .hint{ margin-top: 10px; font-size: 12px; color: rgba(15,23,42,.55); line-height: 1.6; }

  .orderSideFeatured{
    border: 1px solid rgba(22,163,74,.18);
    background: linear-gradient(180deg, rgba(22,163,74,.08), rgba(255,255,255,.74));
  }

  .orderSide{ padding: 18px; }
  .sideTitle{ font-size: 14px; font-weight: 950; color: rgba(15,23,42,.92); }
  .sideList{ margin-top: 12px; display: grid; gap: 10px; }
  .sideItem{
    display: grid;
    grid-template-columns: 26px 1fr;
    gap: 10px;
    align-items: start;
    padding: 12px 12px;
    border-radius: 18px;
    background: rgba(255,255,255,.72);
    border: 1px solid rgba(15,23,42,.10);
  }
  .sideK{
    width: 26px; height: 26px;
    display:flex; align-items:center; justify-content:center;
    border-radius: 999px;
    background: rgba(250,204,21,.25);
    border: 1px solid rgba(250,204,21,.55);
    font-weight: 950;
    font-size: 12px;
    color: rgba(15,23,42,.92);
  }
  .sideV{ font-size: 13px; color: rgba(15,23,42,.72); line-height: 1.6; }

  .orderSideCTA{
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid rgba(15,23,42,.10);
    display:grid;
    gap: 8px;
  }
  .orderSideCTATitle{ font-weight: 950; color: rgba(15,23,42,.92); }
  .orderSideCTAText{ font-size: 12px; color: rgba(15,23,42,.62); line-height: 1.6; }

  .cards{ margin-top: 18px; display:grid; grid-template-columns: 1fr; gap: 12px; }
  .card{
    border-radius: 26px;
    padding: 18px;
    background: rgba(255,255,255,.78);
    border: 1px solid var(--line);
    box-shadow: var(--shadow2);
  }
  .cardTitle{ font-size: 15px; font-weight: 950; color: rgba(15,23,42,.92); }
  .cardDesc{ margin-top: 8px; font-size: 13px; color: rgba(15,23,42,.72); line-height: 1.7; }
  .cardFoot{ margin-top: 12px; font-size: 12px; color: rgba(15,23,42,.55); }

  .copy{ margin-top: 14px; color: rgba(15,23,42,.74); line-height: 1.75; }

  .contactLines{ margin-top: 14px; display:grid; gap: 10px; }
  .line{
    display:flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: rgba(255,255,255,.72);
  }
  .label{ font-size: 12px; color: rgba(15,23,42,.58); font-weight: 950; }
  .value{ font-size: 13px; color: rgba(15,23,42,.80); }
  .valueLink{ font-size: 13px; color: rgba(15,23,42,.92); font-weight: 950; }

  .footer{ max-width: 1120px; margin: 0 auto; padding: 18px 20px 46px; }
  .footerInner{
    padding-top: 16px;
    border-top: 1px solid rgba(15,23,42,.10);
    display:flex;
    gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .footerText{ font-size: 11px; color: rgba(15,23,42,.58); }
  .footerLinks{ display:flex; gap: 14px; font-size: 11px; color: rgba(15,23,42,.62); }

  .sectionHead.tight{ margin-bottom: 6px; }

  @media (min-width: 860px){
    .topBarRight{ display:flex; }
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

