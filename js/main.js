/* ============================================================
   PAZURI BEACH RESTAURANT — SITE LOGIC
   ------------------------------------------------------------
   1) CONFIG — put the real WhatsApp number here (no + or spaces)
   ============================================================ */

const CONFIG = {
  whatsappNumber: "254725437043", // ← replace with the restaurant's number
  restaurantName: "Pazuri Beach Restaurant"
};

/* ---------- Small helper ---------- */

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ---------- WhatsApp helpers ---------- */

function waLink(message) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const RESERVATION_MESSAGE =
`Hello ${CONFIG.restaurantName}!

I would like to reserve a table.

Name:
Number of guests:
Date:
Time:
Special requests:

Thank you.`;

function blankOrderMessage() {
  return `Hello ${CONFIG.restaurantName}!

I would like to place an order.

Name:
Phone:
Order:
Delivery / Pickup:
Additional notes:

Thank you.`;
}

function cartOrderMessage(items, totalKES) {
  const lines = items.map(i => `- ${i.qty} x ${i.name} (KES ${(i.priceKES * i.qty).toLocaleString()})`);
  return `Hello ${CONFIG.restaurantName}!

I would like to place an order.

Order:
${lines.join("\n")}

Total: KES ${totalKES.toLocaleString()}

Name:
Phone:
Delivery / Pickup:
Additional notes:

Thank you.`;
}

/* Wire up every "reserve" trigger */
document.querySelectorAll(".js-reserve").forEach(el => {
  el.setAttribute("href", waLink(RESERVATION_MESSAGE));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});
document.querySelectorAll(".js-order-blank").forEach(el => {
  el.setAttribute("href", waLink(blankOrderMessage()));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

/* ============================================================
   2) MENU RENDERING
   ============================================================ */

const featuredGrid = document.getElementById("featured-grid");
const menuTabs = document.getElementById("menu-tabs");
const menuGrid = document.getElementById("menu-grid");
const menuSearchInput = document.getElementById("menu-search");

function photoHTML(item, extraClass = "") {
  const safeName = escapeHTML(item.name);
  if (item.image) {
    return `<img class="photo ${extraClass}" src="${item.image}" alt="${safeName}" loading="lazy" />`;
  }
  return `<div class="photo ${extraClass}" data-tone="${item.tone || "ocean"}" role="img" aria-label="${safeName}">
            <span class="photo__label">${safeName}</span>
          </div>`;
}

function priceHTML(item) {
  return `KES ${item.priceKES.toLocaleString()}<small>≈ USD $${item.priceUSD.toFixed(2)}</small>`;
}

/* ----- Featured (chef recommendations) ----- */
function renderFeatured() {
  const featured = MENU.flatMap(cat => cat.items).filter(i => i.chef).slice(0, 6);
  featuredGrid.innerHTML = featured.map(item => `
    <article class="featured-card reveal">
      ${photoHTML(item)}
      <div class="featured-card__body">
        <span class="chef-tag">Chef's pick</span>
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <p class="featured-card__price">KES ${item.priceKES.toLocaleString()} <small>≈ $${item.priceUSD.toFixed(2)}</small></p>
      </div>
    </article>
  `).join("");
  observeReveals(featuredGrid);
}

/* ----- Tabs + category grid ----- */
let activeCategory = MENU[0].category;
let searchQuery = "";

function categorySlug(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function selectCategory(category) {
  activeCategory = category;
  searchQuery = "";
  if (menuSearchInput) menuSearchInput.value = "";
  renderTabs();
  renderCategory();
  const btn = document.getElementById(`tab-${categorySlug(category)}`);
  if (btn) btn.focus();
}

function renderTabs() {
  menuTabs.innerHTML = MENU.map(cat => `
    <button class="menu-tab" role="tab"
      id="tab-${categorySlug(cat.category)}"
      aria-selected="${cat.category === activeCategory}"
      tabindex="${cat.category === activeCategory ? "0" : "-1"}"
      data-category="${escapeHTML(cat.category)}">${escapeHTML(cat.category)}</button>
  `).join("");

  const tabs = [...menuTabs.querySelectorAll(".menu-tab")];
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectCategory(tab.dataset.category));
    tab.addEventListener("keydown", e => {
      let target = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") target = tabs[(i + 1) % tabs.length];
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") target = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") target = tabs[0];
      else if (e.key === "End") target = tabs[tabs.length - 1];
      if (target) {
        e.preventDefault();
        selectCategory(target.dataset.category);
      }
    });
  });
}

function matchesSearch(item, q) {
  return (item.name + " " + item.description).toLowerCase().includes(q);
}

function menuCardHTML(item) {
  const key = itemKey(item);
  const inCart = cart.has(key);
  const qty = inCart ? cart.get(key).qty : 0;
  const controls = inCart
    ? `<div class="qty-stepper" data-key="${key}">
         <button class="qty-stepper__btn" data-action="dec" aria-label="Decrease quantity of ${escapeHTML(item.name)}">−</button>
         <span class="qty-stepper__count">${qty}</span>
         <button class="qty-stepper__btn" data-action="inc" aria-label="Increase quantity of ${escapeHTML(item.name)}">+</button>
       </div>`
    : `<button class="add-btn" data-key="${key}" aria-pressed="false">+ Add</button>`;

  return `
    <article class="menu-card">
      ${photoHTML(item)}
      <div class="menu-card__body">
        <h3>${escapeHTML(item.name)}</h3>
        <p>${escapeHTML(item.description)}</p>
        <div class="menu-card__foot">
          <span class="menu-card__price">${priceHTML(item)}</span>
          ${controls}
        </div>
      </div>
    </article>`;
}

function renderCategory() {
  const noteBox = document.getElementById("menu-note");
  let items;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = MENU.flatMap(cat => cat.items).filter(item => matchesSearch(item, q));
    noteBox.innerHTML = `<p class="menu-category-note">${items.length} result${items.length === 1 ? "" : "s"} for "${escapeHTML(searchQuery)}"</p>`;
  } else {
    const cat = MENU.find(c => c.category === activeCategory);
    items = cat.items;
    noteBox.innerHTML = (cat.swahili || cat.note)
      ? `<p class="menu-category-note">${escapeHTML(cat.swahili || "")}${cat.swahili && cat.note ? " — " : ""}${escapeHTML(cat.note || "")}</p>`
      : "";
  }

  if (items.length === 0) {
    menuGrid.innerHTML = `<p class="menu-empty">No dishes match your search — try a different term.</p>`;
    return;
  }

  menuGrid.innerHTML = items.map(menuCardHTML).join("");

  menuGrid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.dataset.key));
  });
  menuGrid.querySelectorAll(".qty-stepper__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.closest(".qty-stepper").dataset.key;
      if (btn.dataset.action === "inc") incrementCartItem(key);
      else decrementCartItem(key);
    });
  });
}

if (menuSearchInput) {
  menuSearchInput.addEventListener("input", () => {
    searchQuery = menuSearchInput.value.trim();
    renderCategory();
  });
}

/* ============================================================
   3) LIGHTWEIGHT ORDER CART (WhatsApp checkout)
   ============================================================ */

const cart = new Map(); // key -> { name, priceKES, qty }

function itemKey(item) {
  return item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function findItemByKey(key) {
  for (const cat of MENU) {
    for (const item of cat.items) {
      if (itemKey(item) === key) return item;
    }
  }
  return null;
}

function addToCart(key) {
  const item = findItemByKey(key);
  if (!item) return;
  cart.set(key, { name: item.name, priceKES: item.priceKES, qty: 1 });
  renderCategory();
  updateOrderBar();
}

function incrementCartItem(key) {
  const entry = cart.get(key);
  if (!entry) return;
  entry.qty += 1;
  renderCategory();
  updateOrderBar();
}

function decrementCartItem(key) {
  const entry = cart.get(key);
  if (!entry) return;
  if (entry.qty <= 1) cart.delete(key);
  else entry.qty -= 1;
  renderCategory();
  updateOrderBar();
}

const orderBar = document.getElementById("order-bar");
const orderCount = document.getElementById("order-count");
const orderTotal = document.getElementById("order-total");

function cartTotals() {
  let count = 0, total = 0;
  cart.forEach(i => { count += i.qty; total += i.priceKES * i.qty; });
  return { count, total };
}

function updateOrderBar() {
  const { count, total } = cartTotals();
  if (count === 0) {
    orderBar.hidden = true;
    document.body.classList.remove("has-order");
    return;
  }
  orderBar.hidden = false;
  document.body.classList.add("has-order");
  orderCount.textContent = `${count} item${count > 1 ? "s" : ""}`;
  orderTotal.textContent = `KES ${total.toLocaleString()}`;
}

document.getElementById("order-send").addEventListener("click", () => {
  const { total } = cartTotals();
  if (total === 0) return;
  window.open(waLink(cartOrderMessage([...cart.values()], total)), "_blank", "noopener");
});

document.getElementById("order-clear").addEventListener("click", () => {
  cart.clear();
  updateOrderBar();
  renderCategory();
});

/* ============================================================
   4) NAVIGATION (mobile)
   ============================================================ */

const burger = document.getElementById("nav-burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   5) GALLERY LIGHTBOX
   ============================================================ */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const galleryImages = [...document.querySelectorAll(".gallery img.gallery__item")];

let lightboxIndex = 0;
let lastFocusedBeforeLightbox = null;

function showLightboxImage() {
  const img = galleryImages[lightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

function openLightbox(index) {
  if (!lightbox) return;
  lastFocusedBeforeLightbox = document.activeElement;
  lightboxIndex = index;
  showLightboxImage();
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  if (lastFocusedBeforeLightbox) lastFocusedBeforeLightbox.focus();
}

function stepLightbox(delta) {
  lightboxIndex = (lightboxIndex + delta + galleryImages.length) % galleryImages.length;
  showLightboxImage();
}

if (lightbox) {
  galleryImages.forEach((img, i) => {
    img.addEventListener("click", () => openLightbox(i));
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", e => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") stepLightbox(-1);
    else if (e.key === "ArrowRight") stepLightbox(1);
  });
}

/* ============================================================
   6) REVEAL ON SCROLL
   ============================================================ */

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealObserver = prefersReduced ? null : new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

function observeReveals(scope = document) {
  scope.querySelectorAll(".reveal").forEach(el => {
    if (prefersReduced) el.classList.add("is-visible");
    else revealObserver.observe(el);
  });
}

/* ============================================================
   INIT
   ============================================================ */

renderFeatured();
renderTabs();
renderCategory();
observeReveals();
document.getElementById("year").textContent = new Date().getFullYear();
