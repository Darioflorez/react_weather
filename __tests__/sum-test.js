
jest.unmock('../js/storage'); // unmock to use the actual implementation of sum

import { sum } from '../js/storage';

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  });
});