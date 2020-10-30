import get_middle from "../src/GetMiddle";

describe('get_middle', () => {
  test('returns a string of 1 letter', () => {
    expect(get_middle("a")).toBe("a")
  })
});