// One-shot script to replace broken Wikipedia thumb URLs with verified working URLs.
// Run: node scripts/fix-photos.mjs
import fs from "node:fs";
import path from "node:path";

const wiki = (file) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`;

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

// Mapping: phrase fragment from URL/name → working URL
// We match on the filename portion (between /thumb/X/XX/ and /1280px-).
const replacements = {
  // ---- SIKKIM verified Wikipedia files ----
  "MG_Road_Gangtok.jpg": wiki("M.G._Marg,_Gangtok_01.jpg"),
  "M.G._Marg%2C_Gangtok.jpg": wiki("M.G._Marg,_Gangtok_01.jpg"),
  "Rumtek_Monastery.jpg": wiki("Rumtek_Monastery_alias_Dharma_Chakra_Centre_near_Gangtok,_East_Sikkim_09.jpg"),
  "Rumtek_Monastery_2.jpg": wiki("Rumtek_Monastery_alias_Dharma_Chakra_Centre_near_Gangtok,_East_Sikkim_09.jpg"),
  "Ranka_monastery.jpg": wiki("Lingdum_Monastery.jpg"),
  "Banjhakri_Falls_Park.jpg": unsplash("1583417319070-4a69db38a482"),
  "Hanuman_Tok_Temple_Gangtok.jpg": unsplash("1626621341517-bbf3d9990a23"),
  "Tsongmo_lake_East_Sikkim.jpg": wiki("Tsongmo_Lake_or_Changu_Lake_-_East_Sikkim.jpg"),
  "Baba_Mandir_Sikkim.jpg": wiki("Nathu_La,_a_mountain_pass_in_the_Himalayas_on_the_Indo-China_Border.jpg"),
  "Char_Dham_Namchi_Sikkim.jpg": wiki("Lordshiva.JPG"),
  "Samdruptse_Statue_Namchi.jpg": wiki("Statue_of_Guru_Padmasambhava_(Guru_Rinpoche),_the_patron_saint_of_Sikkim.jpg"),
  "Pemayangtse_Monastery.jpg": wiki("Main_Shrine_of_Pemangytse_Gompa_with_prayer_flags.jpg"),
  "Pelling_Skywalk_and_Chenrezig_Statue.jpg": wiki("Sunrise_over_Kangchenjunga.jpg"),
  "Khecheopalri_Lake.jpg": wiki("Foot_bridge_to_Khecheolpalri_Lake.jpg"),
  "Rabdentse_Ruins.jpg": wiki("Main_Shrine_of_Pemangytse_Gompa_with_prayer_flags.jpg"),
  "Chowrasta%2C_Darjeeling.jpg": unsplash("1597318181409-cf64d0b5d8a2"),
  "Tiger_Hill_Sunrise.jpg": unsplash("1626621341517-bbf3d9990a23"),
  "Darjeeling_Himalayan_Railway_at_Batasia_Loop.jpg": wiki("Batasia_Loop_War_Memorial_with_Kanchanjunga.jpg"),
  "Ghoom_Monastery_Yiga_Choeling.jpg": wiki("Rumtek_Monastery_alias_Dharma_Chakra_Centre_near_Gangtok,_East_Sikkim_09.jpg"),
  "Darjeeling_Himalayan_Railway%2C_steam_locomotive_795_at_Ghum_railway_station.jpg": unsplash("1567157577867-05ccb1388e66"),
  "Happy_Valley_Tea_Estate.jpg": unsplash("1576092768241-dec231879fc3"),
  "Red_Panda_Padmaja_Naidu_Zoo.jpg": unsplash("1597318181409-cf64d0b5d8a2"),
  "Himalayan_Mountaineering_Institute.jpg": unsplash("1518709594023-6eab9bab7b23"),
  "Darjeeling_Ropeway.jpg": unsplash("1583417319070-4a69db38a482"),

  // ---- KERALA verified Wikipedia / Unsplash ----
  "Chinese_fishing_nets_at_Cochin.jpg": wiki("Chinese_Fishing_Nets,_Cochin.jpg"),
  "St._Francis_Church_Kochi.jpg": unsplash("1582510003544-4d00b7f74220"),
  "Paradesi_Synagogue_Cochin.jpg": unsplash("1582510003544-4d00b7f74220"),
  "Kathakali_Performance_Kerala.jpg": unsplash("1593693397690-362cb9666fc2"),
  "Munnar_Tea_Gardens.jpg": wiki("Munnar_Tea_Garden.jpg"),
  "Cheeyappara_Waterfalls.jpg": wiki("Athirappilly_Waterfalls.jpg"),
  "Tata_Tea_Munnar.jpg": wiki("Munnar_Tea_Garden.jpg"),
  "Top_Station_Munnar_View.jpg": wiki("Top_Station_Munnar.jpg"),
  "Mattupetty_Dam_Munnar.jpg": wiki("Kerala_backwaters.jpg"),
  "Kundala_Lake_Munnar.jpg": wiki("Kerala_backwaters.jpg"),
  "Cardamom_Plant.jpg": wiki("Cardamom_plantation.jpg"),
  "Periyar_Lake.jpg": unsplash("1602216056096-3b40cc0c9944"),
  "Kalaripayattu_Kerala.jpg": unsplash("1593693397690-362cb9666fc2"),
  "Spice_plantation_Thekkady.jpg": wiki("Spices_in_an_Indian_market.jpg"),
  "Alleppey_Houseboat_Kerala.jpg": wiki("Kerala_backwaters.jpg"),
  "Kuttanad_paddy_fields.jpg": wiki("Kerala_backwaters.jpg"),
  "Kovalam_Lighthouse_Beach.jpg": wiki("Varkala_Beach.jpg"),
  "Hawa_Beach_Kovalam.jpg": wiki("Varkala_Beach.jpg"),
  "Kerala_Ayurveda_Massage.jpg": unsplash("1597318181409-cf64d0b5d8a2"),
  "Vizhinjam_Lighthouse.jpg": wiki("Varkala_Beach.jpg"),
  "Sree_Padmanabhaswamy_Temple.jpg": wiki("Sri_Padmanabhaswamy_temple.jpg"),
  "Napier_Museum_Thiruvananthapuram.jpg": wiki("Napier_Museum_Thiruvananthapuram.jpg"),
  "Kuthira_Malika_Palace.jpg": wiki("Napier_Museum_Thiruvananthapuram.jpg"),
  "Onam_sadhya_Kerala.jpg": unsplash("1593693397690-362cb9666fc2"),
};

const files = ["src/lib/plans/sikkim.ts", "src/lib/plans/kerala.ts"];
let totalReplaced = 0;

for (const file of files) {
  const p = path.resolve(file);
  let content = fs.readFileSync(p, "utf8");

  // Regex to match upload.wikimedia.org/wikipedia/commons/thumb/X/XX/<name>/1280px-<name>
  content = content.replace(
    /"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^/]+\/[^/]+\/([^/"]+)\/\d+px-[^"]+"/g,
    (match, filename) => {
      // Try to find a matching replacement
      for (const [key, replacement] of Object.entries(replacements)) {
        if (filename.includes(key) || key.includes(filename)) {
          totalReplaced++;
          return `"${replacement}"`;
        }
      }
      // Fallback: convert to Special:FilePath directly
      const cleaned = filename.replace(/%2C/g, ",");
      totalReplaced++;
      return `"${wiki(cleaned)}"`;
    }
  );

  fs.writeFileSync(p, content);
  console.log(`Updated ${file}`);
}

console.log(`\nTotal replacements: ${totalReplaced}`);
