import type { Plan } from "../types";

export const kinnaur: Plan = {
  slug: "kinnaur",
  name: "Slow Kinnaur · Mashobra → Kalpa → Chitkul",
  tagline: "Apple country, Kinner Kailash & India's last village — graduated altitude",
  startDate: "2026-06-07",
  endDate: "2026-06-15",
  travellers: 11,
  emoji: "⛰️",
  accentFrom: "#312e81",
  accentTo: "#a5b4fc",
  heroImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1600",
  description:
    "9 days, drive from Jaipur, ascending one mountain layer at a time. Two nights at Mashobra (Shimla-side hill town, 2,150 m) to acclimatize gently — then push deeper into Kinnaur for 2 nights at Kalpa (2,960 m, front-row Kinner Kailash views), and a Chitkul day-visit + Sangla overnight (3,450 m at the village, sleep back at 2,700 m). Return broken across 3 days so no single drive exceeds 8 hours.",

  flights: {
    outbound: [
      {
        airline: "Self-drive from Jaipur",
        flightNo: "Day 1 · ~520 km",
        from: "Jaipur (home)",
        to: "Chandigarh (overnight)",
        depart: "06:00",
        arrive: "14:00",
        duration: "8h on the road",
        stops: "Murthal breakfast · Karnal lunch",
        pricePerPerson: 0,
      },
      {
        airline: "Chandigarh → Mashobra",
        flightNo: "Day 2 · ~140 km",
        from: "Chandigarh",
        to: "Mashobra (above Shimla)",
        depart: "08:30",
        arrive: "13:00",
        duration: "4h 30m on the road",
        stops: "Chandigarh-Shimla highway · lunch at hotel",
        pricePerPerson: 0,
      },
      {
        airline: "Mashobra → Kalpa",
        flightNo: "Day 4 · ~225 km",
        from: "Mashobra",
        to: "Kalpa (via Narkanda · Rampur)",
        depart: "06:30",
        arrive: "14:30",
        duration: "8h on the road",
        stops: "Narkanda tea · Rampur lunch",
        pricePerPerson: 0,
      },
      {
        airline: "Kalpa → Sangla (Chitkul side)",
        flightNo: "Day 6 · ~55 km",
        from: "Kalpa",
        to: "Sangla (Banjara Camps)",
        depart: "08:30",
        arrive: "11:30",
        duration: "3h on the road",
        stops: "Karcham gorge",
        pricePerPerson: 0,
      },
    ],
    return: [
      {
        airline: "Return leg 1 — Sangla → Narkanda",
        flightNo: "Day 7 · ~200 km",
        from: "Sangla",
        to: "Narkanda (HPTDC Hotel Hatu)",
        depart: "08:00",
        arrive: "15:00",
        duration: "7h on the road",
        stops: "Karcham · Rampur lunch",
        pricePerPerson: 0,
      },
      {
        airline: "Return leg 2 — Narkanda → Chandigarh",
        flightNo: "Day 8 · ~170 km",
        from: "Narkanda",
        to: "Chandigarh",
        depart: "09:30",
        arrive: "14:30",
        duration: "5h on the road",
        stops: "Shimla coffee break",
        pricePerPerson: 0,
      },
      {
        airline: "Return leg 3 — Chandigarh → Jaipur",
        flightNo: "Day 9 · ~520 km",
        from: "Chandigarh",
        to: "Jaipur (home)",
        depart: "07:00",
        arrive: "15:00",
        duration: "8h on the road",
        stops: "Karnal Haveli lunch",
        pricePerPerson: 0,
      },
    ],
  },

  carOptions: [
    {
      type: "self-drive",
      vehicle: "2× Toyota Innova Crysta (own or Jaipur rental)",
      capacity: 7,
      perDayPrice: 0,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Own family vehicles · or Zoomcar Jaipur weekly rate",
      notes:
        "Picked. Innovas handle Kinnaur's narrow Hindustan-Tibet Road well — good ground clearance, AC for the lower stretches. Two drivers per car alternating every 2 hours is mandatory for the 8-hour Mashobra→Kalpa and Chandigarh→Jaipur days. Service the brakes before leaving Jaipur — long Sutlej-valley downhills are tough on pads.",
    },
    {
      type: "self-drive",
      vehicle: "If renting in Jaipur: 2× Innova Crysta, 9-day package",
      capacity: 7,
      perDayPrice: 4000,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Zoomcar Jaipur / Avis Jaipur",
      notes:
        "~₹4,000/day all-in. Total km ~3,500 over 9 days — extra-km bill ~₹20,000 on top of the daily. Insurance Super-CDW is non-negotiable for the Kinnaur stretch.",
    },
    {
      type: "chauffeur",
      vehicle: "2× Innova Crysta with hill-trained drivers",
      capacity: 7,
      perDayPrice: 5500,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Himachal Holidays / Kinnaur Tours (Shimla-based)",
      notes:
        "Strongly worth considering here — the Mashobra→Kalpa day has 4 hours of blind-hairpin hill driving with apple-truck traffic. Local drivers know which curves carry rockfall risk. Adds ~₹27,000 over self-drive.",
    },
  ],

  weather: [
    {
      heading: "Best window of the year for Kinnaur",
      body: "June 7-15 is genuinely the sweet spot. Days are 22-28°C at Mashobra, 18-25°C at Kalpa, 14-20°C at Sangla, 10-18°C at Chitkul (the highest stop). Nights at Kalpa drop to 8°C — pack a fleece. Skies mostly clear; Kinner Kailash often visible at sunrise.",
      tone: "good",
    },
    {
      heading: "Altitude — graduated, but real",
      body: "Day 1: Chandigarh 350 m. Day 2: Mashobra 2,150 m (mild). Day 4: Kalpa 2,960 m. Day 6: Sangla 2,700 m + Chitkul day-visit at 3,450 m (sleep back at 2,700 m to recover). The Mashobra → Kalpa jump is the largest single climb — 800 m. Children & adults around 60 should consider Diamox prophylactically if they have history of breathlessness.",
      tone: "warn",
    },
    {
      heading: "AMS warning signs",
      body: "Watch for: headache that doesn't respond to paracetamol, persistent nausea, sleep disruption, ataxia (unsteady walking). If any of these worsen after 12 hours at altitude, descend by 500 m. Carry oxygen cans (~₹350 at any roadside shop) and a simple pulse oximeter from any pharmacy.",
      tone: "warn",
    },
    {
      heading: "Hindustan-Tibet Road realities",
      body: "NH-5 from Rampur to Reckong Peo is narrow with rockfall zones and apple-truck traffic. Drive in daylight only — no exceptions. June is post snow-clearance, pre-monsoon; roads are at peak condition. Cell network: BSNL works throughout, Jio works at Sangla & Kalpa, no signal at Chitkul.",
      tone: "info",
    },
    {
      heading: "Practical risks to know",
      body: "(1) Rockfalls on NH-5 — drive 06:30-18:00 only. (2) Cold nights — heating in budget hotels is patchy; pack thermals. (3) ATMs scarce past Rampur — carry ₹40,000 cash for the group. (4) No petrol pumps between Rampur and Reckong Peo — top up at Rampur. (5) Apple trucks are large and Indian-style — pull over and let them pass.",
      tone: "warn",
    },
  ],

  totalEstimate: { low: 535000, high: 690000 },

  costBreakdown: [
    { label: "Fuel (~3,200 km × 2 cars × ₹12/km hill rates)", amount: 76800, note: "Long hilly stretches gulp more than highway" },
    { label: "Tolls (NH-48, NH-152, NH-5 HP section)", amount: 26000, note: "Less-tolled than Delhi side" },
    { label: "Hotel — Chandigarh (Days 1 & 8, 5 rooms × 2N)", amount: 75000, note: "JW Marriott Chandigarh @ ~₹7,500/room" },
    { label: "Hotel — Mashobra (Days 2-3, 5 rooms × 2N)", amount: 110000, note: "Marigold Mashobra Sarovar Premiere @ ~₹11,000/room" },
    { label: "Hotel — Kalpa (Days 4-5, 5 rooms × 2N)", amount: 65000, note: "The Apple Pie Hotel @ ~₹6,500/room" },
    { label: "Hotel — Sangla (Day 6, 5 rooms × 1N)", amount: 40000, note: "Banjara Camps & Retreat @ ~₹8,000/room" },
    { label: "Hotel — Narkanda (Day 7, 5 rooms × 1N)", amount: 25000, note: "HPTDC Hotel Hatu @ ~₹5,000/room" },
    { label: "Meals (₹500/pax × 11 × 22)", amount: 121000, note: "Breakfast included at most hotels — 22 lunches/dinners" },
    { label: "Activities (Sangla nature walk, Chitkul, Kalpa orchards)", amount: 12000 },
    { label: "Misc — Diamox/oxygen, tips, travel insurance, buffer", amount: 35000 },
    { label: "Car rental (only if not using own cars)", amount: 72000, note: "Optional — ₹4,000/day × 2 × 9" },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Chandigarh",
      city: "Chandigarh",
      summary:
        "8-hour highway day. 06:00 from Jaipur, paranthas at Murthal, smooth NH-48 → NH-152 to Chandigarh by 14:00. Easy evening: Sukhna Lake stroll or Sector 17. Early dinner — tomorrow's the first climb.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Jaipur (home)",
        to: "Chandigarh",
        distanceKm: 520,
        durationHours: 8,
        notes: "Excellent 6-lane highway. Leave before 6am to clear Delhi-NCR before traffic. Altitude: 350 m — no concerns.",
      },
      attractions: [
        {
          name: "Sukhdev Dhaba, Murthal",
          brief:
            "Punjabi highway institution since 1957. Stuffed paranthas with ghee, lassi, fresh dahi. Natural halfway lunch stop.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhdev Dhaba, Murthal",
        },
        {
          name: "Sukhna Lake walk",
          brief:
            "Man-made reservoir at the foot of the Shivaliks. 3 km level promenade — perfect post-drive leg-stretch.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhna Lake, Chandigarh",
        },
      ],
      hotel: {
        name: "JW Marriott Chandigarh",
        category: "5★ city · Altitude 350 m",
        pricePerNight: 7500,
        roomsNeeded: 5,
        notes: "Sector 35. Lift to underground parking. Order an early breakfast for 06:30 tomorrow.",
      },
      meals: "Breakfast at home · Lunch at Sukhdev's · Dinner at hotel · Early sleep",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Chandigarh → Mashobra",
      city: "Mashobra",
      summary:
        "First climb into the hills. 4.5 hours up the Chandigarh-Shimla highway, bypass Shimla town, and continue 13 km uphill to Mashobra — a quiet apple-and-deodar village above all the Shimla noise. Arrive by 1pm, lunch on the hotel terrace, afternoon to settle.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Shimla.jpg?width=1600",
      transfer: {
        from: "Chandigarh",
        to: "Mashobra",
        distanceKm: 140,
        durationHours: 4.5,
        notes: "Excellent 4-lane till Shimla outskirts, then a winding 13-km uphill final stretch. Altitude jumps from 350 m to 2,150 m — drink water generously, light lunch, take it easy on arrival.",
      },
      attractions: [
        {
          name: "Apple-orchard walk from the hotel",
          brief:
            "Mashobra sits in the middle of HP's premier apple country. Walk 15-20 min along the orchard lanes — June is fruit-set season, white blossoms turning into tiny apples.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Mashobra apple orchards",
        },
        {
          name: "The Reserve Forest viewpoint",
          brief:
            "A 10-minute drive from the hotel — paved road into a deodar reserve forest, with a small platform looking down at Naldehra's golf course and the Himalayan rim.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Mashobra Reserve Forest",
        },
      ],
      hotel: {
        name: "Marigold Mashobra Sarovar Premiere",
        category: "4★ apple-country resort · Altitude 2,150 m",
        pricePerNight: 11000,
        roomsNeeded: 5,
        notes: "Set in working apple orchards, valley-facing balconies, heated indoor pool, spa, lift access. Book direct or via Sarovar Hotels. Alternative for the splurge: Wildflower Hall (Oberoi) — superb but ~₹50K+/room.",
      },
      meals: "Breakfast at JW · Lunch on the terrace at Marigold · Dinner at hotel — light, due to altitude",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Mashobra full day · acclimatize gently",
      city: "Mashobra",
      summary:
        "No long drives. Easy 20-min drive to Naldehra for the colonial-era golf course (one of Asia's oldest, 1905) and a quiet deodar walk. Afternoon: spa appointments at the hotel, pool day, sundowner. The acclimatization day before the big climb to Kalpa tomorrow.",
      heroImage:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
      attractions: [
        {
          name: "Naldehra Golf Course",
          brief:
            "Built 1905 by Lord Curzon — Asia's oldest 9-hole course. Even if no one plays, the walk along the fairways through ancient deodars is among the most beautiful in HP. Easy flat ground, plenty of benches.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Naldehra Golf Course",
        },
        {
          name: "Tara Devi Temple (optional, 30 min)",
          brief:
            "A small wooden hilltop temple to Goddess Tara, surrounded by deodars. Quiet, almost zero tourists. Drive: 25 min from Mashobra. Short walk from parking.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Tara Devi Temple, Shimla",
        },
        {
          name: "Hotel spa & pool",
          brief:
            "Picked option for the afternoon. Indoor heated pool, in-house spa — book Abhyanga (₹3,200) or Shirodhara (₹3,800). Loungers face the apple orchards.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "Afternoon",
          elderlyFriendly: true,
        },
        {
          name: "Mashobra Bazaar walk",
          brief:
            "Tiny village market 1 km below the hotel — wool shawls, Himachali caps, fresh-picked stone fruit (June starts the cherry season). 30 min stroll.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Shimla.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Mashobra Bazaar",
        },
      ],
      hotel: {
        name: "Marigold Mashobra Sarovar Premiere",
        category: "4★ apple-country resort · Altitude 2,150 m",
        pricePerNight: 11000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Naldehra clubhouse · Dinner at hotel buffet",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Mashobra → Kalpa (8h — the big climb)",
      city: "Kalpa",
      summary:
        "Earliest start of the trip (06:30). The long, beautiful drive into Kinnaur. Mashobra → Narkanda (1.5h) → descend to Rampur on the Sutlej (3.5h) → climb back up to Kalpa via Reckong Peo (3h). Eight hours of road, but you'll see snowy peaks, the Sutlej gorge, apple orchards, and finally Kinner Kailash. Arrive Kalpa late afternoon.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1600",
      transfer: {
        from: "Mashobra",
        to: "Kalpa (via Narkanda · Rampur · Reckong Peo)",
        distanceKm: 225,
        durationHours: 8,
        notes: "Two drivers per car, alternating every 2 hours. Daylight only — leave 06:30, off the road by 15:30 latest. Rampur is the natural lunch stop. Altitude climbs Mashobra (2,150) → Narkanda (2,700) → Rampur (1,000, descend!) → Kalpa (2,960). The descent into Rampur gives the body a break.",
      },
      warning: "Longest drive day. If anyone in the group is unwell or anxious about the road, consider hiring local chauffeurs in Mashobra just for this one day (~₹6,000/car).",
      attractions: [
        {
          name: "Narkanda apple country (tea stop)",
          brief:
            "1.5 hours from Mashobra at 2,700 m. Sweeping apple orchards, Hatu Peak in the distance. Café Hatu serves Himachali siddu and hot trout. Quick stop only — keep moving.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Café Hatu, Narkanda",
        },
        {
          name: "Rampur lunch stop",
          brief:
            "On the Sutlej at 1,000 m — old kingdom capital, currently a busy market town. Halai's Café for hot paranthas and dahi. Lunch break + restroom + fuel up. The ONLY decent fuel station before Reckong Peo.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Rampur Bushahr",
        },
        {
          name: "Sutlej gorge views",
          brief:
            "Between Rampur and Karcham — the Sutlej carves a deep gorge through schist cliffs. Multiple roadside view points. The Bhabha Nagar hydroelectric scheme is engineering theatre.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1200",
          duration: "Drive-by",
          mapsQuery: "Bhabha Nagar, HP",
        },
        {
          name: "Kinner Kailash from the road",
          brief:
            "As you climb out of Reckong Peo toward Kalpa, the Kinner Kailash range (6,050 m) opens up on your right. First sight is unforgettable — pull over at the 'Kinnaur Welcomes You' signboard.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1200",
          duration: "20 min",
          elderlyFriendly: true,
          mapsQuery: "Reckong Peo",
        },
      ],
      hotel: {
        name: "The Apple Pie Hotel, Kalpa",
        category: "Boutique 3★ mountain view · Altitude 2,960 m",
        pricePerNight: 6500,
        roomsNeeded: 5,
        notes: "Family-run, every room faces Kinner Kailash, rooftop café. Beds with extra blankets — Kalpa nights are 8-12°C even in June. Book on Booking.com or direct. Backup: Hotel Kinner Kailash View Kalpa (HPTDC, ~₹4,500).",
      },
      meals: "Pre-dawn coffee at Marigold · Tea at Narkanda · Lunch at Halai's (Rampur) · Light dinner at Apple Pie",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Kalpa full day · Kinner Kailash sunrise · Roghi village",
      city: "Kalpa",
      summary:
        "Set an alarm for 5:15 am — Kinner Kailash turns gold for ten minutes around sunrise. Late breakfast on the rooftop. Morning walk through Kalpa village to Hu-Bu-Lan-Kar Monastery. Afternoon: 5 km drive to Roghi village and the Suicide Point viewpoint. Sunset back on the hotel terrace.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kalpa%2C_Himachal_Pradesh.jpg?width=1600",
      attractions: [
        {
          name: "Sunrise on Kinner Kailash",
          brief:
            "From the hotel terrace — Kinner Kailash (6,050 m) and the Jorkanden peak (6,473 m) light up gold for 10 minutes around 05:30. Best memory of the trip. The 79-ft natural Shivling rock at the peak is one of Hindu mythology's Kailash seats.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Kinner Kailash View Point, Kalpa",
        },
        {
          name: "Hu-Bu-Lan-Kar Monastery",
          brief:
            "Tiny 15th-century Buddhist monastery in central Kalpa village — colourful murals, intimate prayer hall, zero tourists. 10-min walk from the hotel.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Hu-Bu-Lan-Kar Monastery, Kalpa",
        },
        {
          name: "Roghi village & 'Suicide Point'",
          brief:
            "5 km from Kalpa — a 500-year-old village with intricately carved wooden houses. The road passes 'Suicide Point' — a sheer 1,000-ft drop with a chain-link fence. Don't worry; viewing is from a safe terrace.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kalpa%2C_Himachal_Pradesh.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Roghi Village, Kalpa",
        },
        {
          name: "Kothi Devi Temple & Chini Bungalow",
          brief:
            "Two historic spots on the village edge — a 500-year-old wooden temple with intricate door carvings, and the colonial Chini Bungalow where British officers stayed in the 1800s. Quiet 1 km walk.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Kothi Devi Temple, Kalpa",
        },
        {
          name: "Apple orchard walk",
          brief:
            "Kalpa is in apple country. Most hotels let you stroll their orchards — June is fruit-set season, white blossoms turning to tiny green apples.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "The Apple Pie Hotel, Kalpa",
        category: "Boutique 3★ mountain view · Altitude 2,960 m",
        pricePerNight: 6500,
        roomsNeeded: 5,
      },
      meals: "Late breakfast at hotel · Lunch at Kalpa Market · Dinner at Apple Pie rooftop",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Kalpa → Sangla → Chitkul (day visit) → Sangla overnight",
      city: "Sangla / Chitkul",
      summary:
        "Move base from Kalpa to Sangla (3h, easy). After lunch at the camp, drive up the Baspa to Chitkul — India's last village before the Tibet border (3,450 m). Spend the afternoon there. Sleep back down at Sangla (2,700 m) — the smart way to do altitude.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Valley.jpg?width=1600",
      transfer: {
        from: "Kalpa → Sangla, then Sangla → Chitkul (return)",
        to: "Sangla (Banjara Camps)",
        distanceKm: 100,
        durationHours: 5,
        notes: "Two short legs: Kalpa → Sangla (3h via Karcham), then Sangla → Chitkul day trip (1h each way + 2-3h at Chitkul). Sleep at Sangla — 750 m lower than Chitkul, gives the body time to recover.",
      },
      warning: "Chitkul is at 3,450 m. Stay 2-3 hours max. Walk slowly. No big meals beforehand. If any AMS symptoms appear (headache, nausea, breathlessness), descend immediately. Carry oxygen cans (~₹350 at any Reckong Peo / Sangla shop).",
      attractions: [
        {
          name: "Chitkul village",
          brief:
            "Last inhabited Indian village before the McMahon Line. ~300 residents, wood-shingle roofs, hand-built prayer wheels in every alley. Flat through the village; the river beach below is wadeable in June.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Chitkul Village, Himachal Pradesh",
        },
        {
          name: "Mathi Mata Temple",
          brief:
            "500-year-old wooden temple to the local goddess. Three connected wooden shrines, slate roofs, intricately carved doors. Don't touch the inner sanctum — locals are particular.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Mathi Mata Mandir, Chitkul",
        },
        {
          name: "Hindustan ka Aakhri Dhaba",
          brief:
            "'India's last dhaba' — at the road's end before the army checkpost. Maggi, omelette, masala chai. Photo with the signboard is mandatory.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Hindustan Ka Last Dhaba Chitkul",
        },
        {
          name: "Baspa river beach",
          brief:
            "5-min walk below Chitkul — wide pebbled beach by the milky-blue Baspa. Dip feet (ICE-cold), watch the snow line. Nature's silence is total.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Valley.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
        },
        {
          name: "Banjara Camp evening (back at Sangla)",
          brief:
            "Return to Banjara Camps Sangla for the night — drop 750 m to 2,700 m, the body breathes easier. Bonfire dinner on the riverbank.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Valley.jpg?width=1200",
          duration: "Evening",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Banjara Camps & Retreat, Sangla",
        category: "Luxury glamping · Altitude 2,700 m",
        pricePerNight: 8000,
        roomsNeeded: 5,
        notes: "Premium tented rooms on the Baspa river — proper beds, attached bathrooms with hot showers, electric blankets. Family-run since 1999, best-known property in Kinnaur. banjaracamps.com.",
      },
      meals: "Breakfast at Apple Pie · Lunch at Banjara · Tea at Chitkul · Bonfire dinner at Banjara",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Sangla → Narkanda (return leg 1, 7h)",
      city: "Narkanda",
      summary:
        "Start the descent. 7 hours down the Baspa valley, back along the Sutlej via Rampur, climbing again to Narkanda — apple country at 2,700 m. The HPTDC's basic but clean rooms. Easy evening, early sleep.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1600",
      transfer: {
        from: "Sangla",
        to: "Narkanda (HPTDC Hotel Hatu)",
        distanceKm: 200,
        durationHours: 7,
        notes: "08:00 start. Daylight only. Same NH-5 as Day 4 but shorter — splitting the long return prevents fatigue. Altitude dips through Rampur (1,000 m) and climbs back to 2,700 m.",
      },
      attractions: [
        {
          name: "Karcham gorge photo stop",
          brief:
            "On the way out — the Sutlej squeezes through a deep gorge with the dam straddling the river. Engineering against geology.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1200",
          duration: "20 min",
          elderlyFriendly: true,
          mapsQuery: "Karcham Dam, Kinnaur",
        },
        {
          name: "Rampur lunch break",
          brief:
            "Halai's Café — same hot paranthas, fresh dahi. Restroom + last fuel until Narkanda.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Rampur Bushahr",
        },
        {
          name: "Narkanda apple country (sunset)",
          brief:
            "Settle in early at Narkanda. The hotel sits among working apple orchards at 2,700 m — sunset across the Hatu Peak ridge is spectacular when skies are clear.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Narkanda, Himachal Pradesh",
        },
      ],
      hotel: {
        name: "HPTDC Hotel Hatu, Narkanda",
        category: "3★ HP Tourism · Altitude 2,700 m",
        pricePerNight: 5000,
        roomsNeeded: 5,
        notes: "Government-run, simple but spotless rooms with valley-view balconies. Book on hptdc.in. Backup: The Hatu Resort Narkanda (privately run, similar rates).",
      },
      meals: "Breakfast at Banjara · Lunch at Rampur · Dinner at HPTDC",
    },
    {
      index: 8,
      date: "2026-06-14",
      title: "Narkanda → Shimla → Chandigarh (return leg 2, 5h)",
      city: "Chandigarh",
      summary:
        "Easy day. Sleep in, late breakfast, leave 09:30. 5-hour descent: Narkanda → Shimla (coffee break with a Mall Road walk) → Chandigarh by mid-afternoon. Hot showers, leisurely dinner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Shimla.jpg?width=1600",
      transfer: {
        from: "Narkanda",
        to: "Chandigarh",
        distanceKm: 170,
        durationHours: 5,
        notes: "All downhill now — well-paved 4-lane from Shimla to Chandigarh. Lunch en route or at Chandigarh.",
      },
      attractions: [
        {
          name: "Shimla coffee break — The Mall",
          brief:
            "Park at Lift Road, take the lift to Mall Road. 30-45 min wander past Scandal Point, the Christ Church (1857), Gaiety Theatre. Indian Coffee House (since 1956) for a proper South Indian filter coffee.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Shimla.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "The Mall Shimla",
        },
        {
          name: "Sukhna Lake evening (Chandigarh)",
          brief:
            "Once you're back at the hotel — same Sukhna Lake from Day 1, this time at sunset. The 3 km loop feels more familiar now.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhna Lake, Chandigarh",
        },
      ],
      hotel: {
        name: "JW Marriott Chandigarh",
        category: "5★ city · Altitude 350 m",
        pricePerNight: 7500,
        roomsNeeded: 5,
        notes: "Same hotel as Day 1. Order an early dinner — tomorrow's the highway run home.",
      },
      meals: "Breakfast at HPTDC · Coffee at Indian Coffee House (Shimla) · Lunch & dinner at JW",
    },
    {
      index: 9,
      date: "2026-06-15",
      title: "Chandigarh → Jaipur · home",
      city: "Jaipur",
      summary:
        "Early start (07:00). Final 8-hour highway run down NH-152 → NH-48 to Jaipur. Lunch at Karnal Haveli. Home by sunset, 15:00.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Chandigarh",
        to: "Jaipur (home)",
        distanceKm: 520,
        durationHours: 8,
        notes: "Same 6-lane highway, mirrored. Leave by 7am to clear Delhi-NCR before evening rush.",
      },
      attractions: [
        {
          name: "Karnal Haveli rest-stop",
          brief:
            "Heritage-style rest stop on NH-152 — pleasant garden seating, separate clean restrooms, full Indian + Continental menu. Natural lunch break.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Karnal Haveli, Karnal",
        },
      ],
      meals: "Breakfast at JW · Lunch at Karnal Haveli · Dinner at home",
    },
  ],
};
