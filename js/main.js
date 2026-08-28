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

/* ============================================================
   0) LANGUAGE / TRANSLATIONS
   ------------------------------------------------------------
   Reservation & order messages sent over WhatsApp stay in
   English regardless of site language, so staff can always
   read incoming messages.
   ============================================================ */

const UI_TEXT = {
  en: {
    "hero.eyebrowSub": "Bamburi Beach, Mombasa",
    "hero.title": "Fresh seafood.<br/>Authentic Kenyan flavours.<br/><em>Beachside moments.</em>",
    "hero.text": "Experience the taste of the Kenyan coast — ocean-fresh seafood, traditional Swahili dishes and charcoal grill favourites, served with the breeze at Bamburi Beach.",
    "hero.fact1": "Open daily · 9 AM – 11 PM",
    "hero.fact2": "Fresh catch every morning",
    "hero.fact3": "Loved by locals & travellers",
    "hero.reserve": "Reserve Your Table",
    "hero.explore": "Explore Our Menu",

    "about.eyebrowSub": "Our Story",
    "about.heading": "Where the ocean meets the table",
    "about.p1": "Pazuri Beach Restaurant is a coastal dining experience built around great food, fresh ingredients and genuine Kenyan hospitality. Located near Bamburi Beach in Mombasa, we bring together the best flavours of the ocean and the traditions of the Kenyan coast.",
    "about.p2": "From freshly prepared seafood and Swahili favourites to charcoal-grilled specialties, every dish is made to deliver generous portions, authentic taste and unforgettable moments — whether it's your first visit to Kenya or your hundredth day at this beach.",
    "about.quote": "“Great food doesn't need to be complicated. It needs to be fresh, honest and prepared with care.”",

    "why.eyebrowSub": "Why Choose Us",
    "why.heading": "More than just a restaurant",
    "why.card1.title": "Fresh Seafood Daily",
    "why.card1.text": "Ocean-fresh ingredients prepared with care and coastal inspiration.",
    "why.card2.title": "Authentic Swahili Cuisine",
    "why.card2.text": "Traditional coastal dishes made with local flavours and recipes.",
    "why.card3.title": "Beachside Atmosphere",
    "why.card3.text": "Delicious food surrounded by the beauty and calm of the coast.",
    "why.card4.title": "Great Value",
    "why.card4.text": "Quality meals, generous portions and prices that welcome everyone.",
    "why.card5.title": "Locals & Visitors Welcome",
    "why.card5.text": "A favourite of Kenyan guests and travellers from around the world.",

    "featured.eyebrowSub": "Chef Recommendations",
    "featured.heading": "What the coast is famous for",
    "featured.chefTag": "Chef's pick",

    "menu.eyebrowSub": "The Full Menu",
    "menu.heading": "Choose your dishes, order on WhatsApp",
    "menu.sub": "Tap <strong>+ Add</strong> on anything you like — we'll prepare your WhatsApp order automatically. Prices in KES with an approximate USD guide.",
    "menu.searchPlaceholder": "Search the menu…",
    "menu.searchLabel": "Search the menu",
    "menu.tabsLabel": "Menu categories",
    "menu.addBtn": "+ Add",
    "menu.empty": "No dishes match your search — try a different term.",
    "menu.decreaseQty": "Decrease quantity of",
    "menu.increaseQty": "Increase quantity of",
    "menu.resultsFor": "result(s) for",

    "gallery.eyebrowSub": "Gallery",
    "gallery.heading": "A taste of the atmosphere",
    "gallery.sub": "A glimpse of life at Pazuri — food, fire, and golden-hour views by the water.",

    "reviews.eyebrowSub": "Reviews",
    "reviews.heading": "Trusted by real people",
    "reviews.summary": "Excellent food and beach atmosphere",
    "reviews.review1": "“The seafood platter was unbelievable — everything fresh, portions huge, and we ate with our feet basically in the sand. Best meal of our Kenya trip.”",
    "reviews.country1": "United Kingdom",
    "reviews.review2": "“Biriani kama ya nyumbani! Fair prices, big portions and the staff treat you like family. We come every time we're in Mombasa.”",
    "reviews.country2": "Nairobi, Kenya",
    "reviews.review3": "“Booked on WhatsApp in two minutes, table was ready by the water at sunset. The grilled lobster and dawa cocktail — perfect evening.”",
    "reviews.country3": "Germany",
    "reviews.leaveReview": "Leave a Review",
    "reviews.readMore": "Read More Reviews",

    "location.eyebrowSub": "Find Us",
    "location.heading": "On the sand at Bamburi Beach",
    "location.p1": "Located near Bamburi Beach on Mombasa's north coast, Pazuri offers a relaxed dining experience where fresh seafood meets the flavours of Kenya. A short ride from the Bamburi hotels — ask for us by name.",
    "location.addressLabel": "Address",
    "location.addressValue": "Bamburi Beach, Mombasa, Kenya",
    "location.landmarksLabel": "Landmarks",
    "location.landmarksValue": "Near the Bamburi public beach access",
    "location.hoursLabel": "Hours",
    "location.hoursValue": "Daily, 9:00 AM – 11:00 PM",
    "location.directions": "Get Directions",
    "location.mapTitle": "Map showing Pazuri Beach Restaurant near Bamburi Beach, Mombasa",

    "contact.eyebrowSub": "See You Soon",
    "contact.heading": "Ready to experience the taste of the Kenyan coast?",
    "contact.reserve": "Reserve a Table",
    "contact.orderFood": "Order Food",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.chat": "Chat with us",
    "contact.email": "Email",
    "contact.hours": "Hours",
    "contact.hoursValue": "Daily · 9:00 AM – 11:00 PM",

    "footer.tagline": "Fresh seafood and authentic Kenyan coastal cuisine at Bamburi Beach, Mombasa.",

    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve a Table",
    "nav.brandSub": "Beach Restaurant",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    "orderbar.send": "Order via WhatsApp",
    "orderbar.clear": "Clear order",
    "orderbar.items": "items",
    "orderbar.item": "item",

    "lightbox.close": "Close",
    "lightbox.prev": "Previous photo",
    "lightbox.next": "Next photo",

    "wa.reserve": "Reserve",
    "wa.reserveAria": "Reserve via WhatsApp",

    "lang.toggleAria": "Switch to Japanese"
  },
  ja: {
    "hero.eyebrowSub": "バンブリビーチ、モンバサ",
    "hero.title": "新鮮な魚介類。<br/>本場ケニアの味。<br/><em>ビーチサイドのひととき。</em>",
    "hero.text": "モンバサ・バンブリビーチの潮風とともに、新鮮な魚介類、伝統的なスワヒリ料理、炭火焼きの数々でケニア沿岸の味をお楽しみください。",
    "hero.fact1": "年中無休 · 午前9時〜午後11時",
    "hero.fact2": "毎朝仕入れる新鮮な魚介",
    "hero.fact3": "地元の人にも旅行者にも愛される味",
    "hero.reserve": "テーブルを予約する",
    "hero.explore": "メニューを見る",

    "about.eyebrowSub": "私たちの物語",
    "about.heading": "海とテーブルが出会う場所",
    "about.p1": "パズーリ・ビーチ・レストランは、素晴らしい料理、新鮮な食材、そして心のこもったケニアのおもてなしを大切にする海辺のダイニング体験です。モンバサのバンブリビーチ近くに位置し、海の恵みとケニア沿岸の伝統が織りなす味わいをご提供しています。",
    "about.p2": "新鮮な魚介料理やスワヒリ料理の数々から、炭火焼きの逸品まで、すべての料理はボリューム満点で本場の味わいと忘れられないひとときをお届けするために作られています。ケニア初めての訪問でも、このビーチに何度も足を運んでいる方でも。",
    "about.quote": "「美味しい料理に難しい工夫は必要ありません。新鮮で、誠実に、心を込めて作ること。それだけです。」",

    "why.eyebrowSub": "選ばれる理由",
    "why.heading": "レストランを超えた体験",
    "why.card1.title": "毎日届く新鮮な魚介",
    "why.card1.text": "海から届いたばかりの食材を、丁寧に、沿岸ならではの発想で調理しています。",
    "why.card2.title": "本格的なスワヒリ料理",
    "why.card2.text": "地元の味とレシピで作る伝統的な沿岸料理。",
    "why.card3.title": "ビーチサイドの雰囲気",
    "why.card3.text": "美しく穏やかな海辺に囲まれて味わう、おいしい料理。",
    "why.card4.title": "優れたコストパフォーマンス",
    "why.card4.text": "質の高い料理とボリューム満点の量を、誰もが楽しめる価格で。",
    "why.card5.title": "地元の方も観光客も歓迎",
    "why.card5.text": "ケニアの方々にも世界中の旅行者にも愛されています。",

    "featured.eyebrowSub": "シェフのおすすめ",
    "featured.heading": "この沿岸で評判の逸品",
    "featured.chefTag": "シェフのおすすめ",

    "menu.eyebrowSub": "メニュー一覧",
    "menu.heading": "お好きな料理を選んでWhatsAppで注文",
    "menu.sub": "気に入った料理の<strong>「+追加」</strong>をタップすると、WhatsAppの注文メッセージを自動で作成します。価格はケニアシリング表示（米ドル目安付き）。",
    "menu.searchPlaceholder": "メニューを検索…",
    "menu.searchLabel": "メニューを検索",
    "menu.tabsLabel": "メニューカテゴリー",
    "menu.addBtn": "+ 追加",
    "menu.empty": "該当する料理が見つかりません。別のキーワードをお試しください。",
    "menu.decreaseQty": "数量を減らす：",
    "menu.increaseQty": "数量を増やす：",
    "menu.resultsFor": "件の検索結果：",

    "gallery.eyebrowSub": "ギャラリー",
    "gallery.heading": "雰囲気を味わう",
    "gallery.sub": "パズーリでのひとときを少しだけ — 料理、炎、そして水辺に広がるゴールデンアワーの景色。",

    "reviews.eyebrowSub": "お客様の声",
    "reviews.heading": "多くのお客様に信頼されています",
    "reviews.summary": "素晴らしい料理とビーチの雰囲気",
    "reviews.review1": "「シーフードプラッターは信じられないほど美味しかった — すべてが新鮮でボリューム満点、ほとんど砂の上に足をつけたまま食事を楽しめました。ケニア旅行で最高の食事でした。」",
    "reviews.country1": "イギリス",
    "reviews.review2": "「まるで家庭の味のビリヤニ！価格も良心的でボリュームもたっぷり、スタッフはまるで家族のように接してくれます。モンバサに来るたびに立ち寄っています。」",
    "reviews.country2": "ケニア、ナイロビ",
    "reviews.review3": "「WhatsAppで2分で予約完了、夕日が沈む水辺の席がすぐに用意されていました。グリルロブスターとダワカクテルで、完璧な夜になりました。」",
    "reviews.country3": "ドイツ",
    "reviews.leaveReview": "レビューを書く",
    "reviews.readMore": "もっとレビューを見る",

    "location.eyebrowSub": "所在地",
    "location.heading": "バンブリビーチの砂浜で",
    "location.p1": "モンバサ北部沿岸のバンブリビーチ近くに位置するパズーリでは、新鮮な魚介とケニアの味が出会うくつろぎのひとときをお過ごしいただけます。バンブリ地区のホテルからも近く、店名を伝えればすぐに分かります。",
    "location.addressLabel": "住所",
    "location.addressValue": "ケニア、モンバサ、バンブリビーチ",
    "location.landmarksLabel": "目印",
    "location.landmarksValue": "バンブリの公共ビーチ入口付近",
    "location.hoursLabel": "営業時間",
    "location.hoursValue": "年中無休 午前9:00〜午後11:00",
    "location.directions": "道順を見る",
    "location.mapTitle": "パズーリ・ビーチ・レストランの地図（モンバサ、バンブリビーチ付近）",

    "contact.eyebrowSub": "またお会いしましょう",
    "contact.heading": "ケニア沿岸の味を体験する準備はできましたか？",
    "contact.reserve": "テーブルを予約する",
    "contact.orderFood": "料理を注文する",
    "contact.phone": "電話",
    "contact.whatsapp": "WhatsApp",
    "contact.chat": "チャットする",
    "contact.email": "メール",
    "contact.hours": "営業時間",
    "contact.hoursValue": "年中無休 · 午前9:00〜午後11:00",

    "footer.tagline": "モンバサ・バンブリビーチで味わう、新鮮な魚介と本場ケニア沿岸料理。",

    "nav.about": "当店について",
    "nav.menu": "メニュー",
    "nav.gallery": "ギャラリー",
    "nav.reviews": "レビュー",
    "nav.location": "アクセス",
    "nav.contact": "お問い合わせ",
    "nav.reserve": "席を予約する",
    "nav.brandSub": "ビーチレストラン",
    "nav.openMenu": "メニューを開く",
    "nav.closeMenu": "メニューを閉じる",

    "orderbar.send": "WhatsAppで注文する",
    "orderbar.clear": "注文をクリア",
    "orderbar.items": "点",
    "orderbar.item": "点",

    "lightbox.close": "閉じる",
    "lightbox.prev": "前の写真",
    "lightbox.next": "次の写真",

    "wa.reserve": "予約",
    "wa.reserveAria": "WhatsAppで予約",

    "lang.toggleAria": "英語に切り替える"
  }
};

let currentLang = localStorage.getItem("pazuri-lang") === "ja" ? "ja" : "en";

function tr(key) {
  return (UI_TEXT[currentLang] && UI_TEXT[currentLang][key]) || UI_TEXT.en[key] || key;
}

function itemName(item) {
  return currentLang === "ja" && item.nameJA ? item.nameJA : item.name;
}
function itemDesc(item) {
  return currentLang === "ja" && item.descriptionJA ? item.descriptionJA : item.description;
}
function categoryName(cat) {
  return currentLang === "ja" && cat.categoryJA ? cat.categoryJA : cat.category;
}
function categoryNote(cat) {
  return currentLang === "ja" && cat.noteJA !== undefined ? cat.noteJA : cat.note;
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = tr(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = tr(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", tr(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", tr(el.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.setAttribute("title", tr(el.dataset.i18nTitle));
  });
  document.documentElement.lang = currentLang;
}

/* ---------- WhatsApp helpers ---------- */
/* Messages sent over WhatsApp always stay in English, regardless of
   the site's display language, so restaurant staff can read every
   incoming reservation/order without needing a translator. */

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
  const safeName = escapeHTML(itemName(item));
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
        <span class="chef-tag">${escapeHTML(tr("featured.chefTag"))}</span>
        <h3>${escapeHTML(itemName(item))}</h3>
        <p>${escapeHTML(itemDesc(item))}</p>
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
      data-category="${escapeHTML(cat.category)}">${escapeHTML(categoryName(cat))}</button>
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
  const haystack = [item.name, item.description, item.nameJA, item.descriptionJA].filter(Boolean).join(" ").toLowerCase();
  return haystack.includes(q);
}

function menuCardHTML(item) {
  const key = itemKey(item);
  const inCart = cart.has(key);
  const qty = inCart ? cart.get(key).qty : 0;
  const name = escapeHTML(itemName(item));
  const controls = inCart
    ? `<div class="qty-stepper" data-key="${key}">
         <button class="qty-stepper__btn" data-action="dec" aria-label="${escapeHTML(tr("menu.decreaseQty"))} ${name}">−</button>
         <span class="qty-stepper__count">${qty}</span>
         <button class="qty-stepper__btn" data-action="inc" aria-label="${escapeHTML(tr("menu.increaseQty"))} ${name}">+</button>
       </div>`
    : `<button class="add-btn" data-key="${key}" aria-pressed="false">${escapeHTML(tr("menu.addBtn"))}</button>`;

  return `
    <article class="menu-card">
      ${photoHTML(item)}
      <div class="menu-card__body">
        <h3>${name}</h3>
        <p>${escapeHTML(itemDesc(item))}</p>
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
    noteBox.innerHTML = `<p class="menu-category-note">${items.length} ${escapeHTML(tr("menu.resultsFor"))} "${escapeHTML(searchQuery)}"</p>`;
  } else {
    const cat = MENU.find(c => c.category === activeCategory);
    items = cat.items;
    const note = categoryNote(cat);
    noteBox.innerHTML = (cat.swahili || note)
      ? `<p class="menu-category-note">${escapeHTML(cat.swahili || "")}${cat.swahili && note ? " — " : ""}${escapeHTML(note || "")}</p>`
      : "";
  }

  if (items.length === 0) {
    menuGrid.innerHTML = `<p class="menu-empty">${escapeHTML(tr("menu.empty"))}</p>`;
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
  const unit = count > 1 ? tr("orderbar.items") : tr("orderbar.item");
  orderCount.textContent = currentLang === "ja" ? `${count}${unit}` : `${count} ${unit}`;
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
  burger.setAttribute("aria-label", open ? tr("nav.closeMenu") : tr("nav.openMenu"));
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
   6) LANGUAGE TOGGLE
   ============================================================ */

const langToggle = document.getElementById("lang-toggle");

const langToggleLabel = document.getElementById("lang-toggle-label");

function updateLangToggleUI() {
  if (!langToggle) return;
  if (langToggleLabel) langToggleLabel.textContent = currentLang === "ja" ? "EN" : "日本語";
  langToggle.setAttribute("aria-label", tr("lang.toggleAria"));
  langToggle.dataset.current = currentLang;
}

function setLanguage(lang) {
  currentLang = lang === "ja" ? "ja" : "en";
  localStorage.setItem("pazuri-lang", currentLang);
  applyStaticTranslations();
  updateLangToggleUI();
  renderFeatured();
  renderTabs();
  renderCategory();
  updateOrderBar();
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "ja" ? "en" : "ja");
  });
}

/* ============================================================
   7) REVEAL ON SCROLL
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

applyStaticTranslations();
updateLangToggleUI();
renderFeatured();
renderTabs();
renderCategory();
observeReveals();
document.getElementById("year").textContent = new Date().getFullYear();
