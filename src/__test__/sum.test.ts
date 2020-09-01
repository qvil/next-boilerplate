import sum from "src/lib/sum";

describe("Suite of sum", () => {
  it("Test sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
