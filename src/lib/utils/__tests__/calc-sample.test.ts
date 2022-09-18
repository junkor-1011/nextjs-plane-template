import { sum2, sum } from '../calc-sample';

describe('test of sum functions', () => {
  describe('sum2', () => {
    test.each([
      [1, 1, 2],
      [1, 2, 3],
      [2, 1, 3],
      [-1, 2, 1],
    ])('sum2(%i, %i) = %i', (a, b, expected) => {
      expect(sum2(a, b)).toBe(expected);
    });
  });

  describe('sum', () => {
    it('1 + 2 = 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
    it('1 + 2 + 3 = 6', () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
});
