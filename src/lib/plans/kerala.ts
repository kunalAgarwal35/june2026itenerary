import type { Plan } from "../types";

export const kerala: Plan = {
  slug: "kerala",
  name: "Kerala — God's Own Country",
  tagline: "Monsoon backwaters, spice hills & Ayurveda",
  startDate: "2026-06-07",
  endDate: "2026-06-15",
  travellers: 11,
  emoji: "🌴",
  accentFrom: "#0f5132",
  accentTo: "#7cb98f",
  heroImage:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
  description:
    "Kerala in the first burst of monsoon — discounted rates, emerald hills, and the unmatched magic of rain on the backwaters. Fort Kochi history → Munnar tea estates → Periyar wildlife → Alleppey houseboat → Kovalam beach.",

  flights: {
    outbound: [
      {
        airline: "IndiGo",
        flightNo: "6E 357",
        from: "JAI (Jaipur)",
        to: "COK (Kochi)",
        depart: "06:25",
        arrive: "11:10",
        duration: "4h 45m",
        stops: "1 stop (BOM)",
        pricePerPerson: 7820,
      },
      {
        airline: "Air India",
        flightNo: "AI 489 + AI 679",
        from: "JAI (Jaipur)",
        to: "COK (Kochi)",
        depart: "08:55",
        arrive: "14:40",
        duration: "5h 45m",
        stops: "1 stop (DEL)",
        pricePerPerson: 8650,
      },
    ],
    return: [
      {
        airline: "IndiGo",
        flightNo: "6E 871 + 6E 2179",
        from: "TRV (Trivandrum)",
        to: "JAI (Jaipur)",
        depart: "11:10",
        arrive: "17:05",
        duration: "5h 55m",
        stops: "1 stop (BOM)",
        pricePerPerson: 8480,
      },
      {
        airline: "Akasa Air",
        flightNo: "QP 1311 + QP 1841",
        from: "TRV (Trivandrum)",
        to: "JAI (Jaipur)",
        depart: "14:20",
        arrive: "20:55",
        duration: "6h 35m",
        stops: "1 stop (BOM)",
        pricePerPerson: 7980,
      },
    ],
  },

  carOptions: [
    {
      type: "self-drive",
      vehicle: "2× Toyota Innova Crysta 7-seater",
      capacity: 7,
      perDayPrice: 4500,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Zoomcar / Avis Kochi",
      notes:
        "Most popular option. Pick up at Kochi airport, drop at Trivandrum airport (one-way fee ~₹3,500). Includes insurance. Roads from Kochi → Munnar → Thekkady → Alleppey → Kovalam are good highways with only the Munnar climb needing care.",
    },
    {
      type: "self-drive",
      vehicle: "1× Force Urbania 12-seater",
      capacity: 12,
      perDayPrice: 7200,
      totalDays: 9,
      countNeeded: 1,
      vendor: "MyChoize / Self Drive India",
      notes:
        "Single-vehicle convenience. Fits the whole group + bags. Hill driving up to Munnar needs care due to length.",
    },
    {
      type: "chauffeur",
      vehicle: "1× Tempo Traveller 13-seater (Kerala Tourism approved)",
      capacity: 13,
      perDayPrice: 5800,
      totalDays: 9,
      countNeeded: 1,
      vendor: "Kerala Tourism approved operator (KTDC partners)",
      notes:
        "Recommended in monsoon — local driver knows wet-road behaviour. Cheapest per-head total. All-inclusive (fuel + driver bata).",
    },
  ],

  weather: [
    {
      heading: "Monsoon onset — expect rain",
      body: "South-West Monsoon hits Kerala around June 1. June 6-15 will have intermittent heavy showers daily, especially Munnar & Periyar. Plan attractions with rain backup. Carry quick-dry clothes + light umbrellas.",
      tone: "warn",
    },
    {
      heading: "Backwater & wildlife caveats",
      body: "Alleppey houseboats sometimes pause for heavy rain — confirm flexibility at booking. Periyar's evening boat may cancel. Eravikulam National Park stays closed in June. Leeches at Thekkady — wear closed shoes.",
      tone: "bad",
    },
    {
      heading: "Why June is actually magical",
      body: "Ayurveda traditions reserve monsoon as the BEST season for treatments — pores open, body absorbs oils. Hotels are 30-45% cheaper. Hillsides are at their greenest. Photographers love it.",
      tone: "good",
    },
    {
      heading: "Beach & sea",
      body: "Kovalam is swim-able with caution — lifeguards on duty. Sea is rougher and waves higher in monsoon; elders should stay knee-deep. Sunsets are spectacular when clouds break.",
      tone: "info",
    },
  ],

  totalEstimate: { low: 578000, high: 850000 },

  costBreakdown: [
    { label: "Flights (JAI→COK + TRV→JAI, open-jaw)", amount: 179300, note: "IndiGo 1-stop via Mumbai — ~₹16,300 × 11" },
    { label: "Hotels (8 nights, ~4 rooms × monsoon rates)", amount: 230000, note: "Crowne / Fragrant / Cardamom / Uday Samudra / Hilton" },
    { label: "4-BR Premium Houseboat (full charter)", amount: 45000, note: "Lakes & Lagoons / Spice Coast — all meals incl." },
    { label: "2× Innova Crysta chauffeur (8 days all-in)", amount: 72000, note: "Cheaper than self-drive once fuel+damage counted" },
    { label: "Meals outside houseboat (₹500/pax × 15)", amount: 82500 },
    { label: "Attractions (Eravikulam, Periyar boat, Kathakali, museums)", amount: 22000 },
    { label: "Ayurveda treatments at Kovalam (6 pax avg)", amount: 24000, note: "Monsoon is peak season per classical Ayurveda" },
    { label: "Tips, driver bata, miscellaneous, insurance", amount: 40000 },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Kochi · Fort Kochi heritage",
      city: "Kochi",
      summary:
        "Fly Jaipur to Kochi with a quick Mumbai connection, drive to Fort Kochi (1 hr). Afternoon: Chinese fishing nets, St Francis Church (oldest European church in India), Jew Town spice market. Evening: Kathakali performance.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_Fishing_Nets%2C_Cochin.jpg?width=1200",
      transfer: {
        from: "Cochin Airport (COK)",
        to: "Fort Kochi",
        distanceKm: 42,
        durationHours: 1.5,
        notes: "Smooth highway, then ferry or bridge into Fort Kochi.",
      },
      attractions: [
        {
          name: "Chinese Fishing Nets, Fort Kochi",
          brief:
            "Cantilevered fishing nets installed by Chinese traders 600 years ago. Lower and raise on counterweights at sunset — pay ₹100 to try it yourself.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_Fishing_Nets%2C_Cochin.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Chinese Fishing Nets, Fort Kochi",
        },
        {
          name: "St Francis Church",
          brief:
            "Oldest European church in India (1503). Vasco da Gama was originally buried here before his remains were taken back to Lisbon.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "St Francis Church, Fort Kochi",
        },
        {
          name: "Jew Town & Paradesi Synagogue",
          brief:
            "Cobbled lane of antique shops and the 1568 Paradesi Synagogue — hand-painted Chinese floor tiles, every one different. India's oldest active synagogue.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          mapsQuery: "Paradesi Synagogue, Mattancherry",
        },
        {
          name: "Kathakali Performance",
          brief:
            "Kerala's classical dance-drama. Arrive 1 hr early to watch the elaborate makeup being applied. Kerala Kathakali Centre or Greenix Village — both have English narration.",
          photo:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Kerala Kathakali Centre, Fort Kochi",
        },
      ],
      hotel: {
        name: "Brunton Boatyard (CGH Earth)",
        category: "Heritage 4★",
        pricePerNight: 11800,
        roomsNeeded: 5,
        notes: "Restored colonial boatyard on the harbour. All rooms face the sea; lift-accessible.",
      },
      meals: "Lunch at Kashi Art Café · Dinner at hotel (sea view)",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Kochi → Munnar via spice country",
      city: "Munnar",
      summary:
        "A 4-hour climb from sea level to 5,200 ft. Stop at the Cheeyappara & Valara waterfalls (in full monsoon flow), tea-tasting at Lockhart Tea Museum, evening at the misty Mattupetty viewpoint.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Munnar_Tea_Garden.jpg?width=1200",
      transfer: {
        from: "Fort Kochi",
        to: "Munnar",
        distanceKm: 130,
        durationHours: 4,
        notes: "Hairpins from Adimali onwards — 12 sharp bends. Driver-led is best in rain.",
      },
      attractions: [
        {
          name: "Cheeyappara Waterfalls",
          brief:
            "Seven-step cascade right next to the highway — at peak power in early June monsoon. Easy photo stop, no walking required.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Athirappilly_Waterfalls.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Cheeyappara Waterfalls",
        },
        {
          name: "Kannan Devan Tea Museum",
          brief:
            "Working museum showing how black, green, and white teas are processed. Free tea tasting at the end. Bought-by-weight souvenir shop.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Munnar_Tea_Garden.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "KDHP Tea Museum, Munnar",
        },
      ],
      hotel: {
        name: "Spice Tree Munnar",
        category: "4★ resort",
        pricePerNight: 8400,
        roomsNeeded: 5,
        notes: "Hilltop pool villas with valley views, infinity pool, lift access in main block.",
      },
      meals: "Lunch on the road · Dinner at hotel buffet",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Munnar — tea, mist, waterfalls",
      city: "Munnar",
      summary:
        "Wake to clouds in your room. Today: Top Station (Tamil Nadu border viewpoint), Echo Point on Mattupetty Lake, Kundala dam, and an aromatic spice plantation walk. Eravikulam NP is closed in June.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Munnar_Tea_Garden.jpg?width=1200",
      attractions: [
        {
          name: "Top Station",
          brief:
            "At 5,800 ft on the Tamil Nadu border — Western Ghats stretching to the horizon. The Neelakurinji flowers bloom here once in 12 years (next: 2030).",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Top_Station_Munnar.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Top Station, Munnar",
        },
        {
          name: "Mattupetty Dam & Echo Point",
          brief:
            "Concrete dam with a placid reservoir — speedboat rides if weather permits. Echo Point is on the lake where your shout returns crystal-clear.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_backwaters.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Mattupetty Dam, Munnar",
        },
        {
          name: "Kundala Dam & Lake",
          brief:
            "Asia's first arch dam (1946). Pedal-boats and tibetan-style row boats. Less crowded than Mattupetty.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_backwaters.jpg?width=1200",
          duration: "1 hr",
          mapsQuery: "Kundala Lake, Munnar",
        },
        {
          name: "Spice Plantation Walk",
          brief:
            "Cardamom, pepper, vanilla, clove growing wild — a guided 45-min walk teaching what each plant looks like before it gets to your kitchen.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Cardamom_plantation.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Spice Plantation Munnar",
        },
      ],
      hotel: {
        name: "Spice Tree Munnar",
        category: "4★ resort",
        pricePerNight: 8400,
        roomsNeeded: 5,
      },
      warning: "Eravikulam (Rajamala) NP is closed in June for nilgiri tahr breeding season — don't plan it.",
      meals: "Breakfast at hotel · Lunch at Saravana Bhavan · Dinner at hotel",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Munnar → Thekkady (Periyar)",
      city: "Thekkady",
      summary:
        "Cardamom and pepper plantations all the way. Afternoon spice walk, a Kalaripayattu (Kerala martial art) show, and a sunset bamboo-rafting on Periyar Lake (weather permitting).",
      heroImage:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Munnar",
        to: "Thekkady",
        distanceKm: 95,
        durationHours: 3.5,
        notes: "Scenic drive through Anachal & Devikulam. Lots of cardamom estates.",
      },
      attractions: [
        {
          name: "Periyar Tiger Reserve Boat Cruise",
          brief:
            "1.5-hr Forest Department boat through a flooded valley reservoir. Look for elephants, sambar, gaur, otters at the shore. Tigers exist but rarely seen.",
          photo:
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
          duration: "2 hr",
          mapsQuery: "Periyar Tiger Reserve, Thekkady",
        },
        {
          name: "Kalaripayattu Show",
          brief:
            "World's oldest martial art (origin ~3rd century BCE in Kerala). Acrobatic sword, shield, and the bendy 'urumi' whip. Show at Kadathanadan Kalari Centre.",
          photo:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Kadathanadan Kalari Centre, Thekkady",
        },
        {
          name: "Spice Garden Walk",
          brief:
            "Guided walk through cardamom, cinnamon, nutmeg, coffee groves. Many gardens make their own oils and honey to buy.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Spices_in_an_Indian_market.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Highrange Spices, Thekkady",
        },
      ],
      hotel: {
        name: "Spice Village (CGH Earth)",
        category: "4★ eco resort",
        pricePerNight: 9600,
        roomsNeeded: 5,
        notes: "Thatched cottages in a spice garden. Famous boutique eco-property — kitchen tour included.",
      },
      meals: "Breakfast at hotel · Lunch on the way · Dinner buffet at Spice Village",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Thekkady → Alleppey houseboat",
      city: "Alleppey",
      summary:
        "Drive down to Kerala's backwaters. Board a premium 3-bedroom houseboat at noon for a 22-hour cruise — meals cooked onboard, sundowner on the deck, sleep to the lap of water.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_backwaters.jpg?width=1200",
      transfer: {
        from: "Thekkady",
        to: "Alleppey Boat Jetty",
        distanceKm: 145,
        durationHours: 4,
        notes: "Down from the Cardamom Hills to sea level — ears will pop.",
      },
      attractions: [
        {
          name: "Premium Houseboat Charter",
          brief:
            "3-bedroom AC houseboat (kettuvallam) with chef, two crew, dining deck, sundeck. Cruises through Kuttanad — paddy fields below sea-level. Includes lunch, hi-tea, dinner, breakfast.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_backwaters.jpg?width=1200",
          duration: "22 hr",
          mapsQuery: "Alleppey Houseboat Jetty",
        },
        {
          name: "Kuttanad rice paddies",
          brief:
            "Asia's only place where farming happens 1-2 m below sea level. From the deck you'll see dykes, water channels, and ducks paddled in flocks.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_backwaters.jpg?width=1200",
          duration: "On cruise",
        },
      ],
      hotel: {
        name: "Spice Routes / Lakes & Lagoons Premium Houseboat",
        category: "Luxury 3-bedroom houseboat (full charter)",
        pricePerNight: 28000,
        roomsNeeded: 1,
        notes: "Full-boat charter for the 11 of us — no strangers. All meals included.",
      },
      meals: "Lunch, tea, dinner, next-day breakfast all onboard",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Disembark · Alleppey → Kovalam",
      city: "Kovalam",
      summary:
        "9am disembark after breakfast on the water. Long drive south down the NH-66 to Kovalam — Kerala's most famous beach. Afternoon: dip toes in the Arabian Sea, sunset on Lighthouse Beach.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
      transfer: {
        from: "Alleppey",
        to: "Kovalam",
        distanceKm: 160,
        durationHours: 4,
        notes: "Coastal NH-66, smooth. Lunch at Marari beach en route.",
      },
      attractions: [
        {
          name: "Lighthouse Beach",
          brief:
            "Kovalam's main crescent — distinguished by a striped lighthouse you can climb. Cafes line the promenade. Lifeguards on duty.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Lighthouse Beach, Kovalam",
        },
        {
          name: "Hawa Beach (Eve's Beach)",
          brief:
            "Quieter cove next door — less crowded, gentler surf. Good for the elders to sit and watch the waves.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Hawa Beach, Kovalam",
        },
      ],
      hotel: {
        name: "The Leela Kovalam",
        category: "5★ cliff-top",
        pricePerNight: 13800,
        roomsNeeded: 5,
        notes: "Built into a cliff — three swimming pools, every room sea-facing. Long flights of stairs but with lifts at key levels.",
      },
      meals: "Breakfast on houseboat · Lunch en route · Dinner at Leela",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Ayurveda & Kovalam beach day",
      city: "Kovalam",
      summary:
        "Slow day. Morning: traditional Kerala Ayurveda massage (book ahead at Somatheeram or in-hotel). Afternoon: swim or rest. Evening: visit Vizhinjam fishing harbour at sunset.",
      heroImage:
        "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
      attractions: [
        {
          name: "Authentic Ayurveda Treatment",
          brief:
            "Monsoon is the *recommended* season per classical Ayurveda — pores open, oils absorb deeply. 90-min Abhyanga + Shirodhara from ~₹4,500/person.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Somatheeram Ayurveda Hospital, Kovalam",
        },
        {
          name: "Vizhinjam Lighthouse & Fishing Harbour",
          brief:
            "Walk among hundreds of fishing boats coming in at sunset. The lighthouse at the top of the hill gives a 360° view of the coastline.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
          duration: "1.5 hr",
          mapsQuery: "Vizhinjam Lighthouse",
        },
      ],
      hotel: {
        name: "The Leela Kovalam",
        category: "5★ cliff-top",
        pricePerNight: 13800,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch poolside · Dinner at German Bakery, Lighthouse Beach",
    },
    {
      index: 8,
      date: "2026-06-14",
      title: "Trivandrum heritage day",
      city: "Trivandrum",
      summary:
        "Short drive to the capital. The world's wealthiest temple, the Napier Museum's Indo-Saracenic peacock building, and the Kuthiramalika Palace — last surviving Travancore royal residence.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Padmanabhaswamy_temple.jpg?width=1200",
      transfer: {
        from: "Kovalam",
        to: "Trivandrum",
        distanceKm: 18,
        durationHours: 0.75,
      },
      attractions: [
        {
          name: "Sree Padmanabhaswamy Temple",
          brief:
            "World's wealthiest temple (~$22B in undiscovered vaults). Hindus only inside; dress code is strict (dhoti for men, sari for women — provided at entry).",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Padmanabhaswamy_temple.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Sree Padmanabhaswamy Temple",
        },
        {
          name: "Napier Museum",
          brief:
            "Indo-Saracenic 1880 building — gables, minarets, a wedding-cake of styles. Houses temple bronzes, Mughal paintings, ivory carvings.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Napier_Museum_Thiruvananthapuram.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Napier Museum, Thiruvananthapuram",
        },
        {
          name: "Kuthiramalika Palace",
          brief:
            "'Mansion of horses' — 122 wooden horses carved into the eaves. Last surviving palace of the Travancore royal family. Slow tour, no photos inside.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Napier_Museum_Thiruvananthapuram.jpg?width=1200",
          duration: "1 hr",
          mapsQuery: "Kuthiramalika Palace Museum",
        },
      ],
      hotel: {
        name: "Taj Vivanta Trivandrum",
        category: "5★ city hotel",
        pricePerNight: 9800,
        roomsNeeded: 5,
        notes: "Close to airport for next-day departure.",
      },
      meals: "Breakfast at Leela · Lunch at Villa Maya (heritage) · Farewell dinner at hotel",
    },
    {
      index: 9,
      date: "2026-06-15",
      title: "Trivandrum → Jaipur",
      city: "Jaipur",
      summary:
        "Lazy morning. Last Kerala sadya at the hotel. Late-morning flight back to Jaipur via Mumbai.",
      heroImage:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Taj Vivanta Trivandrum",
        to: "Trivandrum Airport (TRV)",
        distanceKm: 6,
        durationHours: 0.3,
      },
      attractions: [
        {
          name: "Last Kerala meal",
          brief:
            "A proper sadya — rice with 10-15 side dishes on a banana leaf. Eat with your hands, finish with payasam.",
          photo:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
        },
      ],
      meals: "Breakfast at Taj · Sadya lunch · Dinner home",
    },
  ],
};
