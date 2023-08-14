import isNumber from '../logic/isNumber';

describe('isNumber function', () => {
  it('should return true for a string containing numbers', () => {
    expect(isNumber('1')).toBe(true);
    expect(isNumber('0')).toBe(true);
    expect(isNumber('123')).toBe(true);
    expect(isNumber('0.3')).toBe(true);
  });

  it('should return false for a string containing non-numeric characters', () => {
    expect(isNumber('a')).toBe(false);
    expect(isNumber('+')).toBe(false);
    expect(isNumber('-')).toBe(false);
    expect(isNumber('*')).toBe(false);
    expect(isNumber('%')).toBe(false);
    expect(isNumber('')).toBe(false);
  });
});
