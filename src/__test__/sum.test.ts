import sum from "src/libs/sum";

describe("Suite of sum", () => {
  it("Test sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
