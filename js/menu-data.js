/* ============================================================
   PAZURI BEACH RESTAURANT — MENU DATABASE
   ------------------------------------------------------------
   Edit dishes, prices and descriptions here.
   priceUSD is display-only; update it when the exchange rate
   moves (rough guide: KES ÷ 129).
   To use a real photo, set image to e.g. "images/menu/lobster.jpg"
   and drop the file in /images/menu. If image is null, the site
   renders an elegant placeholder automatically.
   ============================================================ */

const MENU = [
  {
    category: "Seafood",
    swahili: "Vyakula vya Baharini",
    note: "Caught on the coast, grilled over charcoal.",
    items: [
      {
        name: "Seafood Platter for Two",
        description: "A generous sharing board of lobster, prawns, calamari, octopus and catch of the day.",
        priceKES: 6500, priceUSD: 50.40, image: "images/menu/seafood-platter-for-two.webp", tone: "coral", chef: true
      },
      {
        name: "Grilled Lobster",
        description: "Fresh lobster grilled with coastal spices, served with your choice of sides.",
        priceKES: 2400, priceUSD: 18.60, image: "images/menu/grilled-lobster.webp", tone: "coral", chef: true
      },
      {
        name: "Grilled Prawns",
        description: "Jumbo prawns char-grilled in garlic, lime and Swahili pili pili butter.",
        priceKES: 1800, priceUSD: 13.95, image: "images/menu/grilled-prawns.webp", tone: "sunset", chef: true
      },
      {
        name: "Octopus in Coconut",
        description: "Tender octopus simmered slowly in rich coconut sauce — a coastal classic.",
        priceKES: 1500, priceUSD: 11.65, image: "images/menu/octopus-in-coconut.jpg", tone: "ocean", chef: true
      },
      {
        name: "Whole Grilled Fish",
        description: "Red snapper or tilapia, charcoal-grilled and dressed with kachumbari.",
        priceKES: 1400, priceUSD: 10.85, image: "images/menu/whole-grilled-fish.webp", tone: "ocean"
      },
      {
        name: "Calamari Rings",
        description: "Lightly crisped calamari with lime mayo and a squeeze of fresh lemon.",
        priceKES: 1100, priceUSD: 8.55, image: "images/menu/calamari-rings.webp", tone: "sand"
      }
    ]
  },
  {
    category: "Charcoal Grill",
    swahili: "Choma la Mkaa",
    note: "Slow flames, honest smoke, big portions.",
    items: [
      { name: "Beef Steak", description: "Char-grilled steak with pan juices, served with chips or ugali.", priceKES: 1300, priceUSD: 10.10, image: "images/menu/beef-steak.webp", tone: "sunset" },
      { name: "Chicken Grill (Half)", description: "Marinated half chicken over open charcoal, smoky and juicy.", priceKES: 950, priceUSD: 7.35, image: "images/menu/chicken-grill-half.webp", tone: "sunset" },
      { name: "Chicken Kienyeji", description: "Free-range local chicken, slow-cooked the traditional way.", priceKES: 1200, priceUSD: 9.30, image: "images/menu/chicken-kienyeji.webp", tone: "green" },
      { name: "Lamb Chops", description: "Charcoal lamb chops with rosemary salt and grilled vegetables.", priceKES: 1500, priceUSD: 11.65, image: "images/menu/lamb-chops.webp", tone: "sunset" },
      { name: "Mutton Curry", description: "Rich coastal curry, slow-simmered with warming spices.", priceKES: 1100, priceUSD: 8.55, image: "images/menu/mutton-curry.webp", tone: "coral" }
    ]
  },
  {
    category: "Swahili Dishes",
    swahili: "Vyakula vya Kiswahili",
    note: "Recipes passed down along the coast.",
    items: [
      { name: "Chicken Biriani", description: "Fragrant spiced rice layered with tender chicken, Mombasa style.", priceKES: 850, priceUSD: 6.60, image: "images/menu/chicken-biriani.webp", tone: "sunset", chef: true },
      { name: "Beef Pilau", description: "Aromatic pilau rice with slow-cooked beef and whole spices.", priceKES: 800, priceUSD: 6.20, image: "images/menu/beef-pilau.webp", tone: "sand", chef: true },
      { name: "Samaki wa Nazi", description: "Fish simmered in creamy coconut sauce, served with rice or chapati.", priceKES: 1000, priceUSD: 7.75, image: "images/menu/smaki-wa-nazi.webp", tone: "ocean" },
      { name: "Wali wa Nazi & Coconut Beans", description: "Coconut rice with slow-cooked beans — simple, comforting, coastal.", priceKES: 550, priceUSD: 4.25, image: "images/menu/wali-wa-nazi-&-coconut-beans.webp", tone: "green" },
      { name: "Chapati (2 pcs)", description: "Soft, flaky chapati made fresh through the day.", priceKES: 120, priceUSD: 0.95, image: "images/menu/chapati-2-pcs.webp", tone: "sand" }
    ]
  },
  {
    category: "Breakfast",
    swahili: "Kifungua Kinywa",
    note: "Served from 9:00 AM.",
    items: [
      { name: "Pazuri Breakfast Platter", description: "Eggs your way, sausage, toast, fresh fruit and juice or chai.", priceKES: 750, priceUSD: 5.80, image: "images/menu/pazuri-breakfast-platter.webp", tone: "sand" },
      { name: "Spanish Omelette", description: "Fluffy omelette with peppers, onion and tomato, served with toast.", priceKES: 450, priceUSD: 3.50, image: "images/menu/spanish-omelette.webp", tone: "sunset" },
      { name: "Mandazi & Chai", description: "Warm coastal mandazi with spiced Kenyan tea.", priceKES: 250, priceUSD: 1.95, image: "images/menu/mandazi-&-chai.webp", tone: "sand" }
    ]
  },
  {
    category: "Pastas",
    swahili: "Tambi",
    note: null,
    items: [
      { name: "Spaghetti Bolognese", description: "Slow-cooked beef ragù over spaghetti with parmesan.", priceKES: 750, priceUSD: 5.80, image: "images/menu/spaghetti-bolognese.webp", tone: "coral" },
      { name: "Spaghetti Napoletana", description: "Fresh tomato, basil and garlic — light and bright.", priceKES: 650, priceUSD: 5.05, image: "images/menu/spaghetti-napoletana.webp", tone: "green" }
    ]
  },
  {
    category: "Snacks & Burgers",
    swahili: "Vitafunio",
    note: null,
    items: [
      { name: "Pazuri Beach Burger", description: "Char-grilled beef, cheddar, caramelised onion and house sauce with chips.", priceKES: 700, priceUSD: 5.45, image: "images/menu/pazuri-beach-burger.webp", tone: "sunset" },
      { name: "Chicken Burger", description: "Grilled chicken breast, lettuce and lime mayo with chips.", priceKES: 650, priceUSD: 5.05, image: "images/menu/chicken-burger.webp", tone: "sand" },
      { name: "Club Sandwich", description: "Triple-stacked with chicken, egg and bacon, served with fries.", priceKES: 600, priceUSD: 4.65, image: "images/menu/club-sandwich.webp", tone: "sand" }
    ]
  },
  {
    category: "Extras & Sides",
    swahili: "Nyongeza",
    note: null,
    items: [
      { name: "Chips Masala", description: "Golden fries tossed in spiced tomato masala.", priceKES: 350, priceUSD: 2.70, image: "images/menu/chips-masala.webp", tone: "sunset" },
      { name: "French Fries", description: "Crisp and golden, salted to order.", priceKES: 250, priceUSD: 1.95, image: "images/menu/french-fries.webp", tone: "sand" },
      { name: "Ugali", description: "The Kenyan staple — perfect with grilled fish or choma.", priceKES: 100, priceUSD: 0.80, image: "images/menu/ugali.webp", tone: "sand" },
      { name: "Steamed Rice", description: "Plain fluffy rice.", priceKES: 150, priceUSD: 1.15, image: "images/menu/steamed-rice.webp", tone: "sand" },
      { name: "Kachumbari", description: "Fresh tomato, onion and coriander salad with lime.", priceKES: 150, priceUSD: 1.15, image: "images/menu/kachumbari.webp", tone: "green" }
    ]
  },
  {
    category: "Desserts",
    swahili: "Kitindamlo",
    note: null,
    items: [
      { name: "Fresh Fruit Platter", description: "Seasonal tropical fruit — mango, pineapple, passion and more.", priceKES: 400, priceUSD: 3.10, image: "images/menu/fresh-fruit-platter.webp", tone: "green" },
      { name: "Ice Cream (2 Scoops)", description: "Vanilla, chocolate or strawberry.", priceKES: 300, priceUSD: 2.35, image: "images/menu/ice-cream-2-scoops.webp", tone: "coral" },
      { name: "Strawberry Dessert", description: "Strawberries with cream, finished with mint.", priceKES: 450, priceUSD: 3.50, image: "images/menu/strawberry-dessert.webp", tone: "coral" }
    ]
  },
  {
    category: "Drinks",
    swahili: "Vinywaji",
    note: "Fresh juices pressed to order.",
    items: [
      { name: "Fresh Passion Juice", description: "Pressed to order from coastal passion fruit.", priceKES: 250, priceUSD: 1.95, image: "images/menu/fresh-passion-juice.webp", tone: "sunset" },
      { name: "Fresh Mango Juice", description: "Thick, sweet and ice-cold.", priceKES: 250, priceUSD: 1.95, image: "images/menu/fresh-mango-juice.webp", tone: "sunset" },
      { name: "Madafu (Fresh Coconut)", description: "Young coconut straight off the palm.", priceKES: 200, priceUSD: 1.55, image: "images/menu/madafu-fresh-coconut.webp", tone: "green" },
      { name: "Soft Drinks", description: "Soda, sparkling or still water.", priceKES: 120, priceUSD: 0.95, image: "images/menu/soft-drinks.webp", tone: "ocean" },
      { name: "Kenyan Lager", description: "Ice-cold local beer — ask for today's selection.", priceKES: 300, priceUSD: 2.35, image: "images/menu/kenyan-lager.webp", tone: "sand" },
      { name: "House Cocktails", description: "Dawa, mojito and sunset specials from the beach bar.", priceKES: 550, priceUSD: 4.25, image: "images/menu/house-cocktails.webp", tone: "coral" }
    ]
  }
];
