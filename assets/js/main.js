/* =========================================================
   BongoTechLab — site script
   ---------------------------------------------------------
   EDIT YOUR COMPANY DETAILS HERE. Everything in SITE is used
   by the header, footer and contact page on every page.
   ========================================================= */
const SITE = {
  name: "BongoTechLab",
  phone: "+880 1XXX-XXXXXX",          // TODO: real phone
  phoneHref: "+8801XXXXXXXXX",        // TODO: same number, digits only
  email: "hello@bongotechlab.com",    // TODO: real email
  address: "House XX, Road XX, Dhaka 12XX, Bangladesh", // TODO: real address
  hours: "Sun – Thu, 9:30 AM – 6:30 PM",
  socials: {
    facebook: "#",   // TODO: https://facebook.com/...
    linkedin: "#",   // TODO: https://linkedin.com/company/...
    youtube: "#",    // TODO: https://youtube.com/@...
  },
};

/* ---------- Icon set (line icons, 24px grid) ---------- */
const P = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.8 2.8L16 10"/>',
  x: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
  box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 11.4a1.5 1.5 0 0 0 1.5 1.1h8.8a1.5 1.5 0 0 0 1.5-1.1L21 7H6"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V6l6 3v12H3z"/><path d="M7 17h2M12 17h2M17 17h1"/>',
  truck: '<path d="M2 6h11v10H2zM13 10h4l4 3.5V16h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.5 3.3-5.5 6.5-5.5s5.9 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14.8c1.7.8 2.8 2.6 3 5.2"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  wallet: '<path d="M3 7a2 2 0 0 1 2-2h13v4"/><path d="M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2z"/><circle cx="16" cy="14.5" r="1.3"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-7"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  cloud: '<path d="M7 18a5 5 0 0 1-.6-10A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9H7z"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8zM12 18v4"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="14" width="4" height="6" rx="1.5"/><rect x="17.5" y="14" width="4" height="6" rx="1.5"/><path d="M20 20c0 1-1.5 2-4 2h-2"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/>',
  sofa: '<path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2v-5z"/><path d="M5 18v2M19 18v2"/>',
  shirt: '<path d="M8 3l-5 3 2 5 2-1v11h10V10l2 1 2-5-5-3a4 4 0 0 1-8 0z"/>',
  store: '<path d="M3 9l2-5h14l2 5"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 12v8h14v-8M10 20v-5h4v5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  pill: '<path d="M10.5 3.5a5 5 0 0 1 7 7l-7 7a5 5 0 0 1-7-7l7-7zM7 7l7 7"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  sheet: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  quote: '<path d="M7 7h4v6c0 2.5-1.5 4-4 4M15 7h4v6c0 2.5-1.5 4-4 4" fill="currentColor"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
  flag: '<path d="M4 22V4M4 4h13l-2 4 2 4H4"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.3-2.3a4 4 0 0 0-5-5L2 10l8-8 2.3 2.3a4 4 0 0 0 2.4 2z"/>',
  receipt: '<path d="M5 3v18l2.5-1.5L10 21l2-1.5 2 1.5 2.5-1.5L19 21V3l-2.5 1.5L14 3l-2 1.5L10 3 7.5 4.5 5 3z"/><path d="M9 9h6M9 13h6"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/>',
  fb: '<path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H8v4h2v7h4v-7h3l1-4h-4V9.5c0-.3.2-.5.5-.5z" fill="currentColor" stroke="none"/>',
  li: '<path d="M4 9h3.5v11H4zM5.8 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.4v1.6c.5-.9 1.7-1.9 3.6-1.9 3.6 0 4.3 2.3 4.3 5.4V20h-3.5v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z" fill="currentColor" stroke="none"/>',
  yt: '<path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.4-1.2.4-3.8.4-3.8s0-2.6-.4-3.8zM10 15V9l5.2 3L10 15z" fill="currentColor" stroke="none"/>',
};
function icon(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;
}
function renderIcons(root = document) {
  root.querySelectorAll("i[data-icon]").forEach((el) => {
    const svg = icon(el.dataset.icon);
    el.outerHTML = el.className ? svg.replace("<svg ", `<svg class="${el.className}" `) : svg;
  });
}

/* ---------- Header & footer ---------- */
const NAV = [
  ["index.html", "Home"],
  ["bongo-erp.html", "Bongo ERP"],
  ["services.html", "Services"],
  ["about.html", "About"],
  ["contact.html", "Contact"],
];

function currentPage() {
  const f = location.pathname.split("/").pop();
  return f === "" ? "index.html" : f;
}

function renderHeader() {
  const host = document.getElementById("site-header");
  if (!host) return;
  const here = currentPage();
  host.outerHTML = `
  <header class="site-header" id="top">
    <div class="container">
      <a class="brand" href="index.html" aria-label="${SITE.name} home">
        <img src="assets/img/mark.png" alt="" width="34" height="38">
        <span>bongo<b>tech</b>lab</span>
      </a>
      <nav class="nav" aria-label="Main">
        ${NAV.map(([href, label]) => `<a href="${href}"${href === here ? ' class="is-active" aria-current="page"' : ""}>${label}</a>`).join("")}
        <a class="btn btn--primary btn--sm nav-mobile-cta" href="contact.html">Book a free demo</a>
      </nav>
      <div class="header-cta">
        <a class="btn btn--primary btn--sm" href="contact.html">Book a free demo ${icon("arrow")}</a>
      </div>
      <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>
    </div>
  </header>`;
}

function renderFooter() {
  const host = document.getElementById("site-footer");
  if (!host) return;
  const flush = host.hasAttribute("data-flush") ? " flush" : "";
  const year = new Date().getFullYear();
  host.outerHTML = `
  <footer class="site-footer${flush}">
    <div class="container">
      <div class="foot-grid">
        <div class="foot-about">
          <a class="brand brand--light" href="index.html" aria-label="${SITE.name} home">
            <span class="brand-tile"><img src="assets/img/mark.png" alt="" width="26" height="29"></span>
            <span>bongo<b>tech</b>lab</span>
          </a>
          <p>We build business software in Bangladesh: Bongo ERP and custom systems shaped around how your company already works.</p>
          <div class="socials">
            <a href="${SITE.socials.facebook}" aria-label="Facebook">${icon("fb")}</a>
            <a href="${SITE.socials.linkedin}" aria-label="LinkedIn">${icon("li")}</a>
            <a href="${SITE.socials.youtube}" aria-label="YouTube">${icon("yt")}</a>
          </div>
        </div>
        <div>
          <h5>Company</h5>
          <ul class="foot-links">
            <li><a href="about.html">About us</a></li>
            <li><a href="about.html#how-we-work">How we work</a></li>
            <li><a href="about.html#team">Team</a></li>
            <li><a href="contact.html">Careers</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>What we do</h5>
          <ul class="foot-links">
            <li><a href="bongo-erp.html">Bongo ERP</a></li>
            <li><a href="services.html#custom">Custom software</a></li>
            <li><a href="services.html#implementation">ERP implementation</a></li>
            <li><a href="services.html#integration">Integrations</a></li>
            <li><a href="services.html#support">Support &amp; care</a></li>
          </ul>
        </div>
        <div>
          <h5>Get in touch</h5>
          <ul class="foot-contact">
            <li>${icon("phone")}<a href="tel:${SITE.phoneHref}">${SITE.phone}</a></li>
            <li>${icon("mail")}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>${icon("pin")}<span>${SITE.address}</span></li>
            <li>${icon("clock")}<span>${SITE.hours}</span></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© ${year} ${SITE.name}. All rights reserved.</span>
        <span>Made in Dhaka, Bangladesh</span>
      </div>
    </div>
  </footer>
  <button class="to-top" type="button" aria-label="Back to top">${icon("up")}</button>`;
}

function fillSiteFields() {
  document.querySelectorAll("[data-site]").forEach((el) => {
    const key = el.dataset.site;
    if (SITE[key]) el.textContent = SITE[key];
    if (key === "phone" && el.tagName === "A") el.href = `tel:${SITE.phoneHref}`;
    if (key === "email" && el.tagName === "A") el.href = `mailto:${SITE.email}`;
  });
}

/* ---------- Behaviour ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  const btn = document.querySelector(".menu-btn");
  const toTop = document.querySelector(".to-top");
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("is-scrolled", y > 8);
    toTop && toTop.classList.toggle("show", y > 700);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));
  if (btn) {
    btn.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.querySelectorAll(".nav a").forEach((a) =>
      a.addEventListener("click", () => document.body.classList.remove("menu-open"))
    );
  }
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
}

function initCounters() {
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const run = (el) => {
    const end = parseFloat(el.dataset.count);
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.5 });
  els.forEach((e) => io.observe(e));
}

/* Module builder on the home page */
function initBuilder() {
  const grid = document.querySelector("[data-builder]");
  if (!grid) return;
  const mods = [...grid.querySelectorAll(".mod")];
  const count = document.querySelector("[data-plan-count]");
  const chips = document.querySelector("[data-plan-chips]");
  const cta = document.querySelector("[data-plan-cta]");
  const update = () => {
    const picked = mods.filter((m) => m.getAttribute("aria-pressed") === "true").map((m) => m.dataset.name);
    count.textContent = picked.length;
    chips.innerHTML = picked.length
      ? picked.map((n) => `<span>${n}</span>`).join("")
      : '<span class="empty">Pick the modules you need</span>';
    cta.href = "contact.html" + (picked.length ? "?modules=" + encodeURIComponent(picked.join(",")) : "");
  };
  mods.forEach((m) => m.addEventListener("click", () => {
    m.setAttribute("aria-pressed", m.getAttribute("aria-pressed") === "true" ? "false" : "true");
    update();
  }));
  update();
}

/* Order-to-cash flow: lights up step by step while visible */
function initFlow() {
  const flow = document.querySelector("[data-flow]");
  if (!flow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const steps = [...flow.querySelectorAll(".flow-step")];
  let i = 0, timer = null;
  const tick = () => {
    steps.forEach((s, k) => s.classList.toggle("is-live", k === i));
    i = (i + 1) % steps.length;
  };
  const io = new IntersectionObserver(([en]) => {
    if (en.isIntersecting && !timer) { tick(); timer = setInterval(tick, 1600); }
    else if (!en.isIntersecting && timer) { clearInterval(timer); timer = null; }
  }, { threshold: 0.3 });
  io.observe(flow);
}

/* Contact form: pre-selects modules from the builder, then opens an email draft */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  const picked = (params.get("modules") || "").split(",").filter(Boolean);
  form.querySelectorAll('input[name="modules"]').forEach((cb) => { if (picked.includes(cb.value)) cb.checked = true; });
  if (picked.length) {
    const sel = form.querySelector('select[name="interest"]');
    if (sel) sel.value = "Bongo ERP";
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const mods = d.getAll("modules");
    const body = [
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company") || "-"}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Email: ${d.get("email")}`,
      `Interested in: ${d.get("interest")}`,
      mods.length ? `Modules: ${mods.join(", ")}` : "",
      "",
      d.get("message") || "",
    ].filter((l) => l !== null).join("\n");
    const subject = `Website enquiry: ${d.get("interest")} (${d.get("company") || d.get("name")})`;
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.querySelector(".form-ok").classList.add("show");
  });
}

/* ---------- Boot ---------- */
renderHeader();
renderFooter();
renderIcons();
fillSiteFields();
initHeader();
initReveal();
initCounters();
initBuilder();
initFlow();
initContactForm();
