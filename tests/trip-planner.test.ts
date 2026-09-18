import { describe, expect, it } from "vitest";
import { destinations } from "../lib/india";
import { calculatePlanBudget, generateItinerary } from "../lib/trip-planner";

describe("Plan My Trip", () => {
  const delhi = destinations.find((item) => item.name === "Delhi")!;

  it("breaks the estimate into visible budget categories", () => {
    const budget = calculatePlanBudget({ destination: delhi, budget: 10000, days: 3, travellers: 2 });
    expect(budget.travel).toBeGreaterThan(0);
    expect(budget.accommodation).toBeGreaterThan(0);
    expect(budget.food).toBeGreaterThan(0);
    expect(budget.estimatedTotal).toBeGreaterThan(budget.total);
    expect(budget.total).toBe(10000);
    expect(budget.remaining).toBe(0);
    expect(budget.isTight).toBe(true);
  });

  it("generates exactly the requested number of days with named place records", () => {
    const itinerary = generateItinerary({ destination: delhi, budget: 25000, days: 5, travellers: 2 });
    expect(itinerary).toHaveLength(5);
    expect(itinerary[0].stops.length).toBeGreaterThan(0);
    expect(itinerary[0].stops[0].address).toContain("Delhi");
    expect(itinerary.every((day) => day.note.includes("estimated"))).toBe(true);
  });

  it("flags a low budget without intentionally displaying a trip over the entered budget", () => {
    const budget = calculatePlanBudget({ destination: delhi, budget: 500, days: 7, travellers: 4 });
    expect(budget.estimatedTotal).toBeGreaterThan(500);
    expect(budget.total).toBe(500);
    expect(budget.remaining).toBe(0);
    expect(budget.isTight).toBe(true);
  });
});
