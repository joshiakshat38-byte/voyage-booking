import { describe, expect, it } from "vitest";

import { getModeLabel, getSummaryFare, toggleSeatSelection } from "../lib/booking";

describe("voyage booking utilities", () => {
  it("labels each transport mode for the search CTA", () => {
    expect(getModeLabel("train")).toBe("Train");
    expect(getModeLabel("bus")).toBe("Bus");
    expect(getModeLabel("air")).toBe("Flight");
  });

  it("returns the selected mode fare", () => {
    expect(getSummaryFare("train", "3A")).toBe("₹1,180");
    expect(getSummaryFare("bus", "AC")).toBe("₹1,250");
    expect(getSummaryFare("air", "business")).toBe("₹18,950");
  });

  it("does not allow occupied seats and toggles available seats", () => {
    expect(toggleSeatSelection(["A3"], "A2", ["A2"])).toEqual(["A3"]);
    expect(toggleSeatSelection(["A3"], "A3", ["A2"])).toEqual([]);
    expect(toggleSeatSelection(["A3"], "B1", ["A2"])).toEqual(["A3", "B1"]);
  });
});
