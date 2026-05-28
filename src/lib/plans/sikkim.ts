import type { Plan } from "../types";

export const sikkim: Plan = {
  slug: "sikkim",
  name: "Sikkim & Darjeeling",
  tagline: "Himalayan monasteries, prayer flags & tea hills",
  startDate: "2026-06-07",
  endDate: "2026-06-15",
  travellers: 11,
  emoji: "🏔️",
  accentFrom: "#1e3a5f",
  accentTo: "#7aa6c7",
  heroImage:
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
  description:
    "A monsoon-conscious loop through East & West Sikkim and the Darjeeling hills — Buddhist monasteries, glacial lakes near the China border, the Pelling Skywalk, and the world's oldest mountain railway. Skips landslide-prone North Sikkim (Lachung) for safety in June.",

  flights: {
    outbound: [
      {
        airline: "IndiGo",
        flightNo: "6E 2042 + 6E 5375",
        from: "JAI (Jaipur)",
        to: "IXB (Bagdogra)",
        depart: "06:00",
        arrive: "12:45",
        duration: "6h 45m",
        stops: "1 stop (DEL)",
        pricePerPerson: 9420,
      },
      {
        airline: "Air India",
        flightNo: "AI 492 + AI 779",
        from: "JAI (Jaipur)",
        to: "IXB (Bagdogra)",
        depart: "08:15",
        arrive: "15:35",
        duration: "7h 20m",
        stops: "1 stop (DEL)",
        pricePerPerson: 10380,
      },
    ],
    return: [
      {
        airline: "IndiGo",
        flightNo: "6E 6202 + 6E 2179",
        from: "IXB (Bagdogra)",
        to: "JAI (Jaipur)",
        depart: "11:20",
        arrive: "17:25",
        duration: "6h 05m",
        stops: "1 stop (DEL)",
        pricePerPerson: 9650,
      },
      {
        airline: "Akasa Air",
        flightNo: "QP 1378 + QP 1841",
        from: "IXB (Bagdogra)",
        to: "JAI (Jaipur)",
        depart: "13:45",
        arrive: "20:55",
        duration: "7h 10m",
        stops: "1 stop (BLR)",
        pricePerPerson: 8980,
      },
    ],
  },

  carOptions: [
    {
      type: "chauffeur",
      vehicle: "2× Toyota Innova Crysta",
      capacity: 6,
      perDayPrice: 5500,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Gangtok Taxi Drivers Welfare Assoc. / Sikkim Holidays",
      notes:
        "Recommended. Sikkim requires Sikkim-registered vehicles for Tsomgo Lake & restricted areas — outside self-drive cars get stopped at Rongli/Kupup. Drivers know permit officers and weather routes.",
    },
    {
      type: "chauffeur",
      vehicle: "1× Tempo Traveller 12-seater",
      capacity: 12,
      perDayPrice: 7800,
      totalDays: 9,
      countNeeded: 1,
      vendor: "Darjeeling Tours / Sikkim Tourism approved",
      notes:
        "Cheapest per-head option but tight on hairpin roads. Comfortable on Siliguri–Gangtok–Pelling highway; less ideal in Pelling-to-Darjeeling narrow stretches.",
    },
    {
      type: "self-drive",
      vehicle: "2× Mahindra XUV700 7-seater",
      capacity: 7,
      perDayPrice: 4200,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Zoomcar / Revv (pick up Siliguri)",
      notes:
        "Possible for Bagdogra → Gangtok → Pelling → Darjeeling. NOT permitted to Tsomgo Lake, Nathu La, or North Sikkim — you'd need to hire a local taxi for those days. Hill driving experience essential.",
    },
  ],

  weather: [
    {
      heading: "Pre-monsoon to monsoon onset",
      body: "June 6-15 sits at the cusp: first week is often clear-ish with afternoon showers; rains intensify after June 12. Daytime 18-24°C in Gangtok, 12-18°C in Darjeeling. Carry layers + rain shells.",
      tone: "warn",
    },
    {
      heading: "North Sikkim is risky",
      body: "Lachung / Yumthang Valley road is notorious for June landslides. Tour operators routinely cancel. We have deliberately excluded it — far better in March-May or Sept-Nov.",
      tone: "bad",
    },
    {
      heading: "Tsomgo & Nathu La",
      body: "Both usually accessible in early June. Nathu La opens Wed/Thu/Sat/Sun only and requires a 3-day advance Protected Area Permit via your hotel.",
      tone: "info",
    },
    {
      heading: "Good for: lush landscapes, fewer crowds, lower rates",
      body: "Tea estates are emerald-green, waterfalls in full flow, off-season hotel rates 25-35% lower than peak (April or October).",
      tone: "good",
    },
  ],

  totalEstimate: { low: 926000, high: 1224000 },

  costBreakdown: [
    { label: "Flights (11 × ~₹19,000 round trip JAI⇄IXB)", amount: 209000, note: "IndiGo 1-stop via Delhi (no JAI-IXB direct)" },
    { label: "Hotels (8 nights × 5 rooms × ~₹10,000)", amount: 400000, note: "Mayfair / Elgin / Cedar Inn mix" },
    { label: "Cars (2× Innova Crysta chauffeur, 8 days all-in)", amount: 150000, note: "Industry-standard for Sikkim — see notes" },
    { label: "Permits (Tsomgo + photo ID processing)", amount: 9000, note: "₹200/pax × 2 areas + vehicle permit" },
    { label: "Meals (₹600/pax/day × 11 × 9)", amount: 59400 },
    { label: "Attractions, monastery donations, Toy Train", amount: 38000, note: "DHR joy ride ₹1,500/pax × 11 + entries" },
    { label: "Driver bata, tolls, tips, travel insurance", amount: 45000 },
    { label: "Contingency (rain delays, oxygen, meds)", amount: 60000, note: "Critical buffer — June monsoon is unpredictable" },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Bagdogra → Gangtok",
      city: "Gangtok",
      summary:
        "Early flight from Jaipur with a Delhi connection, then a scenic 4-hour climb up the Teesta gorge to Gangtok. Settle in, evening stroll on MG Marg.",
      heroImage:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Bagdogra Airport (IXB)",
        to: "Gangtok, Sikkim",
        distanceKm: 124,
        durationHours: 4.5,
        notes: "NH-10 along the Teesta river. Lunch stop at Rangpo border check-post.",
      },
      attractions: [
        {
          name: "MG Marg Boulevard",
          brief:
            "Pedestrian-only Mall Road in central Gangtok. Cobbled, no spitting, no vehicles — perfect for an easy evening walk for elders.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/M.G._Marg%2C_Gangtok_01.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "MG Marg, Gangtok",
        },
        {
          name: "Tibet Road momos",
          brief:
            "Sikkim's signature dumplings, steamed and pan-fried. Try Taste of Tibet or Roll House — cheap, hot, and elder-friendly.",
          photo:
            "https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&w=1200&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Taste of Tibet Restaurant, Gangtok",
        },
      ],
      hotel: {
        name: "Mayfair Spa Resort & Casino",
        category: "5★ resort",
        pricePerNight: 13500,
        roomsNeeded: 5,
        notes: "Heritage-style cottages with valley views, spa, indoor pool. Elders love the lift access.",
        photo:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      },
      meals: "Lunch on the road · Dinner at hotel",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Gangtok Monasteries & Viewpoints",
      city: "Gangtok",
      summary:
        "A relaxed loop of Buddhist heritage — Rumtek seat of the Karmapa, the elevated Buddha Park glimpse at Ranka, and the Banjhakri Falls.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Rumtek_Monastery_alias_Dharma_Chakra_Centre_near_Gangtok%2C_East_Sikkim_09.jpg?width=1200",
      transfer: {
        from: "Hotel, Gangtok",
        to: "Rumtek → Ranka → Banjhakri (loop)",
        distanceKm: 65,
        durationHours: 4.5,
        notes: "Local roads, plenty of stop-and-photo points.",
      },
      attractions: [
        {
          name: "Rumtek Monastery",
          brief:
            "The Dharma Chakra Centre — seat-in-exile of the 16th Karmapa and the largest monastery in Sikkim. Gilded prayer hall and frescoes.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rumtek_Monastery_alias_Dharma_Chakra_Centre_near_Gangtok%2C_East_Sikkim_09.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Rumtek Monastery, Sikkim",
        },
        {
          name: "Ranka (Lingdum) Monastery",
          brief:
            "Newer, photogenic monastery in a forested bowl — sweeping courtyards, easy walking surface, very photogenic for family pics.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Lingdum_Monastery.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Lingdum Monastery, Ranka",
        },
        {
          name: "Banjhakri Falls & Energy Park",
          brief:
            "Landscaped park around a 100-ft waterfall, with shamanic-art statues. Gentle paved paths suitable for parents.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Banjhakri Falls, Gangtok",
        },
        {
          name: "Hanuman Tok Viewpoint",
          brief:
            "A hilltop temple at 7,200 ft maintained by the Indian Army. On clear days you can see the Kanchenjunga range.",
          photo:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Hanuman Tok, Gangtok",
        },
      ],
      hotel: {
        name: "Mayfair Spa Resort & Casino",
        category: "5★ resort",
        pricePerNight: 13500,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Cafe Live & Loud · Dinner local Thakali set",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Tsomgo Lake & Baba Mandir",
      city: "Gangtok",
      summary:
        "Day trip up to 12,400 ft — a sacred glacial lake near the Chinese border. Yak rides for the brave, hot maggi and momos at the rim.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Tsongmo_Lake_or_Changu_Lake_-_East_Sikkim.jpg?width=1200",
      transfer: {
        from: "Gangtok",
        to: "Tsomgo Lake → Baba Mandir → Gangtok",
        distanceKm: 110,
        durationHours: 7,
        notes:
          "Restricted zone — permits required (we arrange via hotel). Only Sikkim-registered taxis allowed beyond Rongli.",
      },
      warning: "Altitude: 12,400 ft. Elders should consult doctor; carry Diamox if prescribed. Cold and thin air — pack down jackets even in June.",
      attractions: [
        {
          name: "Tsomgo (Changu) Lake",
          brief:
            "Oval glacial lake that reflects the sky and changes colour through the year. Locals consider it sacred — circumambulating clockwise is tradition.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Tsongmo_Lake_or_Changu_Lake_-_East_Sikkim.jpg?width=1200",
          duration: "2 hr",
          permitRequired: true,
          mapsQuery: "Tsomgo Lake, Sikkim",
        },
        {
          name: "Baba Harbhajan Singh Mandir",
          brief:
            "A military shrine to an Indian soldier whose spirit, soldiers say, still protects the border. Eerie, moving, and an army-run cafeteria with chai.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Nathu_La%2C_a_mountain_pass_in_the_Himalayas_on_the_Indo-China_Border.jpg?width=1200",
          duration: "45 min",
          permitRequired: true,
          mapsQuery: "Baba Mandir, East Sikkim",
        },
        {
          name: "Ropeway / Yak ride (optional)",
          brief:
            "Skip-able — yak rides are touristy and the animals look tired. The walk around the lake is plenty.",
          photo:
            "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=80",
          duration: "30 min",
        },
      ],
      hotel: {
        name: "Mayfair Spa Resort & Casino",
        category: "5★ resort",
        pricePerNight: 13500,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch on the route · Dinner at hotel",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Gangtok → Pelling via Namchi",
      city: "Pelling",
      summary:
        "A long but rewarding traverse west: stop at the giant Padmasambhava statue at Samdruptse, then through tea estates into Pelling — the postcard town with Kanchenjunga front-and-centre.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Main_Shrine_of_Pemangytse_Gompa_with_prayer_flags.jpg?width=1200",
      transfer: {
        from: "Gangtok",
        to: "Pelling (via Namchi)",
        distanceKm: 130,
        durationHours: 5.5,
        notes: "Stop at Namchi for lunch and the 135-ft Buddha statue.",
      },
      attractions: [
        {
          name: "Char Dham / Siddhesvara Dham, Namchi",
          brief:
            "Pilgrimage complex with replicas of the four Hindu dhams plus a 108-ft Shiva. Family-friendly with gentle ramps.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Lordshiva.JPG?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Siddhesvara Dham, Namchi",
        },
        {
          name: "Samdruptse Padmasambhava",
          brief:
            "A 135-foot copper statue of Guru Rinpoche on a hilltop — visible from miles. Lift inside the base; viewpoint is wheelchair-friendly.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Guru_Padmasambhava_(Guru_Rinpoche)%2C_the_patron_saint_of_Sikkim.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Samdruptse Hill, Namchi",
        },
      ],
      hotel: {
        name: "The Elgin Mount Pandim",
        category: "Heritage 4★",
        pricePerNight: 9800,
        roomsNeeded: 5,
        notes: "Former royal guesthouse; rooms face Kanchenjunga on clear mornings.",
      },
      meals: "Breakfast at hotel · Lunch in Namchi · Dinner at Elgin",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Pelling — Pemayangtse, Skywalk, Khecheopalri",
      city: "Pelling",
      summary:
        "Pelling's signature day: one of Sikkim's oldest monasteries, India's first glass skywalk over a giant Chenrezig statue, and a wishing-lake that locals say no leaf is ever allowed to remain on.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_over_Kangchenjunga.jpg?width=1200",
      attractions: [
        {
          name: "Pemayangtse Monastery",
          brief:
            "Founded in 1705 — one of the oldest in Sikkim. Houses Zangdok Palri, an intricate seven-tiered wooden depiction of Guru Rinpoche's heaven on the top floor.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Main_Shrine_of_Pemangytse_Gompa_with_prayer_flags.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Pemayangtse Monastery",
        },
        {
          name: "Skywalk & Chenrezig Statue",
          brief:
            "A 137-ft statue of the Buddha of Compassion + India's first glass-bottomed skywalk leading to it. Vertigo-inducing in a fun way.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_over_Kangchenjunga.jpg?width=1200",
          duration: "1 hr",
          mapsQuery: "Sky Walk, Pelling",
        },
        {
          name: "Khecheopalri Lake",
          brief:
            "A sacred 'wish-fulfilling' lake — birds reportedly pick up any leaf that falls onto its surface. Forest-fringed, quiet, 30-min walk from the parking.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Foot_bridge_to_Khecheolpalri_Lake.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Khecheopalri Lake",
        },
        {
          name: "Rabdentse Ruins",
          brief:
            "The second capital of the Kingdom of Sikkim, abandoned and reclaimed by forest. A 15-min level walk through woods leads to the throne ruins.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Main_Shrine_of_Pemangytse_Gompa_with_prayer_flags.jpg?width=1200",
          duration: "1 hr",
          mapsQuery: "Rabdentse Ruins",
        },
      ],
      hotel: {
        name: "The Elgin Mount Pandim",
        category: "Heritage 4★",
        pricePerNight: 9800,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Picnic lunch arranged · Dinner at Elgin",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Pelling → Darjeeling (via Jorethang)",
      city: "Darjeeling",
      summary:
        "Cross the Sikkim-West Bengal border and climb through tea gardens into Darjeeling — the Queen of the Hills. Afternoon: stroll on Chowrasta and tea-taste at Nathmulls.",
      heroImage:
        "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Pelling, Sikkim",
        to: "Darjeeling, West Bengal",
        distanceKm: 75,
        durationHours: 4,
        notes: "Hilly switchbacks; carry motion-sickness meds for parents.",
      },
      attractions: [
        {
          name: "Chowrasta / The Mall",
          brief:
            "Darjeeling's open-air heart — bandstand, bookshops (Oxford Books since 1936), and pony rides. Flat, pedestrian, lift-accessible from most hotels.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Chowrasta, Darjeeling",
        },
        {
          name: "Nathmulls Tea Tasting",
          brief:
            "Family-run since 1931 — choose 4-5 single-estate Darjeelings to taste like wine. Excellent gifts.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
          duration: "45 min",
          mapsQuery: "Nathmull's Tea, Darjeeling",
        },
      ],
      hotel: {
        name: "Mayfair Darjeeling",
        category: "5★ heritage",
        pricePerNight: 14200,
        roomsNeeded: 5,
        notes: "Former summer palace of the Maharaja of Nazargunj. Steep driveway — porters help.",
      },
      meals: "Breakfast at Elgin · Lunch at Glenary's · Dinner at hotel",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Tiger Hill Sunrise & Toy Train Joy Ride",
      city: "Darjeeling",
      summary:
        "Predawn drive to Tiger Hill for the Kanchenjunga sunrise (cloud-dependent in June), Ghoom Monastery, Batasia Loop war memorial, and a UNESCO-listed Toy Train joy-ride from Darjeeling to Ghoom and back.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Batasia_Loop_War_Memorial_with_Kanchanjunga.jpg?width=1200",
      attractions: [
        {
          name: "Tiger Hill Sunrise",
          brief:
            "At 2,590 m, the highest point in Darjeeling. On clear mornings: Kanchenjunga lights up gold, then Everest pokes out. June clarity ~50/50 — go with chai-fueled hope.",
          photo:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
          duration: "2 hr (incl. drive)",
          mapsQuery: "Tiger Hill, Darjeeling",
        },
        {
          name: "Batasia Loop",
          brief:
            "A spiral railway loop with a Gorkha war memorial and an open garden — the toy train circles below you. Great photo stop.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Batasia_Loop_War_Memorial_with_Kanchanjunga.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Batasia Loop, Darjeeling",
        },
        {
          name: "Ghoom Monastery (Yiga Choeling)",
          brief:
            "Built 1850 — Darjeeling's oldest Tibetan Buddhist monastery. Houses a 15-ft Maitreya Buddha. Quiet, often empty.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Rumtek_Monastery_alias_Dharma_Chakra_Centre_near_Gangtok%2C_East_Sikkim_09.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Yiga Choeling Monastery, Ghoom",
        },
        {
          name: "DHR Toy Train Joy Ride",
          brief:
            "UNESCO-listed Darjeeling Himalayan Railway. The 2-hr steam joy ride from Darjeeling → Batasia → Ghoom is the most fun way to ride it. Book first-class seats in advance.",
          photo:
            "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=80",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Darjeeling Railway Station",
        },
      ],
      hotel: {
        name: "Mayfair Darjeeling",
        category: "5★ heritage",
        pricePerNight: 14200,
        roomsNeeded: 5,
      },
      meals: "Hot chocolate at Tiger Hill · Breakfast at hotel · Lunch at Keventer's · Dinner at hotel",
    },
    {
      index: 8,
      date: "2026-06-14",
      title: "Tea Estates & HMI",
      city: "Darjeeling",
      summary:
        "Slow morning. Visit Happy Valley Tea Estate (working garden), Padmaja Naidu Zoo for the red panda, the Himalayan Mountaineering Institute with Tenzing's gear, and the cable-car over the Singla valley.",
      heroImage:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
      attractions: [
        {
          name: "Happy Valley Tea Estate",
          brief:
            "Working tea garden since 1854 (Darjeeling's second-oldest). Guided pluck-and-process walk; finish with cuppings of first/second flush.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          mapsQuery: "Happy Valley Tea Estate, Darjeeling",
        },
        {
          name: "Padmaja Naidu Himalayan Zoo",
          brief:
            "World's most successful red-panda breeding programme. Also: snow leopards, Tibetan wolves, Himalayan black bears. Compact, hilly paths.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          mapsQuery: "Padmaja Naidu Himalayan Zoological Park",
        },
        {
          name: "Himalayan Mountaineering Institute",
          brief:
            "Founded by Tenzing Norgay after Everest. Museum has his ice-axe, Everest expedition gear, and Hillary's memorabilia. Adjacent to the zoo.",
          photo:
            "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          mapsQuery: "Himalayan Mountaineering Institute",
        },
        {
          name: "Darjeeling Ropeway (Rangeet Valley)",
          brief:
            "Asia's oldest cable car. 45-min ride over deep tea-valleys to the Singla Bazaar river. Skip if you have vertigo — open gondolas.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          mapsQuery: "Darjeeling Ropeway",
        },
      ],
      hotel: {
        name: "Mayfair Darjeeling",
        category: "5★ heritage",
        pricePerNight: 14200,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Sonam's Kitchen · Farewell dinner at hotel",
    },
    {
      index: 9,
      date: "2026-06-15",
      title: "Darjeeling → Bagdogra → Jaipur",
      city: "Jaipur",
      summary:
        "Early descent through tea estates to Bagdogra. Mid-morning IndiGo flight via Delhi, lunch in transit, home by evening.",
      heroImage:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Darjeeling",
        to: "Bagdogra Airport (IXB)",
        distanceKm: 70,
        durationHours: 3.5,
        notes: "Leave by 7am for a 1pm flight — buffer for any landslide diversions.",
      },
      attractions: [
        {
          name: "Last cup of Darjeeling",
          brief:
            "Pick up vacuum-packed first-flush from Nathmulls at the airport counter — or one final cup at Keventer's before you leave.",
          photo:
            "https://images.unsplash.com/photo-1571942676516-bcab84649e44?auto=format&fit=crop&w=1200&q=80",
          duration: "30 min",
        },
      ],
      meals: "Breakfast at hotel · Lunch at Bagdogra · Dinner home",
    },
  ],
};
