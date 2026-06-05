import type { Plan } from "../types";

export const lahaul: Plan = {
  slug: "lahaul",
  name: "Lahaul Loop · Dobhi → Jispa → Shinku La → Manali",
  tagline: "Across the Atal Tunnel into the high Bhaga valley — and a run at the Shinku La road",
  startDate: "2026-06-07",
  endDate: "2026-06-13",
  travellers: 11,
  emoji: "🏔️",
  accentFrom: "#0c4a6e",
  accentTo: "#7dd3fc",
  heroImage:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Lahaul_Valley.jpg?width=1600",
  description:
    "The final plan — 7 days, self-drive from Jaipur. Two warm-up nights getting to the mountains (Chandigarh, then Prini on the edge of Manali), then over the 9 km Atal Tunnel into Lahaul to sleep at Jispa (3,200 m) on the Bhaga river. A big day up toward Shinku La — the under-construction road to Zanskar that tops out above 5,000 m — then drop back across the tunnel for two nights in Manali before the long highway run home via Chandigarh. High, cold, spectacular; paced with hard-day warnings because the altitude and the road are real.",

  flights: {
    outbound: [
      {
        airline: "Self-drive from Jaipur",
        flightNo: "Day 1 · Sun · ~516 km",
        from: "Jaipur (home)",
        to: "Chandigarh (overnight)",
        depart: "06:00",
        arrive: "14:30",
        duration: "~8h on the road",
        stops: "NH-152D Trans-Haryana expressway · bypasses Delhi",
        pricePerPerson: 0,
      },
      {
        airline: "Chandigarh → Dobhi (Shasha, Prini)",
        flightNo: "Day 2 · Mon · ~305 km",
        from: "Chandigarh",
        to: "Shasha Boutique Stays, Prini (Manali)",
        depart: "06:30",
        arrive: "15:00",
        duration: "~8.5h on the road",
        stops: "Kiratpur–Manali expressway · Mandi · Pandoh · lunch en route",
        pricePerPerson: 0,
      },
      {
        airline: "Prini → Jispa (over the Atal Tunnel)",
        flightNo: "Day 3 · Tue · ~105 km",
        from: "Prini (Manali)",
        to: "Jispa (Bhaga valley, 3,200 m)",
        depart: "08:30",
        arrive: "13:00",
        duration: "~4.5h on the road",
        stops: "Manali · Atal Tunnel · Sissu · Tandi · Keylong",
        pricePerPerson: 0,
      },
      {
        airline: "Jispa → Shinku La → Manali",
        flightNo: "Day 4 · Wed · ~220 km round",
        from: "Jispa",
        to: "Manali (via Darcha · Shinku La · Atal Tunnel)",
        depart: "05:30",
        arrive: "17:30",
        duration: "~10h — the hard day",
        stops: "Darcha · run up toward Shinku La · back · Atal Tunnel",
        pricePerPerson: 0,
      },
    ],
    return: [
      {
        airline: "Manali (rest day — no long drive)",
        flightNo: "Day 5 · Thu",
        from: "Manali",
        to: "Manali (second night)",
        depart: "—",
        arrive: "—",
        duration: "Local sightseeing only",
        stops: "Old Manali · Hadimba · Solang valley",
        pricePerPerson: 0,
      },
      {
        airline: "Return leg 1 — Manali → Chandigarh",
        flightNo: "Day 6 · Fri · ~310 km",
        from: "Manali",
        to: "Chandigarh",
        depart: "06:00",
        arrive: "14:30",
        duration: "~8.5h on the road",
        stops: "Kullu · Mandi · Kiratpur expressway · lunch en route",
        pricePerPerson: 0,
      },
      {
        airline: "Return leg 2 — Chandigarh → Jaipur",
        flightNo: "Day 7 · Sat · ~516 km",
        from: "Chandigarh",
        to: "Jaipur (home)",
        depart: "07:00",
        arrive: "15:00",
        duration: "~8h on the road",
        stops: "NH-152D Trans-Haryana expressway",
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
      vendor: "Own family vehicles · or Zoomcar / Avis Jaipur weekly rate",
      notes:
        "Fine for everything EXCEPT the last few km to Shinku La. Two drivers per car, alternating every 2 hours, are mandatory for the 8-hour Chandigarh↔Manali legs and the long Shinku La day. Service brakes before leaving Jaipur — the Mandi–Kullu downhills and the Lahaul descents are hard on pads. Carry chains is unnecessary in June, but a tow strap and a spare fan-belt are smart in Lahaul.",
    },
    {
      type: "chauffeur",
      vehicle: "Local 4×4 (Thar / Gypsy / Scorpio 4WD) — Shinku La day only",
      capacity: 6,
      perDayPrice: 8000,
      totalDays: 1,
      countNeeded: 2,
      vendor: "Hire in Jispa / Keylong for the day",
      notes:
        "Strongly recommended for Day 4. As of mid-2026 the Darcha–Shinku La road is broken and snowmelt-crossed near the top, and authorities turn back 2WD SUVs before the pass. A local 4×4 with a driver who knows the stream crossings gets you higher safely and means your own Innovas aren't beaten up at 5,000 m. ~₹8,000/vehicle for the out-and-back.",
    },
    {
      type: "chauffeur",
      vehicle: "2× Innova Crysta with Himachal hill-trained drivers (whole trip)",
      capacity: 7,
      perDayPrice: 5500,
      totalDays: 7,
      countNeeded: 2,
      vendor: "Manali / Chandigarh operators",
      notes:
        "The low-stress option for a multi-generational group. Hill drivers handle the Atal Tunnel approach, the Lahaul switchbacks and the Shinku La gravel far better than a first-timer. Adds ~₹77,000 over self-drive but removes the two riskiest variables: night fatigue on the highway and high-altitude driving.",
    },
  ],

  weather: [
    {
      heading: "June is the window — but it's a cold-at-night trip",
      body:
        "Chandigarh bakes (35–40°C, humid). The moment you cross the Atal Tunnel it flips: Dobhi/Manali 22–28°C days, Jispa 15–20°C days but 0–7°C nights (can dip below freezing), and Shinku La is sub-zero with wind even in June sun. Pack as if for two trips — light cottons for the plains, a proper down layer + gloves for Lahaul and the pass.",
      tone: "good",
    },
    {
      heading: "Altitude — this one is high and fast",
      body:
        "Day 1 Chandigarh 350 m → Day 2 Dobhi ~1,900 m → Day 3 Jispa 3,200 m → Day 4 up toward Shinku La ~5,000 m and back. The Jispa night is your acclimatization before the pass — drink water, eat light, no alcohol. The elders and kids should consider Diamox prophylactically (ask your doctor) and carry a pulse oximeter + oxygen cans (~₹350 in Keylong/Jispa).",
      tone: "warn",
    },
    {
      heading: "Day 4 is genuinely hard — read this",
      body:
        "Jispa → up toward Shinku La (5,091 m / 16,700 ft) → back → Manali is ~10 hours, much of it on a half-built 4×4 track that ends with a 3,000 m descent. Be off the high ground by early afternoon — weather on the pass turns fast. Honest call: if anyone shows AMS symptoms, turn around early; you can spend time in the snow well below the top and still have a spectacular day. Consider keeping a second Jispa night and splitting the pass and the Manali drive across two days.",
      tone: "warn",
    },
    {
      heading: "Roads & access (June 2026)",
      body:
        "The Atal Tunnel (9.02 km) is open year-round, so Lahaul is reachable without the old Rohtang grind. Shinku La normally clears by early/mid-April and is open in June, but the BRO tunnel under it (target 2028) means active construction and 4×4-only restrictions near the top — recheck the Discover Leh Ladakh / BRO road status a few days before you travel.",
      tone: "info",
    },
    {
      heading: "Practical risks to know",
      body:
        "(1) Snowmelt swells the Chandra and Bhaga rivers and the Shinku La approach streams — they run lower in the morning, so cross early. (2) No reliable fuel past Tandi — top up both cars at the Tandi pump (last fuel before Leh). (3) Cell signal: BSNL/Jio patchy in Lahaul, nothing near the pass. (4) Carry ₹40,000 cash — few ATMs past Manali. (5) Chandigarh→Manali and back are 8h+ mountain days; never drive them after dark.",
      tone: "warn",
    },
  ],

  totalEstimate: { low: 300000, high: 390000 },

  costBreakdown: [
    { label: "Fuel (~2,400 km × 2 cars × ₹12/km hill rates)", amount: 57600, note: "Hill stretches drink more than the expressway" },
    { label: "Tolls (NH-152D + Kiratpur–Manali expressway, both ways)", amount: 12000 },
    { label: "Hotel — Chandigarh (Days 1 & 6, 5 rooms × 2N)", amount: 28000, note: "Top pick Treebo JD Residency Mohali @ ~₹2,800/room" },
    { label: "Stay — Prini/Manali (Day 2, Shasha Boutique Stays, ~3 units)", amount: 16500, note: "Airbnb · ~₹5,500/unit (each sleeps ~4)" },
    { label: "Hotel — Jispa (Day 3, Zhe Yul, 5 rooms × 1N)", amount: 21000, note: "@ ~₹4,200/room on the Bhaga river" },
    { label: "Hotel — Manali (Days 4-5, 5 rooms × 2N)", amount: 45000, note: "Snow Valley Resorts / similar @ ~₹4,500/room" },
    { label: "Local 4×4 hire — Shinku La day (2 vehicles)", amount: 16000, note: "Day 4 out-and-back; protects your own cars at altitude" },
    { label: "Meals (₹500/pax × 11 × ~16)", amount: 88000, note: "Breakfast usually included; ~16 lunches/dinners" },
    { label: "Activities (Atal Tunnel, Solang, Sissu, Shinku La)", amount: 10000 },
    { label: "Misc — Diamox/oxygen, tips, insurance, buffer", amount: 30000 },
    { label: "Car rental (only if not using own cars)", amount: 56000, note: "Optional — ₹4,000/day × 2 × 7" },
  ],

  days: [
    {
      index: 1,
      date: "2026-06-07",
      title: "Jaipur → Chandigarh",
      city: "Chandigarh",
      summary:
        "Sunday. The easy first leg — 06:00 out of Jaipur, onto the NH-152D Trans-Haryana expressway that skirts Delhi entirely, and into Chandigarh by mid-afternoon. The Chandigarh hotel isn't locked yet, so the cards below are 3–4 options under ₹3,000/room, chosen with tomorrow's early run toward Manali in mind. Quiet evening, early dinner, early night.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Jaipur",
        to: "Chandigarh",
        distanceKm: 516,
        durationHours: 8,
        notes: "Mostly the 6-lane NH-152D expressway (Ambala–Narnaul) — fast and Delhi-free. Leave by 6am to keep it an 8-hour day. Altitude 350 m, no concerns. June heat 35–40°C — keep water and the AC topped up.",
      },
      attractions: [
        {
          name: "Treebo JD Residency, Mohali — top pick",
          brief:
            "Branded budget 3★ in Mohali Sector 59, ~₹2,000–2,950/room. Free breakfast, free parking for both SUVs, ~30 rooms (absorbs 5). Sits on the Mohali–Kurali corridor — you roll straight onto the Manali road at dawn with zero city crossing. My recommendation.",
          photo:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
          duration: "Stay",
          elderlyFriendly: true,
          mapsQuery: "Treebo JD Residency Mohali Sector 59",
        },
        {
          name: "The Club House by CheckIn, Kharar — fastest exit",
          brief:
            "3★ in Kharar/Mohali, ~₹2,200–3,000/room. Free valet parking, complimentary breakfast, family-friendly. Physically the closest of the four to where you merge onto the Kurali bypass for Manali — the quickest getaway next morning.",
          photo:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
          duration: "Stay",
          elderlyFriendly: true,
          mapsQuery: "The Club House Hotel Kharar Mohali",
        },
        {
          name: "Hometel Chandigarh (Sarovar) — most comfortable",
          brief:
            "The nicest room of the set — Sarovar-group 4★ feel near Elante Mall, ~₹2,900/room, covered parking, three dining outlets. Trade-off: it's on the south-east (Elante) side, so the Manali morning means crossing town. Pick this if comfort beats the fast exit.",
          photo:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
          duration: "Stay",
          elderlyFriendly: true,
          mapsQuery: "Hometel Chandigarh Industrial Area Phase 1",
        },
        {
          name: "Hotel Sunbeam Premium, Sector 22 — central",
          brief:
            "Long-established, right at ₹3,000/room, central to Sector 17/22 dining — good if you want a proper group dinner in town. Slowest northbound exit (you cross the city in morning traffic); confirm parking for two SUVs.",
          photo:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
          duration: "Stay",
          elderlyFriendly: true,
          mapsQuery: "Hotel Sunbeam Premium Sector 22 Chandigarh",
        },
        {
          name: "Sukhna Lake stroll (if you arrive with light)",
          brief:
            "Man-made lake at the foot of the Shivaliks — a flat 3 km promenade to stretch road-stiff legs before dinner. Right in the city, fully elder-friendly.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhna Lake, Chandigarh",
        },
      ],
      hotel: {
        name: "Chandigarh — pick one of these (not finalised)",
        category: "Budget · all ≤ ₹3,000/room · Altitude 350 m",
        pricePerNight: 2800,
        roomsNeeded: 5,
        bookingUrl: "https://www.google.com/maps/search/?api=1&query=Treebo%20JD%20Residency%20Mohali%20Sector%2059",
        notes:
          "Four options below, all under ₹3k. Recommended: Treebo JD Residency, Mohali (~₹2,800) — branded, free parking, and on the Mohali–Kurali corridor for a dawn Manali start. Alternatives: The Club House, Kharar (closest to the bypass); Hometel near Elante (nicest rooms, but wrong side for the morning run); Hotel Sunbeam Sector 22 (central for a group dinner). For 11 of us, call ahead and block 5 rooms — beats portal rates and locks parking. Tap any card above for its map.",
      },
      meals: "Breakfast at home · Lunch on the expressway (Karnal/Ambala) · Dinner in Chandigarh",
    },
    {
      index: 2,
      date: "2026-06-08",
      title: "Chandigarh → Dobhi (below Manali)",
      city: "Dobhi",
      summary:
        "Monday. The day you reach the mountains. Onto the Kiratpur–Manali expressway, up the Beas through Mandi and the Pandoh dam into the Kullu valley. Tonight's stay — Shasha Boutique Stays — sits in Prini, a quiet apple-orchard village about 3 km past Manali Mall Road (you may hear the area loosely called Dobhi). A calm, soft-altitude night before crossing into Lahaul tomorrow.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Manali.jpg?width=1600",
      transfer: {
        from: "Chandigarh",
        to: "Prini, Manali",
        distanceKm: 305,
        durationHours: 8.5,
        notes: "Fast on the Kiratpur–Manali expressway as far as Mandi, then the slower, winding Mandi–Pandoh–Kullu river road through Manali to Prini (the stay is ~3 km past Mall Road). Altitude climbs from 350 m to ~1,950 m — gentle. Leave by 6:30; aim to be off the Kullu road before evening traffic.",
      },
      attractions: [
        {
          name: "Shasha Boutique Stays (tonight's stay)",
          brief:
            "Boutique B&B near Manali, 4.8★ on Airbnb. Units sleep ~4 (2 bedrooms / 2 baths each) — we'll need about three units for the group. Calm, homely base after a long drive. Tap for the map; book the units together on Airbnb.",
          photo:
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1529625513852095824/original/501ea815-213f-4be2-be54-aaf5af0f58ad.jpeg?im_w=720",
          duration: "Stay",
          elderlyFriendly: true,
          mapsQuery: "Shasha Boutique Stays, Prini, Manali",
        },
        {
          name: "Pandoh Dam viewpoint (en route)",
          brief:
            "The turquoise Beas reservoir on the Mandi–Kullu road — a natural leg-stretch and photo stop roughly two-thirds of the way. Stay on the marked viewpoints; no swimming.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "20 min",
          elderlyFriendly: true,
          mapsQuery: "Pandoh Dam, Himachal Pradesh",
        },
        {
          name: "Prini village & the Beas",
          brief:
            "The last stretch into Prini runs beside the Beas through apple and pear country, with Naggar Castle and the old Manali on the slopes around. June is fruit-set season — green orchards, white water, deodar. Easy riverside walks near the stay in the evening.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Manali_City.jpg?width=1600",
          duration: "Evening",
          elderlyFriendly: true,
          mapsQuery: "Prini, Manali, Himachal Pradesh",
        },
      ],
      hotel: {
        name: "Shasha Boutique Stays, Prini · Manali (Airbnb)",
        category: "Boutique B&B · 4.8★ · Altitude ~1,950 m",
        pricePerNight: 5500,
        roomsNeeded: 3,
        bookingUrl: "https://www.airbnb.co.in/rooms/1529625513852095824",
        notes:
          "Multi-unit boutique B&B in Prini, ~3 km past Manali Mall Road (VPO Prini) — NOT the Dobhi 20 km south near Naggar, so navigate to 'Shasha Boutique Stays, Prini, Manali' (the bare word 'Dobhi' points to a different town entirely). Each unit is 2BR/2bath and sleeps ~4, so the group needs ~3 units (~₹5,500/unit). 4.8★ host, breakfast available. Book all units together and message the host your arrival time for the final lane directions.",
      },
      meals: "Breakfast at the Chandigarh hotel · Lunch at Mandi/Pandoh · Dinner at the stay",
    },
    {
      index: 3,
      date: "2026-06-09",
      title: "Dobhi → Jispa (over the Atal Tunnel)",
      city: "Jispa",
      summary:
        "Tuesday. The short, jaw-dropping leg that changes worlds. Through Manali and into the 9 km Atal Tunnel — you go in to green Kullu and come out into raw, brown-and-white Lahaul. Down to Sissu, along the Chandra to Tandi (where it meets the Bhaga), then up the Bhaga through Keylong to Jispa at 3,200 m. Short driving day on purpose — tonight is about acclimatizing for the pass.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Lahaul_Valley.jpg?width=1600",
      transfer: {
        from: "Prini, Manali",
        to: "Jispa",
        distanceKm: 105,
        durationHours: 4.5,
        notes: "Prini → Manali → Atal Tunnel south portal (~28 km), through the tunnel to Sissu, then Sissu → Tandi → Keylong → Jispa. Altitude rises to 3,200 m — go slow, hydrate, light lunch. Fill BOTH cars at the Tandi fuel pump: it's the last reliable fuel before Leh.",
      },
      attractions: [
        {
          name: "Atal Tunnel",
          brief:
            "At 9.02 km, one of the world's longest high-altitude road tunnels (10,000 ft). Eight minutes of cool dark, and you exit into a completely different landscape. Open year-round — the reason this whole trip works without the old Rohtang ordeal.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Atal_Tunnel.jpg?width=1600",
          duration: "Drive-through",
          elderlyFriendly: true,
          mapsQuery: "Atal Tunnel South Portal",
        },
        {
          name: "Sissu — waterfall & lake",
          brief:
            "First stop in Lahaul: a tall waterfall across the Chandra and the calm Sissu (Ghepan) lake, with snow peaks behind. Flat, easy ground for a first stretch at altitude. Great chai stalls.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Chandra_river.jpg?width=1600",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Sissu, Lahaul",
        },
        {
          name: "Keylong & the Bhaga valley",
          brief:
            "Lahaul's quiet district HQ, terraced on the green Bhaga slopes with monasteries (Kardang, Shashur) on the hills above. Last proper market — pick up oxygen cans and any layers before Jispa.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Lahaul.jpg?width=1600",
          duration: "45 min",
          elderlyFriendly: true,
          mapsQuery: "Keylong, Himachal Pradesh",
        },
        {
          name: "Jispa & the Bhaga river (tonight's stay)",
          brief:
            "A handful of guest houses strung along the Bhaga at 3,200 m, ringed by snow ridges. Wide pebbled riverbanks for a gentle evening walk. Cold the moment the sun drops — this is your acclimatization night.",
          photo:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ab/37/49/jispa-bhag-river.jpg?w=900&h=500&s=1",
          duration: "Evening",
          elderlyFriendly: true,
          mapsQuery: "Zhe Yul, Jispa",
        },
      ],
      hotel: {
        name: "Hotel Zhe Yul, Jispa",
        category: "Riverside guest house · Altitude 3,200 m",
        pricePerNight: 4200,
        roomsNeeded: 5,
        bookingUrl: "https://www.tripadvisor.in/Hotel_Review-g1156023-d33259705-Reviews-Zhe_Yul-Jispa_Lahaul_and_Spiti_District_Himachal_Pradesh.html",
        notes:
          "On the Manali–Leh highway at Jispa, by the Bhaga river — restaurant, lounge, free parking, ~₹4,200/room. A newer place (Tripadvisor 'Travellers' Choice'), so confirm 5 rooms and a hot-water window when you book; nights here drop near freezing. Extra blankets are worth asking for. Maps: search 'Zhe Yul, Jispa'.",
      },
      meals: "Breakfast at the stay · Lunch at Sissu/Keylong · Dinner at Zhe Yul",
    },
    {
      index: 4,
      date: "2026-06-10",
      title: "Jispa → Shinku La → Manali (the big day)",
      city: "Manali",
      summary:
        "Wednesday. Check out before dawn. Short hop to Darcha, where the Zanskar road branches off, then climb the half-built track toward Shinku La — the pass to Padum that tops 5,000 m, soon to carry the world's highest road tunnel. Spend time in the snow and thin air, turn around, and drive back across the Atal Tunnel to Manali for the night. Long, high, unforgettable — and demanding. Read the warning.",
      heroImage:
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Jispa",
        to: "Manali",
        distanceKm: 220,
        durationHours: 10,
        notes: "Jispa → Darcha ~8 km. Darcha → up toward Shinku La is rough, 4×4-favoured, with snowmelt streams — go as high as conditions and the group allow, not necessarily the very top. Then back to Jispa and on to Manali (~95 km / 4h via the tunnel). Be off the high ground by early afternoon.",
      },
      warning:
        "The hardest day of the trip. ~10 hours, a 5,000 m high point, a half-built road, and a 3,000 m descent at the end. Take a local 4×4 for the pass section, start at 05:30, and DO NOT push to the very top if anyone has a headache, nausea or breathlessness — turning around early is the right call and you'll still have spent time in deep snow. If the group is tired, keep a second Jispa night and split the pass and the Manali drive over two days. Recheck BRO/Discover Leh Ladakh road status before you go.",
      attractions: [
        {
          name: "Darcha & the Zanskar turn-off",
          brief:
            "Where the Manali–Leh highway and the new Darcha–Padum (Zanskar) road part ways. A bridge, a few dhabas, the last tea before the climb. Snow walls line the road well into June.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Lahaul_Valley.jpg?width=1600",
          duration: "30 min",
          elderlyFriendly: true,
          mapsQuery: "Darcha, Lahaul",
        },
        {
          name: "Up toward Shinku La (5,091 m)",
          brief:
            "The climb toward the Himachal–Ladakh boundary — raw moraine, snowfields, and the BRO tunnel works that will one day make this an all-weather road to Zanskar. Stop where it feels right; the snow and the silence are the experience, not a summit photo. Bitterly cold and windy even in sun.",
          photo:
            "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1600&q=80",
          duration: "2-3 hr",
          elderlyFriendly: false,
          permitRequired: false,
          mapsQuery: "Shinku La Pass",
        },
        {
          name: "Suraj Tal & high-valley views (region)",
          brief:
            "The Lahaul high country is all glacial lakes and snow ridges. Whether you go far up the Shinku La road or linger near Darcha, the scenery — milky rivers, ice walls, an empty sky — is the same kind of spectacular.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Suraj_Tal.jpg?width=1600",
          duration: "Stops",
          elderlyFriendly: true,
          mapsQuery: "Suraj Tal, Himachal Pradesh",
        },
        {
          name: "Atal Tunnel & down to Manali",
          brief:
            "Late afternoon, retrace to Tandi, back over the Atal Tunnel, and drop into green Manali — warmth, oxygen, and a hot dinner after a day at altitude. The descent feels like coming back to life.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Manali.jpg?width=1600",
          duration: "Drive",
          elderlyFriendly: true,
          mapsQuery: "Manali, Himachal Pradesh",
        },
      ],
      hotel: {
        name: "Snow Valley Resorts, Manali (suggested)",
        category: "Mid-range hill resort · Altitude 2,050 m",
        pricePerNight: 4500,
        roomsNeeded: 5,
        notes:
          "Manali stay isn't fixed — Snow Valley Resorts (Log Huts area) is a reliable, group-friendly mid-range pick at ~₹4,500/room with parking and valley views; comparable options are Manuallaya, Hotel Sangam or any Old Manali boutique. After the Shinku La day you'll want warmth, hot water and an easy dinner — book somewhere with in-house food. Two nights here.",
      },
      meals: "Pre-dawn tea at Jispa · Packed lunch / dhaba near Darcha · Hot dinner in Manali",
    },
    {
      index: 5,
      date: "2026-06-11",
      title: "Manali — recover & explore",
      city: "Manali",
      summary:
        "Thursday. No long drive — the reward day after the pass. Sleep in, then an easy mix of Old Manali cafés, the cedar-shaded Hadimba temple, and a half-day up to Solang valley for meadows and snow play (gondola optional). Back for a relaxed evening on Mall Road. Light on logistics, heavy on rest.",
      heroImage:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Solang_Valley.jpg?width=1600",
      attractions: [
        {
          name: "Hadimba Devi Temple",
          brief:
            "A 1553 wooden pagoda temple to Hidimba, set in a deodar grove — cool, shaded, flat paths. The most atmospheric easy stop in Manali, perfect for the elders.",
          photo:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Hadimba Devi Temple, Manali",
        },
        {
          name: "Solang Valley",
          brief:
            "Broad alpine meadow ~14 km up, ringed by snow peaks — gentle for a stroll, with a ropeway/gondola for those who want height without the walk. Half-day; go in the morning before the afternoon crowds and clouds.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Solang_Valley.jpg?width=1600",
          duration: "Half day",
          elderlyFriendly: true,
          mapsQuery: "Solang Valley, Manali",
        },
        {
          name: "Old Manali cafés & the Manu temple",
          brief:
            "Across the Manalsu, lanes of slow cafés, bakeries and the old Manu temple. Riverside breakfast and people-watching — the gentlest possible morning.",
          photo:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Manali_City.jpg?width=1600",
          duration: "2 hr",
          elderlyFriendly: true,
          mapsQuery: "Old Manali",
        },
        {
          name: "Mall Road & Tibetan market",
          brief:
            "Evening flat walk — woollens, Tibetan handicrafts, hot momos and filter coffee. Easy, central, and a fitting last-night wander before the highway days home.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1.5 hr",
          elderlyFriendly: true,
          mapsQuery: "Mall Road, Manali",
        },
      ],
      hotel: {
        name: "Snow Valley Resorts, Manali (suggested)",
        category: "Mid-range hill resort · Altitude 2,050 m",
        pricePerNight: 4500,
        roomsNeeded: 5,
        notes: "Second night — same base. Order an early breakfast for tomorrow's 6am start to Chandigarh.",
      },
      meals: "Breakfast in Old Manali · Lunch at Solang/hotel · Dinner on Mall Road",
    },
    {
      index: 6,
      date: "2026-06-12",
      title: "Manali → Chandigarh",
      city: "Chandigarh",
      summary:
        "Friday. Check out of Manali early and run the Kullu valley back down — Pandoh, Mandi, then the Kiratpur–Manali expressway into Chandigarh by mid-afternoon. A long mountain day, so the 6am start matters: it clears Kullu before the traffic builds. Last night in city comfort before the home stretch.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Manali",
        to: "Chandigarh",
        distanceKm: 310,
        durationHours: 8.5,
        notes: "Mirror of Day 2 — slow, winding Manali–Mandi river road first, then fast on the Kiratpur expressway. Start by 6am; two drivers alternating. Descends from 2,050 m back to 350 m.",
      },
      attractions: [
        {
          name: "Mandi (Pandoh) lunch & leg-stretch",
          brief:
            "The natural halfway break on the way down — riverside dhabas near Mandi and the Pandoh dam. Clean restrooms, hot food, a chance to swap drivers.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Mandi, Himachal Pradesh",
        },
        {
          name: "Sukhna Lake evening (Chandigarh)",
          brief:
            "Back in the city — the same flat lakeside loop from Day 1, this time to unwind after a long descent. Sunset, ice-cream, an early dinner.",
          photo:
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Sukhna Lake, Chandigarh",
        },
      ],
      hotel: {
        name: "Chandigarh — same shortlist as Day 1",
        category: "Budget · ≤ ₹3,000/room · Altitude 350 m",
        pricePerNight: 2800,
        roomsNeeded: 5,
        notes:
          "Re-book whichever of the Day-1 four you liked (Treebo JD Residency / Club House / Hometel / Sunbeam). Tonight the fast-exit consideration doesn't matter — pick on comfort. Order an early breakfast; tomorrow's the highway run home.",
      },
      meals: "Breakfast in Manali · Lunch at Mandi · Dinner in Chandigarh",
    },
    {
      index: 7,
      date: "2026-06-13",
      title: "Chandigarh → Jaipur · home",
      city: "Jaipur",
      summary:
        "Saturday. The last leg. 07:00 out of Chandigarh, back onto the NH-152D expressway around Delhi, lunch on the road, and home to Jaipur by mid-afternoon. A full week — plains heat to 5,000 m snow and back — closed out.",
      heroImage:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1600&q=80",
      transfer: {
        from: "Chandigarh",
        to: "Jaipur",
        distanceKm: 516,
        durationHours: 8,
        notes: "Same NH-152D expressway, mirrored. Leave by 7am to clear the Delhi ring before the evening build-up. Easy, fast road — just long.",
      },
      attractions: [
        {
          name: "Karnal / expressway rest-stop",
          brief:
            "A clean highway haveli-style stop for lunch and restrooms roughly halfway — garden seating, full menu, a final unhurried break before home.",
          photo:
            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=80",
          duration: "1 hr",
          elderlyFriendly: true,
          mapsQuery: "Karnal Haveli, Karnal",
        },
      ],
      meals: "Breakfast at the Chandigarh hotel · Lunch on the expressway · Dinner at home",
    },
  ],
};
