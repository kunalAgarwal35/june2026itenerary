import type { Plan } from "../types";

export const rishikesh: Plan = {
  slug: "rishikesh",
  name: "Rishikesh & Mussoorie",
  tagline: "Ganga ghats, yoga & a colonial hill station",
  startDate: "2026-06-07",
  endDate: "2026-06-13",
  travellers: 11,
  emoji: "🪷",
  accentFrom: "#0e7490",
  accentTo: "#67e8f9",
  heroImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshman_Jhula_Rishikesh.jpg?width=1600",
  description:
    "Two focus cities, both drives manageable from Jaipur. Three nights riverside in Rishikesh — Ganga ghats, evening aarti, the Beatles Ashram, optional rafting & yoga — then a 3-hour climb to Mussoorie for 3 nights of colonial-era hill station calm: Mall Road, Camel's Back, Landour bakeries, sunset at Lal Tibba. No flights. One resort base in each town. Built for the parents.",

  flights: {
    outbound: [
      {
        airline: "Self-drive from Jaipur",
        flightNo: "Day 1 · ~480 km",
        from: "Jaipur (home)",
        to: "Rishikesh (resort)",
        depart: "05:30",
        arrive: "14:30",
        duration: "9h on the road",
        stops: "Murthal breakfast · Haridwar tea",
        pricePerPerson: 0,
      },
      {
        airline: "Self-drive Rishikesh → Mussoorie",
        flightNo: "Day 4 · ~80 km",
        from: "Rishikesh",
        to: "Mussoorie (resort)",
        depart: "09:30",
        arrive: "13:00",
        duration: "3h 30m on the road",
        stops: "Dehradun (Robber's Cave or FRI)",
        pricePerPerson: 0,
      },
    ],
    return: [
      {
        airline: "Self-drive Mussoorie → Jaipur",
        flightNo: "Day 7 · ~530 km",
        from: "Mussoorie",
        to: "Jaipur (home)",
        depart: "06:00",
        arrive: "16:30",
        duration: "10h 30m on the road",
        stops: "Roorkee breakfast · Karnal lunch",
        pricePerPerson: 0,
      },
      {
        airline: "Alt: Mussoorie → Delhi (overnight) → Jaipur",
        flightNo: "Adds 1 day",
        from: "Mussoorie",
        to: "Jaipur via Delhi",
        depart: "Day 7 morning",
        arrive: "Day 8 afternoon",
        duration: "Split into 2 drives of ~6h each",
        stops: "Overnight stay in Delhi/Gurgaon if 10h is too much",
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
      totalDays: 7,
      countNeeded: 2,
      vendor: "Own family vehicles · or Zoomcar Jaipur weekly rate",
      notes:
        "Picked. NH-48 to Delhi → NH-334 → Rishikesh is excellent highway. Mussoorie's last 30 km climbs through Dehradun is the only winding section. Two drivers per car helps for the 10-hour final-day stretch.",
    },
    {
      type: "self-drive",
      vehicle: "If renting in Jaipur: 2× Innova Crysta, 7-day package",
      capacity: 7,
      perDayPrice: 4000,
      totalDays: 7,
      countNeeded: 2,
      vendor: "Zoomcar Jaipur / Avis Jaipur",
      notes:
        "~₹4,000/day all-in. Free km 200/day; we'll do ~340 km/day average — extra km ₹12 each. Pick up morning of Day 1, drop on Day 7 evening.",
    },
    {
      type: "chauffeur",
      vehicle: "Backup: 2× Innova Crysta with drivers",
      capacity: 7,
      perDayPrice: 5000,
      totalDays: 7,
      countNeeded: 2,
      vendor: "Jaipur outstation operators (Savaari / MakeMyTrip)",
      notes:
        "If the 9-hour Day 1 and 10-hour Day 7 stretches sound brutal — chauffeur option adds ~₹14,000 total. Drivers handle Delhi traffic better.",
    },
  ],

  weather: [
    {
      heading: "Rishikesh — warm but bearable",
      body: "Mid-June in Rishikesh is 28-35°C day, 22-26°C night. Ganga is cool, ghats have shade. Plan ghat walks early (6-9 am) or late (5-7 pm). The yoga halls are AC.",
      tone: "info",
    },
    {
      heading: "Mussoorie — perfect alpine June",
      body: "Mussoorie (2,000 m) sits in the sweet spot — 22-26°C days, 14-18°C nights. Sleeping with a quilt feels luxurious after Rishikesh's plains heat. Clear mornings of the Doon Valley.",
      tone: "good",
    },
    {
      heading: "Pre-monsoon thundershowers possible",
      body: "After June 10 expect random late-afternoon thunderstorms (mostly Mussoorie). Monsoon proper hits late June. Carry a light rain shell — useful for both spots.",
      tone: "info",
    },
    {
      heading: "Highway is excellent",
      body: "Jaipur → Delhi → Rishikesh is all 6-lane expressway (NH-48 → NH-334). The only single-lane bit is the Dehradun → Mussoorie climb (last 30 km). Easy daytime driving.",
      tone: "good",
    },
  ],

  totalEstimate: { low: 470000, high: 605000 },

  costBreakdown: [
    { label: "Fuel (Jaipur ↔ Rishikesh ↔ Mussoorie ~2,400 km × 2 × ₹11/km)", amount: 52800, note: "Includes local pottering around" },
    { label: "Tolls (Delhi-Meerut Expressway, Eastern Peripheral, Doon NH)", amount: 28000, note: "Both ways × 2 cars on FASTag" },
    { label: "Hotel — Rishikesh (3N × 5 rooms)", amount: 135000, note: "Aloha on the Ganges @ ~₹9,000/room" },
    { label: "Hotel — Mussoorie (3N × 5 rooms)", amount: 180000, note: "WelcomHotel by ITC @ ~₹12,000/room" },
    { label: "Meals (₹500/pax × 11 × 18)", amount: 99000, note: "Breakfast included at hotels" },
    { label: "Rafting (assume 6 keen, ₹1,200 each, 16km stretch)", amount: 7200, note: "Optional — Day 3" },
    { label: "Yoga session at Parmarth Niketan / hotel (group)", amount: 6000, note: "Optional drop-in" },
    { label: "Gun Hill cable car, Kempty entry, ghat boats", amount: 8000 },
    { label: "Misc — Ganga aarti donation, tips, travel insurance", amount: 16000 },
    { label: "Car rental (only if not using own cars)", amount: 56000, note: "Optional — ₹4,000/day × 2 × 7" },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Rishikesh",
      city: "Rishikesh",
      summary:
        "Early 5:30am start from Jaipur. Up the Delhi-Meerut Expressway and NH-334 to Haridwar then Rishikesh — 9 hours with stops. Arrive mid-afternoon, settle in at the riverside resort, hot shower. Evening: dusk Ganga aarti at Triveni Ghat (the locals' aarti, smaller than Parmarth's).",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Triveni_Ghat%2C_Rishikesh.jpg?width=1600",
      transfer: {
        from: "Jaipur (home)",
        to: "Rishikesh",
        distanceKm: 480,
        durationHours: 9,
        notes: "Murthal breakfast (Sukhdev Dhaba), Haridwar tea stop. Drive in daylight — last 25 km Haridwar-to-Rishikesh has occasional cow traffic.",
      },
      attractions: [
        {
          name: "Triveni Ghat",
          brief:
            "The main bathing ghat on the Ganges in Rishikesh — three rivers symbolically meet here (Ganga, Yamuna, Saraswati). Evening Maha Aarti at 7pm: floating diyas, conch shells, fewer crowds than Parmarth's. Flat steps, easy on parents.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Triveni_Ghat%2C_Rishikesh.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Triveni Ghat, Rishikesh",
        },
        {
          name: "Riverside dinner",
          brief:
            "The Sattvik Café at the hotel, or walk 5 minutes to Little Buddha Café (Tapovan side, Ganga view, vegetarian Pan-Asian). No alcohol — Rishikesh is a holy city.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Little Buddha Café, Rishikesh",
        },
      ],
      hotel: {
        name: "Aloha on the Ganges",
        category: "Boutique 4★ riverside",
        pricePerNight: 9000,
        roomsNeeded: 5,
        notes: "Privately set on a Ganga bend at Tapovan — private steps to the river, infinity pool over the rapids, lift access. Family-run, excellent reviews. Books open on Booking.com / hotel direct.",
      },
      meals: "Breakfast at Murthal · Lunch on the road · Dinner at hotel after aarti",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Rishikesh — jhulas & Beatles Ashram",
      city: "Rishikesh",
      summary:
        "Slow morning. Walk across Ram Jhula (1986 suspension bridge), café-hop in Swargashram, lunch at Chotiwala's (since 1958). Afternoon: Beatles Ashram (Chaurasi Kutia) — the 1968 site where the band wrote 30+ White Album songs. Evening: Parmarth Niketan Ganga Aarti.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Jhula.jpg?width=1600",
      attractions: [
        {
          name: "Ram Jhula & Swargashram",
          brief:
            "750-ft pedestrian suspension bridge across the Ganga. Cross slowly — the gentle sway is part of the fun. Swargashram on the far side is a cluster of ashrams and Ayurveda shops. Auto-rickshaws cover the steeper bits.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Jhula.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Ram Jhula, Rishikesh",
        },
        {
          name: "Beatles Ashram (Chaurasi Kutia)",
          brief:
            "The abandoned ashram of Maharishi Mahesh Yogi, where the Beatles stayed in early 1968 and wrote songs that became the White Album. Now an ASI site with vivid graffiti murals. ₹150 entry. Easy walking on paved paths.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Beatles Ashram, Rishikesh",
        },
        {
          name: "Parmarth Niketan Ganga Aarti (sunset)",
          brief:
            "The most famous aarti in Rishikesh — held on the Parmarth Niketan ghat from 6:00 pm (sunset shifts seasonally). Children of the ashram lead the chants, flames swirl over the river. Absolutely magical. Free; arrive 5:30 to get a step seat.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Triveni_Ghat%2C_Rishikesh.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Parmarth Niketan, Rishikesh",
        },
      ],
      hotel: {
        name: "Aloha on the Ganges",
        category: "Boutique 4★ riverside",
        pricePerNight: 9000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Chotiwala's · Dinner at Bistro Nirvana",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Rishikesh — yoga or rafting · chill day",
      city: "Rishikesh",
      summary:
        "Split-the-group day. Adventurous half does white-water rafting (16 km, ₹1,200/pax). Quieter half does a drop-in yoga + pranayama session at Parmarth Niketan and a riverside lazy afternoon. Reconvene for café dinner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshman_Jhula_Rishikesh.jpg?width=1600",
      attractions: [
        {
          name: "White-water rafting (16 km Brahmpuri stretch)",
          brief:
            "The gentlest commercial rafting stretch — Grade I-II rapids, 1.5-hour float. Operator picks you up, kits you out, drops you back. Min age 12, max age ~65 (signed waiver). ₹1,200/pax for the standard stretch.",
          photo:
            "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=80",
          duration: "Half day with transfers",
          mapsQuery: "Red Chilli Adventure Rafting Rishikesh",
        },
        {
          name: "Drop-in yoga class at Parmarth Niketan",
          brief:
            "Open daily 6-7 am & 4-5 pm. Hatha + pranayama for ~50 mins, suitable for absolute beginners. Donation-based (₹300-500 suggested). Mats provided. Held in a Ganga-view hall.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Parmarth Niketan Yoga Hall",
        },
        {
          name: "Lakshman Jhula visit",
          brief:
            "Older 1929 suspension bridge upstream from Ram Jhula. Recently rebuilt (steel version 2022). Tera Manzil Temple at one end, 13-storey colourful Trayambakeshwar Temple at the other. Quieter walking.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshman_Jhula_Rishikesh.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Lakshman Jhula, Rishikesh",
        },
        {
          name: "Pool & book afternoon at the hotel",
          brief:
            "The picked option for the parents. Aloha's infinity pool faces the rapids; loungers, watermelon-ginger juice, no driving. Repeat until dinner.",
          photo:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
          duration: "Afternoon",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Aloha on the Ganges",
        category: "Boutique 4★ riverside",
        pricePerNight: 9000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at the Sitting Elephant · Dinner at Tat Café",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Rishikesh → Dehradun → Mussoorie",
      city: "Mussoorie",
      summary:
        "Pack up. Short 3.5-hour drive via Dehradun. Lunch en route at the colonial-era FRI campus or Robber's Cave. The last 30 km is the Mussoorie climb — gentle hairpins through deodars. Check into the hotel on Mall Road by 1pm. Easy afternoon: walk to Library Bazaar, sundowner at the deck.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1600",
      transfer: {
        from: "Rishikesh",
        to: "Mussoorie",
        distanceKm: 80,
        durationHours: 3.5,
        notes: "Excellent road via Dehradun. Last 30 km from Doon valley up is steady climbing — 22 hairpins. No fog/snow in June so visibility is fine.",
      },
      attractions: [
        {
          name: "Robber's Cave (Guchhupani)",
          brief:
            "A short natural cave with a stream running through it — at peak flow in June. You walk barefoot in shin-deep water for 600 m. Touristy but the kids will love it; parents can wait at the café.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Robber%27s_Cave_Dehradun.jpg?width=1200",
          duration: "1 hr",
          mapsQuery: "Robber's Cave, Dehradun",
        },
        {
          name: "Forest Research Institute (FRI), Dehradun",
          brief:
            "Greco-Roman colonial campus built 1929 — 450 acres, six small museums of forestry, used as a film location (Student of the Year, Krrish 3). 30-min walk-through, mostly level lawns and corridors.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Forest Research Institute, Dehradun",
        },
        {
          name: "Mall Road / Library Bazaar",
          brief:
            "Mussoorie's central spine — pedestrianised after 6pm. Colonial bandstands, an old library (1843), the Methodist Church, fudge shops. A 2 km flat walk with benches every 100 m.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Library Bazaar, Mussoorie",
        },
      ],
      hotel: {
        name: "WelcomHotel by ITC, Mussoorie",
        category: "5★ hill hotel",
        pricePerNight: 12000,
        roomsNeeded: 5,
        notes: "On the Mall Road end of town — lift to most floors, 5-min walk to Library Chowk. Indoor pool & spa, panoramic Doon-valley dining room. Secure underground parking.",
      },
      meals: "Breakfast at Aloha · Lunch at Doon Café · Dinner at hotel buffet",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Mussoorie — Camel's Back, Gun Hill, Lal Tibba",
      city: "Mussoorie",
      summary:
        "Classic Mussoorie sightseeing day, but gentle. Morning: Camel's Back Road circular walk (3 km flat). Mid-morning: Gun Hill via cable car for the highest view in town. Afternoon: drive to Lal Tibba (highest point) for sunset, telescope views of Bandarpunch range.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1600",
      attractions: [
        {
          name: "Camel's Back Road",
          brief:
            "A 3 km flat scenic loop named after a camel-shaped rock formation. Goes around a hill above Mall Road — Himalayan views one side, town on the other. Benches every 150 m. Best walked in the morning when traffic is zero.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Camel's Back Road, Mussoorie",
        },
        {
          name: "Gun Hill (cable car)",
          brief:
            "Mussoorie's second-highest point at 2,122 m. The 400-m ropeway from Mall Road takes 4 minutes and saves a steep climb. Gun installed by the British in 1850 to mark noon. 360° view of the Himalayas (clear days), Dehradun valley below.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Gun Hill Ropeway, Mussoorie",
        },
        {
          name: "Lal Tibba (sunset)",
          brief:
            "The highest point in Mussoorie at 2,275 m, in Landour. Telescope on the platform lets you see Bandarpunch, Gangotri, Neelkanth peaks on clear evenings. Drive up (5 km from Mall) — short walk from parking.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Lal Tibba, Mussoorie",
        },
        {
          name: "Sunset chai at Char Dukan, Landour",
          brief:
            "Four 1860s-era tea shops at the top of Landour. Bun-omelette + ginger lemon honey tea is the order. Ruskin Bond lives 5 minutes from here — sometimes he wanders past for the same chai.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Char Dukan, Landour",
        },
      ],
      hotel: {
        name: "WelcomHotel by ITC, Mussoorie",
        category: "5★ hill hotel",
        pricePerNight: 12000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Café Ivy (Landour) · Dinner at Kalsang Friends Corner (Tibetan)",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Mussoorie chill day · Kempty or Landour walk",
      city: "Mussoorie",
      summary:
        "Free day. Two soft options: drive to Kempty Falls (touristy but kids love it, 15 km, 30 min) OR the quieter Landour heritage walk (Ruskin Bond's neighbourhood, cemeteries, old church). Afternoon at the hotel spa. Pack tomorrow's snacks.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kempty_Falls.jpg?width=1600",
      attractions: [
        {
          name: "Kempty Falls",
          brief:
            "A 40-ft cascade in five tiers — Mussoorie's most popular natural attraction since the 1900s. Cable car down to the pool (₹150). Pool wading possible but slippery — sit on the benches for the elderly. Get there by 10am to beat the crowd.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kempty_Falls.jpg?width=1200",
          duration: "2 hr",
          mapsQuery: "Kempty Falls, Mussoorie",
        },
        {
          name: "Landour heritage walk (quieter option)",
          brief:
            "A 2.5 km loop through Landour Bazaar: the 1840 Methodist church, the British cemetery, the Sister's Bazaar Mansion, Char Dukan (again — different chai). Ruskin Bond's cottage is at Ivy Cottage; he sometimes signs books at Cambridge Book Depot at 5pm.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie.jpg?width=1200",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Landour Bazaar, Mussoorie",
        },
        {
          name: "Hotel spa afternoon",
          brief:
            "WelcomHotel's Kaya Kalp Royal Spa — Abhyanga (₹3,200), Shirodhara (₹3,800), couples' massage. Book in advance. Heated pool and steam included for guests.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "90 min",
          elderlyFriendly: true,
        },
        {
          name: "Optional: Dhanaulti day trip",
          brief:
            "62 km / 2 hr each way to Dhanaulti, a quiet alpine plateau at 2,250 m — eco-park, deodar forests. A 4-hour roundtrip with lunch — only worth it if the day feels too low-energy otherwise.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Dhanaulti.jpg?width=1200",
          duration: "Half day",
          mapsQuery: "Dhanaulti, Uttarakhand",
        },
      ],
      hotel: {
        name: "WelcomHotel by ITC, Mussoorie",
        category: "5★ hill hotel",
        pricePerNight: 12000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at hotel · Lunch at Char Dukan / Anil's Café · Last-night dinner at Lovely Omelette Centre (a Mussoorie 50-yr institution)",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Mussoorie → Jaipur · home",
      city: "Jaipur",
      summary:
        "Long day. 6am start. Descend through Dehradun, hit the highway, NH-58 → Delhi Expressway → NH-48 back to Jaipur. Breakfast in Roorkee, lunch in Karnal. Home by sunset, 16:30.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Mussoorie",
        to: "Jaipur (home)",
        distanceKm: 530,
        durationHours: 10.5,
        notes: "If 10 hours sounds too much, break overnight in Delhi or Gurgaon (see alternate return option). Otherwise: leave Mussoorie at 6am latest, two drivers per car alternating every 2 hours.",
      },
      warning: "The longest single drive of the trip. Strong consideration: split into Mussoorie → Delhi (Day 7) and Delhi → Jaipur (Day 8) if the parents would rather not do 10+ hours straight.",
      attractions: [
        {
          name: "Roorkee breakfast",
          brief:
            "Punjab Da Dhaba on NH-58 — early-morning paranthas, fresh dahi, hot tea. Clean restrooms. The downhill from Mussoorie to here is 2 hours of pretty driving.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Punjab Da Dhaba, Roorkee",
        },
        {
          name: "Karnal Haveli lunch",
          brief:
            "Same heritage rest stop on NH-152. Garden seating, separate clean restrooms, Indian + Continental menu. The natural lunch break.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Karnal Haveli, Karnal",
        },
      ],
      meals: "Breakfast at Roorkee · Lunch at Karnal Haveli · Dinner at home",
    },
  ],
};
