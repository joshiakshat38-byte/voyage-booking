export type TransportMode = "train" | "bus" | "air";

export function getModeLabel(mode: TransportMode) {
  return mode === "train" ? "Train" : mode === "bus" ? "Bus" : "Flight";
}

export function toggleSeatSelection(selected: string[], seat: string, occupied: string[]) {
  if (occupied.includes(seat)) return selected;
  return selected.includes(seat) ? selected.filter((item) => item !== seat) : [...selected, seat];
}

export function getSummaryFare(mode: TransportMode, selectedClass: string) {
  if (mode === "bus") return "₹1,250";
  if (mode === "train") {
    const prices: Record<string, string> = { GN: "₹240", SL: "₹445", "3A": "₹1,180", "2A": "₹1,720", "1A": "₹2,950", CC: "₹865", EC: "₹1,480" };
    return prices[selectedClass] ?? "₹240";
  }
  const prices: Record<string, string> = { economy: "₹5,840", premium: "₹8,420", business: "₹18,950", first: "₹32,500" };
  return prices[selectedClass] ?? "₹5,840";
}
