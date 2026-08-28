/* ============================================================
   PAZURI BEACH RESTAURANT — MENU DATABASE
   ------------------------------------------------------------
   Edit dishes, prices and descriptions here.
   priceUSD is display-only; update it when the exchange rate
   moves (rough guide: KES ÷ 129).
   To use a real photo, set image to e.g. "images/menu/lobster.jpg"
   and drop the file in /images/menu. If image is null, the site
   renders an elegant placeholder automatically.

   nameJA / descriptionJA / categoryJA / noteJA are the Japanese
   translations shown when the site's language toggle is set to 日本語.
   ============================================================ */

const MENU = [
  {
    category: "Seafood",
    categoryJA: "シーフード",
    swahili: "Vyakula vya Baharini",
    note: "Caught on the coast, grilled over charcoal.",
    noteJA: "沿岸で獲れた魚介を炭火で焼き上げます。",
    items: [
      {
        name: "Seafood Platter for Two",
        nameJA: "シーフードプラッター（2人前）",
        description: "A generous sharing board of lobster, prawns, calamari, octopus and catch of the day.",
        descriptionJA: "ロブスター、エビ、イカ、タコ、本日の魚を盛り合わせたボリューム満点のシェアプレート。",
        priceKES: 6500, priceUSD: 50.40, image: "images/menu/seafood-platter-for-two.webp", tone: "coral", chef: true
      },
      {
        name: "Grilled Lobster",
        nameJA: "グリルロブスター",
        description: "Fresh lobster grilled with coastal spices, served with your choice of sides.",
        descriptionJA: "沿岸のスパイスで焼き上げた新鮮なロブスター。お好きなサイドメニューと共に。",
        priceKES: 2400, priceUSD: 18.60, image: "images/menu/grilled-lobster.webp", tone: "coral", chef: true
      },
      {
        name: "Grilled Prawns",
        nameJA: "グリルエビ",
        description: "Jumbo prawns char-grilled in garlic, lime and Swahili pili pili butter.",
        descriptionJA: "ジャンボエビをガーリック、ライム、スワヒリ風ピリピリバターで炭火焼きに。",
        priceKES: 1800, priceUSD: 13.95, image: "images/menu/grilled-prawns.webp", tone: "sunset", chef: true
      },
      {
        name: "Octopus in Coconut",
        nameJA: "タコのココナッツ煮込み",
        description: "Tender octopus simmered slowly in rich coconut sauce — a coastal classic.",
        descriptionJA: "柔らかく煮込んだタコを濃厚なココナッツソースで — 沿岸地方の定番料理。",
        priceKES: 1500, priceUSD: 11.65, image: "images/menu/octopus-in-coconut.jpg", tone: "ocean", chef: true
      },
      {
        name: "Whole Grilled Fish",
        nameJA: "白身魚の姿焼き",
        description: "Red snapper or tilapia, charcoal-grilled and dressed with kachumbari.",
        descriptionJA: "赤鯛またはティラピアを炭火で焼き、カチュンバリを添えて。",
        priceKES: 1400, priceUSD: 10.85, image: "images/menu/whole-grilled-fish.webp", tone: "ocean"
      },
      {
        name: "Calamari Rings",
        nameJA: "カラマリリング",
        description: "Lightly crisped calamari with lime mayo and a squeeze of fresh lemon.",
        descriptionJA: "軽く揚げたイカリングにライムマヨと搾りたてレモンを添えて。",
        priceKES: 1100, priceUSD: 8.55, image: "images/menu/calamari-rings.webp", tone: "sand"
      }
    ]
  },
  {
    category: "Charcoal Grill",
    categoryJA: "炭火焼きグリル",
    swahili: "Choma la Mkaa",
    note: "Slow flames, honest smoke, big portions.",
    noteJA: "じっくりと炭火で燻した、ボリューム満点の一皿。",
    items: [
      { name: "Beef Steak", nameJA: "ビーフステーキ", description: "Char-grilled steak with pan juices, served with chips or ugali.", descriptionJA: "肉汁たっぷりの炭火焼きステーキ。チップスまたはウガリを添えて。", priceKES: 1300, priceUSD: 10.10, image: "images/menu/beef-steak.webp", tone: "sunset" },
      { name: "Chicken Grill (Half)", nameJA: "チキングリル（ハーフ）", description: "Marinated half chicken over open charcoal, smoky and juicy.", descriptionJA: "マリネしたチキンを炭火でジューシーに焼き上げたハーフサイズ。", priceKES: 950, priceUSD: 7.35, image: "images/menu/chicken-grill-half.webp", tone: "sunset" },
      { name: "Chicken Kienyeji", nameJA: "地鶏のキエニェジ焼き", description: "Free-range local chicken, slow-cooked the traditional way.", descriptionJA: "放し飼いの地鶏を伝統的な製法でじっくり調理。", priceKES: 1200, priceUSD: 9.30, image: "images/menu/chicken-kienyeji.webp", tone: "green" },
      { name: "Lamb Chops", nameJA: "ラムチョップ", description: "Charcoal lamb chops with rosemary salt and grilled vegetables.", descriptionJA: "ローズマリーソルトを効かせた炭火焼きラムチョップと焼き野菜。", priceKES: 1500, priceUSD: 11.65, image: "images/menu/lamb-chops.webp", tone: "sunset" },
      { name: "Mutton Curry", nameJA: "マトンカレー", description: "Rich coastal curry, slow-simmered with warming spices.", descriptionJA: "スパイスでじっくり煮込んだ、コクのある沿岸風カレー。", priceKES: 1100, priceUSD: 8.55, image: "images/menu/mutton-curry.webp", tone: "coral" }
    ]
  },
  {
    category: "Swahili Dishes",
    categoryJA: "スワヒリ料理",
    swahili: "Vyakula vya Kiswahili",
    note: "Recipes passed down along the coast.",
    noteJA: "沿岸地方に代々伝わるレシピの数々。",
    items: [
      { name: "Chicken Biriani", nameJA: "チキンビリヤニ", description: "Fragrant spiced rice layered with tender chicken, Mombasa style.", descriptionJA: "モンバサ風、香り豊かなスパイスライスと柔らかいチキンの重ね料理。", priceKES: 850, priceUSD: 6.60, image: "images/menu/chicken-biriani.webp", tone: "sunset", chef: true },
      { name: "Beef Pilau", nameJA: "ビーフピラウ", description: "Aromatic pilau rice with slow-cooked beef and whole spices.", descriptionJA: "香り豊かなピラウライスと、じっくり煮込んだ牛肉、丸ごとのスパイス。", priceKES: 800, priceUSD: 6.20, image: "images/menu/beef-pilau.webp", tone: "sand", chef: true },
      { name: "Samaki wa Nazi", nameJA: "サマキ・ワ・ナジ（魚のココナッツ煮）", description: "Fish simmered in creamy coconut sauce, served with rice or chapati.", descriptionJA: "クリーミーなココナッツソースで煮込んだ魚料理。ライスまたはチャパティと共に。", priceKES: 1000, priceUSD: 7.75, image: "images/menu/smaki-wa-nazi.webp", tone: "ocean" },
      { name: "Wali wa Nazi & Coconut Beans", nameJA: "ココナッツライスと豆の煮込み", description: "Coconut rice with slow-cooked beans — simple, comforting, coastal.", descriptionJA: "ココナッツライスとじっくり煮込んだ豆料理 — シンプルで心温まる沿岸の味。", priceKES: 550, priceUSD: 4.25, image: "images/menu/wali-wa-nazi-&-coconut-beans.webp", tone: "green" },
      { name: "Chapati (2 pcs)", nameJA: "チャパティ（2枚）", description: "Soft, flaky chapati made fresh through the day.", descriptionJA: "一日を通して焼きたての、柔らかく層になったチャパティ。", priceKES: 120, priceUSD: 0.95, image: "images/menu/chapati-2-pcs.webp", tone: "sand" }
    ]
  },
  {
    category: "Breakfast",
    categoryJA: "朝食",
    swahili: "Kifungua Kinywa",
    note: "Served from 9:00 AM.",
    noteJA: "午前9時よりご提供。",
    items: [
      { name: "Pazuri Breakfast Platter", nameJA: "パズーリ・ブレックファストプレート", description: "Eggs your way, sausage, toast, fresh fruit and juice or chai.", descriptionJA: "お好みの卵料理にソーセージ、トースト、フレッシュフルーツ、ジュースまたはチャイを添えて。", priceKES: 750, priceUSD: 5.80, image: "images/menu/pazuri-breakfast-platter.webp", tone: "sand" },
      { name: "Spanish Omelette", nameJA: "スパニッシュオムレツ", description: "Fluffy omelette with peppers, onion and tomato, served with toast.", descriptionJA: "ピーマン、玉ねぎ、トマト入りのふわふわオムレツ。トースト添え。", priceKES: 450, priceUSD: 3.50, image: "images/menu/spanish-omelette.webp", tone: "sunset" },
      { name: "Mandazi & Chai", nameJA: "マンダジとチャイ", description: "Warm coastal mandazi with spiced Kenyan tea.", descriptionJA: "温かい沿岸風マンダジ（揚げパン）とスパイス香るケニアンティー。", priceKES: 250, priceUSD: 1.95, image: "images/menu/mandazi-&-chai.webp", tone: "sand" }
    ]
  },
  {
    category: "Pastas",
    categoryJA: "パスタ",
    swahili: "Tambi",
    note: null,
    noteJA: null,
    items: [
      { name: "Spaghetti Bolognese", nameJA: "スパゲッティ・ボロネーゼ", description: "Slow-cooked beef ragù over spaghetti with parmesan.", descriptionJA: "じっくり煮込んだ牛肉のラグーソースにパルメザンチーズを添えたスパゲッティ。", priceKES: 750, priceUSD: 5.80, image: "images/menu/spaghetti-bolognese.webp", tone: "coral" },
      { name: "Spaghetti Napoletana", nameJA: "スパゲッティ・ナポリタン", description: "Fresh tomato, basil and garlic — light and bright.", descriptionJA: "フレッシュトマト、バジル、ガーリックを使った軽やかで爽やかな一皿。", priceKES: 650, priceUSD: 5.05, image: "images/menu/spaghetti-napoletana.webp", tone: "green" }
    ]
  },
  {
    category: "Snacks & Burgers",
    categoryJA: "スナック＆バーガー",
    swahili: "Vitafunio",
    note: null,
    noteJA: null,
    items: [
      { name: "Pazuri Beach Burger", nameJA: "パズーリ・ビーチバーガー", description: "Char-grilled beef, cheddar, caramelised onion and house sauce with chips.", descriptionJA: "炭火焼きビーフ、チェダーチーズ、キャラメリゼオニオン、自家製ソースのバーガー。チップス付き。", priceKES: 700, priceUSD: 5.45, image: "images/menu/pazuri-beach-burger.webp", tone: "sunset" },
      { name: "Chicken Burger", nameJA: "チキンバーガー", description: "Grilled chicken breast, lettuce and lime mayo with chips.", descriptionJA: "グリルチキンにレタスとライムマヨを合わせたバーガー。チップス付き。", priceKES: 650, priceUSD: 5.05, image: "images/menu/chicken-burger.webp", tone: "sand" },
      { name: "Club Sandwich", nameJA: "クラブサンドイッチ", description: "Triple-stacked with chicken, egg and bacon, served with fries.", descriptionJA: "チキン、卵、ベーコンを重ねた3段サンドイッチ。フライドポテト付き。", priceKES: 600, priceUSD: 4.65, image: "images/menu/club-sandwich.webp", tone: "sand" }
    ]
  },
  {
    category: "Extras & Sides",
    categoryJA: "サイドメニュー",
    swahili: "Nyongeza",
    note: null,
    noteJA: null,
    items: [
      { name: "Chips Masala", nameJA: "チップスマサラ", description: "Golden fries tossed in spiced tomato masala.", descriptionJA: "スパイシーなトマトマサラソースを絡めたフライドポテト。", priceKES: 350, priceUSD: 2.70, image: "images/menu/chips-masala.webp", tone: "sunset" },
      { name: "French Fries", nameJA: "フライドポテト", description: "Crisp and golden, salted to order.", descriptionJA: "サクサクの黄金色、お好みの塩加減で。", priceKES: 250, priceUSD: 1.95, image: "images/menu/french-fries.webp", tone: "sand" },
      { name: "Ugali", nameJA: "ウガリ", description: "The Kenyan staple — perfect with grilled fish or choma.", descriptionJA: "ケニアの主食 — 焼き魚や炭火焼き肉との相性抜群。", priceKES: 100, priceUSD: 0.80, image: "images/menu/ugali.webp", tone: "sand" },
      { name: "Steamed Rice", nameJA: "白飯", description: "Plain fluffy rice.", descriptionJA: "ふっくらとした白いご飯。", priceKES: 150, priceUSD: 1.15, image: "images/menu/steamed-rice.webp", tone: "sand" },
      { name: "Kachumbari", nameJA: "カチュンバリ", description: "Fresh tomato, onion and coriander salad with lime.", descriptionJA: "トマト、玉ねぎ、コリアンダーのフレッシュサラダにライムを添えて。", priceKES: 150, priceUSD: 1.15, image: "images/menu/kachumbari.webp", tone: "green" }
    ]
  },
  {
    category: "Desserts",
    categoryJA: "デザート",
    swahili: "Kitindamlo",
    note: null,
    noteJA: null,
    items: [
      { name: "Fresh Fruit Platter", nameJA: "フレッシュフルーツ盛り合わせ", description: "Seasonal tropical fruit — mango, pineapple, passion and more.", descriptionJA: "マンゴー、パイナップル、パッションフルーツなど、旬のトロピカルフルーツ盛り合わせ。", priceKES: 400, priceUSD: 3.10, image: "images/menu/fresh-fruit-platter.webp", tone: "green" },
      { name: "Ice Cream (2 Scoops)", nameJA: "アイスクリーム（2スクープ）", description: "Vanilla, chocolate or strawberry.", descriptionJA: "バニラ、チョコレート、ストロベリーからお選びいただけます。", priceKES: 300, priceUSD: 2.35, image: "images/menu/ice-cream-2-scoops.webp", tone: "coral" },
      { name: "Strawberry Dessert", nameJA: "ストロベリーデザート", description: "Strawberries with cream, finished with mint.", descriptionJA: "ストロベリーにクリームを添え、ミントで仕上げたデザート。", priceKES: 450, priceUSD: 3.50, image: "images/menu/strawberry-dessert.webp", tone: "coral" }
    ]
  },
  {
    category: "Drinks",
    categoryJA: "ドリンク",
    swahili: "Vinywaji",
    note: "Fresh juices pressed to order.",
    noteJA: "ご注文ごとに搾りたてのフレッシュジュース。",
    items: [
      { name: "Fresh Passion Juice", nameJA: "フレッシュパッションジュース", description: "Pressed to order from coastal passion fruit.", descriptionJA: "沿岸産パッションフルーツをその場で搾ったジュース。", priceKES: 250, priceUSD: 1.95, image: "images/menu/fresh-passion-juice.webp", tone: "sunset" },
      { name: "Fresh Mango Juice", nameJA: "フレッシュマンゴージュース", description: "Thick, sweet and ice-cold.", descriptionJA: "濃厚で甘く、キンキンに冷えた一杯。", priceKES: 250, priceUSD: 1.95, image: "images/menu/fresh-mango-juice.webp", tone: "sunset" },
      { name: "Madafu (Fresh Coconut)", nameJA: "マダフ（フレッシュココナッツ）", description: "Young coconut straight off the palm.", descriptionJA: "ヤシの木から採れたばかりの若いココナッツ。", priceKES: 200, priceUSD: 1.55, image: "images/menu/madafu-fresh-coconut.webp", tone: "green" },
      { name: "Soft Drinks", nameJA: "ソフトドリンク", description: "Soda, sparkling or still water.", descriptionJA: "ソーダ、炭酸水、またはミネラルウォーター。", priceKES: 120, priceUSD: 0.95, image: "images/menu/soft-drinks.webp", tone: "ocean" },
      { name: "Kenyan Lager", nameJA: "ケニアンラガー", description: "Ice-cold local beer — ask for today's selection.", descriptionJA: "キンキンに冷えた地元産ビール — 本日のおすすめをスタッフにお尋ねください。", priceKES: 300, priceUSD: 2.35, image: "images/menu/kenyan-lager.webp", tone: "sand" },
      { name: "House Cocktails", nameJA: "ハウスカクテル", description: "Dawa, mojito and sunset specials from the beach bar.", descriptionJA: "ダワ、モヒート、ビーチバー特製のサンセットカクテルなど。", priceKES: 550, priceUSD: 4.25, image: "images/menu/house-cocktails.webp", tone: "coral" }
    ]
  }
];
