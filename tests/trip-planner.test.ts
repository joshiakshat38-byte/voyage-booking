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
    expect(budget.total).toBe(budget.travel + budget.accommodation + budget.food + budget.local + budget.activities + budget.emergency);
    expect(budget.remaining).toBe(10000 - budget.total);
  });

  it("generates exactly the requested number of days", () => {
    const itinerary = generateItinerary({ destination: delhi, budget: 25000, days: 5, travellers: 2 });
    expect(itinerary).toHaveLength(5);
    expect(itinerary[0].places.length).toBe(3);
    expect(itinerary.every((day) => day.note.includes("estimates"))).toBe(true);
  });

  it("flags a low budget through a negative remaining amount instead of hiding the overage", () => {
    const budget = calculatePlanBudget({ destination: delhi, budget: 500, days: 7, travellers: 4 });
    expect(budget.remaining).toBeLessThan(0);
  });
});
