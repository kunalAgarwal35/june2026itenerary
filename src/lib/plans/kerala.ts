import type { Plan } from "../types";

export const kerala: Plan = {
  slug: "kerala",
  name: "Kerala — God's Own Country",
  tagline: "Self-drive backwaters, tea hills & a long beach finish",
  startDate: "2026-06-07",
  endDate: "2026-06-15",
  travellers: 11,
  emoji: "🌴",
  accentFrom: "#0f5132",
  accentTo: "#7cb98f",
  heroImage:
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
  description:
    "A slower Kerala. Pick up self-drive 7-seaters at Kochi airport on Day 1, settle into 3 nights in Munnar (tea, mist, easy days), a Periyar wildlife stop, a full-charter houseboat overnight in Alleppey, and finish with 2 unhurried nights at Marari beach — Ayurveda, sea breeze, and a short hop back to Kochi airport. No daily 4-hour drives, no Trivandrum.",

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
        flightNo: "6E 6164 + 6E 2179",
        from: "COK (Kochi)",
        to: "JAI (Jaipur)",
        depart: "12:40",
        arrive: "18:25",
        duration: "5h 45m",
        stops: "1 stop (BOM)",
        pricePerPerson: 7920,
      },
      {
        airline: "Akasa Air",
        flightNo: "QP 1335 + QP 1841",
        from: "COK (Kochi)",
        to: "JAI (Jaipur)",
        depart: "15:20",
        arrive: "21:35",
        duration: "6h 15m",
        stops: "1 stop (BOM)",
        pricePerPerson: 7480,
      },
    ],
  },

  carOptions: [
    {
      type: "self-drive",
      vehicle: "2× Toyota Innova Crysta 7-seater",
      capacity: 7,
      perDayPrice: 4000,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Zoomcar / Avis / MyChoize · pick-up & drop-off Kochi airport",
      notes:
        "Picked. ~₹4,000/day per car all-in (insurance upgrade incl.). Splits 6+5 with bag space, captain seats are kind on the parents, and since we return to Kochi there's no one-way drop fee. Roads to Munnar are good 4-laners until Adimali, then hairpins — driver-share for that hill stretch.",
    },
    {
      type: "self-drive",
      vehicle: "1× Kia Carnival 7-seater + 1× Mahindra XUV700",
      capacity: 7,
      perDayPrice: 4400,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Zoomcar premium fleet, Kochi",
      notes:
        "Slightly plusher option — Carnival's reclining captain seats are the comfiest in this segment for the elders, XUV700 takes the bags + younger crowd. ~₹6,000 more total than the Innovas.",
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
        "Whole group in one vehicle — easiest for keeping everyone together. Wider turning radius makes the Munnar hairpins slow. Best if one strong driver leads the whole trip.",
    },
    {
      type: "chauffeur",
      vehicle: "Backup: 1× Tempo Traveller 13-seater with driver",
      capacity: 13,
      perDayPrice: 5800,
      totalDays: 9,
      countNeeded: 1,
      vendor: "Kerala Tourism approved (KTDC partners)",
      notes:
        "Only if no one's keen on driving — but you've asked for self-drive, so this is the fallback. Driver knows wet-road behaviour. Cheapest per head if you don't mind a stranger at the wheel.",
    },
  ],

  weather: [
    {
      heading: "Monsoon onset — expect rain",
      body: "South-West Monsoon hits Kerala around June 1. June 7-15 brings intermittent heavy showers daily, especially in Munnar & Periyar. Plan attractions with rain backup. Carry quick-dry clothes + light umbrellas.",
      tone: "warn",
    },
    {
      heading: "Backwater & wildlife caveats",
      body: "Alleppey houseboats sometimes pause for heavy rain — confirm flexibility at booking. Periyar's evening boat may cancel. Eravikulam National Park stays closed all June. Leeches at Thekkady — wear closed shoes.",
      tone: "bad",
    },
    {
      heading: "Why June is actually magical",
      body: "Ayurveda traditions reserve monsoon as the BEST season for treatments — pores open, body absorbs oils. Hotels are 30-45% cheaper. Hillsides at their greenest. Marari Beach in the rain is otherworldly.",
      tone: "good",
    },
    {
      heading: "Driving conditions",
      body: "Kerala highways are well-paved and signposted in English + Malayalam. June rain reduces visibility — daylight driving only, no 8pm starts. Munnar climb is the only challenging stretch (1.5h of hairpins). Google Maps works reliably.",
      tone: "info",
    },
  ],

  totalEstimate: { low: 525000, high: 760000 },

  costBreakdown: [
    { label: "Flights (JAI→COK + COK→JAI, round trip)", amount: 173800, note: "IndiGo 1-stop via Mumbai — ~₹15,800 × 11" },
    { label: "Hotels — Kochi 1N, Munnar 3N, Thekkady 1N, Marari 2N", amount: 195000, note: "5 rooms/night avg, monsoon discounts" },
    { label: "4-BR Premium Houseboat (full charter, 1 night)", amount: 45000, note: "Lakes & Lagoons / Spice Coast — all meals incl." },
    { label: "Self-drive: 2× Innova Crysta × 9 days", amount: 72000, note: "₹4,000/day × 2 × 9 — incl. insurance upgrade" },
    { label: "Fuel (~₹13/km × ~1,000 km × 2 cars)", amount: 26000, note: "Mostly highway, only Munnar climb gulps fuel" },
    { label: "Meals (₹500/pax/day × 11 × 14 meals)", amount: 77000, note: "Houseboat meals already covered" },
    { label: "Attractions (Periyar boat, spice walks, Kathakali, museums)", amount: 22000 },
    { label: "Ayurveda treatments at Marari (8 pax avg, 1-2 sessions each)", amount: 36000, note: "Marari Beach Resort spa is one of Kerala's best" },
    { label: "Tolls, parking, tips, travel insurance", amount: 22000 },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Kochi · pick up cars · Fort Kochi heritage",
      city: "Kochi",
      summary:
        "Land in Kochi by 11am. Collect the 2× Innova Crystas at the airport rental desk, drive into Fort Kochi (1 hr). Afternoon: Chinese fishing nets, St Francis Church, Jew Town spice market. Evening: Kathakali performance.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_Fishing_Nets%2C_Cochin.jpg?width=1200",
      transfer: {
        from: "Cochin Airport (COK)",
        to: "Fort Kochi",
        distanceKm: 42,
        durationHours: 1.5,
        notes: "Smooth highway, then ferry or bridge into Fort Kochi. Pick up rental cars at airport — Zoomcar desk is in arrivals.",
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
        notes: "Restored colonial boatyard on the harbour. All rooms face the sea; lift-accessible. Secure car park.",
      },
      meals: "Lunch at Kashi Art Café · Dinner at hotel (sea view)",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Kochi → Munnar via spice country",
      city: "Munnar",
      summary:
        "A 4-hour climb from sea level to 5,200 ft — the only longer drive day. Stop at the Cheeyappara waterfalls and a tea museum. Arrive Munnar by 3pm with the whole evening at the hotel for chai with a view.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Munnar_Tea_Garden.jpg?width=1200",
      transfer: {
        from: "Fort Kochi",
        to: "Munnar",
        distanceKm: 130,
        durationHours: 4,
        notes: "Smooth 4-lane to Adimali, then 12 sharp hairpins. Driver-share recommended for the climb — refresh fingers/eyes every 30 min.",
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
        notes: "Hilltop pool villas with valley views, infinity pool, lift access in main block. 3 nights here = no repacking.",
      },
      meals: "Lunch on the road (Sangam Veg, Adimali) · Dinner at hotel buffet",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Munnar — tea, mist, waterfalls",
      city: "Munnar",
      summary:
        "First full Munnar day. Top Station viewpoint (Tamil Nadu border), Echo Point on Mattupetty Lake, Kundala dam, and a spice plantation walk. Eravikulam NP is closed in June. Evening: hotel spa.",
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
      title: "Munnar — slow day",
      city: "Munnar",
      summary:
        "No driving. Sleep in. Tea-trail walk from the hotel (gentle), in-house Ayurveda for whoever wants it, and the rest of the day at the pool watching the clouds move. Evening sunset point.",
      heroImage:
        "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
      attractions: [
        {
          name: "Tea-estate walk",
          brief:
            "20-min stroll from the hotel into the rolling Kannan Devan estates. No tickets, no guides — just paths through emerald-green tea between rain showers.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Kannan Devan Tea Estate Walk, Munnar",
        },
        {
          name: "In-house Ayurveda",
          brief:
            "Spice Tree's wellness centre offers Abhyanga (full-body oil), Shirodhara (warm oil on forehead), and Pizhichil (oil bath). Booking 1 day ahead recommended.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr each",
          elderlyFriendly: true,
        },
        {
          name: "Sunset at Pothamedu Viewpoint",
          brief:
            "10-min drive from the hotel. Roadside platform looking down on a tea-fringed valley — when the monsoon clouds open, gold light streams in.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Munnar_Tea_Garden.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Pothamedu Viewpoint, Munnar",
        },
      ],
      hotel: {
        name: "Spice Tree Munnar",
        category: "4★ resort",
        pricePerNight: 8400,
        roomsNeeded: 5,
      },
      meals: "All meals at hotel (rest day)",
    },
    {
      index: 5,
      date: "2026-06-11",
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
        notes: "Scenic drive through Anachal & Devikulam. Lots of cardamom estates — stop for the smell.",
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
      index: 6,
      date: "2026-06-12",
      title: "Thekkady → Alleppey houseboat",
      city: "Alleppey",
      summary:
        "Drive down to Kerala's backwaters. Park the cars at the secure jetty lot. Board a premium 4-bedroom houseboat at noon for a 22-hour cruise — meals onboard, sundowner on the deck, sleep to the lap of water.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kerala_backwaters.jpg?width=1200",
      transfer: {
        from: "Thekkady",
        to: "Alleppey Boat Jetty",
        distanceKm: 145,
        durationHours: 4,
        notes: "Down from the Cardamom Hills to sea level — ears will pop. Operator provides secure overnight parking at the jetty (~₹200/car).",
      },
      attractions: [
        {
          name: "Premium 4-BR Houseboat Charter",
          brief:
            "4-bedroom AC houseboat (kettuvallam) with chef, two crew, dining deck, sundeck. Cruises through Kuttanad — paddy fields below sea-level. Includes lunch, hi-tea, dinner, breakfast.",
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
        name: "Spice Routes / Lakes & Lagoons 4-BR Premium Houseboat",
        category: "Luxury 4-bedroom houseboat (full charter)",
        pricePerNight: 45000,
        roomsNeeded: 1,
        notes: "Full-boat charter for the 11 of us — no strangers. All meals included.",
      },
      meals: "Lunch, tea, dinner, next-day breakfast all onboard",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Disembark · Alleppey → Marari Beach",
      city: "Marari Beach",
      summary:
        "9am disembark after breakfast on the water. Pick up the cars, short 30-min drive to Marari — Kerala's chilled-out beach (a fraction of Kovalam's crowd). Lunch at the resort, swim, nap, sundowner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
      transfer: {
        from: "Alleppey Boat Jetty",
        to: "Marari Beach",
        distanceKm: 22,
        durationHours: 0.75,
        notes: "Shortest drive day of the trip — barely 45 min along a coconut-lined road.",
      },
      attractions: [
        {
          name: "Marari Beach",
          brief:
            "A 12-km arc of palm-fringed sand. Almost no commercial buildup — fishing villages on one side, resorts on the other. Cleaner and quieter than Kovalam.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
          duration: "All afternoon",
          elderlyFriendly: true,
          mapsQuery: "Marari Beach, Alappuzha",
        },
        {
          name: "Fishing village walk",
          brief:
            "5 mins from the resort: traditional Mukkuvar fishing community pulling in nets at sunset. The fish goes straight to the resort kitchen.",
          photo:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Marari Fishing Village",
        },
      ],
      hotel: {
        name: "Marari Beach Resort (CGH Earth)",
        category: "5★ eco beach resort",
        pricePerNight: 17500,
        roomsNeeded: 5,
        notes: "29-acre coconut grove on the beach. Garden villas with private outdoor showers, two pools, organic kitchen, on-site Ayurveda hospital.",
      },
      meals: "Breakfast on houseboat · Lunch at Marari resort · Beach BBQ dinner",
    },
    {
      index: 8,
      date: "2026-06-14",
      title: "Marari Beach · Ayurveda day",
      city: "Marari Beach",
      summary:
        "No driving. No moving. Morning Ayurveda treatment (book ahead), late breakfast, beach. Afternoon: yoga shala session or a swimming pool day. Sunset on the sand.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
      attractions: [
        {
          name: "Marari Ayurveda Hospital (on-site)",
          brief:
            "The resort has a full Ayurveda hospital with classically trained vaidyas. Half-day rejuvenation packages from ~₹5,500/pax — Abhyanga + Shirodhara is a perfect monsoon combo.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "3 hr",
          elderlyFriendly: true,
        },
        {
          name: "Yoga Shala session",
          brief:
            "Daily 7am & 5pm sessions in the resort's beachside shala. Drop-in welcome (₹600/pax). Mostly hatha + pranayama, age-friendly.",
          photo:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
        },
        {
          name: "Sunset on the beach",
          brief:
            "The resort sets out lanterns and a small bar on the sand around 6pm. Coconut water with a splash of rum is the local move.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Varkala_Beach.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Marari Beach Resort (CGH Earth)",
        category: "5★ eco beach resort",
        pricePerNight: 17500,
        roomsNeeded: 5,
      },
      meals: "All meals at resort — try the Karimeen pollichathu",
    },
    {
      index: 9,
      date: "2026-06-15",
      title: "Marari → Kochi airport · fly home",
      city: "Jaipur",
      summary:
        "Slow morning, late check-out. 1.5-hour drive to Kochi airport. Drop the rental cars at airport counter. Afternoon flight to Jaipur via Mumbai.",
      heroImage:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Marari Beach Resort",
        to: "Cochin Airport (COK)",
        distanceKm: 95,
        durationHours: 2,
        notes: "Coastal NH-66 north, then airport access road. Leave 4 hours before flight to give a buffer for monsoon rain on the highway.",
      },
      attractions: [
        {
          name: "Last Kerala sadya",
          brief:
            "A proper feast — rice with 10-15 side dishes on a banana leaf. Eat with your hands, finish with payasam. Many highway restaurants serve it.",
          photo:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
        },
      ],
      meals: "Breakfast at Marari · Sadya lunch en route · Dinner home in Jaipur",
    },
  ],
};
