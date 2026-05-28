import type { Plan } from "../types";

export const himachal: Plan = {
  slug: "himachal",
  name: "Slow Himachal · Palampur tea estate",
  tagline: "Drive from Jaipur. One resort. Tea, deodars, no rush.",
  startDate: "2026-06-07",
  endDate: "2026-06-13",
  travellers: 11,
  emoji: "🍃",
  accentFrom: "#2d5a2d",
  accentTo: "#a4c97b",
  heroImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1600",
  description:
    "The chill version. Drive from Jaipur with one overnight at Chandigarh on the way up, then settle in for 4 unhurried nights at a tea-estate resort in Palampur (1,300 m, pine-deodar belt, Dhauladhar views). Days are for spa, walks in the tea gardens, easy lunches, and one optional Bir Billing paragliding day. No daily transfers, no flights, no rush.",

  flights: {
    outbound: [
      {
        airline: "Self-drive from Jaipur",
        flightNo: "Day 1 · ~520 km",
        from: "Jaipur (home)",
        to: "Chandigarh (overnight)",
        depart: "06:00",
        arrive: "14:30",
        duration: "8h 30m on the road",
        stops: "Lunch at Murthal (Sukhdev Dhaba)",
        pricePerPerson: 0,
      },
      {
        airline: "Self-drive Chandigarh → Palampur",
        flightNo: "Day 2 · ~280 km",
        from: "Chandigarh",
        to: "Palampur (resort)",
        depart: "08:30",
        arrive: "14:30",
        duration: "6h on the road",
        stops: "Tea break at Una / Hamirpur",
        pricePerPerson: 0,
      },
    ],
    return: [
      {
        airline: "Self-drive Palampur → Chandigarh",
        flightNo: "Day 6 · ~280 km",
        from: "Palampur",
        to: "Chandigarh (overnight)",
        depart: "09:00",
        arrive: "15:00",
        duration: "6h on the road",
        stops: "Lunch at Bilaspur",
        pricePerPerson: 0,
      },
      {
        airline: "Self-drive Chandigarh → Jaipur",
        flightNo: "Day 7 · ~520 km",
        from: "Chandigarh",
        to: "Jaipur (home)",
        depart: "07:00",
        arrive: "15:30",
        duration: "8h 30m on the road",
        stops: "Lunch at Karnal Haveli",
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
        "Picked. Driving from Jaipur means no airport transfers, no rental fuss at the destination, and the cars wait at your hotel. NH-48 (Jaipur–Delhi–Karnal) and NH-152 (Karnal–Chandigarh) are excellent 6-lane highways. The mountain stretch is only 6 hours, on a paved state highway. Two drivers per car helps — alternate every 2 hours.",
    },
    {
      type: "self-drive",
      vehicle: "If renting in Jaipur: 2× Innova Crysta, 7-day package",
      capacity: 7,
      perDayPrice: 4000,
      totalDays: 7,
      countNeeded: 2,
      vendor: "Zoomcar Jaipur / Avis Jaipur — Sawai Madhopur Rd",
      notes:
        "~₹4,000/day all-in, free km 200/day (we'd use ~250/day on average — extra km ₹12 each). Pick up the morning of Day 1, drop on Day 7 evening. Insurance upgrade ₹500/day/car worth it for hill section.",
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
        "If no one's keen on the 8-hour Jaipur–Chandigarh stretch, chauffeur option adds ~₹14,000 total. Driver night-halt allowance included.",
    },
  ],

  weather: [
    {
      heading: "Best window of the year for HP",
      body: "June 7-13 sits in the perfect pre-monsoon sweet spot. Palampur (1,300 m) days will be 22-26°C, nights 14-18°C — sleep with a quilt. Skies are mostly clear; Dhauladhar peaks visible most mornings.",
      tone: "good",
    },
    {
      heading: "Pre-monsoon thunderstorms possible",
      body: "Random afternoon showers can pop up after June 10. The full monsoon doesn't hit Himachal until late June, so we're in the clear — but carry a light rain shell just in case.",
      tone: "info",
    },
    {
      heading: "Highway is smooth",
      body: "Jaipur to Chandigarh is excellent 6-lane highway (NH-48 → NH-152) — a single 8-hour day with toilet stops. Chandigarh to Palampur is 6 hours of state highway with gentle climbs. No off-roading, no Sikkim-style hairpins.",
      tone: "good",
    },
    {
      heading: "Altitude is gentle",
      body: "Resort is at 1,300 m — easy on hearts and lungs. Bir paragliding launch is 2,400 m but you only spend 20 minutes up there. Nothing in the day-trip radius exceeds 2,000 m.",
      tone: "good",
    },
  ],

  totalEstimate: { low: 495000, high: 610000 },

  costBreakdown: [
    { label: "Fuel (Jaipur ↔ Palampur ~2,200 km × 2 cars × ₹11/km)", amount: 48400, note: "Includes detours around resort area" },
    { label: "Tolls (NH-48 & NH-152, both ways × 2 cars)", amount: 28000, note: "FASTag — Murthal, Karnal, Ambala, Chandigarh barriers" },
    { label: "Hotel — Chandigarh (1N each way × 5 rooms)", amount: 70000, note: "JW Marriott or Hyatt Regency, ~₹7,000/room" },
    { label: "Hotel — Palampur resort (4N × 5 rooms)", amount: 200000, note: "Justa Birding Tea Suite, ~₹10,000/room" },
    { label: "Meals (₹500/pax × 11 × 18 meals)", amount: 99000, note: "Breakfast usually included at hotels" },
    { label: "Paragliding at Bir (assume 5 keen, ₹3,500 each)", amount: 17500, note: "Tandem 25 min — totally optional" },
    { label: "Spa, tea-tasting, in-resort experiences", amount: 18000 },
    { label: "Misc — driver coffee, tips, travel insurance", amount: 15000 },
    { label: "Car rental (only if not using own cars)", amount: 56000, note: "Optional — ₹4,000/day × 2 × 7" },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Chandigarh",
      city: "Chandigarh",
      summary:
        "Early start from Jaipur (06:00). Smooth 8-hour drive up NH-48 → NH-152 with a parantha lunch at Sukhdev Dhaba (Murthal). Check in to the hotel by 3pm. Easy evening: Sukhna Lake walk or Sector 17 stroll.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Jaipur (home)",
        to: "Chandigarh",
        distanceKm: 520,
        durationHours: 8.5,
        notes: "Best Indian highway in the country. Stops: Murthal (lunch), Karnal (fuel), Ambala (toilet). Aim to leave Jaipur before 6am to avoid Delhi-NCR traffic.",
      },
      attractions: [
        {
          name: "Sukhdev Dhaba, Murthal",
          brief:
            "The Punjabi highway dhaba landmark since 1957. Stuffed paranthas with ghee, lassi, fresh dahi. Open 24×7. Halfway between Jaipur and Chandigarh — natural lunch stop.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhdev Dhaba, Murthal",
        },
        {
          name: "Sukhna Lake walk",
          brief:
            "Man-made reservoir at the foot of the Shivaliks (1958, Corbusier's design). 3 km level promenade — perfect post-drive leg-stretch for the parents. Boating available.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhna Lake, Chandigarh",
        },
      ],
      hotel: {
        name: "JW Marriott Chandigarh",
        category: "5★ city",
        pricePerNight: 7500,
        roomsNeeded: 5,
        notes: "City-centre, Sector 35. Big rooms, lift to underground parking — secure spot for both Innovas. Reliable buffet dinner.",
      },
      meals: "Breakfast on the road · Lunch at Sukhdev's · Dinner at hotel buffet",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Chandigarh → Palampur tea estate",
      city: "Palampur",
      summary:
        "Leave 08:30 after a proper breakfast. 6-hour climb through Una and Hamirpur — leaving the plains behind, hills slowly opening up. Arrive Palampur ~2:30pm. The resort is the destination — check in, lazy late lunch on the lawn, watch the clouds move on the Dhauladhar.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1600",
      transfer: {
        from: "Chandigarh",
        to: "Palampur",
        distanceKm: 280,
        durationHours: 6,
        notes: "Paved state highway. Tea break at Una or Hamirpur. The last 30 min into Palampur is the only real climbing — gentle hairpins, not scary.",
      },
      attractions: [
        {
          name: "Tea-estate welcome",
          brief:
            "Justa Birding is set inside a working Kangra tea garden. On arrival they typically serve a Kangra black tea on the lawn — the local first-flush has a distinctive light citrus aroma.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Justa Birding Resort, Palampur",
        },
        {
          name: "Evening sundowner on the lawn",
          brief:
            "The lawn faces straight at the Dhauladhar range. Sunset is around 7:15 pm in June — order pakoras, take a chair, watch the snow line turn pink.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_Valley.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Justa Birding Tea Suite & Spa, Palampur",
        category: "Boutique 4★ tea estate",
        pricePerNight: 10000,
        roomsNeeded: 5,
        notes: "20 large tea-suite rooms set in a working tea estate. Spa, infinity-edge pool facing the Dhauladhar, organic kitchen, deodar terrace. Wheelchair access to main building; villas have 1-2 steps. Bookings open on Booking.com / hotel direct.",
      },
      meals: "Breakfast at JW · Lunch en route (Hamirpur) · Welcome dinner at resort",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Resort day · tea walks",
      city: "Palampur",
      summary:
        "No driving. Sleep in. Late breakfast on the lawn. Morning: 1-hour gentle walk through the tea pluckers' rows with a hotel guide. Afternoon: spa appointments (book on arrival), or just the pool and a book. Sunset on the deodar deck.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1600",
      attractions: [
        {
          name: "Guided tea-garden walk",
          brief:
            "Free morning activity at the resort. Walk past pluckers (women carrying conical baskets), into the small processing shed where leaves are withered and rolled. Ends with a tasting of 1st flush vs 2nd flush.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Wah Tea Estate, Palampur",
        },
        {
          name: "Himalayan Ayurvedic spa",
          brief:
            "Justa's in-house Ayurveda menu — Abhyanga (₹3,200), Shirodhara (₹3,800), Pizhichil (₹4,500). Book by 10am for the same afternoon. Treatment rooms are single-level.",
          photo:
            "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1600&q=80",
          duration: "90 min",
          elderlyFriendly: true,
        },
        {
          name: "Infinity pool afternoon",
          brief:
            "The pool faces the Dhauladhar. Heated, open till 7pm in summer. Towels & light snack service on the loungers.",
          photo:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
          duration: "Afternoon",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Justa Birding Tea Suite & Spa, Palampur",
        category: "Boutique 4★ tea estate",
        pricePerNight: 10000,
        roomsNeeded: 5,
      },
      meals: "All meals at resort — try the Himachali dham thali for dinner",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Choose-your-own-day · McLeodganj & Dharamkot · or Bir · or resort",
      city: "Palampur",
      summary:
        "Three groups, two cars, one resort dinner. The Tibetan-culture crowd takes one Innova to McLeodganj (1.5 hr) — Dalai Lama temple, then up to quiet Dharamkot for cafés and Bhagsu waterfall. The adventurous head to Bir Billing for paragliding (1 hr). Whoever wants to truly chill stays at the resort. Re-converge at sunset.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Norbulingka_Institute.jpg?width=1600",
      attractions: [
        {
          name: "Dharamkot (above McLeodganj)",
          brief:
            "The quieter, leafier village 3 km uphill from McLeodganj. Tushita Meditation Centre, café-lined trails, Israeli + Korean cuisine, and a base for the easy 30-min walk to Bhagsu Falls. The chillest version of Tibetan-Himachal.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Bhagsu_waterfall.jpg?width=1200",
          duration: "Half day",
          elderlyFriendly: true,
          mapsQuery: "Dharamkot, Himachal Pradesh",
        },
        {
          name: "Tsuglagkhang Complex (Dalai Lama Temple)",
          brief:
            "His Holiness's residence-in-exile since 1959 — main prayer hall has a 3-m gilded Shakyamuni Buddha; the adjacent Tibet Museum tells the diaspora story through photographs and artefacts. If His Holiness is teaching, you can attend for free (register online).",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Tsuglagkhang Complex, McLeod Ganj",
        },
        {
          name: "Bhagsu Waterfall + Temple",
          brief:
            "A 16th-century Shiva temple with a freshwater pool, then a gentle 1 km uphill walk to a 30-ft seasonal waterfall — at peak flow in June. Cafés around the falls; sit, eat maggi, watch.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Bhagsu_waterfall.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Bhagsu Waterfall, McLeodganj",
        },
        {
          name: "Norbulingka Institute, Sidhpur (en route)",
          brief:
            "30 km from the resort, on the way back from Dharamshala — a Tibetan handicraft preservation centre with thangka painting, statue-making, woodcarving workshops you can watch. Japanese-style gardens, a serene temple, an excellent café. Easy single-level walking.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Norbulingka_Institute.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Norbulingka Institute, Sidhpur",
        },
        {
          name: "Paragliding from Billing (alt for the adventurous)",
          brief:
            "Bir is the world's #2 paragliding site. Drive to Billing (45 min), tandem flight 20-25 min with a certified pilot, landing back at Bir village. ₹3,000-3,500/pax, GoPro footage included. Walk-on take-off — skip if knees are not great.",
          photo:
            "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1600&q=80",
          duration: "Half day with transfers",
          mapsQuery: "Billing Paragliding Take Off Site",
        },
        {
          name: "Stay at the resort (also a valid choice)",
          brief:
            "If everyone's happy at Justa, just stay. The whole pitch of this revised plan is that you've earned the right to not 'do things'. Spa appointments, infinity pool, lawn lunch.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1200",
          duration: "All day",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Justa Birding Tea Suite & Spa, Palampur",
        category: "Boutique 4★ tea estate",
        pricePerNight: 10000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at resort · Lunch at Norling House (McLeodganj) or Bir Café · Dinner together at resort",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Slow day · easy half-day add-ons · Baijnath sunset",
      city: "Palampur",
      summary:
        "Resort morning. After lunch, pick one easy half-day: 12 km to the tucked-away Tashi Jong Tibetan monastery, 14 km to Andretta's pottery studios, or 18 km to the cliff-edge Chamunda Devi temple. Late afternoon: a short 25-min drive to the 13th-century Baijnath Shiva temple for evening aarti. Back to the resort for dinner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_Valley.jpg?width=1600",
      attractions: [
        {
          name: "Tashi Jong Monastery (12 km — easy add-on)",
          brief:
            "Tiny Tibetan refugee settlement and a small but exquisite Drukpa Kagyu monastery — colourful prayer hall, peaceful courtyard, almost zero tourists. 30 min there, 30 min visit, 30 min back.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Tashi Jong Monastery, Taragarh",
        },
        {
          name: "Andretta Pottery & Norah Richards' garden",
          brief:
            "Mansimran Singh's pottery studio (Leach-Hamada lineage) — watch wheel-throwing, buy beautiful seconds at half price. Norah Richards' adobe cottage next door — Irish actress who founded Punjabi theatre. 14 km from the resort.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Andretta Pottery and Crafts Society",
        },
        {
          name: "Chamunda Devi Temple",
          brief:
            "An ancient Shakti Peetha on the banks of the Baner river, 18 km from Palampur. Pretty stone temple shaded by deodars; the river burbles right under the floor. 45-min visit. Skip the long queues — go on a weekday afternoon.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chamunda_Devi_Temple.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Chamunda Devi Temple, Himachal Pradesh",
        },
        {
          name: "Baijnath Temple (aarti at 7pm)",
          brief:
            "Built 1204 — one of the oldest standing Shiva temples in India. Nagara-style shikara, intricate stone carving, two giant deodars at the gate. Sunset aarti is short, atmospheric. Drive: 25 min from the resort.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kangra_Valley.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Baijnath Shiva Temple, Himachal Pradesh",
        },
        {
          name: "Tea-pluckers' breakfast walk (early morning)",
          brief:
            "Optional sunrise activity — pluckers start at 6am. Walk with them for 30 min, watch the day begin in the valley. Hot tea served back at the resort lawn at 7:30. Beautifully meditative.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
        },
        {
          name: "Pool & book afternoon",
          brief:
            "The picked activity if no day-trip appeals. Pool, lounger, book, lemonade. Sunset on the lawn. Repeat until dinner.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Palampur.jpg?width=1200",
          duration: "All afternoon",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Justa Birding Tea Suite & Spa, Palampur",
        category: "Boutique 4★ tea estate",
        pricePerNight: 10000,
        roomsNeeded: 5,
      },
      meals: "All meals at resort · Try the trout pollichathu",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Palampur → Chandigarh (return)",
      city: "Chandigarh",
      summary:
        "Lazy breakfast. Check out by 11am. 6-hour drive back down through Hamirpur and Bilaspur. Lunch en route. Check in at the same JW Marriott by 4pm for one last comfortable night before the long highway run home.",
      heroImage:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Palampur",
        to: "Chandigarh",
        distanceKm: 280,
        durationHours: 6,
        notes: "Mostly downhill — gentler than the climb up. Lunch at Bilaspur (Café Sunset View, Gobind Sagar lake views).",
      },
      attractions: [
        {
          name: "Gobind Sagar lake view (Bilaspur)",
          brief:
            "Massive reservoir behind Bhakra Dam — startlingly blue, set in brown hills. Photo stop only; 15 min off-highway.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Gobind Sagar Lake, Bilaspur",
        },
        {
          name: "Chandigarh Rock Garden (evening)",
          brief:
            "Nek Chand's outsider-art masterpiece — a 40-acre garden built entirely from urban waste (bottle caps, broken bangles, glass shards) over 18 secret years. Family-favourite, easy paths.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Rock Garden of Chandigarh",
        },
      ],
      hotel: {
        name: "JW Marriott Chandigarh",
        category: "5★ city",
        pricePerNight: 7500,
        roomsNeeded: 5,
      },
      meals: "Breakfast at Justa · Lunch at Bilaspur · Dinner at JW (or Pal Dhaba in Sector 28 for old-school butter chicken)",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Chandigarh → Jaipur · home",
      city: "Jaipur",
      summary:
        "Early start (07:00). 8-hour drive home down NH-152 → NH-48. Lunch at Karnal Haveli (the rest-stop you didn't try on the way up). Home in Jaipur by sunset.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Chandigarh",
        to: "Jaipur (home)",
        distanceKm: 520,
        durationHours: 8.5,
        notes: "Same highway, mirrored. Aim to leave by 7am to clear Delhi-NCR before evening rush.",
      },
      attractions: [
        {
          name: "Karnal Haveli rest-stop",
          brief:
            "Heritage-style rest stop on NH-152 — pleasant garden seating, separate clean restrooms (rare on this highway), full Indian + Continental menu. Better lunch stop than Murthal on the return.",
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
