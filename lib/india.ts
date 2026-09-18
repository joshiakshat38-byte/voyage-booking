export type TransportMode = "train" | "bus" | "flight";

export type Destination = {
  name: string;
  state: string;
  type: "City" | "District";
  code: string;
  hubs?: string[];
};

export const destinations: Destination[] = [
  { name: "Agra", state: "Uttar Pradesh", type: "City", code: "AGR", hubs: ["north"] },
  { name: "Ahmedabad", state: "Gujarat", type: "City", code: "AMD", hubs: ["west", "air"] },
  { name: "Ajmer", state: "Rajasthan", type: "District", code: "AJM", hubs: ["north"] },
  { name: "Alappuzha", state: "Kerala", type: "District", code: "ALP", hubs: ["south"] },
  { name: "Allahabad / Prayagraj", state: "Uttar Pradesh", type: "City", code: "PRY", hubs: ["north"] },
  { name: "Amritsar", state: "Punjab", type: "City", code: "ATQ", hubs: ["north", "air"] },
  { name: "Aurangabad / Chhatrapati Sambhajinagar", state: "Maharashtra", type: "City", code: "IXU", hubs: ["west", "air"] },
  { name: "Bengaluru", state: "Karnataka", type: "City", code: "BLR", hubs: ["south", "air"] },
  { name: "Bareilly", state: "Uttar Pradesh", type: "District", code: "BEY", hubs: ["north"] },
  { name: "Belagavi", state: "Karnataka", type: "District", code: "IXG", hubs: ["south", "air"] },
  { name: "Bhopal", state: "Madhya Pradesh", type: "City", code: "BHO", hubs: ["central", "air"] },
  { name: "Bhubaneswar", state: "Odisha", type: "City", code: "BBI", hubs: ["east", "air"] },
  { name: "Bilaspur", state: "Chhattisgarh", type: "District", code: "BSP", hubs: ["central"] },
  { name: "Chandigarh", state: "Chandigarh", type: "City", code: "IXC", hubs: ["north", "air"] },
  { name: "Chennai", state: "Tamil Nadu", type: "City", code: "MAA", hubs: ["south", "air"] },
  { name: "Coimbatore", state: "Tamil Nadu", type: "City", code: "CJB", hubs: ["south", "air"] },
  { name: "Cuttack", state: "Odisha", type: "District", code: "CTC", hubs: ["east"] },
  { name: "Dehradun", state: "Uttarakhand", type: "City", code: "DED", hubs: ["north", "air"] },
  { name: "Delhi", state: "Delhi", type: "City", code: "DEL", hubs: ["north", "air"] },
  { name: "Dewas", state: "Madhya Pradesh", type: "District", code: "DWS", hubs: ["central"] },
  { name: "Dhanbad", state: "Jharkhand", type: "District", code: "DHN", hubs: ["east"] },
  { name: "Dharwad", state: "Karnataka", type: "District", code: "DWR", hubs: ["south"] },
  { name: "Dibrugarh", state: "Assam", type: "City", code: "DIB", hubs: ["east", "air"] },
  { name: "Dimapur", state: "Nagaland", type: "City", code: "DMU", hubs: ["east", "air"] },
  { name: "Ernakulam / Kochi", state: "Kerala", type: "City", code: "COK", hubs: ["south", "air"] },
  { name: "Gandhinagar", state: "Gujarat", type: "District", code: "GNR", hubs: ["west"] },
  { name: "Gangtok", state: "Sikkim", type: "City", code: "GNG", hubs: ["east"] },
  { name: "Gaya", state: "Bihar", type: "District", code: "GAY", hubs: ["east", "air"] },
  { name: "Ghaziabad", state: "Uttar Pradesh", type: "City", code: "GZB", hubs: ["north"] },
  { name: "Goa / Panaji", state: "Goa", type: "City", code: "GOI", hubs: ["west", "air"] },
  { name: "Gorakhpur", state: "Uttar Pradesh", type: "District", code: "GKP", hubs: ["north", "air"] },
  { name: "Gurugram", state: "Haryana", type: "City", code: "GGN", hubs: ["north"] },
  { name: "Guwahati", state: "Assam", type: "City", code: "GAU", hubs: ["east", "air"] },
  { name: "Gwalior", state: "Madhya Pradesh", type: "District", code: "GWL", hubs: ["central", "air"] },
  { name: "Haridwar", state: "Uttarakhand", type: "District", code: "HRD", hubs: ["north"] },
  { name: "Hubballi", state: "Karnataka", type: "City", code: "HBX", hubs: ["south", "air"] },
  { name: "Hyderabad", state: "Telangana", type: "City", code: "HYD", hubs: ["south", "air"] },
  { name: "Imphal", state: "Manipur", type: "City", code: "IMF", hubs: ["east", "air"] },
  { name: "Indore", state: "Madhya Pradesh", type: "City", code: "IDR", hubs: ["central", "air"] },
  { name: "Jabalpur", state: "Madhya Pradesh", type: "District", code: "JLR", hubs: ["central", "air"] },
  { name: "Jaipur", state: "Rajasthan", type: "City", code: "JAI", hubs: ["north", "air"] },
  { name: "Jalandhar", state: "Punjab", type: "District", code: "JAL", hubs: ["north"] },
  { name: "Jammu", state: "Jammu and Kashmir", type: "City", code: "IXJ", hubs: ["north", "air"] },
  { name: "Jamshedpur", state: "Jharkhand", type: "City", code: "IXW", hubs: ["east"] },
  { name: "Jodhpur", state: "Rajasthan", type: "City", code: "JDH", hubs: ["north", "air"] },
  { name: "Jorhat", state: "Assam", type: "District", code: "JRH", hubs: ["east", "air"] },
  { name: "Kakinada", state: "Andhra Pradesh", type: "District", code: "KAK", hubs: ["south"] },
  { name: "Kanpur", state: "Uttar Pradesh", type: "City", code: "KNU", hubs: ["north"] },
  { name: "Kanyakumari", state: "Tamil Nadu", type: "District", code: "CAPE", hubs: ["south"] },
  { name: "Karnal", state: "Haryana", type: "District", code: "KRL", hubs: ["north"] },
  { name: "Kashipur", state: "Uttarakhand", type: "District", code: "KSH", hubs: ["north"] },
  { name: "Kochi", state: "Kerala", type: "City", code: "COK2", hubs: ["south", "air"] },
  { name: "Kolkata", state: "West Bengal", type: "City", code: "CCU", hubs: ["east", "air"] },
  { name: "Kota", state: "Rajasthan", type: "District", code: "KTT", hubs: ["north"] },
  { name: "Kozhikode", state: "Kerala", type: "City", code: "CCJ", hubs: ["south", "air"] },
  { name: "Lucknow", state: "Uttar Pradesh", type: "City", code: "LKO", hubs: ["north", "air"] },
  { name: "Ludhiana", state: "Punjab", type: "District", code: "LDH", hubs: ["north"] },
  { name: "Madurai", state: "Tamil Nadu", type: "City", code: "IXM", hubs: ["south", "air"] },
  { name: "Mangaluru", state: "Karnataka", type: "City", code: "IXE", hubs: ["south", "air"] },
  { name: "Meerut", state: "Uttar Pradesh", type: "District", code: "MRT", hubs: ["north"] },
  { name: "Mumbai", state: "Maharashtra", type: "City", code: "BOM", hubs: ["west", "air"] },
  { name: "Mysuru", state: "Karnataka", type: "City", code: "MYQ", hubs: ["south"] },
  { name: "Nagpur", state: "Maharashtra", type: "City", code: "NAG", hubs: ["central", "air"] },
  { name: "Nashik", state: "Maharashtra", type: "District", code: "ISK", hubs: ["west", "air"] },
  { name: "Noida", state: "Uttar Pradesh", type: "City", code: "NDA", hubs: ["north"] },
  { name: "Patiala", state: "Punjab", type: "District", code: "PTA", hubs: ["north"] },
  { name: "Patna", state: "Bihar", type: "City", code: "PAT", hubs: ["east", "air"] },
  { name: "Pondicherry", state: "Puducherry", type: "City", code: "PNY", hubs: ["south"] },
  { name: "Pune", state: "Maharashtra", type: "City", code: "PNQ", hubs: ["west", "air"] },
  { name: "Rajkot", state: "Gujarat", type: "City", code: "RAJ", hubs: ["west", "air"] },
  { name: "Ranchi", state: "Jharkhand", type: "City", code: "IXR", hubs: ["east", "air"] },
  { name: "Rishikesh", state: "Uttarakhand", type: "City", code: "RSH", hubs: ["north"] },
  { name: "Salem", state: "Tamil Nadu", type: "District", code: "SXV", hubs: ["south"] },
  { name: "Shimla", state: "Himachal Pradesh", type: "City", code: "SLV", hubs: ["north", "air"] },
  { name: "Siliguri", state: "West Bengal", type: "City", code: "IXB", hubs: ["east", "air"] },
  { name: "Srinagar", state: "Jammu and Kashmir", type: "City", code: "SXR", hubs: ["north", "air"] },
  { name: "Surat", state: "Gujarat", type: "City", code: "STV", hubs: ["west", "air"] },
  { name: "Thane", state: "Maharashtra", type: "District", code: "TNA", hubs: ["west"] },
  { name: "Thiruvananthapuram", state: "Kerala", type: "City", code: "TRV", hubs: ["south", "air"] },
  { name: "Tiruchirappalli", state: "Tamil Nadu", type: "City", code: "TRZ", hubs: ["south", "air"] },
  { name: "Udaipur", state: "Rajasthan", type: "City", code: "UDR", hubs: ["north", "air"] },
  { name: "Vadodara", state: "Gujarat", type: "City", code: "BDQ", hubs: ["west", "air"] },
  { name: "Varanasi", state: "Uttar Pradesh", type: "City", code: "VNS", hubs: ["north", "air"] },
  { name: "Vijayawada", state: "Andhra Pradesh", type: "City", code: "VGA", hubs: ["south", "air"] },
  { name: "Visakhapatnam", state: "Andhra Pradesh", type: "City", code: "VTZ", hubs: ["east", "air"] },
  { name: "Warangal", state: "Telangana", type: "District", code: "WGL", hubs: ["south"] },
];

const specialRoutes: Record<string, TransportMode[]> = {
  "Dewas|Delhi": ["train", "bus"],
  "Delhi|Dewas": ["train", "bus"],
  "Delhi|Mumbai": ["train", "bus", "flight"],
  "Mumbai|Delhi": ["train", "bus", "flight"],
  "Delhi|Goa / Panaji": ["train", "bus", "flight"],
  "Dewas|Mumbai": ["train", "bus", "flight"],
  "Gangtok|Delhi": ["bus", "flight"],
  "Shimla|Chennai": ["train", "flight"],
  "Kochi|Kanyakumari": ["train", "bus"],
};

export function searchDestinations(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return destinations;
  return destinations.filter((d) => `${d.name} ${d.state} ${d.code}`.toLowerCase().includes(q));
}

export function getAvailableModes(from: Destination, to: Destination): TransportMode[] {
  if (from.code === to.code) return [];
  const special = specialRoutes[`${from.name}|${to.name}`];
  if (special) return special;
  const sameRegion = (from.hubs ?? []).some((hub) => (to.hubs ?? []).includes(hub));
  const hasAir = from.hubs?.includes("air") && to.hubs?.includes("air");
  const sameState = from.state === to.state;
  const modes: TransportMode[] = ["train"];
  if (sameRegion || sameState) modes.push("bus");
  if (hasAir && !sameState) modes.push("flight");
  if (modes.length === 1) modes.push("bus");
  return modes;
}

export function getRouteKey(from: Destination, to: Destination) {
  return `${from.code}-${to.code}`;
}
