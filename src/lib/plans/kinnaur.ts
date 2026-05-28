import type { Plan } from "../types";

export const kinnaur: Plan = {
  slug: "kinnaur",
  name: "Slow Kinnaur · Kalpa & Chitkul",
  tagline: "Apple orchards, Kinner Kailash views & the last village before Tibet",
  startDate: "2026-06-07",
  endDate: "2026-06-13",
  travellers: 11,
  emoji: "⛰️",
  accentFrom: "#312e81",
  accentTo: "#a5b4fc",
  heroImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1600",
  description:
    "Drive from Jaipur into the deep Kinnaur valley — apple country, 19,000-ft Kinner Kailash watching over Kalpa village, and Chitkul, India's last inhabited settlement before the Tibet border. We climb up over 3 nights (Chandigarh → Sarahan → Sangla) so altitude is gentle, base at the Banjara Camps glamping for Chitkul day-trip, and finish with the photogenic apple-orchard pause at Kalpa.",

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
        stops: "Murthal breakfast · Karnal lunch",
        pricePerPerson: 0,
      },
      {
        airline: "Self-drive Chandigarh → Sarahan",
        flightNo: "Day 2 · ~285 km",
        from: "Chandigarh",
        to: "Sarahan (Bhimakali Temple)",
        depart: "07:30",
        arrive: "13:30",
        duration: "6h on the road",
        stops: "Shimla coffee · Narkanda lunch",
        pricePerPerson: 0,
      },
      {
        airline: "Self-drive Sarahan → Sangla",
        flightNo: "Day 3 · ~95 km",
        from: "Sarahan",
        to: "Sangla (Banjara Camps)",
        depart: "09:00",
        arrive: "13:30",
        duration: "4h 30m on the road",
        stops: "Karcham gorge photo stop",
        pricePerPerson: 0,
      },
    ],
    return: [
      {
        airline: "Sangla → Kalpa",
        flightNo: "Day 5 · ~55 km",
        from: "Sangla",
        to: "Kalpa (via Reckong Peo)",
        depart: "10:00",
        arrive: "13:00",
        duration: "3h on the road",
        stops: "Reckong Peo for permits / fuel",
        pricePerPerson: 0,
      },
      {
        airline: "Self-drive Kalpa → Chandigarh",
        flightNo: "Day 6 · ~365 km",
        from: "Kalpa",
        to: "Chandigarh (overnight)",
        depart: "06:30",
        arrive: "16:30",
        duration: "10h on the road",
        stops: "Rampur breakfast · Shimla lunch",
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
      totalDays: 7,
      countNeeded: 2,
      vendor: "Own family vehicles · or Zoomcar Jaipur weekly rate",
      notes:
        "Picked. Innovas have the ground clearance and the AC for Kinnaur's narrow Hindustan-Tibet road. Two drivers per car helps for Day 6's 10-hour run back from Kalpa. AWD not needed in June, but check brake fluid before leaving Jaipur — Kinnaur has long downhills.",
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
        "~₹4,000/day all-in. Total km will be ~3,000 over 7 days — extra-km bill ~₹15,000. Insurance upgrade is non-negotiable for the Kinnaur stretch.",
    },
    {
      type: "chauffeur",
      vehicle: "Backup: 2× Innova Crysta with hill-trained drivers",
      capacity: 7,
      perDayPrice: 5500,
      totalDays: 7,
      countNeeded: 2,
      vendor: "Himachal Holidays / Kinnaur Tours (Shimla-based)",
      notes:
        "Strongly worth considering for this trip. The Hindustan-Tibet road (NH-5 past Rampur) has blind hairpins and falling-rock zones — a local driver who knows the route makes the long drives less stressful. Adds ~₹21,000 over self-drive.",
    },
  ],

  weather: [
    {
      heading: "Sweet-spot Kinnaur weather",
      body: "June 7-13 is the best window of the year for Kinnaur. Days are 18-25°C at Sangla, 14-20°C at Kalpa, and 10-18°C at Chitkul. Nights at Kalpa can drop to 8°C — pack a fleece. Skies mostly clear; Kinner Kailash often visible at sunrise.",
      tone: "good",
    },
    {
      heading: "Altitude is real but gentle",
      body: "Sarahan 2,200 m · Sangla 2,700 m · Kalpa 2,960 m · Chitkul 3,450 m. Climbing one day at a time gives time to acclimatize. Carry Diamox if your parents have heart/lung issues; consult their physician first. Hydrate generously.",
      tone: "warn",
    },
    {
      heading: "Hindustan-Tibet Road realities",
      body: "NH-5 from Rampur to Reckong Peo is narrow, has rockfall zones, and shares space with apple trucks. Drive in daylight only (no night driving past Narkanda). Roads are at peak condition in June — pre-monsoon, post snow-clearance.",
      tone: "info",
    },
    {
      heading: "Permits & connectivity",
      body: "Indian citizens: no permits needed for Kalpa or Chitkul. Foreign passport holders need an Inner Line Permit (we have none, so ignore). BSNL is the only reliable network in Kinnaur — Jio works at Sangla & Kalpa. Carry cash; ATMs are patchy past Rampur.",
      tone: "info",
    },
  ],

  totalEstimate: { low: 415000, high: 545000 },

  costBreakdown: [
    { label: "Fuel (~2,500 km × 2 cars × ₹12/km hill rates)", amount: 60000, note: "Hilly stretch from Shimla onwards burns more" },
    { label: "Tolls (NH-48, NH-152, NH-5 in HP)", amount: 22000, note: "Lesser-tolled than Mussoorie/Rishikesh side" },
    { label: "Hotel — Chandigarh (Days 1 & 6, 5 rooms × 2N)", amount: 75000, note: "JW Marriott @ ~₹7,500/room" },
    { label: "Hotel — Sarahan (Day 2, 5 rooms × 1N)", amount: 22500, note: "HPTDC Hotel Srikhand @ ~₹4,500/room" },
    { label: "Hotel — Sangla (Days 3 & 4, 5 rooms × 2N)", amount: 80000, note: "Banjara Camps Sangla @ ~₹8,000/room (luxury tents)" },
    { label: "Hotel — Kalpa (Day 5, 5 rooms × 1N)", amount: 32500, note: "The Apple Pie / Banjara Retreat @ ~₹6,500/room" },
    { label: "Meals (₹500/pax × 11 × 18)", amount: 99000, note: "Breakfast included at most hotels" },
    { label: "Activities (Sangla nature walk, Chitkul tea, Kalpa orchard visit)", amount: 12000 },
    { label: "Misc — tips, oxygen cans, travel insurance, buffer", amount: 25000 },
    { label: "Car rental (only if not using own cars)", amount: 56000, note: "Optional — ₹4,000/day × 2 × 7" },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Chandigarh",
      city: "Chandigarh",
      summary:
        "Same Day 1 as the Palampur plan. Leave 06:00, paranthas at Murthal, smooth NH-48 → NH-152 highway to Chandigarh by 14:30. Easy evening: Sukhna Lake walk or Sector 17. Early dinner — tomorrow's the climb into the hills.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Jaipur (home)",
        to: "Chandigarh",
        distanceKm: 520,
        durationHours: 8.5,
        notes: "Excellent 6-lane highway. Stops: Murthal (lunch), Karnal (fuel), Ambala (toilet). Leave before 6am to clear Delhi-NCR before traffic.",
      },
      attractions: [
        {
          name: "Sukhdev Dhaba, Murthal",
          brief:
            "The Punjabi highway institution since 1957. Stuffed paranthas with ghee, lassi, fresh dahi. Open 24×7. Halfway between Jaipur and Chandigarh — your natural lunch stop.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhdev Dhaba, Murthal",
        },
        {
          name: "Sukhna Lake walk",
          brief:
            "Man-made reservoir at the foot of the Shivaliks (1958, Corbusier's design). 3 km level promenade — perfect post-drive leg-stretch for the parents.",
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
        notes: "Sector 35, lift to underground parking — secure for both Innovas. Early breakfast at 06:30 (request the night before).",
      },
      meals: "Breakfast on the road · Lunch at Sukhdev's · Dinner at hotel · Early sleep",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Chandigarh → Shimla → Sarahan",
      city: "Sarahan",
      summary:
        "Climb out of the plains. Smooth highway to Shimla (4 hr), tea break with a view at Mall Road, then onward past Narkanda (apple country) to Sarahan — a quiet pilgrim village at 2,200 m best known for the wooden pagoda-style Bhimakali Temple. Sunset aarti at the temple, dinner at the HPTDC.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1600",
      transfer: {
        from: "Chandigarh",
        to: "Sarahan",
        distanceKm: 285,
        durationHours: 6,
        notes: "Highway to Shimla → narrower NH-5 onwards. Smooth, paved, gentle climbs. Stop at Narkanda (2,700 m) for lunch — apple orchards stretch as far as you can see.",
      },
      attractions: [
        {
          name: "Bhimakali Temple, Sarahan",
          brief:
            "A 1,500-year-old wooden pagoda-style Shakti Peetha — one of the 51 across India where parts of Sati's body fell. Multi-tiered, slate-roofed, dramatic against the Srikhand Mahadev range. Sunset aarti at 7pm is short and atmospheric.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Bhimakali Temple, Sarahan",
        },
        {
          name: "Pheasantry walk",
          brief:
            "Government-run pheasant breeding centre just behind the temple — Western Tragopans (Himachal's state bird) and Cheer Pheasants. 20-min walk, single-level paths.",
          photo:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Pheasantry Sarahan",
        },
        {
          name: "Narkanda lunch stop (en route)",
          brief:
            "At 2,700 m — sweeping apple orchards, a tiny ski hill in winter, and Hatu Peak views. Café Hatu serves Himachali siddu and trout with a Sutlej-valley view.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Café Hatu, Narkanda",
        },
      ],
      hotel: {
        name: "HPTDC Hotel Srikhand, Sarahan",
        category: "3★ government hill hotel",
        pricePerNight: 4500,
        roomsNeeded: 5,
        notes: "Run by Himachal Tourism. Basic but spotless rooms with valley-view balconies — perched right next to the Bhimakali temple. The only properly heated option in Sarahan. Book on hptdc.in.",
      },
      meals: "Breakfast at JW · Lunch at Café Hatu (Narkanda) · Dinner at the HPTDC",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Sarahan → Karcham → Sangla valley",
      city: "Sangla",
      summary:
        "A short, very pretty 4.5-hour drive. Descend to the Sutlej, follow it east through the apple-tree-lined Hindustan-Tibet Road, turn south at Karcham into the Baspa valley — and you're in Sangla. Check into the Banjara Camps glamping tents on the river. Lazy evening, bonfire dinner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Valley.jpg?width=1600",
      transfer: {
        from: "Sarahan",
        to: "Sangla (Banjara Camps)",
        distanceKm: 95,
        durationHours: 4.5,
        notes: "NH-5 along the Sutlej to Karcham — beautiful gorge. Right turn at Karcham, climb into the Baspa valley — apples and pines suddenly replace barren slopes.",
      },
      attractions: [
        {
          name: "Sutlej Gorge & Karcham Dam",
          brief:
            "The Sutlej here squeezes through a deep gorge with a hydroelectric dam straddling the river — engineering against geology. Photo stop, no walking.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Karcham Dam, Kinnaur",
        },
        {
          name: "Kamru Fort",
          brief:
            "5-storey wooden fort village above Sangla — once the seat of Bushahr kings, still has a 15th-century Kamakhya Devi temple at the top. Worth a 30-min poke-around. Some steep steps — skip the top for the elders.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Kinnaur.jpg?width=1200",
          duration: "1.5 hr",
          mapsQuery: "Kamru Fort, Sangla",
        },
        {
          name: "Baspa river walk",
          brief:
            "From the camp, walk 10 min upstream to a wooden bridge over the milky-blue Baspa. Snowmelt is at full power in June — the river roars. Easy single-level path.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Valley.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Banjara Camps & Retreat, Sangla",
        category: "Luxury glamping",
        pricePerNight: 8000,
        roomsNeeded: 5,
        notes: "Premium tented rooms on the bank of the Baspa — proper beds, attached bathrooms with hot showers, electric blankets. Family-run since 1999, the best-known property in Kinnaur. Books on banjaracamps.com or direct.",
      },
      meals: "Breakfast at HPTDC · Lunch at Karcham dhaba · Bonfire dinner at the camp",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Chitkul · last village before Tibet",
      city: "Chitkul",
      summary:
        "The big day. 23 km / 1 hour up the Baspa valley to Chitkul (3,450 m) — the last inhabited Indian village on the old Indo-Tibet trade route, surrounded by glaciers. Wood-shingled houses, prayer flags, a 500-year-old Mathi temple, and the Hindustan ka Aakhri Dhaba ('India's last dhaba'). Back to Sangla by sunset.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1600",
      transfer: {
        from: "Sangla",
        to: "Chitkul (and back)",
        distanceKm: 46,
        durationHours: 2.5,
        notes: "1 hr each way on a paved single-lane road right along the Baspa. Mostly empty traffic — apple trucks early morning, otherwise just goats and grazing yaks.",
      },
      warning: "Chitkul is at 3,450 m. Anyone with heart/lung concerns: stay 2 hours max, walk slowly, no big meals beforehand. Carry oxygen cans (₹350 at any roadside shop on the way). Drink water generously.",
      attractions: [
        {
          name: "Chitkul village",
          brief:
            "Last inhabited Indian village before the McMahon Line. ~300 residents, wooden-shingle roofs, hand-built prayer wheels in every alley. Slow walk through is 30 min; the village is flat. The river beach below is wadeable in June.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1200",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Chitkul Village, Himachal Pradesh",
        },
        {
          name: "Mathi Temple",
          brief:
            "500-year-old wooden temple to the local goddess Mathi. Three connected wooden shrines, slate roofs, intricately carved doors. Don't touch the inner sanctum — locals are particular.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Mathi Mata Mandir, Chitkul",
        },
        {
          name: "Hindustan ka Aakhri Dhaba",
          brief:
            "'India's last dhaba'. Located at the road's end before the army checkpost. Maggi, omelette, masala chai — perfect after the drive. Photo with the signboard is mandatory.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Hindustan Ka Last Dhaba Chitkul",
        },
        {
          name: "Baspa river beach",
          brief:
            "5-min walk below the village — wide pebbled beach by the milky-blue Baspa. Sit, dip your feet (water is ICE), watch the snow line on the peaks. Nature's silence is total.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Sangla_Valley.jpg?width=1200",
          duration: "1 hr",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "Banjara Camps & Retreat, Sangla",
        category: "Luxury glamping",
        pricePerNight: 8000,
        roomsNeeded: 5,
      },
      meals: "Breakfast at the camp · Lunch at Hindustan ka Aakhri Dhaba · Dinner back at Banjara",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Sangla → Kalpa · Kinner Kailash views",
      city: "Kalpa",
      summary:
        "Easy 3-hour drive back down the Baspa, across Karcham, and up the other side to Kalpa (2,960 m). The hotel rooms face Kinner Kailash (6,050 m) — one of Shiva's mythic seats. Afternoon: orchard walk in Roghi village, sunset on the hotel terrace.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Kalpa%2C_Himachal_Pradesh.jpg?width=1600",
      transfer: {
        from: "Sangla",
        to: "Kalpa (via Reckong Peo)",
        distanceKm: 55,
        durationHours: 3,
        notes: "Down Baspa, across Karcham, up to Reckong Peo (district HQ, fuel & permits if needed), then 12 km north to Kalpa. Smooth all the way.",
      },
      attractions: [
        {
          name: "Kinner Kailash viewpoint",
          brief:
            "From the hotel terrace, Kinner Kailash (6,050 m) and the Jorkanden peak (6,473 m) dominate the skyline. Best at sunrise — golden minute. The 79-ft 'Shivling' rock at the peak is one of Hindu mythology's Kailash seats.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1200",
          duration: "1 hr (drop-in)",
          elderlyFriendly: true,
          mapsQuery: "Kinner Kailash View Point, Kalpa",
        },
        {
          name: "Roghi village & 'Suicide Point'",
          brief:
            "5 km from Kalpa — a 500-year-old village with intricately carved wooden houses. The road there passes 'Suicide Point' — a sheer 1,000-ft drop with a chain-link fence. Don't worry; viewing is from a safe terrace.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kalpa%2C_Himachal_Pradesh.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Roghi Village, Kalpa",
        },
        {
          name: "Hu-Bu-Lan-Kar Monastery",
          brief:
            "Tiny 15th-century Buddhist monastery in central Kalpa village — colourful murals, intimate prayer hall, 100% no tourists.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Hu-Bu-Lan-Kar Monastery, Kalpa",
        },
        {
          name: "Apple orchard walk",
          brief:
            "Kalpa is in apple country — mid-June is fruit-set season, not picking, but the orchards in bloom are stunning. Many homestays let you stroll their orchards for free.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1200",
          duration: "45 min",
          elderlyFriendly: true,
        },
      ],
      hotel: {
        name: "The Apple Pie Hotel, Kalpa",
        category: "Boutique 3★ mountain view",
        pricePerNight: 6500,
        roomsNeeded: 5,
        notes: "Family-run, every room faces Kinner Kailash, rooftop café. Beds with extra blankets — Kalpa nights are cold even in June. Book on Booking.com or direct.",
      },
      meals: "Breakfast at Banjara · Lunch on the road (Reckong Peo) · Dinner at Apple Pie",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Kalpa → Chandigarh · the long descent",
      city: "Chandigarh",
      summary:
        "The hardest driving day of the trip — 10 hours descending the Sutlej, through Rampur, past Narkanda, Shimla, and back to Chandigarh. Start early (06:30). Two stops only: Rampur for chai, Shimla for lunch. Arrive Chandigarh by 16:30 for hot showers and an early dinner.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Sutlej_River.jpg?width=1600",
      transfer: {
        from: "Kalpa",
        to: "Chandigarh",
        distanceKm: 365,
        durationHours: 10,
        notes: "Same NH-5 going backwards. The Kalpa → Rampur stretch (3 hr) is the only nerve-y bit; once you hit Shimla highway it's smooth sailing. Drive in daylight only.",
      },
      warning: "10 hours of mostly hill driving. Two drivers per car alternating every 2 hours is mandatory. Eat light at lunch — winding road + heavy meal = motion sickness. Carry Avomine for the elders.",
      attractions: [
        {
          name: "Sunrise from the hotel terrace",
          brief:
            "Before you leave. Kinner Kailash turns gold for about 10 minutes around 5:30 am. The single best memory of the trip — don't sleep through it.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinner_Kailash.jpg?width=1200",
          duration: "30 min",
          elderlyFriendly: true,
        },
        {
          name: "Rampur breakfast",
          brief:
            "Mid-sized Sutlej-valley town, 3 hours down from Kalpa. Halai's Café for hot paranthas, fresh dahi, masala chai. Clean restrooms (rare on this road).",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Rampur, Himachal Pradesh",
        },
        {
          name: "Shimla lunch stop",
          brief:
            "Park at Lift Road, walk 10 min to The Mall. Lunch at Café Sol (Italian-Himachali) or Indian Coffee House (since 1956, an institution). 90-min stop.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kinnaur.jpg?width=1200",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "The Mall Shimla",
        },
      ],
      hotel: {
        name: "JW Marriott Chandigarh",
        category: "5★ city",
        pricePerNight: 7500,
        roomsNeeded: 5,
        notes: "Same hotel as Day 1. Order an early dinner — everyone will be tired.",
      },
      meals: "Pre-dawn coffee at the hotel · Breakfast Rampur · Lunch Shimla · Dinner at JW",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Chandigarh → Jaipur · home",
      city: "Jaipur",
      summary:
        "Early start (07:00). 8.5-hour drive home down NH-152 → NH-48. Lunch at Karnal Haveli. Home in Jaipur by sunset.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Chandigarh",
        to: "Jaipur (home)",
        distanceKm: 520,
        durationHours: 8.5,
        notes: "Same highway, mirrored. Leave by 7am to clear Delhi-NCR before evening rush.",
      },
      attractions: [
        {
          name: "Karnal Haveli rest-stop",
          brief:
            "Heritage-style rest stop on NH-152 — pleasant garden seating, separate clean restrooms, full Indian + Continental menu. The natural lunch break.",
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
