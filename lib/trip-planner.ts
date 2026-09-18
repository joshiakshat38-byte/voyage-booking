import type { Destination } from "@/lib/india";

export type PlanInput = { destination: Destination; budget: number; days: number; travellers: number };
export type DayPlan = { day: number; title: string; places: string[]; order: string; timing: string; transport: string; food: string; stay: string; cost: number; note: string };

const cityPlans: Record<string, { subtitle: string; attractions: string[]; food: string; stay: string; transport: string; dayTitles: string[] }> = {
  DEL: { subtitle: "Heritage, food and neighbourhood walks", attractions: ["India Gate", "Humayun's Tomb", "Qutub Minar", "Chandni Chowk", "Red Fort"], food: "Estimated local meals: Delhi thali, chaat, and a sit-down dinner.", stay: "Estimated budget stay around Paharganj or Karol Bagh.", transport: "Metro + short auto-rickshaw rides", dayTitles: ["Central Delhi highlights", "Old Delhi and Qutub Minar", "Open day for museums or markets"] },
  JAI: { subtitle: "Pink City forts, bazaars and local cuisine", attractions: ["Amber Fort", "City Palace", "Jantar Mantar", "Hawa Mahal", "Johari Bazaar"], food: "Estimated local meals: Rajasthani thali, kachori, and lassi.", stay: "Estimated budget stay around MI Road or Bani Park.", transport: "Metro where available + auto-rickshaw/cab", dayTitles: ["Amber Fort and old city", "City Palace and bazaars", "Jaipur slow morning"] },
  GOI: { subtitle: "Coast, heritage lanes and sunset time", attractions: ["Basilica of Bom Jesus", "Fontainhas", "Miramar Beach", "Dona Paula", "Baga or Palolem Beach"], food: "Estimated local meals: Goan thali, seafood or vegetarian cafe food.", stay: "Estimated budget stay near Panaji, Calangute, or Palolem depending on route.", transport: "Local bus + shared taxi; scooter costs excluded from estimate", dayTitles: ["Panaji and Old Goa", "Coast and sunset", "Flexible beach morning"] },
  BOM: { subtitle: "Sea views, neighbourhoods and iconic landmarks", attractions: ["Gateway of India", "Colaba Causeway", "Marine Drive", "Chhatrapati Shivaji Maharaj Terminus", "Sanjay Gandhi National Park"], food: "Estimated local meals: vada pav, thali, and a neighbourhood restaurant.", stay: "Estimated budget stay around Dadar, Andheri, or Colaba outskirts.", transport: "Local train + metro + short cab rides", dayTitles: ["South Mumbai icons", "Markets and Marine Drive", "Green Mumbai option"] },
  VNS: { subtitle: "Ghats, temples and living cultural heritage", attractions: ["Dashashwamedh Ghat", "Assi Ghat", "Sarnath", "Kashi Vishwanath corridor", "Manikarnika Ghat viewpoint"], food: "Estimated local meals: kachori-sabzi, lassi, and vegetarian thali.", stay: "Estimated budget stay near Assi Ghat or Godowlia.", transport: "Walking + e-rickshaw; use official boating counters only", dayTitles: ["Ghats and old lanes", "Sarnath and evening aarti", "Quiet sunrise and markets"] },
  BLR: { subtitle: "Gardens, design, food and urban culture", attractions: ["Lalbagh Botanical Garden", "Cubbon Park", "Bengaluru Palace", "Church Street", "Bangalore Fort"], food: "Estimated local meals: dosa, South Indian meals, and a cafe stop.", stay: "Estimated budget stay around Majestic, Indiranagar, or Koramangala.", transport: "Metro + BMTC bus + short auto-rickshaw rides", dayTitles: ["Gardens and central Bengaluru", "Palace and local food", "Neighbourhood culture"] },
  COK: { subtitle: "Backwaters, heritage streets and Kerala flavours", attractions: ["Fort Kochi", "Chinese fishing nets", "Mattancherry Palace", "Jew Town", "Marine Drive"], food: "Estimated local meals: Kerala meals, appam, and a coastal dinner.", stay: "Estimated budget stay in Fort Kochi or Ernakulam.", transport: "Ferry + metro/bus + auto-rickshaw", dayTitles: ["Fort Kochi heritage", "Mattancherry and waterfront", "Backwater day option"] },
};

export function calculatePlanBudget(input: PlanInput) {
  const distanceFactor = input.destination.hubs?.includes("air") ? 1.15 : 0.9;
  const travel = Math.round(850 * input.travellers * distanceFactor);
  const accommodation = Math.round(1100 * Math.max(1, input.days - 1) * Math.max(1, Math.ceil(input.travellers / 2)));
  const food = Math.round(550 * input.days * input.travellers);
  const local = Math.round(180 * input.days * input.travellers);
  const activities = Math.round(250 * input.days * input.travellers);
  const emergency = Math.round((travel + accommodation + food + local + activities) * 0.1);
  const total = travel + accommodation + food + local + activities + emergency;
  return { travel, accommodation, food, local, activities, emergency, total, remaining: input.budget - total };
}

export function generateItinerary(input: PlanInput): DayPlan[] {
  const plan = cityPlans[input.destination.code];
  const source = plan ?? { subtitle: "A flexible city discovery plan", attractions: ["Local heritage area", "Central market", "Main public garden or waterfront", "Local museum or cultural venue", "Neighbourhood food street"], food: "Estimated local meals based on affordable regional options.", stay: "Estimated budget accommodation near the city centre; verify availability before booking.", transport: "Public transport + walking where practical", dayTitles: ["Local highlights", "Culture and neighbourhoods", "Flexible discovery"] };
  return Array.from({ length: input.days }, (_, index) => {
    const first = source.attractions[(index * 2) % source.attractions.length];
    const second = source.attractions[(index * 2 + 1) % source.attractions.length];
    const third = source.attractions[(index * 2 + 2) % source.attractions.length];
    const daily = Math.round((calculatePlanBudget(input).total - calculatePlanBudget(input).travel) / input.days);
    return { day: index + 1, title: source.dayTitles[index] ?? `${source.subtitle} · Day ${index + 1}`, places: [first, second, third], order: `${first} → ${second} → ${third}`, timing: "09:00–12:00 · 13:00–16:00 · 17:00–19:00", transport: source.transport, food: source.food, stay: source.stay, cost: daily, note: "Times and costs are planning estimates; confirm opening hours, tickets, and availability before travel." };
  });
}

export function getDestinationPlan(destination: Destination) {
  return cityPlans[destination.code];
}
