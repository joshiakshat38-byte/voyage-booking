import { describe, expect, it } from "vitest";
import { destinations, getAvailableModes, searchDestinations } from "../lib/india";

describe("India-wide route engine", () => {
  it("searches cities, districts, states, and codes", () => {
    expect(searchDestinations("Dewas").some((item) => item.name === "Dewas")).toBe(true);
    expect(searchDestinations("Madhya Pradesh").some((item) => item.name === "Indore")).toBe(true);
    expect(searchDestinations("DEL").some((item) => item.name === "Delhi")).toBe(true);
  });

  it("returns the specified exact-route availability for Dewas to Delhi", () => {
    const dewas = destinations.find((item) => item.name === "Dewas")!;
    const delhi = destinations.find((item) => item.name === "Delhi")!;
    expect(getAvailableModes(dewas, delhi)).toEqual(["train", "bus"]);
  });

  it("changes the available mode set for another exact route", () => {
    const delhi = destinations.find((item) => item.name === "Delhi")!;
    const mumbai = destinations.find((item) => item.name === "Mumbai")!;
    expect(getAvailableModes(delhi, mumbai)).toEqual(["train", "bus", "flight"]);
  });

  it("does not offer travel from a destination to itself", () => {
    const delhi = destinations.find((item) => item.name === "Delhi")!;
    expect(getAvailableModes(delhi, delhi)).toEqual([]);
  });
});
