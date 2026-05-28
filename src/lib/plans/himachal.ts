import type { Plan } from "../types";

export const himachal: Plan = {
  slug: "himachal",
  name: "Off-beat Himachal",
  tagline: "Parvati Valley · Bir Billing · Dalhousie · Chamba",
  startDate: "2026-06-07",
  endDate: "2026-06-15",
  travellers: 11,
  emoji: "🏕️",
  accentFrom: "#0c4a6e",
  accentTo: "#7dd3fc",
  heroImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Parvati_Valley.jpg?width=1600",
  description:
    "A slow, mostly-low-altitude loop through the off-beat side of Himachal — riverside cafés at Kasol & Chalal, paragliding at Bir Billing, the Dalai Lama's monastery at McLeodganj, the 'Mini Switzerland' meadow at Khajjiar, and the ancient temple town of Chamba. Single long drive day (Day 3); the rest are 2-4 hours.",

  flights: {
    outbound: [
      {
        airline: "IndiGo",
        flightNo: "6E 2042 + 6E 7401",
        from: "JAI (Jaipur)",
        to: "KUU (Bhuntar / Kullu)",
        depart: "06:00",
        arrive: "12:35",
        duration: "6h 35m",
        stops: "1 stop (DEL)",
        pricePerPerson: 10840,
      },
      {
        airline: "Air India + Alliance Air",
        flightNo: "AI 492 + 9I 681",
        from: "JAI (Jaipur)",
        to: "KUU (Bhuntar / Kullu)",
        depart: "07:45",
        arrive: "14:55",
        duration: "7h 10m",
        stops: "1 stop (DEL)",
        pricePerPerson: 11680,
      },
    ],
    return: [
      {
        airline: "IndiGo",
        flightNo: "6E 7104 + 6E 2179",
        from: "DHM (Dharamshala / Gaggal)",
        to: "JAI (Jaipur)",
        depart: "12:25",
        arrive: "18:15",
        duration: "5h 50m",
        stops: "1 stop (DEL)",
        pricePerPerson: 9420,
      },
      {
        airline: "Air India",
        flightNo: "AI 9802 + AI 491",
        from: "DHM (Dharamshala / Gaggal)",
        to: "JAI (Jaipur)",
        depart: "14:30",
        arrive: "20:40",
        duration: "6h 10m",
        stops: "1 stop (DEL)",
        pricePerPerson: 9760,
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
      vendor: "Zoomcar Chandigarh delivery / Self Drive Himachal",
      notes:
        "Picked. ₹4,500/day per car all-in (hill-spec rental — slightly higher than plains rates). One-way pick-up Kullu / drop Dharamshala adds ~₹4,000 one-time. All routes here are paved & well-signposted; only the Kasol-Bir leg (Day 3) needs concentration.",
    },
    {
      type: "self-drive",
      vehicle: "1× Force Urbania 12-seater",
      capacity: 12,
      perDayPrice: 7800,
      totalDays: 9,
      countNeeded: 1,
      vendor: "MyChoize Chandigarh (must be picked at Chandigarh then driven up)",
      notes:
        "Single-vehicle convenience but the 12-seater is hard on Kasol's narrow approach road & Chamba's lanes. Pick up at Chandigarh adds 6h drive to Kasol on Day 1 — skip unless you're driving from Delhi instead of flying.",
    },
    {
      type: "chauffeur",
      vehicle: "2× Innova Crysta with hill-trained drivers",
      capacity: 7,
      perDayPrice: 5800,
      totalDays: 9,
      countNeeded: 2,
      vendor: "Himachal Holidays / TaxiGo Chandigarh",
      notes:
        "Fallback if you'd rather not drive in hills. ~₹23,000 more total than self-drive. Driver knows every blind hairpin between Mandi and Bir.",
    },
  ],

  weather: [
    {
      heading: "Best window of the year",
      body: "Mid-May to mid-June is THE sweet spot for Himachal — clear skies, alpine flowers in bloom, no monsoon yet. Daytime 22-28°C in the valleys, 14-22°C in Dalhousie/Khajjiar at altitude. Pack a fleece for mornings.",
      tone: "good",
    },
    {
      heading: "Monsoon arrives late June",
      body: "South-West monsoon hits Himachal around June 25 — you finish on June 15, so you're in the clear. Random pre-monsoon thunderstorms possible after June 10, mostly evenings. Carry a light rain shell.",
      tone: "info",
    },
    {
      heading: "Driving conditions",
      body: "Highways are good. The Kasol → Bir leg (Day 3) is the toughest — 5 hours via Mandi with construction stretches near Mandi town. Bir → Dalhousie via Pathankot is fast (4-lane down to Pathankot then climb).",
      tone: "info",
    },
    {
      heading: "Altitude is mild",
      body: "Nothing exceeds 2,400 m on this trip — easier on the parents than Sikkim. Dalhousie (2,036 m) and Khajjiar (1,920 m) are the highest stays. Paragliding launch at Billing is 2,400 m but you're up there for 20 min.",
      tone: "good",
    },
  ],

  totalEstimate: { low: 615000, high: 820000 },

  costBreakdown: [
    { label: "Flights (JAI→KUU + DHM→JAI, open-jaw)", amount: 223300, note: "IndiGo 1-stop via Delhi — ~₹20,300 × 11" },
    { label: "Hotels (Kasol 2N · Bir 2N · McLeodganj 2N · Dalhousie 2N)", amount: 235000, note: "5 rooms/night avg @ ~₹6,000-8,000" },
    { label: "Self-drive: 2× Innova Crysta × 9 days", amount: 81000, note: "₹4,500/day × 2 × 9 — hill-spec premium" },
    { label: "One-way drop fee + fuel (~1,200km × 2 cars)", amount: 36000, note: "Drop at Dharamshala adds ₹4,000; fuel @ ₹14/km hills" },
    { label: "Meals (₹500/pax/day × 11 × 16 meals)", amount: 88000 },
    { label: "Paragliding at Bir (assume 6 keen, ₹3,500 each)", amount: 21000, note: "Tandem 20-25 min, includes GoPro footage" },
    { label: "Monastery / museum entries / Manikaran langar donation", amount: 12000 },
    { label: "Tolls, parking, tips, travel insurance", amount: 22000 },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Bhuntar → Kasol",
      city: "Kasol",
      summary:
        "Morning flight from Jaipur, connect at Delhi, land at Bhuntar (KUU) by lunchtime. Pick up the 2× Innova Crystas at the airport, easy 1.5-hour drive up the Parvati Valley to Kasol — Himachal's hippie-meets-fishing village. Settle in, riverside dinner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Parvati_Valley.jpg?width=1600",
      transfer: {
        from: "Bhuntar Airport (KUU)",
        to: "Kasol",
        distanceKm: 30,
        durationHours: 1.5,
        notes: "Smooth state highway along the Beas, then turn east into the Parvati Valley. The road narrows but is paved. Drive in daylight — no point arriving after sunset.",
      },
      attractions: [
        {
          name: "Parvati riverside walk",
          brief:
            "Wooden bridges, deodar pines, and chai shacks on boulders right above the rapids. Kasol's main lane runs parallel to the river — flat and easy for parents.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kasol.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Kasol, Himachal Pradesh",
        },
        {
          name: "Israeli-Himachali café crawl",
          brief:
            "Kasol has the best falafel + chai combo in the country. Try Evergreen Café (1990s OG), The Moon Dance Café, or Bhoj Café for trout overlooking the river.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Evergreen Café, Kasol",
        },
      ],
      hotel: {
        name: "Sumi Yashshree Suites & Spa",
        category: "4★ riverside",
        pricePerNight: 8200,
        roomsNeeded: 5,
        notes: "Wood-beam suites with river-view balconies, in-house spa, lift access. The bone-quiet end of Kasol — you'll hear the river not the speaker.",
      },
      meals: "Breakfast in flight · Lunch on the road · Dinner riverside",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Chalal walk · Manikaran hot springs",
      city: "Kasol",
      summary:
        "A relaxed full day in the Parvati Valley. Morning: easy 1.5 km walk to Chalal village (the more 'authentic' hippie hamlet upstream). Afternoon: 40-min drive to Manikaran — Sikh gurudwara built over a natural hot spring, free langar lunch.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Manikaran.jpg?width=1600",
      attractions: [
        {
          name: "Chalal village walk",
          brief:
            "Cross the Parvati on a wooden bridge from Kasol and follow the gentle riverside path 1.5 km upstream. Stone houses, drying yarn, prayer flags, a couple of cafés. Takes 30-40 min one-way; mostly flat.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Parvati_Valley.jpg?width=1200",
          duration: "2 hr round-trip",
          elderlyFriendly: true,
          mapsQuery: "Chalal Village, Kasol",
        },
        {
          name: "Manikaran Gurudwara & Hot Springs",
          brief:
            "A Sikh gurudwara built directly on top of natural sulphur hot springs — rice for the langar is cooked using the steam. Free community lunch served all day. Cover your head before entering.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Manikaran.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Sri Guru Nanak Ji Gurudwara, Manikaran",
        },
        {
          name: "Manikaran Shiva Temple",
          brief:
            "The other half of the same complex — an old wooden Shiva temple right next to the gurudwara. Holy hot pools for ritual bathing.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Manikaran.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Manikaran Shiva Temple",
        },
      ],
      hotel: {
        name: "Sumi Yashshree Suites & Spa",
        category: "4★ riverside",
        pricePerNight: 8200,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Langar at Manikaran (donate generously) · Dinner at Bhoj Café",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Kasol → Bir via Mandi",
      city: "Bir",
      summary:
        "The single longer drive of the trip — 5 hours through the Beas gorge to Mandi (lunch) and onward to Bir. Highway most of the way, with one ghats section before Joginder Nagar. Arrive Bir mid-afternoon, settle in.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_Valley.jpg?width=1600",
      transfer: {
        from: "Kasol",
        to: "Bir",
        distanceKm: 165,
        durationHours: 5,
        notes: "Plan an early start (8am). Mandi (~halfway) has a Punjabi dhaba called Mid Way Patiala — quick lunch break. Driver-share the last hour into Bir.",
      },
      attractions: [
        {
          name: "Bir Tibetan Colony walk",
          brief:
            "Once you arrive in Bir, the village itself is a small Tibetan settlement — colourful prayer flags, hand-painted houses, and a few unhurried cafés. Easy 30-min walk loop.",
          photo:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Bir Tibetan Colony",
        },
      ],
      hotel: {
        name: "Avasara Resort, Bir",
        category: "Boutique 4★",
        pricePerNight: 6800,
        roomsNeeded: 5,
        notes: "Cottage-style rooms with private decks looking at the Dhauladhar range. Family-run, good restaurant, easy parking for both Innovas.",
      },
      meals: "Breakfast at hotel · Lunch at Mid Way Patiala (Mandi) · Dinner at Avasara",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Bir Billing — paragliding & monasteries",
      city: "Bir",
      summary:
        "Bir is the world's #2 paragliding site. Drive up to Billing (45 min) for the morning launch — tandem flight 25 min, landing at Bir. Afternoon: Sherab Ling Monastery (filming location for the Oscar-shortlisted 'Cup'). Evening: tea in the colony.",
      heroImage:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=80",
      attractions: [
        {
          name: "Paragliding from Billing (2,400 m)",
          brief:
            "Tandem flight with a certified pilot — 20-25 min in the air over the Kangra valley, GoPro footage included. ₹3,000-3,500/pax. Elders welcome but the take-off & landing involve a short run; skip if knees are dodgy.",
          photo:
            "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=80",
          duration: "Half day with transfers",
          mapsQuery: "Billing Paragliding Take Off Site",
        },
        {
          name: "Sherab Ling Monastery",
          brief:
            "Seat of the 12th Tai Situpa, founded 1975 — gilded prayer hall with 14-ft Buddha. The 1999 film 'The Cup' was shot here. Calm, photogenic, often empty.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Palpung Sherabling Monastery",
        },
        {
          name: "Deer Park Institute",
          brief:
            "Buddhist study centre in Bir village — drop-in for the afternoon talk if timing permits (check schedule online). Beautiful gardens with prayer wheels for a quiet stroll.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Deer Park Institute, Bir",
        },
      ],
      hotel: {
        name: "Avasara Resort, Bir",
        category: "Boutique 4★",
        pricePerNight: 6800,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at the Bir Café (post-flight) · Dinner at Garden Café",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Bir → Palampur tea estates → McLeodganj",
      city: "McLeodganj",
      summary:
        "Short 2.5-hour drive through the Kangra valley. Stop at Palampur's working tea gardens for tasting, lunch at Norwood (heritage tea estate restaurant), then climb to McLeodganj — the Dalai Lama's home-in-exile.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1600",
      transfer: {
        from: "Bir",
        to: "McLeodganj",
        distanceKm: 65,
        durationHours: 2.5,
        notes: "All paved, two-lane state highway. The McLeodganj climb (last 30 min) is steep but smooth.",
      },
      attractions: [
        {
          name: "Palampur Tea Estates",
          brief:
            "The northwesternmost tea-growing region of India. Walk a row or two with a guide (Wah Tea Estate), see processing, taste 1st and 2nd flush. Black tea here has a distinctive citrus note.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Wah Tea Estate, Palampur",
        },
        {
          name: "Andretta Pottery (optional 20-min detour)",
          brief:
            "Studio founded 1983 by Mansimran Singh — Sardar Gurcharan Singh's son, who learnt under Bernard Leach. Drop in to watch wheel-throwing or buy beautiful seconds at half price.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Andretta Pottery and Crafts Society",
        },
      ],
      hotel: {
        name: "Fortune Park Moksha, McLeodganj",
        category: "4★ ITC Fortune",
        pricePerNight: 7600,
        roomsNeeded: 5,
        notes: "On Mall Road, lift access, valley-view rooms. Walking distance to the Dalai Lama temple — saves driving in McLeodganj's tiny lanes.",
      },
      meals: "Breakfast at Avasara · Lunch at Norwood Green (Palampur) · Dinner on Mall Road",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "McLeodganj — Dalai Lama temple & Bhagsu",
      city: "McLeodganj",
      summary:
        "Morning: Tsuglagkhang complex, the official residence of the 14th Dalai Lama, with the Tibet Museum next door. Afternoon: 1.5 km drive to Bhagsunag Temple + waterfall. Sunset at Naddi viewpoint.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Bhagsu_waterfall.jpg?width=1600",
      attractions: [
        {
          name: "Tsuglagkhang Complex (Dalai Lama Temple)",
          brief:
            "The Dalai Lama's official residence-in-exile since 1959. The main prayer hall has a 3-m gilded Shakyamuni Buddha. If His Holiness is in town and giving a public teaching, you can attend (free, register online).",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Tsuglagkhang Complex, McLeod Ganj",
        },
        {
          name: "Tibet Museum",
          brief:
            "Inside the same complex — the modern Tibetan diaspora story told through photographs, escape testimonies, and artefacts smuggled out of Lhasa. Moving and educational, plan 45 min.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Tibet Museum, Dharamshala",
        },
        {
          name: "Bhagsunag Temple & Waterfall",
          brief:
            "A 16th-century Shiva temple with a freshwater pool, then a 1 km uphill walk (gentle) to a 30-ft seasonal waterfall — at peak flow in June. Cafés around the falls.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Bhagsu_waterfall.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Bhagsu Waterfall, McLeodganj",
        },
        {
          name: "Naddi Viewpoint (sunset)",
          brief:
            "5 km from McLeodganj — a roadside platform looking straight at the Dhauladhar range. On a clear evening the peaks turn pink. Park-and-walk, 50 m to the rail.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_Valley.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Naddi Viewpoint, Dharamshala",
        },
      ],
      hotel: {
        name: "Fortune Park Moksha, McLeodganj",
        category: "4★ ITC Fortune",
        pricePerNight: 7600,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Norling House (Tibetan) · Dinner at Tibet Kitchen",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "McLeodganj → Dalhousie",
      city: "Dalhousie",
      summary:
        "Drive 4 hours via Pathankot to Dalhousie — colonial Brit-era hill town (1854) named after Lord Dalhousie. Half the drive is fast 4-lane highway (down from Kangra to Pathankot), then climbing 2,000 m to the town. Afternoon stroll on Mall Road.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Dalhousie_view.jpg?width=1600",
      transfer: {
        from: "McLeodganj",
        to: "Dalhousie",
        distanceKm: 130,
        durationHours: 4,
        notes: "Descend to Pathankot (good highway, 2h), then climb up — 2h of hill driving with hairpins. Lunch at Pathankot, fuel up there.",
      },
      attractions: [
        {
          name: "Gandhi Chowk & Mall Road",
          brief:
            "Dalhousie's central plaza — old chapels, the Subhash Chowk-Mall Road circuit (a 4 km flat loop). Mostly pedestrian-only after 7 pm. Plenty of benches.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dalhousie_view.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Gandhi Chowk, Dalhousie",
        },
        {
          name: "St John's Church",
          brief:
            "1863 Scottish Presbyterian church with original stained glass and a clock tower — Dalhousie's oldest building. 5-min stop on Mall Road.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dalhousie_view.jpg?width=1200",
          duration: "20 min",
          elderlyFriendly: true,
          mapsQuery: "St John's Church, Dalhousie",
        },
      ],
      hotel: {
        name: "Grand View Hotel, Dalhousie",
        category: "4★ heritage",
        pricePerNight: 7200,
        roomsNeeded: 5,
        notes: "Built 1934 on a ridge with panoramic Dhauladhar views. Wood-floor rooms, open fireplaces, two terraces. Lift between floors.",
      },
      meals: "Breakfast at Moksha · Lunch at Pathankot (Café Saurav) · Dinner at hotel",
    },
    {
      index: 8,
      date: "2026-06-14",
      title: "Khajjiar 'Mini Switzerland' + Chamba",
      city: "Dalhousie",
      summary:
        "Long but pretty day-trip loop. 24 km to Khajjiar — a perfectly round saucer-meadow ringed by deodars, with a lake in the middle. Lunch there. Continue 24 km to Chamba — 6th-century temple town, Bhuri Singh Museum. Back to Dalhousie by 7pm.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Khajjiar.jpg?width=1600",
      transfer: {
        from: "Dalhousie",
        to: "Khajjiar → Chamba → Dalhousie",
        distanceKm: 110,
        durationHours: 5,
        notes: "Driving over the day adds up — but stops are 30-90 min each, so it never feels long. Forest road most of the way, no traffic.",
      },
      attractions: [
        {
          name: "Khajjiar Meadow",
          brief:
            "Called 'Mini Switzerland' by a Swiss diplomat in 1992 (a plaque commemorates the moment). A flat, grassy bowl with a small pond, pony rides, zorbing for the kids, a 9th-century Khajji Nag temple at the edge.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Khajjiar.jpg?width=1200",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Khajjiar, Himachal Pradesh",
        },
        {
          name: "Laxmi Narayan Temple Complex, Chamba",
          brief:
            "Six shikara-style temples in stone, the oldest from the 10th century, all dedicated to Vishnu and Shiva. Beautiful carvings, very photogenic. Located in old Chamba town.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chamba_Town.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Lakshmi Narayan Temple, Chamba",
        },
        {
          name: "Bhuri Singh Museum",
          brief:
            "Founded 1908 — houses Chamba's famous Pahari miniature paintings, Basohli school, royal weapons, and inscribed copper plates. Air-conditioned, single-level — gentle on the parents.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chamba_Town.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Bhuri Singh Museum, Chamba",
        },
        {
          name: "Chamba Chowgan",
          brief:
            "A grassy strip in the middle of town used historically for the Minjar festival cattle fair. Now a public garden — quick walk-around. Locals chat on benches.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chamba_Town.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Chamba Chaugan",
        },
      ],
      hotel: {
        name: "Grand View Hotel, Dalhousie",
        category: "4★ heritage",
        pricePerNight: 7200,
        roomsNeeded: 5,
      },
      meals: "Breakfast at Grand View · Lunch at Hotel Mini Swiss (Khajjiar) · Dinner at Cafe Dalhousie",
    },
    {
      index: 9,
      date: "2026-06-15",
      title: "Dalhousie → Dharamshala airport → Jaipur",
      city: "Jaipur",
      summary:
        "Slow morning, late check-out. 3-hour drive down to Gaggal/Kangra airport (DHM). Drop the rental cars at the airport rental desks. Mid-day flight via Delhi.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_Valley.jpg?width=1600",
      transfer: {
        from: "Dalhousie",
        to: "Dharamshala Airport (DHM)",
        distanceKm: 110,
        durationHours: 3,
        notes: "Descend through Pathankot road, then turn south for Gaggal. Leave 4 hours before flight in case of pre-monsoon thunderstorm slowdowns.",
      },
      attractions: [
        {
          name: "Last hill-station breakfast",
          brief:
            "Cafe Dalhousie or Sher-e-Punjab — order a Himachali siddu (steamed wheat bun stuffed with poppy seeds), ghee on top, a final cup of Kangra tea.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
        },
      ],
      meals: "Breakfast at hotel · Lunch at airport · Dinner home in Jaipur",
    },
  ],
};
