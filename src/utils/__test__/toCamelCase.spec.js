import toCamelCase from "../toCamelCase";

describe('CAMELIZE TEST', () => {
  it('should camelize correctly', () => {
    const str1 = 'Evi-Home';
    const str2 = 'eVI-HoME';

    expect(toCamelCase(str1)).toBe('eviHome');
    expect(toCamelCase(str2)).toBe('eviHome');
  })
});
